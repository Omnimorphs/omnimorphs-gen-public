const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');

const collectionName = 'FINAL';

const main = () => {
  const collectionPath = './output/' + collectionName;

  const files = fs.readdirSync(collectionPath);

  const jsonFiles = files.filter(fileName => fileName.includes('.json'));

  let collectionHashes = '';

  jsonFiles.forEach(fileName => {
    const content = fs.readJsonSync(path.join(collectionPath, fileName));

    collectionHashes += crypto.createHash('sha256').update(JSON.stringify(content)).digest('hex');
  });

  const collectionHash = crypto.createHash('sha256').update(collectionHashes).digest('hex');

  console.log(`Collection has for ${collectionName} is: ${collectionHash}`);
}

main();
