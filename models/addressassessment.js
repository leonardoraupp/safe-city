'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AddressAssessment extends Model {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      AddressAssessment.belongsTo(models.User, {
        foreignKey: 'userId', // the collum will store the primary key of User.
        as: 'user'
      })
      AddressAssessment.belongsTo(models.Address, {
        foreignKey: 'addressId',
        as: 'address'
      })
    }
  }

  AddressAssessment.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AddressAssessment',
  });

  return AddressAssessment;

};