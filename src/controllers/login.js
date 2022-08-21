const { Client } = require('pg');

const getusers = async (req, res) => {

    const info = req.body
    login(info).then(resp=>{
        console.log(resp)
        res.redirect('https://nuvector-web-project-front.herokuapp.com/board.html')
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