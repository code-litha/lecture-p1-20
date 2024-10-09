const { User, UserCourse, Course } = require('../models')

class Controller {
  static async getHome(req, res) {
    try {
      // res.send('Hello World')
      // Cara 1. double one to many => finding menggunakan nested include
      // const data = await User.findAll({
      //   include: {
      //     model: UserCourse,
      //     attributes: {
      //       exclude: ['createdAt', 'updatedAt']
      //     },
      //     include: {
      //       model: Course,
      //       attributes: ['id', 'name']    // include
      //     }
      //   },
      // })

      // Cara 2. many to many
      // const data = await User.findAll({
      //   // include: {
      //   //   model: Course
      //   // }
      //   include: {
      //     model: UserCourse
      //   }
      // })

      const data = await UserCourse.findAll({
        include: [User, Course]
      })

      res.send(data)
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  }

  
}

module.exports = Controller