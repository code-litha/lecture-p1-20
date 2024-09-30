const pool = require('../config/connection.js')
const Factory = require('./class.js')

class Model {
  static async getAllCategories () {
    try {
      const data = await pool.query(`
        SELECT * FROM "Categories"
      `)
      const dataCategories = data.rows.map(el => {
        // console.log(el, '<<< el')
        return Factory.createCategory(el.id, el.name)
      })
      // console.log(dataCategories)
      return dataCategories
    } catch (error) {
      throw error
    }
  }

  static async getFoods (searchName) {
    try {
      const data = await pool.query(`
        SELECT 
          f.*,
          c.name as "CategoryName"
        FROM "Foods" f
        INNER JOIN "Categories" c ON c.id = f."CategoryId"
        WHERE f.name ILIKE '%${searchName || ''}%'
      `)
      const dataFoods = data.rows.map(el => {
        const food = Factory.createFood(el.id, el.name, el.price, el.CategoryId, el.CategoryName)
        return food
      })
      
      return dataFoods
    } catch (error) {
      throw error
    }
  }

  static async getFoodById (id) {
    try {
      const data = await pool.query(`
        SELECT 
          f.*,
          c.name as "CategoryName"
        FROM "Foods" f
        INNER JOIN "Categories" c ON c.id = f."CategoryId"
        WHERE f.id = ${id}
      `)
      const dataFoods = data.rows.map(el => {
        const food = Factory.createFood(el.id, el.name, el.price, el.CategoryId, el.CategoryName)
        return food
      })
      
      return dataFoods[0]
    } catch (error) {
      throw error
    }
  }

  static async createFood (name, price, CategoryId) {
    try {
      // validations
      const errors = this.errorValidation(name, price, CategoryId)
      if (errors.length > 0) {
        throw { name: `ErrorValidation`, errMessages: errors }
      }

      // const data = await pool.query(`
      //   INSERT INTO "Foods" ("name", "price", "CategoryId")
      //   VALUES ('${name}', '${price}', '${CategoryId}')
      // `)
      const values = [name, price, CategoryId]
      const data = await pool.query(`
        INSERT INTO "Foods" ("name", "price", "CategoryId")
        VALUES ($1, $2, $3)
      `, values)

      return data.rows
    } catch (error) {
      throw error
    }
  }

  static async editFood (id, name, price, CategoryId) {
    try {
      // validations
      const errors = this.errorValidation(name, price, CategoryId)
      if (errors.length > 0) {
        throw { name: `ErrorValidation`, errMessages: errors }
      }

      const data = await pool.query(`
        UPDATE "Foods" 
        SET 
          "name" = '${name}',
          "price" = '${price}',
          "CategoryId" = '${CategoryId}'
        WHERE 
          "id" = '${id}'
      `)

      return data.rows
    } catch (error) {
      throw error
    }
  }

  static errorValidation (name, price, CategoryId) {
    const errors = []
    if (!name) {
      errors.push(`Name is required`)
    }
    if (!price) {
      errors.push(`Price is required`)
    }
    if (price < 5_000) {
      errors.push(`Price is must greather than 5.000`)
    }
    if (!CategoryId) {
      errors.push(`Category is required`)
    }

    return errors
  }
}

module.exports = Model