import cnpj from './cnpj';

export { cnpj };

export const validator = joi => ({
  type: 'document',
  base: joi.string(),
  messages: {
    'document.cnpj': 'CNPJ inválido'
  },
  rules: {
    cnpj: {
      validate(value: any, helpers: any, args: any, options: any) {
        if (!cnpj.isValid(value)) {
          return helpers.error('document.cnpj');
        }

        return value
      }
    }
  }
});

export default validator;