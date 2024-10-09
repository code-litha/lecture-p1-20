const express = require('express')
const app = express()
const port = 3000
const Controller = require('./controllers/controller')

app.get('/', Controller.getHome)


app.listen(port, () => {
  console.log(`listening on port `, port)
})
