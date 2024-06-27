'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adress.belongsToMany(models.User, {
        through: 'AssessmentAdress',
        foreignKey: 'adressId',
        otherKey: 'userId',
      });
    }
  }
  Adress.init({
    postalCode: DataTypes.STRING,
    adressName: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adress',
  });
  return Adress;
};