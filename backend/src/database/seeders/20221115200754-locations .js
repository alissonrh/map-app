'use strict';

const pz = {
  "coordinates": [
    [
      [
        -49.38008775187683,
        -28.726308019644428
      ],
      [
        -49.38181869606973,
        -28.733897290250404
      ],
      [
        -49.3688366146244,
        -28.734807965692234
      ],
      [
        -49.36918280346285,
        -28.72706697150153
      ],
      [
        -49.38008775187683,
        -28.726308019644428
      ]
    ]
  ],
  "type": "Polygon"
}

const me = {
  "coordinates": [
    [
      [
        -49.37727732986258,
        -28.735647225293597
      ],
      [
        -49.378193709815264,
        -28.744003553332163
      ],
      [
        -49.36408145855037,
        -28.742878701948115
      ],
      [
        -49.3637149065695,
        -28.736450747415326
      ],
      [
        -49.37727732986258,
        -28.735647225293597
      ]
    ]
  ],
  "type": "Polygon"
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('locations', [
      {
        name: 'Pedro Zanivan',
        boundaries: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(pz))
      },
      {
        name: 'Morro Estevão',
        boundaries: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(me))
      },
    ], { });
    },
    
    async down (queryInterface) { queryInterface.bulkDelete('locations', null, {}) }
  };
