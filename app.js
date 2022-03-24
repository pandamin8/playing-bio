require('dotenv').config();

const express = require('express')
const authentication = require('./utils/authentication')
const currently_playing = require('./utils/currentlyplaying')

const app = express()
app.use(authentication.router)
app.use(currently_playing)

app.listen(process.env.PORT, () =>
  console.log(
    'HTTP Server up. Now go to http://localhost:' + process.env.PORT + '/login in your browser.'
  ))