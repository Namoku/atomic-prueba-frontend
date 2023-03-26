import styles from 'styles/Checkbox.module.css'

function Checkbox ({ label, checked, onClick }) {
  return (
    <div className={styles.container}>
      <input id={label} type='checkbox' onClick={onClick} defaultChecked={checked} />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default Checkbox
