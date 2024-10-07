'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static async getSummarize () {
      try {
        const result = await Book.findAll({
          attributes: [
            [sequelize.fn('SUM', sequelize.col('price')), 'totalPrice'],
            [sequelize.fn('MAX', sequelize.col('price')), 'maxPrice'],
            [sequelize.fn('MIN', sequelize.col('price')), 'minPrice'],
            [sequelize.fn('DATE_PART', 'year', sequelize.fn('MAX', sequelize.col('createdAt'))), "maxYear"],
            [sequelize.fn('DATE_PART', 'year', sequelize.fn('MIN', sequelize.col('createdAt'))), "minYear"]
          ],
          // where: {},
          // order: [[]], // sort asc / desc,
          // having: [],
          // group: []
        })
        return result[0]  // sudah jadi object
      } catch (error) {
        throw error
      }
    }

    static associate(models) {
      // define association here
      Book.belongsTo(models.User, {
        foreignKey: 'AuthorId'
      })
    }
  }
  Book.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    synopsis: DataTypes.TEXT,
    AuthorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};