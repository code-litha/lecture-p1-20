'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Cara 1. double one to many
      // Course.hasMany(models.UserCourse, {
      //   foreignKey: 'CourseId'
      // })

      // Cara 2. many to many
      Course.belongsToMany(models.User, {
        through: 'UserCourse'
      })
    }
  }
  Course.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};