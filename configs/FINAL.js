const backgroundColors = [
  {
    name: 'white',
    value: 'White',
    file: '8.png'
  },
  {
    name: 'beige',
    value: 'Beige',
    file: '7.png'
  },
  {
    name: 'pistachio',
    value: 'Pistachio',
    weight: 0.98,
    file: '3.png'
  },
  {
    name: 'tangerine',
    value: 'Tangerine',
    weight: 0.96,
    file: '5.png'
  },
  {
    name: 'sky_blue',
    value: 'Sky Blue',
    file: '2.png',
    weight: 0.6
  },
  {
    name: 'sakura',
    value: 'Sakura',
    weight: 0.55,
    file: '6.png'
  },
  {
    name: 'purple',
    value: 'Purple',
    weight: 0.53,
    file: '4.png'
  },
  {
    name: 'teal',
    value: 'Teal',
    weight: 0.5,
    file: '1.png'
  },
  {
    name: 'grid',
    value: 'The Grid',
    weight: 0.04,
    file: '1.png'
  },
  {
    name: 'clouds',
    value: 'Clouds',
    weight: 0.04,
    file: '2.png'
  },
  {
    name: 'space',
    value: 'Space',
    weight: 0.04,
    file: '3.png'
  },
  {
    name: 'metropolis',
    value: 'Metropolis',
    weight: 0.04,
    file: '4.png'
  }
]

const basicClothesColors = [
  {
    name: 'white',
    value: 'White',
    file: '10.png'
  },
  {
    name: 'black',
    value: 'Black',
    file: '9.png'
  },
  {
    name: 'beige',
    value: 'Beige',
    weight: 0.98,
    file: '5.png'
  },
  {
    name: 'turquoise',
    value: 'Turquoise',
    weight: 0.96,
    file: '1.png'
  },
  {
    name: 'tangerine',
    value: 'Tangerine',
    weight: 0.94,
    file: '4.png'
  },
  {
    name: 'purple',
    value: 'Purple',
    weight: 0.55,
    file: '7.png'
  },
  {
    name: 'dandelion',
    value: 'Dandelion',
    weight: 0.50,
    file: '6.png'
  },
  {
    name: 'olive',
    value: 'Olive',
    weight: 0.49,
    file: '2.png'
  },
  {
    name: 'sky_blue',
    value: 'Sky Blue',
    weight: 0.47,
    file: '3.png'
  },
  {
    name: 'sakura',
    value: 'Sakura',
    weight: 0.40,
    file: '8.png'
  },
]

const clothesPatterns = [
  {
    name: 'none',
    file: 'Basic'
  },
  {
    name: 'tiles',
    value: 'Tiles',
    weight: 0.07,
    file: 'Tiles'
  },
  {
    name: 'stripes',
    value: 'Stripes',
    weight: 0.07,
    file: 'Striped'
  },
  {
    name: 'botanical',
    value: 'Botanical',
    weight: 0.07,
    file: 'Botanical'
  },
  {
    name: 'feathers',
    value: 'Feathers',
    weight: 0.07,
    file: 'Feathered'
  },
  {
    name: 'rd',
    value: 'Reaction-Diffusion',
    weight: 0.07,
    file: 'RD'
  }
]

const backgroundPatterns = clothesPatterns;

const maskShapeOptions = [
  {
    name: 'humility',
    value: 'Humility',
    file: 'Humility'
  },
  {
    name: 'joy',
    value: 'Joy',
    file: 'Joy'
  },
  {
    name: 'spirit',
    value: 'Spirit',
    file: 'Spirit'

  },
  {
    name: 'wisdom',
    value: 'Wisdom',
    file: 'Wisdom'
  },
  {
    name: 'grace',
    value: 'Grace',
    file: 'Grace'
  },
  {
    name: 'purity',
    value: 'Purity',
    file: 'Purity'
  },
  {
    name: 'discipline',
    value: 'Discipline',
    file: 'Discipline'
  }
]

const maskColorVariants = [
  {
    name: 'aqua',
    value: 'Aqua',
    file: '1.png'
  },
  {
    name: 'tangerine',
    value: 'Tangerine',
    file: '2.png'
  },
  {
    name: 'maroon',
    value: 'Maroon',
    file: '3.png'
  },
  {
    name: 'monochrome',
    value: 'Monochrome',
    file: '4.png'
  },
  {
    name: 'sakura',
    value: 'Sakura',
    file: '6.png'
  },
  {
    name: 'gold',
    value: 'Gold',
    weight: 0.75,
    file: '5.png'
  },
  {
    name: 'neon',
    value: 'Neon',
    weight: 0.75,
    file: '7.png'
  }
]

const traits = [
  {
    traitGroup: "bg",
    file: (traits) =>
      `Backgrounds/${traits.background_pattern ? traits.background_pattern.file : 'Special'}/${traits.background.file}`,
    variants: [
      {
        name: 'background',
        trait_type: 'Background',
        options: [
          ...backgroundColors
        ]
      },
      {
        name: 'background_pattern',
        trait_type: 'Background Pattern',
        exclude: (traits) => ['grid', 'clouds', 'metropolis', 'space'].includes(traits.background.name),
        options: [
          ...backgroundPatterns
        ]
      }
    ]
  },
  {
    traitGroup: 'bg_symbol',
    file: (traits) => `Symbols${traits.background_symbol_color ? `/${traits.background_symbol_color.file}` : ''}/${traits.background_symbol.file}`,
    variants: [
      {
        name: 'background_symbol',
        trait_type: 'Background Symbol',
        options: [
          {
            name: 'basic',
            value: 'Basic',
            file: 'Others/1.png'
          },
          {
            name: 'sun',
            value: 'Sun',
            file: '5.png',
            weight: 0.2
          },
          {
            name: 'dawn',
            value: 'Dawn',
            file: '4.png',
            weight: 0.18
          },
          {
            name: 'synth_wave_sun',
            value: 'Synth Wave Sun',
            file: '3.png',
            weight: 0.15
          },
          {
            name: 'vertical_banner',
            value: 'Vertical Banner',
            file: '1.png',
            weight: 0.1
          },
          {
            name: 'horizontal_banner',
            value: 'Horizontal Banner',
            file: '2.png',
            weight: 0.1
          },
          {
            name: 'round_concentric',
            value: 'Round Concentric',
            file: '6.png',
            weight: 0.09
          },
          {
            name: 'square_concentric',
            value: 'Square Concentric',
            file: '8.png',
            weight: 0.05
          },
          {
            name: 'diagonal_square_concentric',
            value: 'Diagonal Square Concentric',
            file: '7.png',
            weight: 0.05
          },
          {
            name: 'portal',
            value: 'Portal',
            file: 'Others/3.png',
            weight: 0.02
          },
          {
            name: 'gateways',
            value: 'Gateways',
            file: 'Others/2.png',
            weight: 0.01
          }
        ]
      },
      {
        name: 'background_symbol_color',
        trait_type: 'Background Symbol Color',
        exclude: (traits) => [
          'basic',
          'portal',
          'gateways'
        ].includes(traits.background_symbol.name),
        options: [
          {
            name: 'gold',
            value: 'Gold',
            file: 'Yellow'
          },
          {
            name: 'rose_gold',
            value: 'Rose Gold',
            file: 'Pink'
          }
        ]
      }
    ]
  },
  {
    traitGroup: 'body',
    file: (traits) => `Bodies/${traits.body.file}`,
    variants: [
      {
        name: 'body',
        trait_type: 'Body',
        options: [
          {
            name: 'flare',
            value: 'Flare',
            file: '2.png'
          },
          {
            name: 'solar',
            value: 'Solar',
            file: '3.png'
          },
          {
            name: 'unstable',
            value: 'Unstable',
            weight: 0.5,
            file: '1.png'
          },
          {
            name: 'starburst',
            value: 'Starburst',
            weight: 0.5,
            file: '4.png'
          },
          {
            name: 'pulsar',
            value: 'Pulsar',
            weight: 0.2,
            file: '5.png'
          },
          {
            name: 'nebula',
            value: 'Nebula',
            weight: 0.2,
            file: '6.png'
          },
          {
            name: 'nova',
            value: 'Nova',
            weight: 0.035,
            file: '8.png'
          },
          {
            name: 'constellation',
            value: 'Constellation',
            weight: 0.02,
            file: '7.png'
          }
        ]
      }
    ]
  },
  {
    traitGroup: 'clothing',
    file: (traits) =>
      `Clothing/${traits.clothes.file}${traits.clothes_pattern ? `/${traits.clothes_pattern.file}/${traits.clothes_color.file}` : ''}`,
    variants: [
      {
        name: 'clothes',
        trait_type: 'Clothes',
        options: [
          {
            name: 'jacket',
            value: 'Jacket',
            file: 'Jacket'
          },
          {
            name: 'tshirt',
            value: 'T-Shirt',
            file: 'T-Shirt'
          },
          {
            name: 'poncho',
            value: 'Poncho',
            file: 'Poncho'
          },
          {
            name: 'deep_cut_sweater',
            value: 'Deep Cut Sweater',
            file: 'Deepcut Sweater'
          },
          {
            name: 'hoodie',
            value: 'Hoodie',
            weight: 0.65,
            file: 'Hoodie'
          },
          {
            name: 'collared_jacket',
            value: 'Collared Jacket',
            weight: 0.6,
            file: 'High-Collared Jacket'
          },
          {
            name: 'shirt',
            value: 'Shirt',
            weight: 0.52,
            file: 'Shirt'
          },
          {
            name: 'sacrificial_robe',
            value: 'Sacrificial Robe',
            weight: 0.5,
            file: 'Shirt with vest'
          },
          {
            name: 'light_kimono',
            value: 'Light Kimono',
            weight: 0.10,
            file: 'Kimono/1.png'
          },
          {
            name: 'elegant_kimono',
            value: 'Elegant Kimono',
            weight: 0.10,
            file: 'Kimono/2.png'
          },
          {
            name: 'dark_kimono',
            value: 'Dark Kimono',
            weight: 0.10,
            file: 'Kimono/3.png'
          },
          {
            name: 'librarian_jacket',
            value: 'Librarian Jacket',
            weight: 0.06,
            file: 'Suit Jacket/2.png'
          },
          {
            name: 'pastor_jacket',
            value: 'Pastor Jacket',
            weight: 0.06,
            file: 'Suit Jacket/1.png'
          },
          {
            name: 'playboy_jacket',
            value: 'Playboy Jacket',
            weight: 0.06,
            file: 'Suit Jacket/3.png'
          },
          {
            name: 'tiger_furcoat',
            value: 'Tiger Fur Coat',
            weight: 0.05,
            file: 'Furcoat/2.png'
          },
          {
            name: 'leopard_furcoat',
            value: 'Leopard Fur Coat',
            weight: 0.05,
            file: 'Furcoat/1.png'
          },
          {
            name: 'snow_tiger_furcoat',
            value: 'Snow Tiger Fur Coat',
            weight: 0.05,
            file: 'Furcoat/3.png'
          },
          {
            name: 'pink_punk',
            value: 'Pink-Punk',
            weight: 0.04,
            file: 'Punk Jacket/3.png'
          },
          {
            name: 'teen_punk',
            value: 'Teen-Punk',
            weight: 0.04,
            file: 'Punk Jacket/1.png'
          },
          {
            name: 'avi_punk',
            value: 'Avi-Punk',
            weight: 0.04,
            file: 'Punk Jacket/2.png'
          },
          {
            name: 'cyber_poncho',
            value: 'Cyber-Poncho',
            weight: 0.03,
            file: 'Cyperpunk/3.png'
          },
          {
            name: 'cyber_hoodie',
            value: 'Cyber-Hoodie',
            weight: 0.03,
            file: 'Cyperpunk/1.png'
          },
          {
            name: 'cyber_skin',
            value: 'Cyber-Skin',
            weight: 0.03,
            file: 'Cyperpunk/2.png'
          }
        ],
      },
      {
        name: 'clothes_color',
        trait_type: 'Clothes Color',
        exclude: (traits) => [
          'light_kimono',
          'elegant_kimono',
          'dark_kimono',
          'librarian_jacket',
          'pastor_jacket',
          'playboy_jacket',
          'tiger_furcoat',
          'leopard_furcoat',
          'snow_tiger_furcoat',
          'pink_punk',
          'teen_punk',
          'avi_punk',
          'cyber_poncho',
          'cyber_hoodie',
          'cyber_skin'
        ].includes(traits.clothes.name),
        options: [
          ...basicClothesColors
        ]
      },
      {
        name: 'clothes_pattern',
        trait_type: 'Clothes Pattern',
        exclude: (traits) => [
          'light_kimono',
          'elegant_kimono',
          'dark_kimono',
          'librarian_jacket',
          'pastor_jacket',
          'playboy_jacket',
          'tiger_furcoat',
          'leopard_furcoat',
          'snow_tiger_furcoat',
          'pink_punk',
          'teen_punk',
          'avi_punk',
          'cyber_poncho',
          'cyber_hoodie',
          'cyber_skin'
        ].includes(traits.clothes.name),
        options: [
          ...clothesPatterns
        ]
      }
    ]
  },
  {
    traitGroup: 'mask_side',
    file: (traits) => `Masks/Bottom Trait/${traits.mask_side_ornament.file}/${traits.mask_side_ornament_color.file}`,
    variants: [
      {
        name: 'mask_side_ornament',
        trait_type: 'Mask Side Ornament',
        options: maskShapeOptions,
      },
      {
        name: 'mask_side_ornament_color',
        trait_type: 'Mask Side Ornament Color',
        options: maskColorVariants
      }
    ]
  },
  {
    traitGroup: 'mask_top',
    file: (traits) => traits.mask_top_ornament.name === 'humility' && ['grace', 'joy'].includes(traits.mask_face.name)
      ? `Masks/Top Trait/${traits.mask_top_ornament.file}/Modified/${traits.mask_top_ornament_color.file}`
      : `Masks/Top Trait/${traits.mask_top_ornament.file}/${traits.mask_top_ornament_color.file}`,
    variants: [
      {
        name: 'mask_top_ornament',
        trait_type: 'Mask Top Ornament',
        options: maskShapeOptions,
      },
      {
        name: 'mask_top_ornament_color',
        trait_type: 'Mask Top Ornament Color',
        options: maskColorVariants
      }
    ]
  },
  {
    traitGroup: 'mask_jaw',
    file: (traits) => `Masks/Jaw/${traits.mask_jaw.file}/${traits.mask_jaw_color.file}`,
    variants: [
      {
        name: 'mask_jaw',
        trait_type: 'Mask Jaw',
        options: maskShapeOptions,
      },
      {
        name: 'mask_jaw_color',
        trait_type: 'Mask Jaw Color',
        options: maskColorVariants
      }
    ]
  },
  {
    traitGroup: 'mask_face',
    file: (traits) => `Masks/Face/${traits.mask_face.file}/${traits.mask_face_color.file}`,
    variants: [
      {
        name: 'mask_face',
        trait_type: 'Mask Face',
        options: maskShapeOptions,
      },
      {
        name: 'mask_face_color',
        trait_type: 'Mask Face Color',
        options: maskColorVariants
      }
    ]
  },
  {
    traitGroup: 'eyes',
    file: (traits) => traits.eyes.name !== 'none' ? `Masks/Eyes/${traits.mask_face.file}/${traits.eyes.file}` : undefined,
    variants: [
      {
        name: 'eyes',
        trait_type: 'Eyes',
        options: [
          {
            name: 'none'
          },
          {
            name: 'white_glow',
            value: 'White Glow',
            weight: 0.15,
            file: '1.png'
          },
          {
            name: 'yellow_glow',
            value: 'Yellow Glow',
            weight: 0.15,
            file: '2.png'
          },
          {
            name: 'red_laser',
            value: 'Red Laser',
            weight: 0.12,
            file: '3.png'
          },
          {
            name: 'neon_laser',
            value: 'Neon Laser',
            weight: 0.10,
            file: '4.png'
          },
          {
            name: 'yellow_lucid',
            value: 'Yellow Lucid',
            weight: 0.08,
            file: '5.png'
          },
          {
            name: 'red_lucid',
            value: 'Red Lucid',
            weight: 0.08,
            file: '6.png'
          },
          {
            name: 'red_plasma',
            value: 'Red Plasma',
            weight: 0.06,
            file: '7.png'
          },
          {
            name: 'green_plasma',
            value: 'Green Plasma',
            weight: 0.06,
            file: '8.png'
          },
          {
            name: 'holo_glasses',
            value: 'Holo-Glasses',
            weight: 0.04,
            file: '10.png'
          },
          {
            name: 'companions',
            value: 'Companions',
            weight: 0.03,
            file: '9.png'
          }
        ]
      }
    ]
  }
]

const sets = [
  {
    traits: [
      'Mask Side Ornament Color',
      'Mask Jaw Color',
      'Mask Top Ornament Color',
      'Mask Face Color'
    ],
    name: 'Mask Color Pieces: Aqua',
    value: 'Aqua'
  },
  {
    traits: [
      'Mask Side Ornament Color',
      'Mask Jaw Color',
      'Mask Top Ornament Color',
      'Mask Face Color'
    ],
    name: 'Mask Color Pieces: Tangerine',
    value: 'Tangerine'
  },
  {
    traits: [
      'Mask Side Ornament Color',
      'Mask Jaw Color',
      'Mask Top Ornament Color',
      'Mask Face Color'
    ],
    name: 'Mask Color Pieces: Maroon',
    value: 'Maroon'
  },
  {
    traits: [
      'Mask Side Ornament Color',
      'Mask Jaw Color',
      'Mask Top Ornament Color',
      'Mask Face Color'
    ],
    name: 'Mask Color Pieces: Monochrome',
    value: 'Monochrome'
  },
  {
    traits: [
      'Mask Side Ornament Color',
      'Mask Jaw Color',
      'Mask Top Ornament Color',
      'Mask Face Color'
    ],
    name: 'Mask Color Pieces: Sakura',
    value: 'Sakura'
  },
  {
    traits: [
      'Mask Side Ornament Color',
      'Mask Jaw Color',
      'Mask Top Ornament Color',
      'Mask Face Color'
    ],
    name: 'Mask Color Pieces: Gold',
    value: 'Gold'
  },
  {
    traits: [
      'Mask Side Ornament Color',
      'Mask Jaw Color',
      'Mask Top Ornament Color',
      'Mask Face Color'
    ],
    name: 'Mask Color Pieces: Neon',
    value: 'Neon'
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Mask Pieces: Humility',
    value: 'Humility',
    imagePiecesMap: {
      4: {
        switchFiles: {
          "mask_side": "8.png",
          "mask_top": "8.png",
          "mask_face": "8.png",
          "mask_jaw": "8.png"
        },
        deleteMetadata: [
          "Mask Side Ornament Color",
          "Mask Top Ornament Color",
          "Mask Face Color",
          "Mask Jaw Color",
          /Mask Color Pieces/
        ]
      }
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face',
      /Mask Color Pieces/
    ],
    name: 'Mask Pieces: Joy',
    value: 'Joy',
    imagePiecesMap: {
      4: {
        switchFiles: {
          "mask_side": "8.png",
          "mask_top": "8.png",
          "mask_face": "8.png",
          "mask_jaw": "8.png"
        },
        deleteMetadata: [
          "Mask Side Ornament Color",
          "Mask Top Ornament Color",
          "Mask Face Color",
          "Mask Jaw Color",
          /Mask Color Pieces/
        ]
      }
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Mask Pieces: Spirit',
    value: 'Spirit',
    imagePiecesMap: {
      4: {
        switchFiles: {
          "mask_top": "8.png",
          "mask_side": "8.png",
          "mask_face": "8.png",
          "mask_jaw": "8.png"
        },
        deleteMetadata: [
          "Mask Side Ornament Color",
          "Mask Top Ornament Color",
          "Mask Face Color",
          "Mask Jaw Color",
          /Mask Color Pieces/
        ]
      }
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Mask Pieces: Grace',
    value: 'Grace',
    imagePiecesMap: {
      4: {
        switchFiles: {
          "mask_side": "8.png",
          "mask_top": "8.png",
          "mask_face": "8.png",
          "mask_jaw": "8.png"
        },
        deleteMetadata: [
          "Mask Side Ornament Color",
          "Mask Top Ornament Color",
          "Mask Face Color",
          "Mask Jaw Color",
          /Mask Color Pieces/
        ]
      }
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Mask Pieces: Wisdom',
    value: 'Wisdom',
    imagePiecesMap: {
      4: {
        switchFiles: {
          "mask_top": "8.png",
          "mask_side": "8.png",
          "mask_face": "8.png",
          "mask_jaw": "8.png"
        },
        deleteMetadata: [
          "Mask Side Ornament Color",
          "Mask Top Ornament Color",
          "Mask Face Color",
          "Mask Jaw Color",
          /Mask Color Pieces/
        ]
      }
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Mask Pieces: Purity',
    value: 'Purity',
    imagePiecesMap: {
      4: {
        switchFiles: {
          "mask_side": "8.png",
          "mask_top": "8.png",
          "mask_face": "8.png",
          "mask_jaw": "8.png"
        },
        deleteMetadata: [
          "Mask Side Ornament Color",
          "Mask Top Ornament Color",
          "Mask Face Color",
          "Mask Jaw Color",
          /Mask Color Pieces/
        ]
      }
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Mask Pieces: Discipline',
    value: 'Discipline',
    imagePiecesMap: {
      4: {
        switchFiles: {
          "mask_side": "8.png",
          "mask_top": "8.png",
          "mask_face": "8.png",
          "mask_jaw": "8.png"
        },
        deleteMetadata: [
          "Mask Side Ornament Color",
          "Mask Top Ornament Color",
          "Mask Face Color",
          "Mask Jaw Color",
          /Mask Color Pieces/
        ]
      }
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Ancient Set',
    value: 'Wisdom',
    from: 4,
    namedCombos: {
      4: 'Wisdom'
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Ancient Set',
    value: 'Spirit',
    from: 4,
    namedCombos: {
      4: 'Spirit'
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Ancient Set',
    value: 'Purity',
    from: 4,
    namedCombos: {
      4: 'Purity'
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Ancient Set',
    value: 'Discipline',
    from: 4,
    namedCombos: {
      4: 'Discipline'
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Ancient Set',
    value: 'Joy',
    from: 4,
    namedCombos: {
      4: 'Joy'
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Ancient Set',
    value: 'Humility',
    from: 4,
    namedCombos: {
      4: 'Humility'
    }
  },
  {
    traits: [
      'Mask Side Ornament',
      'Mask Jaw',
      'Mask Top Ornament',
      'Mask Face'
    ],
    name: 'Ancient Set',
    value: 'Grace',
    from: 4,
    namedCombos: {
      4: 'Grace'
    }
  },
  {
    traits: [
      'Background Pattern',
      'Clothes Pattern'
    ],
    name: 'Ambient Set',
    value: 'Reaction-Diffusion',
    from: 2,
    namedCombos: {
      2: 'Reaction-Diffusion'
    }
  },
  {
    traits: [
      'Background Pattern',
      'Clothes Pattern'
    ],
    name: 'Ambient Set',
    value: 'Stripes',
    from: 2,
    namedCombos: {
      2: 'Stripes'
    }
  },
  {
    traits: [
      'Background Pattern',
      'Clothes Pattern'
    ],
    name: 'Ambient Set',
    value: 'Feathers',
    from: 2,
    namedCombos: {
      2: 'Feathers'
    }
  },
  {
    traits: [
      'Background Pattern',
      'Clothes Pattern'
    ],
    name: 'Ambient Set',
    value: 'Tiles',
    from: 2,
    namedCombos: {
      2: 'Tiles'
    }
  },
  {
    traits: [
      'Background Pattern',
      'Clothes Pattern'
    ],
    name: 'Ambient Set',
    value: 'Botanical',
    from: 2,
    namedCombos: {
      2: 'Botanical'
    }
  }
];

const baseJson = {
  name: 'Omnimorph'
}

// Winners of this giveaway:
// https://discord.com/channels/872146812520259614/872753498226323476/887929889930502184
// + 6 moderators
//
const discordIds = [
  '591020959113150464',
  '646377265265115136',
  '698331289807224904',
  '542982404143579154',
  '825807822250835988',
  '507292571949858822',
  '330841287299301376',
  '231373224418476032',
  '530580123855093767',
  '651675865024954399',
  '303908929711243264',
  '615937980447850517'
];

const crypto = require('crypto');

const concatDiscordIds = discordIds.reduce((acc, id) => acc += id, '');

const hash = crypto.createHash('sha256').update(concatDiscordIds).digest('hex');

console.log(hash);

module.exports = {
  traits,
  sets,
  baseJson,
  seed: hash
};
