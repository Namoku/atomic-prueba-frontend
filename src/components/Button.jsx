import styles from 'styles/Button.module.css'
import { Link } from 'wouter'

function Button ({ title, onClick, type, disabled, href }) {
  const typeStyle = type === 'secondary' ? styles.secondary : styles.primary
  const buttonClassName = [styles.button, typeStyle].join(' ')
  const Wrapper = ({ children }) =>
    href ? <Link href={href}>{children}</Link> : <div>{children}</div>

  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Button
