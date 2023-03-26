import { useState } from 'react'
import styles from 'styles/InputField.module.css'

function InputField ({ label, type, value, onChange, errorLabel, minLength }) {
  const [error, setError] = useState(false)
  const handleChange = ({ target }) => {
    if (target.value.length >= minLength) setError(false)
    onChange(target.value)
  }
  const handleBlur = ({ target }) => {
    if (target.value.length < minLength) setError(true)
    else setError(false)
  }
  const errorStyle = error ? styles.error : ''
  const divClassName = [styles.container, errorStyle].join(' ')

  return (
    <div className={divClassName}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type ?? 'text'}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        id={label}
        required
      />
      <label>{error ? errorLabel : ' '}</label>
    </div>
  )
}

export default InputField
