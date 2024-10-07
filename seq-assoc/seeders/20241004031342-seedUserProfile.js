'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const dataUser = [
      {
        username: 'oka',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'adel',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'wijaya',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    const dataProfile = [
      {
        fullName: 'Oka Mahendra',
        gender: 'female',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Adella Java',
        gender: 'female',
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Hendrik Wijaya',
        gender: 'male',
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('Users', dataUser)
    await queryInterface.bulkInsert('Profiles', dataProfile)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Profiles', null)
    await queryInterface.bulkDelete('Users', null)
  }
};
