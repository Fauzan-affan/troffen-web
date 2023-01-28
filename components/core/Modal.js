import styles from "../../styles/core/Modal.module.css";
import CloseIcon from "../../assets/img/Close.svg";
import Image from "next/image";

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
              <div className={styles.modal_close} onClick={handleCloseClick}>
                <Image alt="" src={CloseIcon} />
              </div>
              {title && <div className={styles.modal_title}>{title}</div>}
              <div className={styles.modal_body}>{children}</div>
            </div>
            {/* <div className={title === "daftar" ? styles.modal_footer_daftar : styles.modal_footer_masuk}>
              <div className={styles.modal_close} onClick={handleCloseClick}>
                <nav>x</nav>
              </div>
            </div> */}
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
