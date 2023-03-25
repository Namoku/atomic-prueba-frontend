import people from '../assets/people.png'
import Button from './Button'
import Crums from './Crums'

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
        <Crums />
        <Button title='¡Quiero ser parte!' href='/contact' />
      </main>
    </section>
  )
}

export default BodyHome
