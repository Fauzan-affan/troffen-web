import styles from "../../styles/core/Modal.module.css";

function Modal({ show, onClose, children, title }) {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      {show && (
        <>
          <div className={styles.modal_overlay}>
            <div className={title === "daftar" ? styles.modal_daftar : styles.modal_masuk}>
              {title && <div className={styles.modal_title}>{title}</div>}
              <div className={styles.modal_body}>{children}</div>
            </div>
            <div className={title === "daftar" ? styles.modal_footer_daftar : styles.modal_footer_masuk}>
              <div className={styles.modal_close} onClick={handleCloseClick}>
                <nav>x</nav>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
