const express = require('express')
const router = express.Router()
const categoryRouter = require('./categories.js')
const foodRouter = require('./foods.js')

router.get('/', (req, res) => {
  res.send('Hello World !')
})

router.use('/categories', categoryRouter)
router.use('/foods', foodRouter)  
// router.use('/prefixName', routerGroup)

module.exports = router