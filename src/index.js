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
    let info=req.body;
    console.log(info)
    res.sendStatus({status:200, body:info});
})

app.post('/',function(req,res){
    console.log("hola")
    let info=req.body;
    console.log(info)
    res.sendStatus({status:200, body:info});
})

app.listen(PORT, ()=> {
    console.log("Escuchando en puerto")
    console.log(PORT)
})

