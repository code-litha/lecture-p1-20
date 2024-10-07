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
    const data = [
      {
        name: 'Harry Potter',
        price: 150_000,
        synopsis: `Harry Potter synopsis`,
        AuthorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Harry Potter 2',
        price: 150_000,
        synopsis: `Harry Potter 2 synopsis`,
        AuthorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dinosaurus',
        price: 100_000,
        synopsis: `Dinosaurus synopsis`,
        AuthorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ] 
    await queryInterface.bulkInsert('Books', data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null)

  }
};
