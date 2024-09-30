const Model = require('../models/model.js')

class Controller {
  static async getCategories (req, res) {
    try {
      const dataCategories = await Model.getAllCategories()

      // res.send(dataCategories)
      res.render('listCategory.ejs', { data: dataCategories } )
    } catch (error) {
      res.send(error.message || 'Internal Server Error')
    }
  }

  static async getFoods (req, res) {
    try {
      const searchName = req.query.name || ''

      const dataFoods = await Model.getFoods(searchName)

      // res.send(dataFoods)
      res.render('listFood.ejs', { data: dataFoods } )
    } catch (error) {
      res.send(error.message || 'Internal Server Error')
    }
  }

  static async getAddFoodForm (req, res) {
    try {
      // console.log(req.query, '<<< request query')
      let errors = req.query.errors || ''
      if (errors) {
        errors = errors.split(',')
      }

      console.log(errors)
      const dataCategories = await Model.getAllCategories()

      // res.send('GET /foods/add')
      res.render('addFood.ejs', { dataCategories, errors })
    } catch (error) {
      res.send(error.message || 'Internal Server Error')
    }
  }

  static async postAddFood (req, res) {
    try {
      // console.log(req.body, '<<< req body')
      const { name, price, CategoryId } = req.body
      await Model.createFood(name, price, CategoryId)

      // res.send('POST /foods/add')
      res.redirect('/foods')
    } catch (error) {
      // console.log(error, '<<< error di controller')
      if (error.name === 'ErrorValidation') {
        // console.log(error.errMessages, '<<< messages')
        const errMessages = error.errMessages

        // kasih request query in path => ?key1=value1&key2=value2
        res.redirect(`/foods/add?errors=${errMessages}`)  // method GET /foods/add
      } else {
        res.send(error || 'Internal Server Error')
      }
    }
  }

  static async getEditFoodForm (req, res) {
    try {
      const id = req.params.id
      let errors = req.query.errors || ''
      if (errors) {
        errors = errors.split(',')
      }

      // console.log(id, '<<< id edit nih')
      const foodDetail = await Model.getFoodById(id)
      const dataCategories = await Model.getAllCategories()

      // console.log(foodDetail)
      res.render('editFood.ejs', { foodDetail, dataCategories, errors, id })
    } catch (error) {
      res.send(error.message || 'Internal Server Error')
    }
  }

  static async postEditFood (req, res) {
    const id = req.params.id
    try {
      const { name, price, CategoryId } = req.body
      
      // res.send('POST EDIT ')
      await Model.editFood(id, name, price, CategoryId)

      res.redirect('/foods')
    } catch (error) {
      if (error.name === 'ErrorValidation') {
        const errMessages = error.errMessages

        res.redirect(`/foods/edit/${id}?errors=${errMessages}`)  // method GET /foods/add
      } else {
        res.send(error || 'Internal Server Error')
      }
    }
  }
}

module.exports = Controller