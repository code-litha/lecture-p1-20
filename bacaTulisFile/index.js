// const movies = [
//   {
//     id: 1,
//     name: 'Upin & Ipin',
//     year: 2009
//   },
//   {
//     id: 2,
//     name: 'Transformers',
//     year: 2010
//   },
//   {
//     id: 3,
//     name: 'Spiderman',
//     year: 2001
//   }
// ]
const fs = require('fs')

const dataRead = fs.readFileSync('./movies.json', 'utf-8')  // baca data dari file
// convert dari string ke array / object => JSON.parse()
const dataMovies = JSON.parse(dataRead)
// console.log(dataMovies, '<<< dataMovies')
// console.log(movies, '<<< movies ')

const lastIndex = dataMovies.length - 1
const lastData = dataMovies[lastIndex]
// console.log(lastData)
const input = {
  id: lastData.id + 1,
  name: 'Minion',
  year: 2012
}

// console.log(input, '<<< input')
dataMovies.push(input)

console.log(dataMovies, '<<< movies after input')

// convert dari array/object ke string => JSON.stringify()
const dataMoviesStr = JSON.stringify(dataMovies, null, 2)

fs.writeFileSync('./movies.json', dataMoviesStr)  // save data ke file