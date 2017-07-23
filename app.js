//Código reescrito do noticias.js para adequação ao framework express
// Para instalar o express utilizei o npm: npm install express -save
//-save é a opção para os pacotes ficarem junto ao projeto

//Para configurar o pacote npm utilize: npm-init

//ejs -> é um modolo que permite escrever paginas html com instruções js
//ou seja é uma engine de views de paginas html dinâmicas
//para instalar usa-se: npm ejs --save

//nodemon -> recurso do ambiente de desenvolvimento
//permite que as alterações sejam processadas sem a necessidade de fechar abrir o servidor
//para instalar usa-se: npm install -g nodemon

var express = require('express'); //Ao invês de importar o http, importei o express 
var app = express(); //Como o express retorna uma função, criei uma outra variavel que carrega a função do express

var msg = require("./mod_teste");

//Depois de instalar o ejs, é necessário dizer ao express que outro modulo de views será utilizado, para fazer isso usa-se:
app.set('view engine', 'ejs');
//Veja que fiz o set do view engine para ejs


/*
app.get('/tecnologia', function(req, res){

	//No lugar do send, utilizo o render
	res.render("secao/tecnologia");

});
*/

//a função get é utilizada para definir os caminhos das paginas do site
//os parametros dela são, get('endereco', )
app.get('/', function(req, res){

	//perceba que com o express não é necessário utilizar o req.url, ele já entende

	//Utilizado para responder as requisições
	//res.send("<html><body>Home</body></html>");
	//Remodelado para ejs
	res.render("home/index");

});

app.get("/formulario_inclusao_noticia", function(req, res){
	res.render("admin/form_add_noticia");
});


app.get("/noticias", function(req, res){
	res.render("noticias/noticias");
});


/*
Com a utilização do ejs, essa tratativa das urls é feita de forma um pouco diferente (Mostrada acima)
app.get("/tecnologia", function(req, res){

	res.send("<html><body>noticias de tecnologia</body></html>");

}); 
*/

//Com o express é necessário apenas iniciar o listen
//Neste caso utilizo o app, pois a função do express está nele.
//Neste listen além da porta, há também a função de callback (função que será executado na subida do servidor)
app.listen(3000, function(){

	console.log('Servidor rodando com express');
	console.log(msg());

});