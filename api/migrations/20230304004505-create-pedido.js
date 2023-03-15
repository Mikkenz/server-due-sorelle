'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // id_cliente: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {model: 'Cliente', key: 'id'}
      // },
      // id_oculos: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {model: 'Oculos', key: 'id'}
      // },
      data_compra: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedidos');
  }
};