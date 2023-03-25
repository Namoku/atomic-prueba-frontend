import HeaderForm from 'src/components/HeaderForm'
import styles from 'styles/Contact.module.css'
import HEADERS_DATA from 'static/headers.json'
import { useState } from 'react'

function Contact () {
  const [step, setStep] = useState(0)
  const { title, body, src } = HEADERS_DATA[step]

  return (
    <main className={styles.main}>
      <HeaderForm step={step} title={title} src={src} />
    </main>
  )
}

export default Contact
