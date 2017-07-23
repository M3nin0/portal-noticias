
//importando o express
var express = require('express');

//definindo a função 
var app = express();

//setando o view engine para ejs
app.set('view engine', 'ejs');

//Configurando para que o modulo server retorne o objeto app
module.exports = app;