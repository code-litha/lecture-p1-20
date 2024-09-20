class Movie {
  constructor (id, name, year) {
    this.id = id
    this.name = name
    this.year = year
    // this.customers = []
  }
}

class Review {
  #rating
  constructor (id, name, rating, comment, movie = {}) {
    this.id = id
    this.name = name
    this.#rating = rating
    this.comment = comment
    // this.movie = movie  // pastikan saat instantiate review, movienya harus udah jadi object instance dari Movie
    this.movie = Factory.createMovie(movie.id, movie.name, movie.year)
  }

  get rating () {
    return this.#rating
  }

  set rating (value) {
    this.#rating = value
  }

  toJSON () { // method ini akan dipanggil ketika kita melakukan JSON.stringify()
    return {
      id: this.id,
      name: this.name,
      rating: this.#rating,
      comment: this.comment,
      movie: this.movie
    }
  }
}

class Factory {
  static createMovie (id, name, year) {
    return new Movie(id, name, year)
  }

  static createReview (id, name, rating, comment, movie) {
    return new Review(id, name, rating, comment, movie)
  }
}

module.exports = { Factory, Movie }