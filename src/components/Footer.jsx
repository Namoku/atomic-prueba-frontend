import styles from 'styles/Footer.module.css'
import IconButton from './IconButton'

function Footer () {
  return (
    <footer className={styles.main}>
      <section>2020 AtomicLabs. Todos los derechos reservados.</section>
      <section>
        <a href='#'>Aviso de privacidad</a>
        <div>
          <IconButton type='linkedin' href='https://www.linkedin.com/company/atomic-32/' />
          <IconButton type='twitter' href='https://twitter.com/Atomic_32' />
        </div>
      </section>
    </footer>
  )
}

export default Footer
