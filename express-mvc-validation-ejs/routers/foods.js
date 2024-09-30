const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller.js')

// prefixName => /foods
router.get('/', Controller.getFoods)  // prefix + / => /foods/
// router.get('/delete/:id')          // prefix + /delete/:id => /foods/delete/:id
router.get('/add', Controller.getAddFoodForm)
router.post('/add', Controller.postAddFood)
router.get('/edit/:id', Controller.getEditFoodForm)
router.post('/edit/:id', Controller.postEditFood)
router.get('/:id', (req, res) => res.send(`ID ${req.params.id}`))

module.exports = router