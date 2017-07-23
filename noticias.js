//Arquivo alterado para o app.js (Reescrito para o framework express)

var http = require('http'); //require -:> função do js que permite importar arquivos, bibliotecas ao script
							//neste caso estou incorporando a biblioteca http

//Criando um servidor
//O servidor tem como argumento uma função, que tem como parametro, request e response
//Em node é normal funções no argumento 
var server = http.createServer(function(req, res){

	//Para definir as urls requisitadas, iremos interpretar o argumetno req, veja abaixo:
	var categoria = req.url;

	if(categoria == "/tecnologia"){
		res.end("<html><body>Portal de Tecnologia</body></html>");

	} else if(categoria == "/moda"){
		res.end("<html><body>Porta de Moda</body></html>");
	
	} else if(categoria == "/beleza"){
		res.end("<html><body>Porta de beleza</body></html>");

	}else{
		res.end("<html><body>Porta de noticias</body></html>");

	}

	//Criando resposta
	//res.end("<html><body>Portal de noticias</body></html>");

});//.listen(3000) //Definindo a porta do servidor

server.listen(3000) //Essa é uma definção que também server