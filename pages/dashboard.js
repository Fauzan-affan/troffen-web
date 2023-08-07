import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies from "js-cookie";
import DashboardTemplate from "../components/layouts/DashboardTemplate";
import styles from "../styles/dashboard/Dashboard.module.css";

import Modal from "../components/core/modal/Modal";
import Textarea from "../components/core/Textarea";
import Stars from "../components/core/Star";
import Tutor from "../components/dashboard/Tutor";
import Student from "../components/dashboard/Student";
import Blank from "../components/blank/blank";

import GreenChecklist from "../assets/img/dashboard/greenchecklist.svg";
import Copy from "../assets/img/dashboard/copy.svg";

import { getDashboardStudent, getDashboardTutor, responCourseReq } from "../functions/dashboard";
import { getProfile } from "../functions/profile";
import { postUlasan } from "../functions/ulasan";

const Dashboard = () => {
  // console.log(courselist);
  // console.log(Cookies.get("role"));

  const router = useRouter();

  const [modal, setModal] = useState(false);
  const [ulasan, setUlasan] = useState("");
  const [rating, setRating] = useState(0);
  const [isUlasanTerkirim, setIsUlasanTerkirim] = useState(false);
  const [reservId, setReservId] = useState("");

  const [stickyActive, setStickyActive] = useState(true);
  const [filterInput, setFilterInput] = useState("");
  const [role, setRole] = useState("");

  const [courselist, setCourselist] = useState();
  const [waitingRes, setWaitingRes] = useState();

  const [profile, setProfile] = useState({});
  const [iSCopy, setCopy] = useState(false);

  const [age, setAge] = useState("");

  const closeStickyModal = () => {
    setStickyActive(false);
  };

  const handleModalUlasan = (reservId) => {
    setReservId(reservId);
    setModal(!modal);
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    // const name = target.name;

    setUlasan(value);
  };

  const handleKirim = async (e) => {
    e.preventDefault();
    try {
      // console.log(reservId, rating, ulasan);
      const res = await postUlasan(Cookies.get("token"), reservId, rating, ulasan);
      // console.log(res);
      if (res !== undefined && res.meta.code === 200) {
        setIsUlasanTerkirim(true);
      } else if (res !== undefined && res.meta.code === 400) {
        console.log("Sudah pernah diulas");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCourseList = async () => {
    try {
      if (role === "student") {
        const res = await getDashboardStudent(Cookies.get("token"));
        // console.log(res);
        if (res !== undefined && res.meta.code === 200) {
          const needActions = res.data.data.filter((item) => item.course_status === "Menunggu konfirmasi").length;

          setCourselist(res.data.data);
          setWaitingRes(needActions);
        }
      } else if (role === "tutor") {
        const res = await getDashboardTutor(Cookies.get("token"));
        // console.log(res);
        if (res !== undefined && res.meta.code === 200) {
          const needActions = res.data.data.filter((item) => item.course_status === "Menunggu konfirmasi").length;

          setCourselist(res.data.data);
          setWaitingRes(needActions);
        }
      }

      const res = await getProfile(Cookies.get("token"));
      if (res !== undefined && res.meta.code === 200) {
        const age = new Date().getFullYear() - res.data.user.birth_date.slice(0, 4);
        setAge(age);
        setProfile(res.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleResponCourseReq = async (reservId, action) => {
    // console.log(reservId, action);
    try {
      const res = await responCourseReq(Cookies.get("token"), reservId, action);

      if (res !== undefined && res.meta.code === 200) {
        router.reload();
      }
    } catch (error) {}
  };

  const copyText = reservId !== "" && `troffen.com/cari-kursus`;

  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(copyText);
  };

  useEffect(() => {
    handleCourseList();

    Cookies.get("role").length > 0 && setRole(Cookies.get("role"));
  }, [role]);

  return (
    <section id="container">
      <div className={styles.container}>
        <Modal onClose={closeStickyModal} isSticky={stickyActive} />

        {courselist !== undefined && courselist.length === 0 && <Blank menu={"permintaan kursus"} />}

        {role === "tutor" && courselist !== undefined && courselist.length > 0 && <Tutor dataCourse={courselist} respon={handleResponCourseReq} waiting={waitingRes} filterInput={filterInput} setFilterInput={setFilterInput} age={age} />}
        {role === "student" && courselist !== undefined && courselist.length > 0 && (
          <Student dataCourse={courselist} respon={handleResponCourseReq} waiting={waitingRes} filterInput={filterInput} setFilterInput={setFilterInput} age={age} onOpenModal={handleModalUlasan} />
        )}

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
                    <Stars rating={rating} setRating={setRating} />
                  </div>
                </div>
                <div className={styles.ulasan_actions}>
                  <div className={styles.ulasan_kirim}>
                    <button onClick={(e) => handleKirim(e)}>Kirim Ulasan</button>
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
                  <div className={styles.terkirim_rekomendasi_link}>
                    <div className={styles.copy_link}>
                      <div className={styles.copy_link_left}>{copyText}</div>
                      <div className={styles.copy_link_right} onClick={() => handleCopy()}>
                        <Image alt="" src={Copy} width={20} />
                        <nav>Salin link</nav>
                      </div>
                    </div>
                    {iSCopy && (
                      <div className={styles.copied_link} onClick={() => setCopy(false)}>
                        Selamat! link berhasil disalin. <b>Salin kembali?</b>
                      </div>
                    )}
                  </div>
                </div>
                {/* <div className={styles.terkirim_share}>
                  <div className={styles.terkirim_share_title}>atau rekomendasikan melalui</div>
                  <div className={styles.terkirim_share_sosmed}>
                    <div className={styles.terkirim_share_sosmed_wa}></div>
                    <div className={styles.terkirim_share_sosmed_twitter}></div>
                    <div className={styles.terkirim_share_sosmed_linkedin}></div>
                  </div>
                </div> */}
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
      menu={`Dasbor`}
    >
      {Dashboard}
    </DashboardTemplate>
  );
};

export default Dashboard;
