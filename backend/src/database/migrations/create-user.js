'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            location_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "locations",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
                allowNull: true,
            },
            position: {
                type: Sequelize.GEOMETRY,
                allowNull: false,
            },
        },
            {
                timestamps: false,
            }
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};

/* {
    name: 'Arthur Dent',
    position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.36855032792246, -28.68584348258149'),
  },
  {
    name: 'Hurley Reyes',
    position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.37071936065081, -28.706500589920054)'),
  },
  {
    name: 'Franklin Clinton',
    position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.35057834245768, -28.67979507121855)'),
  },
  {
    name: 'Trevor Phillips',
    position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.362947235583334, -28.68995867452705)'),
  },
  {
    name: 'Carol Denvers',
    position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.34407124426991, -28.70622881234656)'),
  },
  {
    name: 'Alisson Honorato',
    position: Sequelize.fn('ST_GeomFromText', 'POINT( -49.38215987855773, -28.685352667154007)'),
  }, */