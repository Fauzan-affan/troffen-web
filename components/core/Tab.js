import { useState } from "react";

import Image from "next/image";

import styles from "../../styles/cari-guru/MonthlyPass.module.css";

import BCA from "../../assets/img/bank/Bank_Central_Asia.svg";
import Permata from "../../assets/img/bank/permata.svg";
import Strip from "../../assets/img/strip.svg";
import Plus from "../../assets/img/plus.svg";
import QR from "../../assets/img/png/qr.png";

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

const Tab = () => {
  const [paymentType, setPaymentType] = useState(1);
  const [toogleBCA, setToogleBCA] = useState(true);
  const [tooglePermata, setTooglePermata] = useState(false);

  const changePaymentType = (type) => {
    setPaymentType(type);
  };
  return (
    <>
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
                <div className={styles.option_1_header_right}>{toogleBCA ? <Image alt="" src={Strip} priority /> : <Image alt="" src={Plus} priority />}</div>
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
                <div className={styles.option_2_header_right}>{tooglePermata ? <Image alt="" src={Strip} priority /> : <Image alt="" src={Plus} priority />}</div>
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
    </>
  );
};

export default Tab;
