const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller.js')

// prefixName => /categories
router.get('/', Controller.getCategories)   // prefix + / => /categories 
// router.get('/delete/:id')
// router.get('/detail/:id')
// router.get('/add/:id')
// router.get('/edit/:id')

module.exports = router