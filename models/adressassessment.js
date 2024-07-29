'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdressAssessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AdressAssessment.belongsTo(models.User, {
        foreignKey: id, // nomde da relação
        as: 'user'
      })
      AdressAssessment.belongsTo(models.Adress, {
        foreignKey: id,
        as: 'adress'
      })
    }
  }
  AdressAssessment.init({
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    adressId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdressAssessment',
  });
  return AdressAssessment;
};