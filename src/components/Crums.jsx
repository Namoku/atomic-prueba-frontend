import styles from 'styles/Crums.module.css'

function Icon () {
  return (
    <svg
      width='3em'
      height='3em'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={styles.icon}
    >
      <path
        d='M3 12h18m-3 3 3-3-3-3'
        style={{
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 1.5
        }}
      />
    </svg>
  )
}

function Crums () {
  return (
    <section className={styles.crums}>
      <p>Contratación remota</p>
      <Icon />
      <p>Entrevista con el área de RH</p>
      <Icon />
      <p>Prueba práctica</p>
      <Icon />
      <p>Entrevista técnica</p>
    </section>
  )
}

export default Crums
