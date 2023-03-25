import styles from 'styles/HeaderForm.module.css'
import HEADERS_DATA from 'static/headers.json'

function HeaderForm ({ step }) {
  const { title, titleAlt, src } = HEADERS_DATA[step]
  const URI_IMAGE = `/src/assets/${src}`
  return (
    <main className={styles.main}>
      {src
        ? (
          <img
            src={URI_IMAGE}
            alt={`Orange circle with the number ${step + 1}`}
          />
          )
        : null}
      <h1>
        {title}
        <span>{titleAlt}</span>
      </h1>
    </main>
  )
}

export default HeaderForm
