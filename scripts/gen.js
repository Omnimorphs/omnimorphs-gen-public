const child_process = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const {traits, sets, baseJson, seed} = require('../configs/FINAL');
const cliProgress = require('cli-progress');
const seedrandom = require('seedrandom');
const crypto = require('crypto');


/////////////////////////
// Params
/////////////////////////
const collectionName = 'FINAL';  // folder in output
const tokenNum = 10000;
const onlyMeta = true;
/////////////////////////

const getRand = seedrandom(crypto.createHash('sha256').update(seed).digest('hex'))

const selectRandomAttribute = (rand, options) => {
  let i;

  const weights = [];

  for (i = 0; i < options.length; i++)
    weights[i] = (options[i].weight ?? 1) + (weights[i - 1] || 0);

  const random = rand * weights[weights.length - 1];

  for (i = 0; i < weights.length; i++)
    if (weights[i] > random)
      break;

  return options[i];
}

const main = () => {
  const outputPath = path.join('.', 'output', collectionName);
  if (!fs.pathExistsSync(outputPath)) {
    fs.ensureDirSync(outputPath);
  } else {
    fs.emptyDirSync(outputPath);
  }

  // de-duplication logic
  const hashMap = {};

  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

  bar.start(tokenNum, 0);

  for (let tokenIndex = 1; tokenIndex <= tokenNum; tokenIndex++) {
    const tokenTraits = {};

    // assembling internal trait map
    for (const trait of Object.values(traits)) {
      trait.variants.forEach(variant => {
        if (!variant.exclude || !variant.exclude(tokenTraits)) {
          tokenTraits[variant.name] = selectRandomAttribute(getRand(), variant.options);
        }
      })
    }

    const metadata = {
      ...baseJson,
      attributes: []
    }
    const imagePaths = [];

    // generating image layer paths and metadata
    for (const trait of Object.values(traits)) {
      const image = trait.file(tokenTraits);
      if (image) {
        imagePaths.push(image);
      }
      for (const variant of trait.variants) {
        if (variant.name in tokenTraits && tokenTraits[variant.name].value) {
          metadata.attributes.push({
            trait_type: variant.trait_type,
            value: tokenTraits[variant.name].value
          })
        }
      }
    }

    // adding sets
    addSets(metadata, imagePaths);

    // de-duplication
    const hash = crypto.createHash('sha256').update(JSON.stringify(metadata)).digest('hex');
    if (hash in hashMap) {
      throw new Error(`Duplicate token at ${tokenIndex}`);
    }
    hashMap[hash] = true;

    // writing metadata to disk
    fs.writeFileSync(path.join(outputPath, `${tokenIndex}.json`), JSON.stringify(metadata, null, 2));

    if (!onlyMeta) {
      // creating the token image with imagemagick
      const imagePathsCommand = imagePaths.map((imagePath, index) => {
        const finalPath = `./sources/${imagePath}`;
        return index === 0 ? `"${finalPath}"` : `"${finalPath}" -composite`
      }).join(' ');
      child_process.execSync(`convert  ${imagePathsCommand} ${path.join(outputPath, `${tokenIndex}.png`)}`);
    }

    bar.increment();
  }
  bar.stop();
}

const addSets = (metadataRecord, imagePaths) => {
  const traitMap = metadataRecord.attributes.reduce((obj, {trait_type, value}) => {
    if (!obj[trait_type]) {
      obj[trait_type] = {};
    }
    if (!obj[trait_type][value]) {
      obj[trait_type][value] = true;
    }
    return obj;
  }, {});

  sets.forEach(({traits: setTraits, name, value, from, namedCombos, imagePiecesMap}) => {
    // register sets from this many set pieces
    from = from ?? 1;

    let currentSetPieces = 0;
    setTraits.forEach(traitName => {
      if (traitMap[traitName] && traitMap[traitName][value]) {
        currentSetPieces++;
      }
    })

    if (currentSetPieces >= from) {

      if (namedCombos && namedCombos[currentSetPieces]) {
        // add named combinations
        metadataRecord.attributes.push({
          trait_type: name,
          value: namedCombos[currentSetPieces]
        })
      } else {
        // add basic combinations
        metadataRecord.attributes.push({
          trait_type: name,
          value: currentSetPieces
        })
      }

      // switching out certain files if a certain number of set pieces exist on the token
      if (imagePiecesMap && imagePiecesMap[currentSetPieces]?.switchFiles) {
        Object.entries(imagePiecesMap[currentSetPieces].switchFiles).forEach(([traitGroup, newFileName]) => {
          const imageIndex = traits.findIndex(trait => trait.traitGroup === traitGroup);
          if (imageIndex >= 0) {
            imagePaths[imageIndex] = imagePaths[imageIndex].split('/').slice(0, -1).join('/') + `/${newFileName}`;
          }
        });
      }

      // delete certain metadata fields if a certain number of set pieces exist
      if (imagePiecesMap && imagePiecesMap[currentSetPieces]?.deleteMetadata) {
        imagePiecesMap[currentSetPieces].deleteMetadata.forEach(value => {
          const indexesToDelete = [];
          metadataRecord.attributes.forEach((attr, index) => {
            if ((value instanceof RegExp && value.exec(attr.trait_type)) || attr.trait_type === value) {
              indexesToDelete.push(index);
            }
          });
          indexesToDelete.forEach(attributeIndex => {
            if (attributeIndex >= 0) {
              delete metadataRecord.attributes[attributeIndex];
            }
          });
        })
      }
    }
  })
  metadataRecord.attributes = metadataRecord.attributes.filter(attr => attr != null);
}

main();
