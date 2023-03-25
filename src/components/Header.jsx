import styles from 'styles/Header.module.css'
import logo from 'assets/logo.png'
import { Link } from 'wouter'

function Header () {
  return (
    <header className={styles.header}>
      <main>
        <Link href='/'>
          <div>
            <img src={logo} alt='Rocket logo from atomic labs' />
          </div>
        </Link>
        <Link href='/'>atomicLabs</Link>
      </main>
    </header>
  )
}

export default Header
