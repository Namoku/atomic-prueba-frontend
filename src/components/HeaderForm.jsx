import styles from 'styles/HeaderForm.module.css'

function HeaderForm ({ title, src, step }) {
  const { main, alt } = title

  return (
    <main className={styles.main}>
      {src
        ? (
          <img src={src} alt={`Orange circle with the number ${step + 1}`} />
          )
        : null}
      <h1>
        {main}
        {step === 4 ? <br /> : null}
        <span>{alt}</span>
      </h1>
    </main>
  )
}

export default HeaderForm
