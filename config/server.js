//Modulo para conexão com banco de dados MySQL
//para instalar usa-se: npm install mysql --save
//como já dito o --save adiciona os arquivos ao projeto e ao package


//importando o express
var express = require('express');

//definindo a função 
var app = express();

//setando o view engine para ejs
app.set('view engine', 'ejs');

//setando o novo caminho das views
app.set('views', './app/views');

//Configurando para que o modulo server retorne o objeto app
module.exports = app;