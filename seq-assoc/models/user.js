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
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: `Username sudah ada yang punya`
      },
      validate: {
        notNull: {
          msg: `Username is not null`
        },    // "notNull: true / { msg: ... }" hanya boleh digunakan jika "allowNull: false"
        notEmpty: {
          msg: `Username is required`
        },
        gaBolehAdaSpasi(value) {
          if (value.split(' ').length > 1) {
            throw new Error('Username gak boleh ada spasi')
          }
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          msg: `Password is required`
        },
        // len: [5]  // minimal 5 character
        len: {
          args: [5],
          msg: `Password minimal 5 character`
        },
        isContainUsername (value) {
          const username = this.username
          if (value.includes(username)) {
            throw new Error('Password gak boleh mengandung username')
          }
        }
      }
    }
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

    // user.username = user.username + `@hacktiv8.com`

    const encryptPass = btoa(user.password)
    user.password = encryptPass

    // user.code = user.name + user.... + ...
  })
  return User;
};