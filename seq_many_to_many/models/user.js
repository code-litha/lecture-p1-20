'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Cara 1. double one to many
      User.hasMany(models.UserCourse, {
        foreignKey: 'UserId'
      })

      // Cara 2. Many to Many
      User.belongsToMany(models.Course, {
        through: 'UserCourse'
      })
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};