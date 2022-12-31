import styles from "../../styles/core/Select.module.css";
import dw from "../../assets/img/dw.svg";

import Image from "next/image";

const Select = ({ label, optionLabel, desc, name, options = [], handleChange }) => {
  return (
    <>
      {label.length > 0 && (
        <div className={styles.label} htmlFor={label}>
          {label}
        </div>
      )}
      <div className={styles.wrapper}>
        {desc.length > 0 && <nav>{desc}</nav>}
        <select name={name} id={name} onChange={handleChange}>
          <option value="" selected disabled>
            {optionLabel}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <Image alt="" src={dw} />
      </div>
    </>
  );
};

export default Select;
