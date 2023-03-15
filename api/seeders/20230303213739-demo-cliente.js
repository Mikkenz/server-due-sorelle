"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Clientes",
      [
        {
          nome: "John Doe",
          telefone: "214456",
          email: "jhon@jhon.cpm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Joana Doe",
          telefone: "243242",
          email: "joanan@jhon.cpm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "jack Doe",
          telefone: "654432",
          email: "jack@jhon.cpm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};

//INSERT INTO Clientes (nome, telefone, email, createdAt, updatedAt) VALUES ("Maria", "123213");
