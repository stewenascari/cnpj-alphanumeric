import 'jest'

import { cnpj } from '../src'

describe('CNPJ', () => {
  test ('números de listas de cnpjs invalidos', () => {
    expect(cnpj.isValid('00000000000000')).toBeFalsy()
    expect(cnpj.isValid('11111111111111')).toBeFalsy()
    expect(cnpj.isValid('22222222222222')).toBeFalsy()
    expect(cnpj.isValid('33333333333333')).toBeFalsy()
    expect(cnpj.isValid('44444444444444')).toBeFalsy()
    expect(cnpj.isValid('55555555555555')).toBeFalsy()
    expect(cnpj.isValid('66666666666666')).toBeFalsy()
    expect(cnpj.isValid('77777777777777')).toBeFalsy()
    expect(cnpj.isValid('88888888888888')).toBeFalsy()
    expect(cnpj.isValid('99999999999999')).toBeFalsy()
  })

  test ('rejeita valores falsos', () => {
    expect(cnpj.isValid('')).toBeFalsy()
    expect(cnpj.isValid(null)).toBeFalsy()
    expect(cnpj.isValid(undefined)).toBeFalsy()
  })

  test ('valida strings formatadas', () => {
    expect(cnpj.isValid('54.550.752/0001-55')).toBeTruthy()
  })

  test ('valida strings não formatadas', () => {
    expect(cnpj.isValid('54550752000155')).toBeTruthy()
  })

  test ('valida strings confusas', () => {
    expect(cnpj.isValid('54550[752#0001..$55')).toBeTruthy()
  })
})