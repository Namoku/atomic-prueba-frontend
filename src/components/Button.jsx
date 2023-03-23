import styles from 'styles/Button.module.css'

function Button ({ title, onClick, type, disabled }) {
  const typeStyle = type === 'secondary' ? styles.secondary : styles.primary
  const buttonClassName = [styles.button, typeStyle].join(' ')

  return (
    <div>
      <button
        className={buttonClassName}
        type='button'
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
