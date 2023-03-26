import styles from 'styles/Modal.module.css'
const MODAL_DATA = {
  header: 'Términos y Condiciones',
  body: `
    Para llevar a cabo las finalidades descritas en el presente Aviso de
    Privacidad, utilizaremos datos personales de identificación,
    contactoy laborales.
    Los datos personales que Atomiclabs recaba de usted, serán
    utilizados para las siguientes finalidades que son necesarias para
    ofrecer nuestros servicios:
    AtomicLabs requiere utilizar sus datos personales para incluirlo
    en la base de datos que utilizamos para prestar los servicios de
    reclutamiento, selección de personal, administración de nómina y
    prestación de servicios. AtomicLabs utilizará sus datos personales
    para evaluar si es posible colocarlo en las vacantes de enmpleo de
    la compañía o de los clientes de AtomicLabs y para conocer sus
    aptitudes, antecedentes y referencias laborales. En este sentido,
    AtomicLabs utilizará sus datos personales para ponerse en
    contacto con usted en relación a las vacantes para las cuales
    podría ser candidato.
  `
}

function Modal ({ handleClose }) {
  return (
    <div className={styles.modal} onClick={handleClose}>
      <section onClick={(e) => e.stopPropagation()}>
        <header>
          <h1>{MODAL_DATA.header}</h1>
        </header>
        <p>{MODAL_DATA.body}</p>
      </section>
    </div>
  )
}

export default Modal
