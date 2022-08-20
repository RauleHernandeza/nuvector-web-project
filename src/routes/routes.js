const express = require('express')
const app = express.Router()

app.use('/menu',require('../hello/hello'))


module.exports = app