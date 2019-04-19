const MuambatorJS = require('./bin/muambatorjs.js');

const muambator = new MuambatorJS();

muambator.ApiToken('257270d70e9d7796196b7671ba8a639f6ef08bf0');


// Adicionar Pacotes

var pacotes = {
	"nome": nuul,
	"emails": [],
	"tags": [],
	"categoria": nuul,
	"cep_origem": nuul,
	"cep_destino": nuul,
	"data_previsao_entrega": nuul,
	"valor": 0
}
muambator.AdicionarPacotes('OG960225249BR', {pacotes})
	.then(function (response) {
    	console.log(response);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});


// Buscar Pacotes

muambator.BuscarPacotes('OG959106947BR')
	.then(function (response) {
    	console.log(response.data);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});
 
 // Deletar Pacotes

muambator.DeletarPacotes('OG960225249BR')
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
