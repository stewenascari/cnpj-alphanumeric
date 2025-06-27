# cnpj-alphanumeric
Valida CNPJs tanto alfanuméricos quanto numéricos.

# Projeto base - [CPF-CNPJ-VALIDATOR](https://github.com/carvalhoviniciusluiz/cpf-cnpj-validator/tree/master)
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
![GitHub top language](https://img.shields.io/github/languages/top/carvalhoviniciusluiz/cpf-cnpj-validator)
![GitHub last commit](https://img.shields.io/github/last-commit/carvalhoviniciusluiz/cpf-cnpj-validator)

[travis-image]: https://travis-ci.org/carvalhoviniciusluiz/cpf-cnpj-validator.svg?branch=master
[travis-url]: https://travis-ci.org/carvalhoviniciusluiz/cpf-cnpj-validator
[npm-image]: https://img.shields.io/npm/v/cpf-cnpj-validator.svg?style=flat
[npm-url]: https://npmjs.org/package/cpf-cnpj-validator

### Requer:
Node ``^8.0.0``.

### Instalação:
```
npm i cnpj-alphanumeric -S
```

### Joi

[joi](https://www.npmjs.com/package/joi) é uma excelente biblioteca para validação de objetos javascript que permite a construção de mecanismos personalizados.
A biblioteca [cnpj-alphanumeric](https://www.npmjs.com/package/cnpj-alphanumeric) disponibiliza um mecanismo personalizado para Joi capaz de validar se uma string pode ser, ou não, um CNPJ válido:

Para utilizar essa integração é necessário:

```
npm install joi
```

```js
import validator from 'cnpj-alphanumeric';
// or
// const { validator } = require('cnpj-alphanumeric')
//
const Joi = require('joi').extend(validator)

const cnpjSchema = Joi.document().cnpj();

// valida o CNPJ
cnpjSchema.validate('38313108000107');
// #=> true
```

### Tests
```shell
npm test
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present