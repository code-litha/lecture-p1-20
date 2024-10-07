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
      User.hasOne(models.Profile, {
        foreignKey: 'UserId'
      })  // Lazy Loading => .getProfile()

      User.hasMany(models.Book, {
        foreignKey: 'AuthorId'
      })  // Lazy Loading => .getBooks()
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    // method 1. hooks di dalam init
    // hooks: {
    //   beforeCreate: function (instance, options) {
    //     console.log('Hooks di before create method 1 jalan')
    //   },
    //   afterCreate: function (instance, options) {
    //     console.log('Hooks di after create method 1 jalan')
    //   }
    // }
  });

  // method 2. hooks menggunakan .addHook
  // User.addHook('beforeCreate', function (instance, options) {
  //   console.log('Hooks di before create method 2 jalan')
  // })

  // method 3. hooks langsung methodnya
  User.beforeCreate(function (user, options) {
    console.log('Hooks di before create method 3 jalan')

    user.username = user.username + `@hacktiv8.com`

    const encryptPass = btoa(user.password)
    user.password = encryptPass

    // user.code = user.name + user.... + ...
  })
  return User;
};