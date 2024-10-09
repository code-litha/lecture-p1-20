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
   await queryInterface.bulkInsert('UserCourses', [
    {
      UserId: 1,
      CourseId: 1,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 1,
      CourseId: 2,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 2,
      CourseId: 1,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 2,
      CourseId: 3,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 3,
      CourseId: 3,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 4,
      CourseId: 3,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 4,
      CourseId: 2,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 5,
      CourseId: 1,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 5,
      CourseId: 2,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 6,
      CourseId: 1,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 6,
      CourseId: 3,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 7,
      CourseId: 2,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 7,
      CourseId: 3,
      startDate: '2024-01-09',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('UserCourses', null, {});
  }
};
