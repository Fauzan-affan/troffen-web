import styles from "../styles/Ulasan.module.css";
import Image from "next/image";
import DashboardTemplate from "../components/layouts/DashboardTemplate";

import Line from "../assets/img/dashboard/line_short.svg";
// import PP from "../assets/img/dashboard/pp_wishlist.svg";
// import Love from "../assets/img/dashboard/love.svg";
import Star from "../assets/img/dashboard/star.svg";

import { getStudentUlasan } from "../functions/ulasan";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const Ulasan = () => {
  const [ulasan, setUlasan] = useState([]);

  const handleUlasan = async () => {
    try {
      const res = await getStudentUlasan(Cookies.get("token"));
      if (res !== undefined && res.meta.code === 200) {
        setUlasan(res.data.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleUlasan();
  }, []);

  return (
    <div className={styles.ulasan_container}>
      <div className={styles.ulasan_title}>Ulasan</div>
      <div className={styles.ulasan_content}>
        {/* {console.log(ulasan)} */}
        {ulasan.map((val, i) => (
          <div className={styles.ulasan_card} key={i}>
            <div className={styles.ulasan_card_section_1}>
              <div className={styles.ulasan_card_section_1_kursus}>
                <div className={styles.ulasan_card_section_1_kursus_label}>Kursus:</div>
                <div className={styles.ulasan_card_section_1_kursus_value}>{val.title}</div>
              </div>
              <div className={styles.ulasan_card_section_1_line}>
                <Image alt="" src={Line} />
              </div>
              <div className={styles.ulasan_card_section_1_rating}>
                <div className={styles.ulasan_card_section_1_rating_label}>Rating</div>
                <div className={styles.ulasan_card_section_1_rating_value}>
                  <Image src={Star} alt="" width={30} />
                  <div className={styles.ulasan_card_section_1_rating_value_given}>{`${val.star_rating}/5`}</div>
                </div>
              </div>
            </div>
            <div className={styles.ulasan_card_section_2}>
              <div className={styles.ulasan_card_section_2_pemberi}>
                <div className={styles.ulasan_card_section_2_pemberi_label}>Pemberi Ulasan</div>
                <div className={styles.ulasan_card_section_2_pemberi_value}>{Cookies.get("firstName")}</div>
              </div>
              <div className={styles.ulasan_card_section_2_tanggal}>
                <div className={styles.ulasan_card_section_2_label}>Tanggal</div>
                <div className={styles.ulasan_card_section_2_value}>{val.tanggal}</div>
              </div>
            </div>
            <div className={styles.ulasan_card_section_3}>
              <div className={styles.ulasan_card_section_3_text}>
                <nav>Ulasan:</nav>
                {val.comment}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Ulasan.getLayout = function getLayout(Ulasan) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Ulasan`}
    >
      {Ulasan}
    </DashboardTemplate>
  );
};

export default Ulasan;
