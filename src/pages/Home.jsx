import './Home.css'
import astronaut from '../assets/astronaut.png'

function Home () {
  return (
    <main className='home'>
      <section className='headline'>
        <article>
          <img src={astronaut} alt='Astronaut wearing the suit labeled with Atomic32' />
        </article>
        <article>
          <p>Desarrolla todo tu POTENCIAL dentro del equipo ATOMICLABS</p>
          <a href='#'>¡Quiero ser parte!</a>
        </article>
      </section>
    </main>
  )
}

export default Home
