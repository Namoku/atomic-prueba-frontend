import astronautDrawing from '../assets/astronautDrawing.png'
import astronautComputer from '../assets/astronautComputer.png'
import astronautPose from '../assets/astronautPose.png'

function FooterHome ({ className }) {
  return (
    <section className={className}>
      <main>
        <div />
        <section>
          <article>
            <div>
              <img src={astronautDrawing} alt='Astronaut with a digital tablet and a mouse' />
            </div>
            <ul>
              <li>Usamos las tecnologías más modernas.</li>
              <li>Innovamos y creamos proyectos retadores.</li>
            </ul>
          </article>
          <article>
            <div>
              <img src={astronautComputer} alt='Astronaut typing with a hand in a laptop' />
            </div>
            <ul>
              <li>¡Trabajamos en equipo rumbo al éxito!</li>
              <li>No tenemos código de vestimenta</li>
            </ul>
          </article>
          <article>
            <div>
              <img src={astronautPose} alt='Astronaut posing with a hand' />
            </div>
            <ul>
              <li>Realizamos actividades para tu bienestar.</li>
              <li>¡Tenemos un parque frente a la oficina!</li>
            </ul>
          </article>
        </section>
      </main>
    </section>
  )
}

export default FooterHome
