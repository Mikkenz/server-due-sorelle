'use strict';
const {
  Model
} = require('sequelize');
const clientes = require('./clientes');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Pedido.hasOne(models.Clientes, {foreignKey: 'id_cliente'})
      // Pedido.hasMany(models.Oculos, {foreignKey: 'id_oculos'})
    }
  }
  Pedido.init({
    data_compra: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};