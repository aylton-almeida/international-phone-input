import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import { CountryCode, CountryData } from '../constants'

import Image from 'next/image'
import styles from './styles.module.css'

type CountrySelectProps = {
  options: CountryData
  currentCountryCode: CountryCode
  onSelect: (code: CountryCode) => void
}

export const CountrySelect = ({
  options,
  currentCountryCode,
  onSelect
}: CountrySelectProps) => {

 

  const currentCountry = options[currentCountryCode]

  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger className={styles.trigger}>
        <Image
          src={currentCountry.flag.src}
          alt={`Bandeira ${currentCountry.name}`}
          height={24}
          width={24}
          className={styles.flag}
        />
        <div className={styles.arrow}>V</div>
        {/* TODO: add arrow down */}
        <span className={styles.country}>{currentCountry.prefix}</span>
      </RadixDropdownMenu.Trigger>
      <RadixDropdownMenu.Content className={styles.content}>
        {Object.entries(options).map(([code, country]) => (
          <RadixDropdownMenu.Item key={code} className={styles.option} onClick={() => onSelect(code as CountryCode)}>
            <Image
              src={country.flag.src}
              alt={`Bandeira ${country.name}`}
              width={24}
              height={24}
              className={styles.flag}
            />
            <span className={styles.country}>{country.name}</span>
          </RadixDropdownMenu.Item>
        ))}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Root>
  )
}
