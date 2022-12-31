import styles from "../../styles/core/Upload.module.css";

const Upload = ({ stage, label, desc, name, handleChange }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {label.length > 0 && <label htmlFor={label}>{label}</label>}
        {desc.length > 0 && <nav>{desc}</nav>}
        <nav className={stage === "Experiences" || stage === "Subjek Kursus" ? styles.input_pengalaman : styles.input}>
          <input id={name} name={name} type="file" className={stage === "Experiences" || stage === "Subjek Kursus" ? styles.custom_file_input : styles.input_file} onChange={handleChange} />
          {/* <Image alt="" src={Email} priority width={20} height={20} /> */}
        </nav>
      </div>
    </>
  );
};

export default Upload;
