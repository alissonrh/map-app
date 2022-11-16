'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Yarpen Zigrin',
        position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.30069058969667 -28.715740607344074)'),
      },
      {
        name: 'Arthur Dent',
        position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.36855032792246 -28.68584348258149)'),
      },
      {
        name: 'Hurley Reyes',
        position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.37071936065081 -28.706500589920054)'),
      },
      {
        name: 'Franklin Clinton',
        position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.35057834245768 -28.67979507121855)'),
      },
      {
        name: 'Trevor Phillips',
        position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.362947235583334 -28.68995867452705)'),
      },
      {
        name: 'Carol Denvers',
        position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.34407124426991 -28.70622881234656)'),
      },
      {
        name: 'Alisson Honorato',
        position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.38215987855773 -28.685352667154007)'),
      },
    ], {});
  },

  async down(queryInterface) { queryInterface.bulkDelete('users', null, {}) }
};
