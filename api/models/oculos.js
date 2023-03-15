'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Oculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //
    }
  }
  Oculos.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    cor: DataTypes.STRING,
    tamanho: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Oculos',
  });
  return Oculos;
};