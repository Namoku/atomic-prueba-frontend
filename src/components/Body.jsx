import IconButton from '../components/IconButton'
import styles from './Body.module.css'
import Cards from './Cards'
import BodyHome from './BodyHome'
import FooterHome from './FooterHome'

function Body () {
  return (
    <main className={styles.body}>
      <section className={styles.navigate}>
        <IconButton type='drop' href='#' className={styles.button} />
        Quiero saber más
      </section>
      <Cards className={styles.cards} />
      <BodyHome className={styles.bodyContainer} />
      <FooterHome />
    </main>
  )
}

export default Body
