import { useState } from "react";

import Image from "next/image";
import LoginTemplate from "../../../../../components/layouts/LoginTemplate";
import styles from "../../../../../styles/cari-guru/MonthlyPass.module.css";

import PriceIcon from "../../../../../assets/img/priceIcon.svg";
import BCA from "../../../../../assets/img/bank/Bank_Central_Asia.svg";
import Permata from "../../../../../assets/img/bank/permata.svg";
import Strip from "../../../../../assets/img/strip.svg";
import QR from "../../../../../assets/img/png/qr.png";
import E1 from "../../../../../assets/img/e1.svg";
import E2 from "../../../../../assets/img/e2.svg";

const masukSebagaiLabel = {
  fontWeight: 400,
};

const masukSebagaiHr = {
  border: "1px solid",
};

const masukSebagaiSelectedLabel = {
  fontWeight: 600,
  fontSize: "16px",
};

const masukSebagaiSelectedHr = {
  border: "2px solid",
};

const index = () => {
  const [paymentType, setPaymentType] = useState(1);
  const [toogleBCA, setToogleBCA] = useState(true);
  const [tooglePermata, setTooglePermata] = useState(false);

  const changePaymentType = (type) => {
    setPaymentType(type);
  };

  return (
    <LoginTemplate title={`Cari Guru - Troffen`} desc={`Cari guru yang sesuai denganmu`} icon={`troffen.ico`} isNavbar={false}>
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
            {/* general css */}
            <div className="masuk_modal_type">
              <div className="masuk_sebagai_murid" onClick={() => changePaymentType(1)}>
                <nav style={paymentType === 1 ? masukSebagaiSelectedLabel : masukSebagaiLabel}>Virtual Account</nav>
                <hr style={paymentType === 1 ? masukSebagaiSelectedHr : masukSebagaiHr} />
              </div>
              <div className="masuk_sebagai_guru" onClick={() => changePaymentType(2)}>
                <nav style={paymentType === 2 ? masukSebagaiSelectedLabel : masukSebagaiLabel}>QR</nav>
                <hr style={paymentType === 2 ? masukSebagaiSelectedHr : masukSebagaiHr} />
              </div>
            </div>

            {paymentType === 1 && (
              <div className={styles.payment_container}>
                <div className={styles.option_1}>
                  <div className={styles.option_1_header} onClick={() => setToogleBCA(!toogleBCA)}>
                    <div className={styles.option_1_header_top}>
                      <div className={styles.option_1_header_left}>
                        <nav className={styles.img_container_1}>
                          <Image alt="" src={BCA} priority width={100} height={100} />
                        </nav>
                        <nav>Bank BCA</nav>
                      </div>
                      <div className={styles.option_1_header_right}>
                        <Image alt="" src={Strip} priority />
                      </div>
                    </div>
                  </div>
                  <hr />
                  {toogleBCA && (
                    <div className={styles.option_1_body}>
                      <ol>
                        <li>Instruksi 1</li>
                        <li>Instruksi 2</li>
                        <li>Instruksi 3</li>
                        <li>Instruksi 4</li>
                        <li>Instruksi 5</li>
                      </ol>
                    </div>
                  )}
                </div>

                <div className={styles.option_2}>
                  <div className={styles.option_2_header} onClick={() => setTooglePermata(!tooglePermata)}>
                    <div className={styles.option_2_header_top}>
                      <div className={styles.option_2_header_left}>
                        <nav className={styles.img_container_2}>
                          <Image alt="" src={Permata} priority width={100} height={100} />
                        </nav>
                        <nav>Bank Permata</nav>
                      </div>
                      <div className={styles.option_2_header_right}>
                        <Image alt="" src={Strip} priority />
                      </div>
                    </div>
                  </div>
                  <hr />
                  {tooglePermata && (
                    <div className={styles.option_2_body}>
                      <ol>
                        <li>Instruksi 1</li>
                        <li>Instruksi 2</li>
                        <li>Instruksi 3</li>
                        <li>Instruksi 4</li>
                        <li>Instruksi 5</li>
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            )}

            {paymentType === 2 && (
              <div className={styles.payment_container}>
                <div className={styles.QR}>
                  <Image alt="" src={QR} priority width={300} height={300} />
                  <nav>Transfer melalui QRIS a/n Troffen.</nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </LoginTemplate>
  );
};

export default index;
