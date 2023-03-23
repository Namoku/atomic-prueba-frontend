import Card from './Card'
import card0 from '../assets/card0.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'

function Cards ({ className }) {
  return (
    <section className={className}>
      <header>
        <p>SOMOS EL BRAZO DERECHO</p>
        <p>
          <span>DE LA TECNOLOGÍA</span>
        </p>
      </header>
      <main>
        <Card header='EXPLORA' img={card0}>
          <ul>
            <li>
              Innovación y <span>creación</span> tecnológica
            </li>
            <li>
              <span>UI/UX</span>
            </li>
            <li>
              <span>Innovación</span>
            </li>
          </ul>
        </Card>
        <Card header='IMAGINA' type='main' img={card1}>
          <ul>
            <li>
              <span>Estrategia </span>Digital
            </li>
            <li>
              Big Data & <span>Analysis</span>
            </li>
            <li>
              <span>Consultoría </span>Tecnológica
            </li>
            <li>
              <span>Reducción </span>de costos TI
            </li>
          </ul>
        </Card>
        <Card header='CONQUISTA' img={card2}>
          <ul>
            <li>
              Desarrollo tecnológico <span>a la medida</span>
            </li>
            <li>
              <span>Ciberseguridad</span>
            </li>
            <li>
              <span>Servicios de la Nube</span>
            </li>
          </ul>
        </Card>
      </main>
    </section>
  )
}

export default Cards
