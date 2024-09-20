const fs = require('fs').promises
const { Factory, Movie } = require('./class.js')

class Model {
  static async showMovies () {
    try {
      // console.log('command showMovies di model')
      // const dataStr = fs.readFileSync('./data/movies.json', 'utf-8')
      const dataStr = await fs.readFile('./data/movies.json', 'utf-8')
      // console.log(dataStr, '<<< dataStr')
      const dataJSON = JSON.parse(dataStr)  // masih array of object literal
      // console.log(dataJSON)
      const dataMovies = dataJSON.map(el => {
        // console.log(el, '<<< el')
        const movie = new Movie(el.id, el.name, el.year)
        // const movie = Factory.createMovie(el.id, el.name, el.year)
        // console.log(movie, '<<<< movie')
        // console.log('-----------')
        return movie
      })
      // console.log(dataMovies, '<<< dataMovies')
      return dataMovies
    } catch (error) {
      // return error
      throw error   // mereturn sebuah error, supaya ngasih tahu function yg manggil kalau ini error
    }
  }

  static async addMovie (movieName, year) {
    try {
      /*
        1. kita ambil data movies terlebih dahulu 
            => jangan lupa harus sudah jadi array of object instance
        2. kita ambil data terakhir dari step 1
        3. kita buat id baru dari data step 2.id ditambah 1
        4. kita buat instance movie yang baru sesuai parameter dengan id baru step 3
        5. kita push data step 4 ke data step 1
        6. kita stringify data step 1
        7. kita save data stringify ke dalam data/movies.json
        8. kita return data step 4
      */
      // step 1
      const dataMovies = await this.showMovies()
      // console.log(dataMovies, '<<< dataMovies')
  
      // step 2
      const lastIndex = dataMovies.length - 1
      const lastData = dataMovies[lastIndex]
      // console.log(lastData, '<<< last data')
  
      // step 3
      const newId = lastData.id + 1
      // console.log(newId)
  
      // step 4
      // const input = new Movie(newId, movieName, year)
      const input = Factory.createMovie(newId, movieName, year)
      // console.log(input)
  
      // step 5
      dataMovies.push(input)
      // console.log(dataMovies, '<<< dataMovies')
  
      // step 6
      const dataMoviesStr = JSON.stringify(dataMovies, null, 2)
  
      // step 7
      await fs.writeFile('./data/movies.json', dataMoviesStr)
  
      // step 8
      return input
      // return `Successfully add movie dengan id ${input.id}`
    } catch (error) {
      throw error
    }
  }

  static async showReviews (movieId) {
    try {
      /*
        1. baca data reviews => jangan lupa harus menjadi array of object instance Review
        2. kita filter data step 1 yang mempunyai movie.id sama dengan parameter
        3. return step 2
      */

      // step 1
      const dataStr = await fs.readFile('./data/reviews.json', 'utf-8')
      const dataJSON = JSON.parse(dataStr)
      const dataReviews = dataJSON.map(el => {
        const review = Factory.createReview(el.id, el.name, el.rating, el.comment, el.movie)

        return review
      })

      // step 2
      const filterReviews = dataReviews.filter(el => {
        // console.log(el, '<<< el')
        return el.movie.id === movieId
      })
      // console.log(filterReviews)
      return filterReviews
    } catch (error) {
      throw error
    }
  }

  static async addReview (movieId, username, rating, reviewComment) {
    try {
      // validasi untuk rating, karena tidak perlu ada baca data terlebih dahulu
      if (!rating || rating > 5 || rating < 1) {
        throw 'Rating hanya boleh di angka 1 - 5'
      }
      /*
        1. baca data movies 
        2. ambil data movies step 1 yang mempunyai id sesuai movieId parameter
        3. baca data reviews => jangan lupa harus menjadi array of object instance Review
        4. buat id baru dari data review terakhir step 3 . id + 1
        5. buat instance review dari parameter, newId step 4, dan data movie step 2
        6. push data review step 5 ke data reviews step 3
        7. save data review step 5 ke reviews.json
        8. return review step 5
      */
      // step 1
      const dataMovies = await this.showMovies()
      // console.log(dataMovies)

      // step 2
      const findMovie = dataMovies.find(el => {
        return el.id === movieId
      })
      // console.log(findMovie)
      if (!findMovie) {   // validasi kalau movienya tidak ketemu
        throw `Data Movie with id ${movieId} Not Found`
      }

      // step 3
      const dataStr = await fs.readFile('./data/reviews.json', 'utf-8')
      const dataJSON = JSON.parse(dataStr)
      const dataReviews = dataJSON.map(el => {
        const review = Factory.createReview(el.id, el.name, el.rating, el.comment, el.movie)

        return review
      })

      // step 4
      const lastIndex = dataReviews.length - 1
      const lastData = dataReviews[lastIndex]
      const newId = lastData.id + 1
      // console.log(newId)

      // step 5
      const inputReview = Factory.createReview(newId, username, rating, reviewComment, findMovie)
      // console.log(inputReview)

      // step 6
      dataReviews.push(inputReview)

      // step 7
      const dataReviewsStr = JSON.stringify(dataReviews, null, 2)
      // console.log(dataReviewsStr)
      await fs.writeFile('./data/reviews.json', dataReviewsStr)

      // // step 8
      return inputReview
    } catch (error) {
      throw error
    }
  }
}

module.exports = Model

/*
  class NameClass {
    static async nameFunction () {
      try {
      
      } catch (err) {
       
      }
    }

    async nameInstanceMethod () {
    
    }
  }

  async function nameFunction () {
    try {
    
    } catch (err) {
      
    }
  }

  const nameFunction = async () => {
    try {
    
    } catch (err) {
      
    }
  }
*/