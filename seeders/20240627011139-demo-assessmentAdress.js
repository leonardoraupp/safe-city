'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addressassessments', [{
      userId: 3,
      addressId: 2,
      score: 5,
      comment: 'Não é segura',
      updatedAt: new Date(),
      createdAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addressassessments', null, {});
  }
};
