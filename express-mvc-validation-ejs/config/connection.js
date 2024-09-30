// import pg from 'pg'
const pg = require('pg')
const { Pool } = pg
 
const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'db_foods',
  idleTimeoutMillis: 500  // kalau misalkan server tidak digunakan selama 500 ms, maka connection mati
})

// async function testConnect() {
//   try {
//     console.log(await pool.query('SELECT NOW()'))
//   } catch (error) {
//     console.log('Error : ', error)
//   }
// }

// testConnect()

module.exports = pool