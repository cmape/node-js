const express = require('express')
const mysql = require('mysql')
const app = express()
const connection = mysql.createConnection({
  host:'bueqkcj8syiffafs6tbl-mysql.services.clever-cloud.com',
  user:'u1hrcibqpqoroaxx',
  password:'GCkyoSOLihhpklqt7hHR',
  database:'bueqkcj8syiffafs6tbl'
})



app.use(express.json());

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.get('/', function (req, res) {
  connection.connect((err)=>{
    if(err) throw err
    console.log('Succeful')
  })
  connection.query('SELECT * FROM `Tabla_Sueldos`',(err,rows)=>{
    console.log(rows)
  })
  connection.end()
})

app.listen(3000)

