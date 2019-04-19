const axios = require('axios');

class MuambatorJS {
	constructor() {
		this.hostApp = 'www.muambator.com.br';
	}
	ApiToken(token) {
		this.apiToken = token;
	}
	BuscarPacotes(codigo) {
		try {
			return axios.get('https://'+this.hostApp+'/api/clientes/v1/pacotes/', {headers: {'api-token': this.apiToken}});
		} catch (error) {
			console.error(error);
		}
	}
	AdicionarPacotes(codigo, parametros) {
		try {
			return axios.post('https://'+this.hostApp+'/api/clientes/v1/pacotes/'+codigo+'/',  {body: parametros}, {headers: {'api-token': this.apiToken}});
		} catch (error) {
			console.error(error);
		}
	}
	DeletarPacotes(codigo) {
		try {
			return axios.delete('https://'+this.hostApp+'/api/clientes/v1/pacotes/'+codigo+'/', {headers: {'api-token': this.apiToken}});
		} catch (error) {
			console.error(error);
		}
	}
	BuscarCategorias(codigo) {
		try {
			return axios.get('https://'+this.hostApp+'/api/clientes/v1/pacotes/categorias/', {headers: {'api-token': this.apiToken}});
		} catch (error) {
			console.error(error);
		}
	}
	ListagemDePacotes() {
		try {
			return axios.get('https://'+this.hostApp+'/api/clientes/v1/pacotes/categorias/', {headers: {'api-token': this.apiToken}});
		} catch (error) {
			console.error(error);
		}
	}
	ListagemDePacotesPentendes(codigo) {
		try {
			return axios.get('https://'+this.hostApp+'/api/clientes/v1/pacotes/pentendes/', {headers: {'api-token': this.apiToken}});
		} catch (error) {
			console.error(error);
		}
	}
	ListagemDePacotesEntregues(codigo) {
		try {
			return axios.get('https://'+this.hostApp+'/api/clientes/v1/pacotes/entregues/', {headers: {'api-token': this.apiToken}});
		} catch (error) {
			console.error(error);
		}
	}
	ListagemDePacotesArquivados(codigo) {
		try {
			return axios.get('https://'+this.hostApp+'/api/clientes/v1/pacotes/arquivados/', {headers: {'api-token': this.apiToken}});
		} catch (error) {
			console.error(error);
		}
	}
	ListagemDePacotesTributados(codigo) {
		try {
			return axios.get('https://'+this.hostApp+'/api/clientes/v1/pacotes/tributados/', {headers: {'api-token': this.apiToken}});
		} catch (error) {
			console.error(error);
		}
	}
	ListagemDePacotesAtrasados(codigo) {
		try {
			return axios.get('https://'+this.hostApp+'/api/clientes/v1/pacotes/atrasados/', {headers: {'api-token': this.apiToken}});
		} catch (error) {
			console.error(error);
		}
	}
}

module.exports = MuambatorJS;