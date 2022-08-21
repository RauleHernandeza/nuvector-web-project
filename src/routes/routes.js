const express = require('express')
const app = express.Router()
const {getusers} = require('../controllers/login.js')

app.post('/login', getusers)

module.exports = app