import styles from "../../styles/core/Breadcrumb.module.css";

const Breadcrumb = ({ text, isDisabled = false }) => {
  return (
    <div className={styles.container} style={{ opacity: isDisabled ? "0.5" : "1" }}>
      {text}
    </div>
  );
};

export default Breadcrumb;
