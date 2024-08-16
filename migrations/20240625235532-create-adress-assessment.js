'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AddressesAssessments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', // nome da tabela e não da "model".
          key: 'id' // nome da coluna referenciada(primary key).
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      addressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Adresses',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AddressesAssessments');
  }
};