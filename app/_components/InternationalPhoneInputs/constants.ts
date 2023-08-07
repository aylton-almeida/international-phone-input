import BR from 'public/flags/BR.svg'
import AR from 'public/flags/AR.svg'
import CA from 'public/flags/CA.svg'
import US from 'public/flags/US.svg'
import UY from 'public/flags/UY.svg'
import GB from 'public/flags/GB.svg'
import ES from 'public/flags/ES.svg'
import PT from 'public/flags/PT.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type CountryCode = 'BR' | 'US'
//  | 'AR' | 'CA'  | 'UY' | 'GB' | 'ES' | 'PT'

export type CountryData = Record<
  CountryCode,
  {
    name: string
    flag: string | StaticImport
    pattern: string
    mask: string
    placeholder: string
    prefix: string
    minLength: number
    maxLength: number
    emptyErrorMessage: string
    invalidErrorMessage: string
  }
>

export const MASK_CHAR = '#'

export const countriesData: CountryData = {
  BR: {
    name: 'Brasil',
    flag: BR,
    pattern: '^(d{2}) d{5}-d{4}$',
    mask: '(##) #####-####',
    placeholder: '(11) 91234-5678',
    prefix: '+55',
    minLength: 15,
    maxLength: 15,
    emptyErrorMessage: 'Insira o DDD desejado + 9 dígitos do seu celular.',
    invalidErrorMessage:
      'Confira se você inseriu o DDD desejado + 9 dígitos do seu celular.'
  },
  US: {
    name: 'Estados Unidos',
    flag: US,
    pattern: '^(d{3}) d{3}-d{4}$',
    mask: '(###) ###-####',
    placeholder: '(123) 456-7890',
    prefix: '+1',
    minLength: 14,
    maxLength: 14,
    emptyErrorMessage: 'Insira o DDD desejado + 7 dígitos do seu celular.',
    invalidErrorMessage:
      'Confira se você inseriu o DDD desejado + 7 dígitos do seu celular.'
  }
}
