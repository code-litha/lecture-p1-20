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
   await queryInterface.bulkInsert('Users', [
    {
      username: `adel`,
      email: `adel@mail.com`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: `oka`,
      email: `oka@mail.com`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: `david`,
      email: `david@mail.com`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: `hendrik`,
      email: `hendrik@mail.com`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: `raffles`,
      email: `raffles@mail.com`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: `seno`,
      email: `seno@mail.com`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: `alex`,
      email: `alex@mail.com`,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
