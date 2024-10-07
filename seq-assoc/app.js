const express = require('express')
const app = express()
const PORT = 3000
const Controller = require('./controllers/controller.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', Controller.home)
app.get('/add', Controller.getAdd)
app.post('/add', Controller.postAdd)

app.listen(PORT, () => {
  console.log(`Listening on port `, PORT)
})