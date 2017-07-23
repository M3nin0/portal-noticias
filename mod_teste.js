//Modulo criado para testar a criação de modulos e utilização do CommonJS

//Este comando é utilizado para informar ao node o que será exportado quando o módulo for chamado
//Neste retorno é comum serem inseridos funções
module.exports = function(){

	var msg = "Este modulo contém apenas uma string";

	return msg;
}