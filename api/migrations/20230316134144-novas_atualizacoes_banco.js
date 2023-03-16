'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Clientes', 'cpf', {
    type: Sequelize.STRING
   })
   await queryInterface.addColumn('Clientes', 'cep', {
    type: Sequelize.INTEGER
   })
   await queryInterface.addColumn('Clientes', 'cidade', {
    type: Sequelize.STRING
   })
   await queryInterface.addColumn('Clientes', 'bairro', {
    type: Sequelize.STRING
   })
   await queryInterface.addColumn('Clientes', 'rua', {
    type: Sequelize.STRING
   })
   await queryInterface.addColumn('Clientes', 'numero', {
    type: Sequelize.STRING
   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
