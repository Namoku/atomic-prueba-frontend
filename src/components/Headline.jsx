import styles from 'styles/Headline.module.css'
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
        <p>Desarrolla todo</p>
        <p>
          <span>tu POTENCIAL</span>
        </p>
        <p>dentro del equipo</p>
        <p>
          <span>ATOMIC</span>LABS
        </p>
        <div>
          <Button title='¡Quiero ser parte!' />
        </div>
      </article>
    </section>
  )
}

export default Headline
