'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Cara 1. double one to many
      UserCourse.belongsTo(models.User, {
        foreignKey: 'UserId'
      })
      UserCourse.belongsTo(models.Course, {
        foreignKey: 'CourseId'
      })
    }
  }
  UserCourse.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    UserId: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER,
    startDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'UserCourse',
  });
  return UserCourse;
};