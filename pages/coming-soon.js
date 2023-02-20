import comingSoon from "../assets/img/comingSoon.svg";
import WrapperController from "../controller/WrapperController";

import styles from "../styles/ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <WrapperController title={`Ketahui Lebih Banyak Tentang Kami - Troffen`} desc={`Kenali Lebih Dalam Tentang Kami. Visi, Misi dan Berbagai Informasi Layanan Terbaru Mengenai Troffen Disini!`} icon={`troffen.ico`}>
      <div className={styles.background} style={{ backgroundImage: `url(${comingSoon.src})` }}>
        <div className={styles.container}>
          {/* <div className={styles.title}>Frequently Asked Questions</div> */}
          <div className={styles.content}>
            <b className={styles.title}>
              <h1>We’re Coming Soon</h1>
            </b>
            <h3 className={styles.desc}>Keep in touch with us. Something really cool is coming!</h3>
          </div>
        </div>
      </div>
    </WrapperController>
  );
};

export default ComingSoon;
