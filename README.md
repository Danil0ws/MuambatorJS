<h1 align="center">MuambatorJS</h1>


<p align="center">
  O MuambatorJS é projeto de um modelo que trabalha Node.js para conectar via api no site https://muambator.com.br/
</p>

## Features

 * Interface de Promise extremamente simples.


### Adicionando um Pacotes

``` js
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
  // PROMISE -> data
  // {
  //   "status":  "OK",
  //   "message":  "",
  //   "results:":  {"CODIGO-DE-RASTREIO": [object]}
  // }
```

### Instalação

#### npm [EM BREVE]

```
$ npm install --save muambatorjs
```

## Como contribuir

Leia nosso guia de contribuição [aqui](CONTRIBUTING.md)

## Autor

| [<img src="https://avatars2.githubusercontent.com/u/26333326?s=460&v=4"><br><sub>@mydanilows</sub>](https://github.com/mydanilows) |
| :---: |
