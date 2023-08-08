import { CountryCode, CountryData } from '../constants'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import styles from './styles.module.css'
import Image from 'next/image'

type CountrySelectProps = {
  options: CountryData
  currentCountryCode: CountryCode
}

export const CountrySelect = ({
  options,
  currentCountryCode
}: CountrySelectProps) => {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger>
        {/* Current selected go here */}
      </RadixDropdownMenu.Trigger>
      <RadixDropdownMenu.Content>
        {Object.entries(options).map(([code, country]) => (
          <RadixDropdownMenu.Item key={code} className={styles.option}>
            <Image
              src={country.flag.src}
              alt={`Bandeira ${country.name}`}
              width={32}
              height={32}
            />
            {country.name}
          </RadixDropdownMenu.Item>
        ))}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Root>
  )
}
