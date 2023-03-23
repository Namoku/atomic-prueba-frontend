import styles from './Home.module.css'
import IconButton from '../components/IconButton'
import Headline from '../components/Headline'

function Home () {
  return (
    <main className={styles.home}>
      <Headline />
      <section className={styles.body}>
        <article>
          <IconButton type='drop' href='#' />
          Quiero saber más
        </article>
        SOMOS EL BRAZO DERECHO DE LA TECNOLOGÍA
      </section>
    </main>
  )
}

export default Home
