const { Client } = require('pg');

const getusers = async (req, res) => {

    const info = req.body
    login(info).then(resp=>{
        console.log(resp)
        res.sendFile('/home/raul/Escritorio/Node/nuvector_web_project/src/views/board.html')

        //res.redirect('https://www.youtube.com/')
        
    }).catch(err=>{
      console.log("error "+err)
      res.send({status:408,body:err});
    })


}

const login= async (info)=>{
    const client = new Client({connectionString:process.env.URL_DB})
    client.connect()
    let h = await client.query('SELECT * FROM users where email = $1 AND password =$2' ,[info.email , info.password])
    client.end()
    console.log(h)
    return h
}

module.exports = {
    getusers
}