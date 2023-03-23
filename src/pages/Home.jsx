import styles from './Home.module.css'
import IconButton from '../components/IconButton'
import Headline from '../components/Headline'

function Home () {
  return (
    <main className={styles.home}>
      <Headline />
      <section className={styles.body}>
        SOMOS EL BRAZO DERECHO DE LA TECNOLOGÍA
        <IconButton type='drop' href='#' />
      </section>
    </main>
  )
}

export default Home
