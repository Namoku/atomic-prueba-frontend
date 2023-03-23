import astronautDrawing from '../assets/astronautDrawing.png'
import astronautComputer from '../assets/astronautComputer.png'
import astronautPose from '../assets/astronautPose.png'

function FooterHome () {
  return (
    <section>
      <header>
        <p>
          ¿POR QUÉ
          <span> ATOMIC?</span>
        </p>
      </header>
      <main>
        <article>
          <img src={astronautDrawing} alt='Astronaut with a digital tablet and a mouse' />
          <ul>
            <li>Usamos las tecnologías más modernas.</li>
            <li>Innovamos y creamos proyectos retadores.</li>
          </ul>
        </article>
        <article>
          <img src={astronautComputer} alt='Astronaut typing with a hand in a laptop' />
          <ul>
            <li>¡Trabajamos en equipo rumbo al éxito!</li>
            <li>No tenemos código de vestimenta</li>
          </ul>
        </article>
        <article>
          <img src={astronautPose} alt='Astronaut posing with a hand' />
          <ul>
            <li>Realizamos actividades para tu bienestar.</li>
            <li>¡Tenemos un parque frente a la oficina!</li>
          </ul>
        </article>
      </main>
    </section>
  )
}

export default FooterHome
