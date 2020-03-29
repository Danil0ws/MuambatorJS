const MuambatorJS = require('muambatorjs');

const muambator = new MuambatorJS('API-TOKEN');

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
	.then(response => {
		console.info(response);
	})
	.catch(error => {
		console.error(error);
	});

//Buscar Pacote
muambator.BuscarPacote('CODIGO-DE-RASTREIO')
	.then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});

 // Deletar Pacote
muambator.DeletarPacote('CODIGO-DE-RASTREIO')
	.then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});

// Buscar Categorias
muambator.BuscarCategorias()
	.then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});

// Listagem De Pacotes Atrasados
muambator.ListagemDePacotesAtrasados()
	.then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});

// Listagem De Pacotes Entregue
muambator.ListagemDePacotesEntregue()
	.then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});

// Listagem De Pacotes Pentendes
muambator.ListagemDePacotesPentendes()
	.then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});

// Listagem De Pacotes Tributados
muambator.ListagemDePacotesTributados()
	.then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});

// Listagem De Pacotes
muambator.ListagemDePacotes()
	.then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});