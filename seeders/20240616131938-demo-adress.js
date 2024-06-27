'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Adresses', [{
      postalCode: '93212270',
      adressName: 'Avenida Hugo Pardal',
      city: 'Sapucaia do Sul',
      state: "RS",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Adresses', null, {});
  }
};
