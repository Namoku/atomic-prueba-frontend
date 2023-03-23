import styles from 'styles/Footer.module.css'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import drop from '../assets/drop.png'

function IconButton ({ type, href, className }) {
  const IconTypes = {
    twitter,
    linkedin,
    drop
  }
  const imgSrc = IconTypes[type] || ''

  return (
    <a
      href={href}
      target={type === 'drop' ? undefined : '_blank'}
      rel='noreferrer'
      className={styles.imgContainer}
    >
      <img className={className ?? styles.img} src={imgSrc} alt={`${type} logo`} />
    </a>
  )
}

export default IconButton
