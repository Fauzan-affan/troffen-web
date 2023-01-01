import { useState } from "react";

import Image from "next/image";

import styles from "../../styles/MonthlyPass.module.css";
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

const Tab = ({ tabObj, defaultType = "", isHeader }) => {
  const [paymentType, setPaymentType] = useState(defaultType);
  const [toogleBCA, setToogleBCA] = useState(true);
  const [tooglePermata, setTooglePermata] = useState(false);
  const [toogleFAQ1, setToogleFAQ1] = useState(true);
  const [toogleFAQ2, setToogleFAQ2] = useState(false);
  const [toogleFAQ3, setToogleFAQ3] = useState(false);

  const changePaymentType = (type) => {
    setPaymentType(type);
  };

  const handleToogle = (val) => {
    val === "BCA" && setToogleBCA(!toogleBCA);
    val === "Bank Permata" && setTooglePermata(!tooglePermata);

    // FAQ
    val === "Apa itu Troffen?" && setToogleFAQ1(!toogleFAQ1);
    val === "Bagaimana Cara Menjadi Guru di Troffen?" && setToogleFAQ2(!toogleFAQ2);
    val === "Bagaimana Cara Memesan Kursus di Troffen?" && setToogleFAQ3(!toogleFAQ3);
  };

  return (
    <>
      {isHeader && (
        <div className="masuk_modal_type">
          {tabObj.map((obj, i) => (
            <div className="masuk_sebagai_murid" onClick={() => changePaymentType(obj.id)} key={obj.id}>
              <nav style={paymentType === obj.id ? masukSebagaiSelectedLabel : masukSebagaiLabel}>{obj.title}</nav>
              <hr style={paymentType === obj.id ? masukSebagaiSelectedHr : masukSebagaiHr} />
            </div>
          ))}
        </div>
      )}

      {paymentType === tabObj[0].id &&
        tabObj.map((obj, i) => (
          <div className={styles.payment_container} key={obj.id}>
            <div className={styles.option_1}>
              <div className={styles.option_1_header} onClick={() => handleToogle(obj.optionName)}>
                <div className={styles.option_1_header_top}>
                  <div className={styles.option_1_header_left}>
                    {obj.optionImg && (
                      <nav className={styles.img_container_1}>
                        <Image alt="" src={obj.optionImg} priority width={100} height={100} />
                      </nav>
                    )}
                    <nav>{obj.optionName}</nav>
                  </div>
                  <div className={styles.option_1_header_right}>
                    {(obj.optionName === "BCA" && toogleBCA) ||
                    (obj.optionName === "Bank Permata" && tooglePermata) ||
                    (obj.optionName === "Apa itu Troffen?" && toogleFAQ1) ||
                    (obj.optionName === "Bagaimana Cara Menjadi Guru di Troffen?" && toogleFAQ2) ||
                    (obj.optionName === "Bagaimana Cara Memesan Kursus di Troffen?" && toogleFAQ3) ? (
                      <Image alt="" src={Strip} priority />
                    ) : (
                      <Image alt="" src={Plus} priority />
                    )}
                  </div>
                </div>
              </div>
              <hr />
              {obj.optionName === "BCA" && toogleBCA && (
                <div className={styles.option_1_body}>
                  <ol>
                    {obj.desc.map((desc) => (
                      <li key={desc.descId}>{desc.val}</li>
                    ))}
                  </ol>
                </div>
              )}
              {obj.optionName === "Bank Permata" && tooglePermata && (
                <div className={styles.option_1_body}>
                  <ol>
                    {obj.desc.map((desc) => (
                      <li key={desc.descId}>{desc.val}</li>
                    ))}
                  </ol>
                </div>
              )}
              {/* FAQ */}
              {obj.optionName === "Apa itu Troffen?" && toogleFAQ1 && (
                <div className={styles.option_1_body}>
                  {obj.desc.map((desc) => (
                    <nav key={desc.id}>{desc.val}</nav>
                  ))}
                </div>
              )}
              {obj.optionName === "Bagaimana Cara Menjadi Guru di Troffen?" && toogleFAQ2 && (
                <div className={styles.option_1_body}>
                  {obj.desc.map((desc) => (
                    <nav key={desc.id}>{desc.val}</nav>
                  ))}
                </div>
              )}
              {obj.optionName === "Bagaimana Cara Memesan Kursus di Troffen?" && toogleFAQ3 && (
                <div className={styles.option_1_body}>
                  {obj.desc.map((desc) => (
                    <nav key={desc.id}>{desc.val}</nav>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

      {paymentType === tabObj[1].id && (
        <div className={styles.payment_container}>
          <div className={styles.QR}>
            <Image alt="" src={QR} priority width={300} height={300} />
            <nav>Transfer melalui QRIS a/n Troffen.</nav>
          </div>
        </div>
      )}

      {/* {paymentType === 1 && (
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
      )} */}
    </>
  );
};

export default Tab;
