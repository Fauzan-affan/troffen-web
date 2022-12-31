import styles from "../../styles/core/Progress.module.css";
import Dvdr from "../../assets/img/progress_dvdr.svg";
import DvdrActive from "../../assets/img/DvdrActive.svg";
import Checklist from "../../assets/img/blue_checklist.svg";
import Elipse from "../../assets/img/Ellipse.svg";

import Image from "next/image";

const Progress = ({ stage, route }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {stage === "Personal Info" && route === "daftar-murid" && (
            <>
              <div className={styles.progress_label}>
                <Image alt="" src={Checklist} />
                <nav className={styles.active}>Informasi Pribadi</nav>
              </div>
              <Image alt="" src={Dvdr} />
              <div className={styles.progress_label}>
                <Image alt="" src={Elipse} />
                <nav>Pengalaman</nav>
              </div>
            </>
          )}
          {stage === "Experiences" && route === "daftar-murid" && (
            <>
              <div className={styles.progress_label}>
                <Image alt="" src={Checklist} />
                <nav className={styles.active}>Informasi Pribadi</nav>
              </div>
              <Image alt="" src={DvdrActive} />
              <div className={styles.progress_label}>
                <Image alt="" src={Elipse} />
                <nav>Pengalaman</nav>
              </div>
            </>
          )}
          {stage === "Personal Info" && route === "daftar-guru" && (
            <>
              <div className={styles.progress_label}>
                <Image alt="" src={Checklist} />
                <nav className={styles.active}>Informasi Pribadi</nav>
              </div>
              <Image alt="" src={Dvdr} />
              <div className={styles.progress_label}>
                <Image alt="" src={Elipse} />
                <nav>Pengalaman</nav>
              </div>
              <Image alt="" src={Dvdr} />
              <div className={styles.progress_label}>
                <Image alt="" src={Elipse} />
                <nav>Subjek Kursus</nav>
              </div>
            </>
          )}
          {stage === "Experiences" && route === "daftar-guru" && (
            <>
              <div className={styles.progress_label}>
                <Image alt="" src={Checklist} />
                <nav className={styles.active}>Informasi Pribadi</nav>
              </div>
              <Image alt="" src={DvdrActive} />
              <div className={styles.progress_label}>
                <Image alt="" src={Elipse} />
                <nav>Pengalaman</nav>
              </div>
              <Image alt="" src={Dvdr} />
              <div className={styles.progress_label}>
                <Image alt="" src={Elipse} />
                <nav>Subjek Kursus</nav>
              </div>
            </>
          )}
          {stage === "Subjek Kursus" && route === "daftar-guru" && (
            <>
              <div className={styles.progress_label}>
                <Image alt="" src={Checklist} />
                <nav className={styles.active}>Informasi Pribadi</nav>
              </div>
              <Image alt="" src={DvdrActive} />
              <div className={styles.progress_label}>
                <Image alt="" src={Elipse} />
                <nav>Pengalaman</nav>
              </div>
              <Image alt="" src={DvdrActive} />
              <div className={styles.progress_label}>
                <Image alt="" src={Elipse} />
                <nav>Subjek Kursus</nav>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Progress;
