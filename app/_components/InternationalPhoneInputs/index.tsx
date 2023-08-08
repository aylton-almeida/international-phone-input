'use client'

import { useId, useState } from 'react'
import { CountryCode, countriesData } from './constants'
import { applyPhoneMask } from './utils'
import Image from 'next/image'

import styles from './styles.module.css'
import { CountrySelect } from './components/CountrySelect'

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

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value
    const formatted = applyPhoneMask(raw, currentCountryData.mask)

    setPhone(formatted)
  }

  return (
    <>
      <CountrySelect currentCountryCode={countryCode} options={countriesData} />
      <label htmlFor={phoneId}>Celular</label>
      <p>{currentCountryData.prefix}</p>
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
