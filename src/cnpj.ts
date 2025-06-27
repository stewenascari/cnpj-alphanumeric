
const BLACKLIST: Array<string> = [
  '00000000000000',
  '11111111111111',
  '22222222222222',
  '33333333333333',
  '44444444444444',
  '55555555555555',
  '66666666666666',
  '77777777777777',
  '88888888888888',
  '99999999999999',
  '12AB56780001CD',
  'A23456780001B1',
  '11111111111XYZ',
  'CNPJ00000000BR',
  'XYZ12345678901',
  '12345678000XYZ',
  'XX3456780001YY',
  'ABCD56780001ZZ',
  '0000A0000000B0',
  'BR1234567890CD'
]

// Pesos para o primeiro dígito verificador
const WEIGHTS1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
// Pesos para o segundo digito verificador
const WEIGHTS2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const NON_ALPHANUMERICS_STRIP_REGEX: RegExp = /[^a-zA-Z0-9]/g;

const removeNonAlphanumerics = (cnpj: string): string => {
  return (cnpj || '').replace(NON_ALPHANUMERICS_STRIP_REGEX, '')
}

// Função para converter caracteres alfanuméricos em valores numéricos
const convertoNumeric = (char: string): number => {
  const asciiValue = char.charCodeAt(0);
  return asciiValue >= 48 && asciiValue <= 57 // Números
    ? asciiValue - 48
    : asciiValue >= 65 && asciiValue <= 90 // Letras maiúsculas
      ? asciiValue - 48
      : 0; // Caso não seja válido
};
// Função para calcular o dígito verificador
const calculateDigit = (values: number[], weights: number[]): number => {
  const sum = values.reduce((acc, value, index) => acc + value * weights[index], 0);
  const mod = sum % 11;
  return mod < 2 ? 0 : 11 - mod;
};

const isValid = (cnpj:string): boolean => {
  const cleanedCNP = removeNonAlphanumerics(cnpj)
  
  // Verifica se o CNPJ não esta vazio
  if (!cleanedCNP) return false
  // Verifica se o CNPJ tem o tamanho correto
  if (cleanedCNP.length != 14) return false;
  // Verifica se o CNPJ não esta na lista dos cnpjs falsos
  if (BLACKLIST.includes(cleanedCNP)) return false

  // Extrai os dígitos verificadores fornecidos
  const providedCheckDigits = cleanedCNP.slice(-2);
  // Converter CNPJ para valores numéricos
  const numericValues = cleanedCNP.slice(0, -2).split('').map(convertoNumeric);
  const firstDigit = calculateDigit(numericValues, WEIGHTS1);

  // Adicionar o primeiro dígito ao CNPJ
  numericValues.push(firstDigit);

  const secondDigit = calculateDigit(numericValues, WEIGHTS2)
  // Verifica se os dígitos calculados correspondem aos fornecidos
  const calculatedCheckDigits = `${firstDigit}${secondDigit}`;

  return providedCheckDigits === calculatedCheckDigits

}

export default {
  calculateDigit,
  isValid
}