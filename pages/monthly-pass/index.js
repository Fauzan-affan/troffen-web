import Image from "next/image";
import LoginTemplate from "../../components/layouts/LoginTemplate";
import styles from "../../styles/cari-guru/MonthlyPass.module.css";

import Tab from "../../components/core/Tab";

import PriceIcon from "../../assets/img/priceIcon.svg";
import E1 from "../../assets/img/e1.svg";
import E2 from "../../assets/img/e2.svg";

const index = () => {
  return (
    <LoginTemplate title={`Cari Guru - Troffen`} desc={`Cari guru yang sesuai denganmu`} icon={`troffen.ico`} isNavbar={`backNavbar`}>
      <section id={styles.title}>
        <div className={styles.container}>
          <div className={styles.title_1}>LANGGANAN MONTHLY PASS</div>
          <div className={styles.title_2}>Akses selama 30 hari</div>
        </div>
      </section>

      <section id={styles.content}>
        <div className={styles.content_container}>
          <div className={styles.content_left}>
            <div className={styles.content_left_card}>
              <div className={styles.card_header}>
                <div className={styles.card_header_img}>
                  <Image alt="" src={PriceIcon} priority />
                </div>
                <div className={styles.card_header_price}>
                  <div className={styles.card_header_price_label}>Monthly Pass</div>
                  <div className={styles.card_header_price_amount}>
                    <nav>Rp 50.000</nav>
                    <nav>/bulan</nav>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.card_content}>
                <div className={styles.card_content_1}>
                  <nav>Reservasi kursus selama 30 hari</nav>
                  <nav className={styles.img_info_container}>
                    <Image alt="" src={E1} priority className={styles.e1} />
                    <Image alt="" src={E2} priority className={styles.e2} />
                  </nav>
                </div>
                <div className={styles.card_content_2}>
                  <nav>Unlimited reservasi kursus</nav>
                  <nav className={styles.img_info_container}>
                    <Image alt="" src={E1} priority className={styles.e1} />
                    <Image alt="" src={E2} priority className={styles.e2} />
                  </nav>
                </div>
                <div className={styles.card_content_3}>
                  <nav>Review guru</nav>
                  <nav className={styles.img_info_container}>
                    <Image alt="" src={E1} priority className={styles.e1} />
                    <Image alt="" src={E2} priority className={styles.e2} />
                  </nav>
                </div>
              </div>
            </div>
            <div className={styles.content_left_info}>
              <ul>
                <li>Monthly Pass dibutuhkan untuk reservasi semua kursus di Troffen.</li>
                <li>Berlaku selama 30 hari dan perpeanjangan dilakukan secara manual.</li>
                <li>Tidak dapat memberhentikan Monthly Pass sewaktu-waktu saat sudah aktif, kecuali masa berlaku sudah berakhir.</li>
              </ul>
            </div>
          </div>
          <hr className={styles.vertical_hr} />
          <div className={styles.content_right}>
            <div className={styles.title}>Tipe Pembayaran</div>
            <Tab />
          </div>
        </div>
      </section>
    </LoginTemplate>
  );
};

export default index;
