'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addressassessment', [{
      userId: 3,
      adressId: 2,
      score: 5,
      comment: 'Não é segura',
      updatedAt: new Date(),
      createdAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addressassessment', null, {});
  }
};
