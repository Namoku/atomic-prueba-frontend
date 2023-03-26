import styles from 'styles/Stepper.module.css'
import step1 from 'assets/step1.png'
import check from 'assets/done.png'
import step2Blank from 'assets/step2Blank.png'
import step3Blank from 'assets/step3Blank.png'
import step4Blank from 'assets/step4Blank.png'

function Stepper ({ step }) {
  const completedClassName = [styles.item, styles.completed].join(' ')
  const activeClassName = [styles.item, styles.active].join(' ')
  const firstClassName = [styles.item, styles.active, styles.first].join(' ')

  const getClassName = (stepWrap) => {
    if (stepWrap === 0 && step === 0) return firstClassName
    if (stepWrap === step) return activeClassName
    if (stepWrap <= step) return completedClassName
    return styles.item
  }

  const getImage = (stepWrap) => {
    if (stepWrap === 0 && step === 0) return step1
    if (stepWrap < step) return check
    if (stepWrap === 1) return step2Blank
    if (stepWrap === 2) return step3Blank
    if (stepWrap === 3) return step4Blank
  }

  return (
    <div className={styles.wrapper}>
      <div className={getClassName(0)}>
        <div className='step-name'>
          <img src={getImage(0)} alt={step} />
        </div>
      </div>
      <div className={getClassName(1)}>
        <div className='step-name'>
          <img src={getImage(1)} alt={step} />
        </div>
      </div>
      <div className={getClassName(2)}>
        <div className='step-name'>
          <img src={getImage(2)} alt={step} />
        </div>
      </div>
      <div className={getClassName(3)}>
        <div className='step-name'>
          <img src={getImage(3)} alt={step} />
        </div>
      </div>
    </div>
  )
}

export default Stepper
