'use client'

import { InternationalPhoneInput } from '_components/InternationalPhoneInputs'

import styles from './styles.module.css'

export const PhoneForm = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValid = event.currentTarget.checkValidity()

    for (const input of event.currentTarget.elements) {
      if (input instanceof HTMLInputElement) {
        console.log(input)
        if (input instanceof HTMLInputElement && !input.validity.valid) {
          console.log(`Input ${input.name} is invalid: ${input.validity}`)
          console.log({ validity: input.validity })
        }
      }
    }

    console.log(isValid)
  }

  return (
    <form className={styles.form} noValidate onSubmit={onSubmit}>
      <InternationalPhoneInput required />
      <button type="submit">Enviar</button>
    </form>
  )
}
