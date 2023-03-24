import styles from 'styles/Header.module.css'
import logo from 'assets/logo.png'

function Header () {
  return (
    <header className={styles.header}>
      <main>
        <div>
          <img src={logo} alt='Rocket logo from atomic labs' />
        </div>
        atomicLabs
      </main>
    </header>
  )
}

export default Header
