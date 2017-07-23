//a função get é utilizada para definir os caminhos das paginas do site
//os parametros dela são, get('endereco', )
//Colocando o exports
module.exports = function(app){
	app.get('/', function(req, res){

		//perceba que com o express não é necessário utilizar o req.url, ele já entende

		//Utilizado para responder as requisições
		//res.send("<html><body>Home</body></html>");
		//Remodelado para ejs
		res.render("home/index");

	});
};