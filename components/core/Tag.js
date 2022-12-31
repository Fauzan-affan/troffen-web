import styles from "../../styles/core/Tag.module.css";

const Tag = ({ type = "", children }) => {
  return (
    <>
      {type === "" && <div className={styles.container}>{children}</div>}
      {type === "blogTag" && <div className={styles.blog_container}>{children}</div>}
    </>
  );
};

export default Tag;
