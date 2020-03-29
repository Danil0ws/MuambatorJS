const axios = require('axios');

module.exports = class MuambatorJS {
	constructor(token) {
		this.hostApp = 'www.muambator.com.br';
		this.apiToken = token;
	}
	async BuscarPacote (codigoDeRastreio) {
		try {
			return await axios.get(`https://${this.hostApp}/api/clientes/v1/pacotes/${codigoDeRastreio}/`, {headers: {'Api-token': this.apiToken, 'Content-Type': 'application/json'}});
		} catch (error) {
			console.error(error);
		}
	}
	async AdicionarPacotes(codigoDeRastreio, parametros) {
		try {
			return await axios.post(`https://${this.hostApp}/api/clientes/v1/pacotes/${codigoDeRastreio}/`,  {body: parametros}, {headers: {'Api-token': this.apiToken, 'Content-Type': 'application/json'}});
		} catch (error) {
			console.error(error);
		}
	}
	async DeletarPacote(codigoDeRastreio) {
		try {
			return await axios.delete(`https://${this.hostApp}/api/clientes/v1/pacotes/${codigoDeRastreio}/`, {headers: {'Api-token': this.apiToken, 'Content-Type': 'application/json'}});
		} catch (error) {
			console.error(error);
		}
	}
	async BuscarCategorias(codigoDeRastreio) {
		try {
			return await axios.get(`https://${this.hostApp}/api/clientes/v1/pacotes/categorias/`, {headers: {'Api-token': this.apiToken, 'Content-Type': 'application/json'}});
		} catch (error) {
			console.error(error);
		}
	}
	async ListagemDePacotes() {
		try {
			return await axios.get(`https://${this.hostApp}/api/clientes/v1/pacotes/categorias/`, {headers: {'Api-token': this.apiToken, 'Content-Type': 'application/json'}});
		} catch (error) {
			console.error(error);
		}
	}
	async ListagemDePacotesPentendes(codigoDeRastreio) {
		try {
			return await axios.get(`https://${this.hostApp}/api/clientes/v1/pacotes/pentendes/`, {headers: {'Api-token': this.apiToken, 'Content-Type': 'application/json'}});
		} catch (error) {
			console.error(error);
		}
	}
	async ListagemDePacotesEntregues(codigoDeRastreio) {
		try {
			return await axios.get(`https://${this.hostApp}/api/clientes/v1/pacotes/entregues/`, {headers: {'Api-token': this.apiToken, 'Content-Type': 'application/json'}});
		} catch (error) {
			console.error(error);
		}
	}
	async ListagemDePacotesArquivados(codigoDeRastreio) {
		try {
			return await axios.get(`https://${this.hostApp}/api/clientes/v1/pacotes/arquivados/`, {headers: {'Api-token': this.apiToken, 'Content-Type': 'application/json'}});
		} catch (error) {
			console.error(error);
		}
	}
	async ListagemDePacotesTributados(codigoDeRastreio) {
		try {
			return await axios.get(`https://${this.hostApp}/api/clientes/v1/pacotes/tributados/`, {headers: {'Api-token': this.apiToken, 'Content-Type': 'application/json'}});
		} catch (error) {
			console.error(error);
		}
	}
	async ListagemDePacotesAtrasados(codigoDeRastreio) {
		try {
			return await axios.get(`https://${this.hostApp}/api/clientes/v1/pacotes/atrasados/`, {headers: {'Api-token': this.apiToken, 'Content-Type': 'application/json'}});
		} catch (error) {
			console.error(error);
		}
	}
}