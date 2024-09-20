// untuk mendapatkan command yang dikirimkan dari terminal, bisa gunakan => process.argv
const commands = process.argv.slice(2)
const cmd = commands[0]
const Controller = require('./controllers/controller.js')

// console.log(commands)
switch (cmd) {
  case 'help': {
    // const name = 'adel'
    // console.log('command help di app')
    Controller.help()
    break
  }
  case 'showMovies': {
    // const name = 'oka'
    // console.log('command showMovies di app')
    Controller.showMovies()
    break
  }
  case 'addMovie': {
    const movieName = commands[1]
    const year = +commands[2]
    // console.log(movieName, '<<< movieName')
    // console.log(year, '<<< year')
    // console.log('command addMovie di app')
    Controller.addMovie(movieName, year)
    break
  }
  case 'showReviews': {
    // const movieId = +commands[1]
    const movieId = Number(commands[1])
    Controller.showReviews(movieId)
    break
  }
  case 'addReview': {
    const movieId = +commands[1]
    const username = commands[2]
    const rating = +commands[3]
    const reviewComment = commands[4]
    Controller.addReview(movieId, username, rating, reviewComment)

    break
  }
  default: break
}
