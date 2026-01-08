import { createPortal } from "react-dom"


function Modal({isOpen, onClose, children}) {

    if(!isOpen) return null

  return createPortal (
    <div style={styles.overlay} onClick={onClose} >
      <div style={styles.modal} onClick={(e) => e.stopPropagation()} >{children}
        <button style={styles.btn} onClick={onClose} >Close</button>
      </div>
    </div>,

    document.querySelector('#modal-root')
  )
}

const styles= {
    overlay:{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)"
    },

    modal:{
        backgroundColor: "white",
        borderRadius: "4px",
        padding: "0.5rem",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },

    btn:{
        backgroundColor: "white",
        borderRadius: "4px",
        padding: "0.5rem",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }


}

export default Modal
