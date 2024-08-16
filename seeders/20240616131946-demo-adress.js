'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addresses', [{
      postalCode: '9921310',
      addressName: 'Rua Pedro Marinoto',
      city: 'Sapucaia do Sul',
      state: "RS",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
