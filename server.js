const MuambatorJS = require('./bin/muambatorjs.js');

const muambator = new MuambatorJS();

muambator.ApiToken('API-TOKEN');

// Adicionar Pacotes
let pacotes = {
	"nome": nuul, // string
	"emails": [], // list
	"tags": [], // list
	"categoria": nuul, // string (id válido de categoria)
	"cep_origem": nuul, // string (99.999-999)
	"cep_destino": nuul, // string (99.999-999)
	"data_previsao_entrega": nuul, // date (yyyy-mm-dd)
	"valor": 0 // float
}
muambator.AdicionarPacotes('CODIGO-DE-RASTREIO', {pacotes})
	.then(function (response) {
    	console.log(response);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});

// Buscar Pacotes
muambator.BuscarPacotes('CODIGO-DE-RASTREIO')
	.then(function (response) {
    	console.log(response.data);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});
 
 // Deletar Pacotes
muambator.DeletarPacotes('CODIGO-DE-RASTREIO')
	.then(function (response) {
    	console.log(response);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});
 

// Buscar Categorias
muambator.BuscarCategorias()
	.then(function (response) {
    	console.log(response.data);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});

// Listagem De Pacotes Atrasados
muambator.ListagemDePacotesAtrasados()
	.then(function (response) {
    	console.log(response.data);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});

// Listagem De Pacotes Entregue
muambator.ListagemDePacotesEntregue()
	.then(function (response) {
    	console.log(response.data);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});

// Listagem De Pacotes Pentendes
muambator.ListagemDePacotesPentendes()
	.then(function (response) {
    	console.log(response.data);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});

// Listagem De Pacotes Tributados
muambator.ListagemDePacotesTributados()
	.then(function (response) {
    	console.log(response.data);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});

// Listagem De Pacotes
muambator.ListagemDePacotes()
	.then(function (response) {
    	console.log(response.data);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});