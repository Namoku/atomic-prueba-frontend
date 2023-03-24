import styles from 'styles/Table.module.css'
import check from 'assets/check.png'
import TABLE_DATA from 'static/table.json'

function Icon () {
  return (
    <div className={styles.icon}>
      <img src={check} alt='Checkmark icon' />
    </div>
  )
}

function Table () {
  return (
    <section className={styles.table}>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>CARACTERÍSTICAS</th>
            <th>OTROS</th>
            <th>ATOMIC</th>
          </tr>
        </thead>
        <tbody>
          {TABLE_DATA.map((row, index) => (
            <tr key={index}>
              <td colSpan={2}>{row.feature}</td>
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
