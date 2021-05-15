const express = require('express');
const mysql = require('mysql')
const cors = require('cors');

const app = express()
const port = process.env.PORT || 4000;

app.use(cors())

app.use(express.json())

app.use(express.static('public'))

const db = mysql.createConnection ({
    host:"localhost",
    user:"root",
    port:3301,
    password:"doggo",
    database:"sys"
})

db.connect((err, res) => {
    if(err){
         console.log(err)
     }else{
         console.log('success')
     }
})

let data 

app.get('/',(req, res) => {
    db.query('select * from football_clubs', (err, result) => {
        if(!err){
            data = result
            console.log(result)
        }else{
            console.log(err)
        }
    })

    res.send(JSON.stringify(data))
})

console.log(new Date().toLocaleTimeString())

// const myTimer = () => {
//   const d = new Date();
//   const t = d.toLocaleTimeString();
//   console.log(t)
// }
// const myDate = setInterval(myTimer, 1000);

// setTimeout(()=>{
//     clearInterval(myDate)
// },5000)

app.listen(port, () => console.log(`Server is running at port ${port}`))