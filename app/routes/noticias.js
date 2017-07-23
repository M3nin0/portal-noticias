module.exports = function(app){

	app.get('/noticias', function(req, res){

		//Importando modulo para conexão MySQL
		var mysql = require('mysql');

		//Fazendo a comunicação
		var connection = mysql.createConnection({
			host: '127.0.0.1',
			user: 'root',
			password: '123456',
			database: 'portal_noticias'
		});

		connection.query('select * from noticias', function(erro, result){

			//Dentro da função criada como parametro há dois parametros, erro e result
			//O erro será preenchido quando algum erro ocorrer, e o result é onde
			//fica armazenado o resultado da consulta feita

			res.send(result);

		});
	
		//res.render('noticias/noticias');

	});
};