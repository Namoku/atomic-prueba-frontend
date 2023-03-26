import { useState } from 'react'
import HeaderForm from 'src/components/HeaderForm'
import styles from 'styles/Contact.module.css'
import HEADERS_DATA from 'static/headers.json'
import Button from 'src/components/Button'
import InputField from 'src/components/InputField'

function getBody (body, data, setData, step) {
  const { main } = body
  const { name, lastName, phone, code } = data
  const alt = body?.alt
  const handleChange = (field, maxLength) => (value) => {
    if (value.length <= maxLength || !maxLength) {
      setData({ ...data, [field]: value })
    }
  }

  const stepBody = {
    0: (
      <>
        <p>{main}</p>
        <InputField
          label='Nombre (s)'
          value={name}
          onChange={handleChange('name')}
          minLength={5}
          errorLabel='El nombre deberá tener mínimo 5 caracteres'
        />
        <InputField
          label='Apellidos'
          value={lastName}
          onChange={handleChange('lastName')}
        />
      </>
    ),
    1: (
      <>
        <p>{main}</p>
        <span>{alt}</span>
        <InputField
          label='Número de Celular'
          value={phone}
          onChange={handleChange('phone', 10)}
          type='number'
        />
      </>
    ),
    2: (
      <>
        <p>{main}</p>
        <p>{phone}</p>
        <span>{alt}</span>
        <InputField
          label='Código de verificación'
          value={code}
          onChange={handleChange('code', 6)}
          type='number'
        />
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

function getDisabled (step, data) {
  const { name, lastName, phone, code, terms } = data
  const disabled = {
    0: name.length >= 5 && lastName.length,
    1: phone.length === 10,
    2: code.length === 6,
    3: terms
  }
  return !disabled[step]
}

function Contact () {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({
    name: '',
    lastName: '',
    phone: '',
    code: '',
    terms: false
  })
  const { title, body, src, button } = HEADERS_DATA[step]
  const handleClick = () => setStep(step + 1)
  const handleStepDown = () => setStep(step - 1)

  return (
    <main className={styles.main}>
      <section>
        {step ? <a onClick={handleStepDown}>{'< Regresar'}</a> : null}
        <HeaderForm step={step} title={title} src={src} />
        <article>{getBody(body, data, setData, step)}</article>
        {button
          ? (
            <Button
              title={button}
              onClick={handleClick}
              type='secondary'
              className={styles.button}
              disabled={getDisabled(step, data)}
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
