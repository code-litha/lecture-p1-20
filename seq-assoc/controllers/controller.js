const { Book, Profile, User } = require('../models/index.js')
const { Op } = require('sequelize')

class Controller {
  static async home (req, res) {
    try {
      // LAZY Loading
      // const dataUser = await User.findOne()

      // const dataProfile = await dataUser.getProfile()
      // const dataBooks = await dataUser.getBooks()

      // res.send({ dataUser, dataProfile, dataBooks })

      // Eager Loading => include
      // const dataUsers = await User.findAll({
      //   // include: Profile  // include itu join 
      //   include: [Profile, Book]
      // })
      // res.send(dataUsers)

      const dataUsers = await User.findAll({
        attributes: ['id', 'username', 'password'],
        // include: Book,  // CASE 1. jika hanya ingin join 1 table, dan ambil semua column / tidak ada kondisi tertentu
        // include: {        // CASE 2. jika hanya ingin join 1 table dan ambil beberapa column / ada kondisi tertentu
        //   model: Book,
        //   attributes: ['id', 'name', 'price', 'AuthorId']
        // },
        // include: [ Profile, Book ],   // CASE 3. jika ingin join lebih dari 1 table dan ambil semua column/ tidak ada kondisi tertentu
        include: [        // CASE 4. jika ingin join lebih dari 1 table dan ambil beberapa column / ada kondisi tertentu
          {
            model: Profile,
            attributes: ['id', 'fullName']
          },
          {
            model: Book,
            // where: {
            //   price: {
            //     [Op.gt] : 100_000
            //   }
            // }
          }
        ]
      })


      // console.log(dataUsers)

      const summarize = await Book.getSummarize()

      // res.send({ 
      //   // summarize, 
      //   dataUsers
      // })
      res.render('listUser.ejs', { dataUsers })
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  }

  static async getAdd (req, res) {
    try {
      res.render('add.ejs')
    } catch (error) {
      res.send(error)
    }
  }

  static async postAdd (req, res) {
    try {
      console.log(req.body, '<<< req.body')
      const { username, password } = req.body

      await User.create({
        username,
        password
      })

      res.redirect('/')
    } catch (error) {
      res.send(error)
    }
  }
}

module.exports = Controller