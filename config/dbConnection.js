//Importando modulo para conexão MySQL
var mysql = require('mysql');

//Configurando o module.exports para exportar a função de connection
module.exports = function(){
	//Fazendo a comunicação
	return mysql.createConnection({
		host: '127.0.0.1',
		user: 'root',
		password: '123456',
		database: 'portal_noticias'
	});

}