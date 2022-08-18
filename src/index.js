const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(require('./routes/routes'))

process.env.PORT = process.env.PORT || 3000

app.get('/',function(req,res){
    console.log("hola")
    res.sendStatus(200);
})

process.env.NODE_ENV = process.env.NODE_ENV || 3000;
app.listen(process.env.PORT, ()=> {
    console.log("Escuchando en puerto 3000");
})

