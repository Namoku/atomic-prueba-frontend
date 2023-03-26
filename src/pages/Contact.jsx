import { useState } from 'react'
import HeaderForm from 'src/components/HeaderForm'
import styles from 'styles/Contact.module.css'
import HEADERS_DATA from 'static/headers.json'
import Button from 'src/components/Button'

function getBody (body, data, step) {
  const { main } = body
  const alt = body?.alt
  const phone = data?.phone

  const stepBody = {
    0: (
      <>
        <p>{main}</p>
      </>
    ),
    1: (
      <>
        <p>{main}</p>
        <span>{alt}</span>
      </>
    ),
    2: (
      <>
        <p>{main}</p>
        <p>{phone}</p>
        <span>{alt}</span>
      </>
    ),
    3: (
      <>
        <p>{main}</p>
        <span>{alt}</span>
      </>
    )
  }
  return stepBody[step]
}

function Contact () {
  const [step, setStep] = useState(0)
  const { title, body, src, button } = HEADERS_DATA[step]
  const handleClick = () => {
    setStep(step + 1)
  }
  const handleStepDown = () => setStep(step - 1)

  return (
    <main className={styles.main}>
      <section>
        {step ? <a onClick={handleStepDown}>{'< Regresar'}</a> : null}
        <HeaderForm step={step} title={title} src={src} />
        <article>{getBody(body, null, step)}</article>
        {button
          ? (
            <Button
              title={button}
              onClick={handleClick}
              type='secondary'
              className={styles.button}
            />
            )
          : null}
      </section>
      <section>
        <img src='a' alt='a' />
      </section>
    </main>
  )
}

export default Contact
