const express = require('express')
const app = express()

let Id, Firstname, Lastname, Old;

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World')
})
  
app.get('/Id', function (req, res) {
    res.send(Id)
    console.log(Id);
})

app.get('/Firstname', function (req, res) {
    res.send(Firstname)
    console.log(Firstname);
})
app.get('/Lastname', function (req, res) {
    res.send(Lastname)
    console.log(Lastname);
})

app.get('/Old', function (req, res) {
    res.send(Old)
    console.log(Old);
})

app.post('/', function(request, response){
  Id = request.body.Id
  Firstname = request.body.Firstname
  Lastname = request.body.Lastname
  Old = request.body.Old
  console.log(request.body);      // your JSON
  response.send('Exitoso');    // echo the result back
});

app.listen(3000)
