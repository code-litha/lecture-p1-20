const pool = require('../config/connection.js')

const createTableCategoriesQuery = `
  CREATE TABLE IF NOT EXISTS "Categories" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  )
`

const createTableFoodsQuery = `
  CREATE TABLE IF NOT EXISTS "Foods" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL DEFAULT 0,
    "CategoryId" INTEGER NOT NULL REFERENCES "Categories"("id")
  )
`

async function migrations() {
  try {
    await pool.query(`DROP TABLE IF EXISTS "Foods", "Categories"`)
    console.log('DROP TABLE success')

    await pool.query(createTableCategoriesQuery)
    console.log(`CREATE TABLE Categories success`)

    await pool.query(createTableFoodsQuery)
    console.log(`CREATE TABLE Foods success`)
  } catch (error) {
    console.log(error)
  }
}

migrations()