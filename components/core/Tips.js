import Image from "next/image";
import styles from "../../styles/cari-guru/Reservasi.module.css";
import Bohlam from "../../assets/img/lamp.svg";

const Tips = ({ tips0_title = "", tips0_desc, tips1_title, tips1_desc, tips2_title, tips2_desc }) => {
  return (
    <div className={styles.tips}>
      <div className={styles.tips_container}>
        <div className={styles.tips_title}>
          <Image alt="tips & trick" src={Bohlam} priority width={40} height={40} />
          <nav>Troffen’s Tips</nav>
        </div>
        {tips0_title.length !== 0 && (
          <div className={styles.tips_1}>
            <div className={styles.tips_1_title}>{tips0_title}</div>
            <div className={styles.tips_1_desc}>{tips0_desc}</div>
          </div>
        )}
        <div className={styles.tips_1}>
          <div className={styles.tips_1_title}>{tips1_title}</div>
          <div className={styles.tips_1_desc}>{tips1_desc}</div>
        </div>
        <div className={styles.tips_2}>
          <div className={styles.tips_2_title}>{tips2_title}</div>
          <div className={styles.tips_2_desc}>{tips2_desc}</div>
          {tips2_desc === "Berikut adalah instruksi untuk foto profil yang baik:" && (
            <ul>
              <li>Wajah terlihat jelas dan foto tidak blur</li>
              <li>Tidak menggunakan logo atau instansi tertentu</li>
              <li>Foto profil tidak mengandung SARA</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tips;
