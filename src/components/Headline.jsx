import styles from './Headline.module.css'
import astronaut from '../assets/astronaut.png'
import Button from '../components/Button'

function Headline () {
  return (
    <section className={styles.headline}>
      <article>
        <img
          src={astronaut}
          alt='Astronaut wearing the suit labeled with Atomic32'
        />
      </article>
      <article>
        <p>Desarrolla todo tu POTENCIAL dentro del equipo ATOMICLABS</p>
        <Button title='¡Quiero ser parte!' />
      </article>
    </section>
  )
}

export default Headline
