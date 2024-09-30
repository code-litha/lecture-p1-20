const View = require('../views/view.js')
const Model = require('../models/model.js')

class Controller {
  static help () {
    // console.log('command help di controller')
    View.help()
  }

  static async showMovies () {
    try {
      // console.log('command showMovies di controller')
      const movies = await Model.showMovies()
      console.log(movies, '<<< movie di controller')
      View.showMovies(movies)
    } catch (error) {
      console.log(error, '<<< error di controller')
      View.showError(error)
    }
  }

  static async addMovie (movieName, year) {
    try {
      // console.log('command addMovie di controller')
      // console.log(movieName, '<<< movieName')
      // console.log(year, '<<< year')
      const newMovie = await Model.addMovie(movieName, year)
      View.showSuccessAddMovie(newMovie)
    } catch (error) {
      View.showError(error)
    }
  }

  static async showReviews (movieId) {
    try {
      const reviews = await Model.showReviews(movieId)
      View.showReviews(reviews)
    } catch (error) {
      View.showError(error)
    }
  }

  static async addReview (movieId, username, rating, reviewComment) {
    try {
      const review = await Model.addReview(movieId, username, rating, reviewComment)
      View.showSuccessAddReview(review)
    } catch (error) {
      View.showError(error)
    }
  }
}

module.exports = Controller
