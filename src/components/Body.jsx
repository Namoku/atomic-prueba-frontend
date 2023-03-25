import IconButton from '../components/IconButton'
import styles from 'styles/Body.module.css'
import Cards from './Cards'
import BodyHome from './BodyHome'
import FooterHome from './FooterHome'
import Table from './Table'
import Button from './Button'
import { useRef } from 'react'

function Body () {
  const cardsRef = useRef(null)

  const scrollToComponent = () => cardsRef.current.scrollIntoView({ behavior: 'smooth' })
  // const scrollToComponent = () => console.log('sfa')

  return (
    <main className={styles.body}>
      <section className={styles.navigate}>
        <IconButton type='drop' className={styles.button} onClick={scrollToComponent} />
        Quiero saber más
      </section>
      <Cards className={styles.cards} ref={cardsRef} />
      <BodyHome className={styles.bodyContainer} />
      <h2>
        <p>
          ¿POR QUÉ
          <span> ATOMIC?</span>
        </p>
      </h2>
      <FooterHome className={styles.footerHome} />
      <Table />
      <Button title='¡Quiero ser parte!' href='/contact' />
    </main>
  )
}

export default Body
