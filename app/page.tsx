import { PhoneForm } from '_components/PhoneForm'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <PhoneForm />
      </div>
    </main>
  )
}
