import people from '../assets/people.png'
import Button from './Button'

function BodyHome ({ className }) {
  return (
    <section className={className}>
      <header>
        <p>¡TE ENCANTARÁ</p>
        <p>
          <span>TRABAJAR CON NOSOTROS!</span>
        </p>
      </header>
      <main>
        <img
          src={people}
          alt='People with a computer between all users and a cat'
        />
        <Button title='¡Quiero ser parte!' />
      </main>
    </section>
  )
}

export default BodyHome
