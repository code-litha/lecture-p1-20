class View {
  static help () {
    // console.log('command help di views')
    console.log(`node app.js help`)
    console.log(`node app.js showMovies`)
    console.log(`node app.js addMovie <movie_name> <year>`)
    console.log(`node app.js deleteMovie <id>`)
  }

  static showMovies (data) {
    // console.log('command showMovies di views')
    console.table(data)
  }

  static showSuccessAddMovie (movie) {
    // console.log(movie, '<<< di view')
    console.log(`Movie dengan id ${movie.id} bernama ${movie.name} berhasil ditambahkan`)
  }

  static showError (error) {
    console.log(error)
  }

  static showReviews (reviews) {
    const data = reviews.map(el => {
      return {
        Username: el.name,
        Rating: el.rating,
        Review: el.comment
      }
    })
    console.table(data)
  }

  static showSuccessAddReview (review) {
    console.log(review)
  }
}

module.exports = View