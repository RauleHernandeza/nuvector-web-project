const express = require('express')
const app = express()

app.get('/menu', function (req, res) {
    console.log('pasa por aqui')
    let rest = 'PASO POR AQUI'
    res.send({status:200,body:rest})   
})

module.exports=app