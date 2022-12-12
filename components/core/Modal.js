import styled from "../../styles/core/Modal.module.css";

function Modal({ show, onClose, children, title }) {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      {show && (
        <div className={styled.modal_overlay}>
          <div className={title === "daftar" ? styled.modal_daftar : styled.modal_masuk}>
            <div className={styled.modal_header}>
              <a href="#" onClick={handleCloseClick}>
                x
              </a>
            </div>
            {title && <div className={styled.modal_title}>{title}</div>}
            <div className={styled.modal_body}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
