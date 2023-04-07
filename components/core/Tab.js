import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "../../styles/MonthlyPass.module.css";
import sc from "../../styles/core/Tab.module.css";
import Strip from "../../assets/img/strip.svg";
import Plus from "../../assets/img/plus.svg";
import QR from "../../assets/img/png/qr.png";
import ToogleActive from "../../assets/img/dashboard/ToggleActive.svg";
import ToogleNonActive from "../../assets/img/dashboard/Toggle.svg";
import pp_iklan from "../../assets/img/dashboard/pp_iklan.svg";
import star from "../../assets/img/dashboard/star.svg";

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

const Tab = ({ tabObj, defaultType = "", isHeader, isBody, isCard, isCardBody, isProfile, Courses, handleToogleCard, handleStage }) => {
  const [headerType, setheaderType] = useState(defaultType);
  const [toogleBCA, setToogleBCA] = useState(true);
  const [tooglePermata, setTooglePermata] = useState(false);
  const [toogleFAQ1, setToogleFAQ1] = useState(true);
  const [toogleFAQ2, setToogleFAQ2] = useState(false);
  const [toogleFAQ3, setToogleFAQ3] = useState(false);

  const changeHeaderType = (type) => {
    setheaderType(type);
    if (isProfile) {
      handleStage(type);
    }
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
            <div className="masuk_sebagai_murid" onClick={() => changeHeaderType(obj.id)} key={obj.id}>
              <nav style={headerType === obj.id ? masukSebagaiSelectedLabel : masukSebagaiLabel}>{obj.title}</nav>
              <hr style={headerType === obj.id ? masukSebagaiSelectedHr : masukSebagaiHr} />
            </div>
          ))}
        </div>
      )}

      {isCard && (
        <div className={sc.header_container}>
          <div className={sc.header}>
            {tabObj.map((obj, i) => (
              <div className={sc.header_tab} onClick={() => changeHeaderType(obj.id)} key={obj.id}>
                <nav style={headerType === obj.id ? masukSebagaiSelectedLabel : masukSebagaiLabel}>{obj.title}</nav>
                <hr style={headerType === obj.id ? masukSebagaiSelectedHr : masukSebagaiHr} />
              </div>
            ))}
          </div>
          {isCardBody && (
            <div className={sc.button}>
              <button onClick={() => handleStage("daftar iklan")}>Buat Iklan</button>
            </div>
          )}
        </div>
      )}

      {isProfile && (
        <div className={sc.header_container}>
          <div className={sc.header}>
            {tabObj.map((obj, i) => (
              <div className={sc.header_tab} onClick={() => changeHeaderType(obj.id)} key={obj.id}>
                <nav style={headerType === obj.id ? masukSebagaiSelectedLabel : masukSebagaiLabel}>{obj.title}</nav>
                <hr style={headerType === obj.id ? masukSebagaiSelectedHr : masukSebagaiHr} />
              </div>
            ))}
          </div>
        </div>
      )}

      {isBody &&
        headerType === tabObj[0].id &&
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

      {isBody && headerType === tabObj[1].id && (
        <div className={styles.payment_container}>
          <div className={styles.QR}>
            <Image alt="" src={QR} priority width={300} height={300} />
            <nav>Transfer melalui QRIS a/n Troffen.</nav>
          </div>
        </div>
      )}

      {isCardBody && (
        <div className={sc.container_card}>
          {Courses.map((course, i) => {
            if (headerType === "Semua") {
              return (
                <div className={sc.card} key={i} onClick={() => handleToogleCard(course.id)}>
                  <div className={sc.card_status}>
                    <Image alt="" src={course.status === "Aktif" ? ToogleActive : ToogleNonActive} />
                    <nav>{course.status}</nav>
                  </div>
                  <div className={sc.card_image}>
                    <Image alt="" src={pp_iklan} />
                  </div>
                  <div className={sc.card_kursus}>{course.kursus}</div>
                  <div className={sc.card_rating}>
                    <div className={sc.card_rating_img}>
                      <Image alt="" src={star} />
                    </div>
                    <nav className={sc.card_rating_rt}>{course.rating}</nav>
                    <nav>{`(${course.totalUlasan} Ulasan)`}</nav>
                  </div>
                </div>
              );
            }
          })}

          {Courses.map((course, i) => {
            if (headerType === course.status) {
              return (
                <div className={sc.card} key={i}>
                  <div className={sc.card_status}>
                    <Image alt="" src={ToogleActive} />
                    <nav>{course.status}</nav>
                  </div>
                  <div className={sc.card_image}>
                    <Image alt="" src={pp_iklan} />
                  </div>
                  <div className={sc.card_kursus}>{course.kursus}</div>
                  <div className={sc.card_rating}>
                    <div className={sc.card_rating_img}>
                      <Image alt="" src={star} />
                    </div>
                    <nav className={sc.card_rating_rt}>{course.rating}</nav>
                    <nav>{`(${course.totalUlasan} Ulasan)`}</nav>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}

      {/* {headerType === 1 && (
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
