import styles from './Footer.module.css'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

function IconButton ({ type, href }) {
  const IconTypes = {
    twitter,
    linkedin
  }
  const imgSrc = IconTypes[type] || ''

  return (
    <a href={href} target='_blank' rel='noreferrer'>
      <img className={styles.img} src={imgSrc} alt={`${type} logo`} />
    </a>
  )
}

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
