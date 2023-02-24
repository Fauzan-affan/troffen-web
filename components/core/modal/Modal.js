import Image from "next/image";
import styles from "../../../styles/core/Modal.module.css";
import CloseIcon from "../../../assets/img/close.svg";
import Progres50 from "../../../assets/img/dashboard/50persen.svg";

function Modal({ show, modalInfo, onClose, handleModal, children, title, isSticky = false }) {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    handleModal();
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

      {isSticky && (
        <div className={styles.modal_sticky}>
          <div className={styles.modal_sticky_left}>
            <Image src={Progres50} alt="" />
          </div>
          <div className={styles.modal_sticky_center}>
            <div>
              <div className={styles.modal_sticky_center_title}>Lengkapi Profil Anda</div>
              <div className={styles.modal_sticky_center_desc}>Dapatkan kemudahan dalam mendapatkan murid dengan melengkapi data di profil kamu.</div>
            </div>
          </div>
          <div className={styles.modal_sticky_right}>
            <Image src={CloseIcon} width={10} alt="" onClick={() => onClose()} />
          </div>
        </div>
      )}

      {modalInfo && (
        <>
          <div className={styles.modal_overlay}>
            <div className={styles.modal_info}>
              <div className={styles.modal_close} onClick={handleCloseModal}>
                <Image alt="" src={CloseIcon} />
              </div>
              <div>{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
