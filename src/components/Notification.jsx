import { useEffect } from 'react'
import styles from 'styles/Modal.module.css'
import sent from 'assets/sent.png'
import done from 'assets/done.png'

const IMAGES = {
  sent: {
    src: sent,
    alt: 'Paper plane'
  },
  done: {
    src: done,
    alt: 'Check mark'
  }
}

function Notification ({ open, handleClose, label, type }) {
  const openClassName = open ? styles.open : styles.closed
  const divClassName = [styles.container, openClassName].join(' ')

  useEffect(() => {
    let timeout
    if (open) {
      timeout = setTimeout(() => {
        handleClose()
      }, [3000])
    }
    return () => clearTimeout(timeout)
  }, [open])

  return (
    <div className={divClassName}>
      <img src={IMAGES[type]?.src} alt={IMAGES[type]?.alt} />
      {label}
    </div>
  )
}

export default Notification
