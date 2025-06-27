# Cnpj Alphanumeric
Valida CNPJs tanto alfanuméricos quanto numéricos.

[![npm][npm-image]][npm-url]
![GitHub top language](https://img.shields.io/github/languages/top/stewenascari/cnpj-alphanumeric)
![GitHub last commit](https://img.shields.io/github/last-commit/stewenascari/cnpj-alphanumeric)

[travis-url]: https://travis-ci.org/stewenascari/cnpj-alphanumeric
[npm-image]: https://img.shields.io/npm/v/validator-cnpj-alphanum.svg?style=flat
[npm-url]: https://npmjs.org/package/validator-cnpj-alphanum

### Requer:
Node ``^8.0.0``

### Instalação:
```
npm i validator-cnpj-alphanum -S
```

### Joi

[joi](https://www.npmjs.com/package/joi) é uma biblioteca para Node.js que facilita a validação de dados, permitindo definir regras claras e flexíveis para formatos, tipos e estruturas de objetos. Com uma sintaxe intuitiva, ela ajuda a garantir que as entradas da aplicação estejam corretas, melhorando a segurança e a confiabilidade do código.

A biblioteca [validator-cnpj-alphanum](https://www.npmjs.com/package/validator-cnpj-alphanum) oferece um validador personalizado para Joi, permitindo verificar facilmente se uma string representa um CNPJ válido, seja no formato numérico ou alfanumérico. Essa integração simplifica a validação de CNPJs dentro de esquemas Joi, garantindo maior precisão e praticidade no tratamento de dados.

Para utilizar essa integração é necessário:

```
npm install joi
```

```js
import validator from 'validator-cnpj-alphanum';
// or
// const { validator } = require('validator-cnpj-alphanum')
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

Copyright (c) 2025
