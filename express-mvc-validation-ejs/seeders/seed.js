const pool = require('../config/connection.js')
const fs = require('fs').promises

async function createCategories() {
  try {
    const dataStr = await fs.readFile('./data/categories.json', 'utf-8')
    const dataJSON = JSON.parse(dataStr)
    const data = dataJSON.map(el => {
      const { id, name } = el 
      return `( '${name}' )`
    }).join(',')
    const query = `INSERT INTO "Categories" ("name") VALUES ${data}`
    return query
  } catch (error) {
    throw error
  }
}

async function createFoods() {
  try {
    const dataStr = await fs.readFile('./data/foods.json', 'utf-8')
    const dataJSON = JSON.parse(dataStr)
    const data = dataJSON.map(el => {
      const { name, price, CategoryId } = el 
      return `( '${name}', '${price}', '${CategoryId}' )`
    }).join(', \n')
    const query = `INSERT INTO "Foods" ("name", "price", "CategoryId") VALUES ${data}`
    return query
  } catch (error) {
    throw error
  }
}

async function seedings() {
  try {
    const dataCategory = await createCategories()
    await pool.query(dataCategory)
    console.log(`SEED Data Categories SUCCESS`)

    const dataFoods = await createFoods()
    await pool.query(dataFoods)
    console.log(`SEED Data Foods SUCCESS`)
  } catch (error) {
    console.log(error)
  }
}

seedings()