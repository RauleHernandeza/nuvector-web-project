const express = require('express')
const app = express()

if (process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(require('./routes/routes'))

const PORT = process.env.PORT || 3000

app.get('/',function(req,res){
    console.log("hola")
    res.sendStatus(200);
})

app.listen(PORT, ()=> {
    console.log("Escuchando en puerto")
    console.log(PORT)
})

