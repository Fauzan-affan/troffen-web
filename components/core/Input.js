import styles from "../../styles/core/Input.module.css";

const Input = ({ type = "", label = "", desc = "", name, placeholder, inputLabel = "", value, handleChange, isDisabled }) => {
  return (
    <>
      {type === "" && (
        <div className={styles.wrapper}>
          {label.length > 0 && <label htmlFor={label}>{label}</label>}
          {desc.length > 0 && <nav>{desc}</nav>}
          <nav className={styles.input}>
            <input id={name} name={name} type="text" placeholder={placeholder} value={value} onChange={handleChange} disabled={isDisabled} />
            {/* <Image alt="" src={Email} priority width={20} height={20} /> */}
          </nav>
        </div>
      )}

      {type === "sideLabel" && (
        <div className={styles.wrapper_side}>
          {label.length > 0 && <label htmlFor={label}>{label}</label>}
          {desc.length > 0 && <nav>{desc}</nav>}
          <div className={styles.input_wrapper}>
            <nav className={styles.input_main}>
              <input id={name} name={name} type="text" placeholder={placeholder} onChange={handleChange} />
              {/* <Image alt="" src={Email} priority width={20} height={20} /> */}
            </nav>
            {inputLabel.length > 0 && (
              <nav className={styles.input_label}>
                <nav className={styles.input_label_text}>{inputLabel}</nav>
              </nav>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
