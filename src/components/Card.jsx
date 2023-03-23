import styles from './Card.module.css'

function Card ({ img, alt, header, children, type }) {
  const typeStyle = type === 'main' ? styles.main : ''
  const containerClassName = [styles.container, typeStyle].join(' ')

  return (
    <article className={containerClassName}>
      <section>
        <img src={img} alt={alt ?? 'img'} />
      </section>
      <h1>{header}</h1>
      <main>
        {children}
      </main>
    </article>
  )
}

export default Card
