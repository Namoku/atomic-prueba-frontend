import IconButton from '../components/IconButton'
import styles from './Body.module.css'

function Body () {
  return (
    <main className={styles.body}>
      <section className={styles.navigate}>
        <IconButton type='drop' href='#' className={styles.button} />
        Quiero saber más
      </section>
      <section className={styles.cards}>
        <p>SOMOS EL BRAZO DERECHO</p>
        <p>
          <span>DE LA TECNOLOGÍA</span>
        </p>
      </section>
    </main>
  )
}

export default Body
