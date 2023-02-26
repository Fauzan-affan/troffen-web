import { useState, useEffect } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import DashboardTemplate from "../components/layouts/DashboardTemplate";
import styles from "../styles/dashboard/Dashboard.module.css";

import Modal from "../components/core/modal/Modal";
import Textarea from "../components/core/Textarea";
import Stars from "../components/core/Star";
import Tutor from "../components/dashboard/Tutor";
import Student from "../components/dashboard/Student";

import GreenChecklist from "../assets/img/dashboard/greenchecklist.svg";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [ulasan, setUlasan] = useState("");
  const [isUlasanTerkirim, setIsUlasanTerkirim] = useState(false);
  const [stickyActive, setStickyActive] = useState(true);
  const [isNewChat, setIsNewChat] = useState(true);
  const [filterInput, setFilterInput] = useState("");
  const [role, setRole] = useState("");

  const closeStickyModal = () => {
    setStickyActive(false);
  };

  const handleModalUlasan = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setUlasan((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleKirim = () => {
    setIsUlasanTerkirim(true);
  };

  // const ratingStars = {
  //   size: 50,
  //   count: 10,
  //   color: "black",
  //   activeColor: "red",
  //   value: 7.5,
  //   a11y: true,
  //   isHalf: true,
  //   emptyIcon: <i className="far fa-star" />,
  //   halfIcon: <i className="fa fa-star-half-alt" />,
  //   filledIcon: <i className="fa fa-star" />,
  //   onChange: (newValue) => {
  //     console.log(`Example 2: new value is ${newValue}`);
  //   },
  // };

  useEffect(() => {
    Cookies.get("role").length > 0 && setRole(Cookies.get("role"));
  }, [role]);

  return (
    <section id="container">
      <div className={styles.container}>
        <Modal onClose={closeStickyModal} isSticky={stickyActive} />
        {role === "tutor" && <Tutor filterInput={filterInput} isNewChat={isNewChat} setFilterInput={setFilterInput} />}
        {role === "student" && <Student filterInput={filterInput} isNewChat={isNewChat} setFilterInput={setFilterInput} onOpenModal={handleModalUlasan} />}
        <Modal onClose={handleModalUlasan} modalUlasan={modal}>
          {!isUlasanTerkirim && (
            <div className={styles.ulasan_container}>
              <form onSubmit={""}>
                <div className={styles.ulasan_title}>Form Ulasan Kursus</div>
                <div className={styles.ulasan_comment}>
                  <div className={styles.ulasan_comment_title}>Ulasan Tentang Kursus & Guru</div>
                  <div className={styles.ulasan_comment_desc}>Berikan ulasan Anda seputar kursus bersama guru.</div>
                  <div className={styles.ulasan_comment_textarea}>
                    <Textarea
                      // label="Keterangan Kursus"
                      name="ulasan"
                      // desc="Contoh: Bahasa Inggris Dasar untuk pemula. Materi akan membahas Grammar, Vocabulary dan Speaking."
                      col={59}
                      row={4}
                      placeholder="Tulis ulasan..."
                      handleChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.ulasan_rating}>
                  <div className={styles.ulasan_rating_title}>Rating Kursus</div>
                  <div className={styles.ulasan_rating_stars}>
                    <Stars />
                  </div>
                </div>
                <div className={styles.ulasan_actions}>
                  <div className={styles.ulasan_kirim}>
                    <button onClick={() => handleKirim()}>Kirim Ulasan</button>
                  </div>
                  <div className={styles.ulasan_nanti} onClick={() => handleModalUlasan()}>
                    <button>Nanti Saja</button>
                  </div>
                </div>
              </form>
            </div>
          )}
          {isUlasanTerkirim && (
            <div className={styles.terkirim_container}>
              <div>
                <div className={styles.terkirim_title}>Beri Ulasan Berhasil</div>
                <div className={styles.terkirim_icon}>
                  <Image src={GreenChecklist} alt="" />
                </div>
                <div className={styles.terkirim_rekomendasi}>
                  <div className={styles.terkirim_rekomendasi_title}>Rekomendasikan Guru</div>
                  <div className={styles.terkirim_rekomendasi_link}></div>
                </div>
                <div className={styles.terkirim_share}>
                  <div className={styles.terkirim_share_title}>atau rekomendasikan melalui</div>
                  <div className={styles.terkirim_share_sosmed}>
                    <div className={styles.terkirim_share_sosmed_wa}></div>
                    <div className={styles.terkirim_share_sosmed_twitter}></div>
                    <div className={styles.terkirim_share_sosmed_linkedin}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

Dashboard.getLayout = function getLayout(Dashboard) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Dashbor`}
    >
      {Dashboard}
    </DashboardTemplate>
  );
};

export default Dashboard;
