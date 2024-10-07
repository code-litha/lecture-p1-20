'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER,
        // references: {   // untuk define dia sebuah foreign key
        //   model: {
        //     tableName: 'Users'
        //   },
        //   key: 'id'
        // }
        references: {
          model: 'Users',     // ini TableName bukan ModelName
          key: 'id'
        },
        unique: true    // ini menandakan bahwa tidak duplikasi value / data untuk UserId tersebut
        // unique: true pada column FK, maka menandakan bahwa relasi tersebut 1-1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profiles');
  }
};