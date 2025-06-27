# cnpj-alphanumeric-validator
Valida CNPJs tanto alfanuméricos quanto numéricos.

[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
![GitHub top language](https://img.shields.io/github/languages/top/stewenascari/cnpj-alphanumeric)
![GitHub last commit](https://img.shields.io/github/last-commit/stewenascari/cnpj-alphanumeric)

[travis-image]: https://travis-ci.org/stewenascari/cnpj-alphanumeric.svg?branch=main
[travis-url]: https://travis-ci.org/stewenascari/cnpj-alphanumeric
[npm-image]: https://img.shields.io/npm/v/cnpj-alphanumeric-validator.svg?style=flat
[npm-url]: https://npmjs.org/package/cnpj-alphanumeric-validator

### Requer:
Node ``^8.0.0``

### Instalação:
```
npm i cnpj-alphanumeric-validator -S
```

### Joi

[joi](https://www.npmjs.com/package/joi) é uma biblioteca para Node.js que facilita a validação de dados, permitindo definir regras claras e flexíveis para formatos, tipos e estruturas de objetos. Com uma sintaxe intuitiva, ela ajuda a garantir que as entradas da aplicação estejam corretas, melhorando a segurança e a confiabilidade do código.

A biblioteca [cnpj-alphanumeric](https://www.npmjs.com/package/cnpj-alfanumerico) oferece um validador personalizado para Joi, permitindo verificar facilmente se uma string representa um CNPJ válido, seja no formato numérico ou alfanumérico. Essa integração simplifica a validação de CNPJs dentro de esquemas Joi, garantindo maior precisão e praticidade no tratamento de dados.

Para utilizar essa integração é necessário:

```
npm install joi
```

```js
import validator from 'cnpj-alphanumeric-validator';
// or
// const { validator } = require('cnpj-alphanumeric-validator')
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
