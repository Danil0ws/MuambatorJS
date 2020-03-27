<h1 align="center">MuambatorJS v1.2.1</h1>

<p align="center">
  <a href="https://npm-stat.com/charts.html?package=muambatorjs">
    <img src="https://img.shields.io/npm/dm/muambatorjs.svg">
  </a>
  <a href="https://coveralls.io/github/mydanilows/MuambatorJS?branch=master">
    <img src="https://coveralls.io/repos/github/mydanilows/MuambatorJS/badge.svg?branch=master">
  </a>
  <a href="https://www.npmjs.com/package/muambatorjs">
    <img src="https://badge.fury.io/js/muambatorjs.svg">
  </a>
</p>

<p align="center">
  O MuambatorJS é projeto de um modelo que trabalha Node.js para conectar via api no site (Node.js e Browser) https://muambator.com.br/
</p>

## Recursos

 * Interface de Promise extremamente simples.

### Gerar Token muambator
*Você vai precisa de um token api para funcionar*

Integração de cadastro, busca, listagem e gerenciamento diretamente do seu site com o Muambator. Possui um time de desenvolvimento e quer controlar como se conectar ao sistema.
[Gerar Token](https://www.muambator.com.br/contato/)

### Adicionando um Pacotes

``` js

const MuambatorJS = require('muambatorjs');

const muambator = new MuambatorJS('API-TOKEN');

// Adicionar Pacotes
let pacotes = {
  "nome": nuul, // string
  "emails": [], // object
  "tags": [], // object
  "categoria": nuul, // string (id válido de categoria)
  "cep_origem": nuul, // string (99.999-999)
  "cep_destino": nuul, // string (99.999-999)
  "data_previsao_entrega": nuul, // date (yyyy-mm-dd)
  "valor": 0 // float
}
muambator.AdicionarPacotes('CODIGO-DE-RASTREIO', {pacotes})
  .then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});
  // PROMISE -> data
  // 201
  // {
  //   "status":  "OK",
  //   "message":  "",
  //   "results:":  {"CODIGO-DE-RASTREIO": [object]}
  // }
```

### Buscar um Pacote

``` js
// Buscar Pacote
muambator.BuscarPacote('CODIGO-DE-RASTREIO')
  .then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});
  // PROMISE -> data
  // 201
  // {
  //   "status":  "OK",
  //   "message":  "",
  //   "results:":  {"CODIGO-DE-RASTREIO": [object]}
  // }
```

### Listagem De Pacotes

``` js
// Listagem De Pacotes
muambator.ListagemDePacotes()
  .then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});
  // PROMISE -> data
  // 201
  // {
  //   "status":  "OK",
  //   "message":  "",
  //   "results:":  {"CODIGO-DE-RASTREIO": [object]}
  // }
```

### Deletar Pacote

``` js
// Deletar Pacote
muambator.DeletarPacote('CODIGO-DE-RASTREIO')
  .then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});
  // PROMISE -> data
  // 201
  // {
  //   "status":  "OK",
  //   "message":  "",
  //   "results:":  {"CODIGO-DE-RASTREIO": [object]}
  // }
```

### Buscar Categorias

``` js
// Buscar Categorias
muambator.BuscarCategorias('CODIGO-DE-RASTREIO')
  .then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});
  // PROMISE -> data
  // 201
  // {
  //   "status":  "OK",
  //   "message":  "",
  //   "results:":  {"CODIGO-DE-RASTREIO": [object]}
  // }
```

### Listagem De Pacotes Atrasados

``` js
// Listagem De Pacotes Atrasados
muambator.ListagemDePacotesAtrasados('CODIGO-DE-RASTREIO')
  .then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});
  // PROMISE -> data
  // 201
  // {
  //   "status":  "OK",
  //   "message":  "",
  //   "results:":  {"CODIGO-DE-RASTREIO": [object]}
  // }
```

### Listagem De Pacotes Entregue

``` js
// Listagem De Pacotes Entregue
muambator.ListagemDePacotesEntregue()
	.then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});
```

### Listagem De Pacotes Pentendes

``` js
// Listagem De Pacotes Pentendes
muambator.ListagemDePacotesPentendes()
  .then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});
  // PROMISE -> data
  // 201
  // {
  //   "status":  "OK",
  //   "message":  "",
  //   "results:":  {"CODIGO-DE-RASTREIO": [object]}
  // }
```

### Listagem De Pacotes Tributados

``` js
// Listagem De Pacotes Tributados
muambator.ListagemDePacotesTributados()
  .then(response => {
		console.info(response.data);
	})
	.catch(error => {
		console.error(error);
	});
  // PROMISE -> data
  // 201
  // {
  //   "status":  "OK",
  //   "message":  "",
  //   "results:":  {"CODIGO-DE-RASTREIO": [object]}
  // }
```


### Instalação

#### npm
```
$ npm install --save muambatorjs
```

## Relacionado

- [`muambator-api`](https://github.com/bodedev/muambator-api) – Api Python

## Autor

| [<img src="https://avatars2.githubusercontent.com/u/26333326?s=460&v=4"><br><sub>@mydanilows</sub>](https://github.com/mydanilows) |
| :---: |

## License

MIT © [Danilo Rodrigues](https://mydanilows.ga/)
