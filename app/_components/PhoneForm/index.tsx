import { InternationalPhoneInput } from '_components/InternationalPhoneInputs'

import styles from './styles.module.css'

export const PhoneForm = () => {
  return (
    <form className={styles.form}>
      <InternationalPhoneInput required />
      <button type="submit">Enviar</button>
    </form>
  )
}
