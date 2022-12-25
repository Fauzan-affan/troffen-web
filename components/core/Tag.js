import styles from "../../styles/core/Tag.module.css";

const Tag = ({ children }) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Tag;
