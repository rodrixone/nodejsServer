const express = require('express');
const fs = require('fs');
const https = require('https')
var app = express();
app.use(express.static('images'));


const certs ={
	key : fs.readFileSync('Cert/servidor.key'),
	cert: fs.readFileSync('Cert/servidor.crt')
};

var httpsServer = https.createServer(certs,app);

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

httpsServer.listen(3000, function () {
  console.log('Server en el puerto 3000');
});