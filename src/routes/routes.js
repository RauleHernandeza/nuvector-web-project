const express = require('express')
const app = express.Router()
//app.use('/login',require('./login'))
//app.use('/registro',require('./registro'))
app.use('/menu',require('../hello/hello'))
//app.use('/form',require('./form'))

module.exports = app