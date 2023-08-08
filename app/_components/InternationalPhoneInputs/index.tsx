'use client'

import { useId, useState } from 'react'
import { CountryCode, countriesData } from './constants'
import { applyPhoneMask } from './utils'

import { CountrySelect } from './components/CountrySelect'
import styles from './styles.module.css'

type InternationalPhoneInputProps = {
  required?: boolean
}

export const InternationalPhoneInput = ({
  required
}: InternationalPhoneInputProps) => {
  const phoneId = useId()

  const [countryCode, setCountryCode] = useState<CountryCode>('BR')
  const [phone, setPhone] = useState<string>('')

  const currentCountryData = countriesData[countryCode]

  const onCountryChange = (code: CountryCode) => {
    setCountryCode(code)
  
    const newPhone = applyPhoneMask(phone, countriesData[code].mask)
    setPhone(newPhone)
  } 

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value
    const formatted = applyPhoneMask(raw, currentCountryData.mask)

    setPhone(formatted)
  }

  return (
    <>
      <label htmlFor={phoneId}>Celular</label>
      <CountrySelect currentCountryCode={countryCode} options={countriesData} onSelect={onCountryChange} />
      <input
        id={phoneId}
        type="tel"
        name="phone"
        autoComplete="tel-national"
        pattern={currentCountryData.pattern}
        placeholder={currentCountryData.placeholder}
        required={required}
        onChange={onPhoneChange}
        value={phone}
        className={styles.phone}
      />
    </>
  )
}
