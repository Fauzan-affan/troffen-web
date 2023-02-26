import styles from "../../styles/core/Upload.module.css";
import Image from "next/image";

const Upload = ({ stage, label, desc, name, handleChange, src = "", handleReset, handleSubmitPhoto, handleSubmitSertifikat, isSubmited, isSertifikatSubmited }) => {
  return (
    <>
      {stage !== "Informasi Pribadi" && stage !== "Pengalaman" && (
        <div className={styles.wrapper}>
          {label.length > 0 && <label htmlFor={label}>{label}</label>}
          {desc.length > 0 && <nav>{desc}</nav>}
          <nav className={stage === "Experiences" || stage === "Subjek Kursus" ? styles.input_pengalaman : styles.input}>
            <input id={name} name={name} type="file" className={stage === "Experiences" || stage === "Subjek Kursus" ? styles.custom_file_input : styles.input_file} onChange={handleChange} />
            {/* <Image alt="" src={Email} priority width={20} height={20} /> */}
          </nav>
        </div>
      )}

      {stage === "Informasi Pribadi" && (
        <div className={styles.wrapper}>
          {label.length > 0 && <label htmlFor={label}>{label}</label>}
          {desc.length > 0 && <nav>{desc}</nav>}
          {src.length > 0 ? (
            <div>
              <Image src={src} alt="" width={200} height={200} className={styles.photo_container} />
              <button className={styles.button_reset} onClick={() => handleReset()}>
                Reset
              </button>
              {isSubmited === 0 && (
                <button className={styles.button} onClick={() => handleSubmitPhoto()}>
                  Submit
                </button>
              )}
            </div>
          ) : (
            <nav className={styles.ip_input}>
              <input id={name} name={name} type="file" className={styles.ip_input_file} onChange={handleChange} />
            </nav>
          )}
        </div>
      )}

      {stage === "Pengalaman" && (
        <div className={styles.wrapper}>
          {label.length > 0 && <label htmlFor={label}>{label}</label>}
          {desc.length > 0 && <nav>{desc}</nav>}
          {src.length > 0 ? (
            <div>
              <Image src={src} alt="" width={200} height={200} className={styles.photo_container} />
              <button className={styles.button_reset} onClick={() => handleReset(name)}>
                Reset
              </button>
              {isSertifikatSubmited === 0 && (
                <button className={styles.button} onClick={() => handleSubmitSertifikat(name)}>
                  Submit
                </button>
              )}
            </div>
          ) : (
            <nav className={styles.ip_input_container}>
              <div className={styles.ip_input}>
                <div>
                  <div className={styles.ip_input_file_container}>
                    <input id={name} name={name} type="file" className={styles.ip_input_file} onChange={handleChange} />
                    <div className={styles.upload_label}>Upload</div>
                    <div className={styles.upload_format}>file .pdf / .jpeg</div>
                  </div>
                </div>
              </div>
            </nav>
          )}
        </div>
      )}
    </>
  );
};

export default Upload;
