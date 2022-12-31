import styles from "../../styles/core/Textarea.module.css";

const Textarea = ({ label, desc = "", name, col, row, placeholder, handleChange }) => {
  return (
    <>
      {label.length > 0 && (
        <div className={styles.label} htmlFor={label}>
          {label}
        </div>
      )}
      {desc.length > 0 && <nav className={styles.nav}>{desc}</nav>}
      <textarea className={styles.textarea} name={name} id={name} cols={col} rows={row} placeholder={placeholder} onChange={handleChange}></textarea>
    </>
  );
};

export default Textarea;
