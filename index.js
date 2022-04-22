const express = require('express')
const app = express()

let nombre

app.use(express.json());

app.post('/', function(request, response){
    nombre= request.body.name
  console.log(request.body);      // your JSON
   response.send(nombre);    // echo the result back
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
