'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      User.belongsToMany(models.Address, {
        through: 'AddressAssessment',
        foreignKey: 'userId',
        otherKey: 'addressId',
      });
    }
  }

  User.init({
    id:  {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  
  return User;
};