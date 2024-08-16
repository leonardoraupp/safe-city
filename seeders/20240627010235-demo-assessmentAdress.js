'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addressassessment', [{
      userId: 1,
      adressId: 1,
      score: 10,
      comment: 'Legal',
      updatedAt: new Date(),
      createdAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addressassessment', null, {});
  }
};
