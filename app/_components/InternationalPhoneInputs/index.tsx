'use client'

import { useState } from 'react'
import { CountryCode, MASK_CHAR, countriesData } from './constants'
import { applyPhoneMask } from './utils'

type InternationalPhoneInputProps = {
  required?: boolean
}

export const InternationalPhoneInput = ({
  required
}: InternationalPhoneInputProps) => {
  const [countryCode, setCountryCode] = useState<CountryCode>('BR')
  const [phone, setPhone] = useState<string>('')

  const countryData = countriesData[countryCode]

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value
    const formatted = applyPhoneMask(raw, countryData.mask)

    setPhone(formatted)
  }

  return (
    <>
      {/* <Image src={countryData.flag} alt={`Bandeira ${countryData.name}`} /> */}
      <p>{countryData.prefix}</p>
      <input
        type="tel"
        autoComplete="tel-national"
        minLength={countryData.minLength}
        maxLength={countryData.maxLength}
        pattern={countryData.pattern}
        placeholder={countryData.placeholder}
        required={required}
        onChange={onPhoneChange}
        value={phone}
      />
    </>
  )
}
