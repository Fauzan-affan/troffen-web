import Image from "next/image";
import Icon from "../../assets/img/blank/blank.svg";
import styles from "../../styles/blank/Blank.module.css";

const Blank = ({ menu }) => {
  return (
    <div className={styles.blank_container}>
      <div>
        <div className={styles.blank_header}>
          <Image src={Icon} alt="" priority />
        </div>
        <div className={styles.blank_body}>
          <nav>Anda belum memiliki {menu} saat ini</nav>
        </div>
      </div>
    </div>
  );
};

export default Blank;
