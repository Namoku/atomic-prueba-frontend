import styles from 'styles/Table.module.css'
import check from 'assets/check.png'

const TABLE_DATA = [
  {
    feature: 'Equipo inclusivo, honesto y auténtico',
    others: true,
    atomic: true
  },
  {
    feature: 'Puntualidad es nuestro segundo nombre',
    others: true,
    atomic: true
  },
  {
    feature: 'Siempre innovamos en nuestros productos',
    others: true,
    atomic: true
  },
  {
    feature: 'Te ayudamos a crecer e implementar nuevos conocimientos',
    others: false,
    atomic: true
  },
  {
    feature: 'Nos preocupamos por tu bienestar',
    others: false,
    atomic: true
  },
  {
    feature: 'El respeto es una parte fundamental',
    others: false,
    atomic: true
  }
]

function Icon () {
  return (
    <div className={styles.icon}>
      <img src={check} alt='Checkmark icon' />
    </div>
  )
}

function Table ({ className }) {
  return (
    <section className={className}>
      <table>
        <thead>
          <tr>
            <th>CARACTERÍSTICAS</th>
            <th>OTROS</th>
            <th>ATOMIC</th>
          </tr>
        </thead>
        <tbody>
          {TABLE_DATA.map((row, index) => (
            <tr key={index}>
              <td>{row.feature}</td>
              <td>{row.others ? <Icon /> : null}</td>
              <td>{row.atomic ? <Icon /> : null}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Table
