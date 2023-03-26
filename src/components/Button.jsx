import styles from 'styles/Button.module.css'
import { Link } from 'wouter'

function Button ({ title, onClick, type, disabled, href, className }) {
  const typeStyle = type === 'secondary' ? styles.secondary : styles.primary
  const buttonClassName = [styles.button, typeStyle].join(' ')
  const Wrapper = ({ children }) =>
    href
      ? (
        <Link href={href} className={className}>
          {children}
        </Link>
        )
      : (
        <div className={className}>{children}</div>
        )

  return (
    <Wrapper>
      <button
        className={buttonClassName}
        type='button'
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </Wrapper>
  )
}

export default Button
