import styles from 'styles/Crums.module.css'
import rightArrow from 'assets/rightArrow.svg'

function Icon () {
  return (
    <div className={styles.icon}>
      <img src={rightArrow} alt='Arrow pointin to right' />
    </div>
  )
}

function Crums () {
  return (
    <section className={styles.crums}>
      <p>Contratación remota</p>
      <Icon />
      <p>Entrevista con el área de RH</p>
      <p>Prueba práctica</p>
      <p>Entrevista técnica</p>
    </section>
  )
}

export default Crums
