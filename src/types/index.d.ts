import cnpj from './cnpj';
export { cnpj };
export declare const validator: (joi: any) => {
    type: string;
    base: any;
    messages: {
        'document.cnpj': string;
    };
    rules: {
        cnpj: {
            validate(value: any, helpers: any, args: any, options: any): any;
        };
    };
};
export default validator;