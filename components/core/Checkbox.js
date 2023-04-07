import styles from "../../styles/core/Checkbox.module.css";

const Checkbox = ({ checkbox, handleCheckbox }) => {
  return (
    <>
      <div className={styles.online_offline}>
        {checkbox === 1 ? (
          <div className={styles.checkbox_active}>
            <nav>Ada</nav>
          </div>
        ) : (
          <div className={styles.checkbox} onClick={() => handleCheckbox(1)}>
            <nav>Ada</nav>
          </div>
        )}
        {checkbox === 0 ? (
          <div className={styles.checkbox_active}>
            <nav>Tidak</nav>
          </div>
        ) : (
          <div className={styles.checkbox} onClick={() => handleCheckbox(0)}>
            <nav>Tidak</nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkbox;
