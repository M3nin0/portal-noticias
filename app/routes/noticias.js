var dbConnection = require('../../config/dbConnection.js');

module.exports = function(app){

	var connection = dbConnection();

	app.get('/noticias', function(req, res){

		connection.query('select * from noticias', function(erro, result){

			//Dentro da função criada como parametro há dois parametros, erro e result
			//O erro será preenchido quando algum erro ocorrer, e o result é onde
			//fica armazenado o resultado da consulta feita

			//Configurando para que o render do ejs recupera a informação da consulta do banco de dados
			// 
			res.render('noticias/noticias', {noticias: result});

		});
	});
};