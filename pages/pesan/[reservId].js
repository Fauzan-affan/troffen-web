import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import DashboardTemplate from "../../components/layouts/DashboardTemplate";

import styles from "../../styles/pesan/ReservId.module.css";

import Modal from "../../components/core/modal/Modal";
import Chat from "../../components/core/chat/Chat";

import PP from "../../assets/img/PEPE.svg";
import dot from "../../assets/img/dashboard/dot.svg";

import { getPesan, getPesanStudent, getPesanDetailStudent, getPesanDetailTutor } from "../../functions/dashboard";

// export const getStaticPaths = async () => {
//   const res = await getPesan("Bearer 17|K01ITpaMfBrSTguFHR7XneeQrykSJ8BgX8ADNS2K");
//   // console.log(res);
//   const paths = res.data.data.map((item) => ({
//     params: {
//       reservId: `${item.reservation_id}`,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {};

const Index = () => {
  const router = useRouter();
  const { reservId } = router.query;

  const [detailMessage, setDetailMessage] = useState([]);
  const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState({
    usia: 0,
    riwayatKursus: 0,
  });
  const [actionClick, setActionClick] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const [studentName, setStudentName] = useState();
  const [courseName, setCourseName] = useState();
  const [age, setAge] = useState();
  const [exp, setExp] = useState();

  const handleModal = (umur, rk) => {
    setProfile((profile) => ({
      ...profile,
      usia: umur,
      riwayatKursus: rk,
    }));
    setModal(!modal);
  };

  const handleConfirm = (res) => {
    res === "yes" ? setIsConfirmed(true) : setIsConfirmed(false);
    setActionClick(true);
  };

  const handlePesanDetail = async () => {
    try {
      if (Cookies.get("role") === "student") {
        const res = await getPesanDetailStudent(Cookies.get("token"), reservId);
        // console.log(res);
        if (res !== undefined && res.meta.code === 200) {
          setDetailMessage(res.data.data);

          const ageAndExperience = await getPesanStudent(Cookies.get("token"));
          if (ageAndExperience !== undefined && ageAndExperience.meta.code === 200) {
            const age = ageAndExperience.data.data.filter((item) => item.reservation_id === reservId)[0].student_age;
            const exp = ageAndExperience.data.data.filter((item) => item.reservation_id === reservId)[0].student_experiences;
            const studentname = ageAndExperience.data.data.filter((item) => item.reservation_id === reservId)[0].student_name;
            const coursename = ageAndExperience.data.data.filter((item) => item.reservation_id === reservId)[0].course_name;

            setAge(age);
            setExp(exp);
            setStudentName(studentname);
            setCourseName(coursename);
          }
        }
      } else if (Cookies.get("role") === "tutor") {
        const res = await getPesanDetailTutor(Cookies.get("token"), reservId);
        // console.log(res);
        if (res !== undefined && res.meta.code === 200) {
          setDetailMessage(res.data.data);

          const ageAndExperience = await getPesan(Cookies.get("token"));
          if (ageAndExperience !== undefined && ageAndExperience.meta.code === 200) {
            const age = ageAndExperience.data.data.filter((item) => item.reservation_id === reservId)[0].student_age;
            const exp = ageAndExperience.data.data.filter((item) => item.reservation_id === reservId)[0].student_experiences;
            const studentname = ageAndExperience.data.data.filter((item) => item.reservation_id === reservId)[0].student_name;
            const coursename = ageAndExperience.data.data.filter((item) => item.reservation_id === reservId)[0].course_name;

            setAge(age);
            setExp(exp);
            setStudentName(studentname);
            setCourseName(coursename);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePesanDetail();
  }, []);

  return (
    <>
      {/* {console.log(detailMessage)} */}
      <div className={styles.pesan_card}>
        <div className={styles.pesan_card_info_profile}>
          <div className={styles.pesan_card_info_profile_pp}>
            <Image src={PP} alt="" />
          </div>
          <div className={styles.pesan_card_info_profile_name_course}>
            <div className={styles.pesan_card_info_profile_name_course_top}>
              <div className={styles.pesan_name}>{studentName}</div>
              <Image src={dot} alt="" />
              <div className={styles.pesan_course}>{`Kursus ${courseName}`}</div>
            </div>
            <div className={styles.pesan_card_info_profile_detail} onClick={() => handleModal(age, exp)}>
              Lihat profil
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.chat_container}>
          <div className={styles.chat_confirm_container}>
            {/* {!actionClick ? (
              <>
                <Chat chatType={"confirm"} handleConfirm={handleConfirm} />
                <Chat chatType={"info"} text={`Hi, saya menunggu konfirmasi Anda untuk menerima permintaan menjadi Guru Kursus ${"Programming Phyton"} pada  ${"15 Jan 2022"}`} />
              </>
            ) : (
              ""
            )}

            {actionClick && !isConfirmed ? <Chat chatType={"tutor"} text={`Mohon maaf, saya belum bisa menerima permintaan kursus Anda saat ini. Silakan ajukan di lain waktu.`} /> : ""}
            {actionClick && isConfirmed ? (
              <>
                <Chat chatType={"tutorConfirmed"} text={`Yeay, Anda telah menerima permintaan kursus ${"Fabian Maulana"}! `} />
                <Chat chatType={"tutor"} text={`Halo ${"Fabian Maulana"}, saya menerima permintaan kursus Anda. Anda dapat menghubungi saya di di +${"6281282991021"} atau melalui email ${"fauzan@gmail.com"}.`} name={`Fauzan`} />
              </>
            ) : (
              ""
            )} */}

            {/* {console.log(detailMessage)} */}

            {detailMessage.map((item, i) => {
              return (
                <div key={i}>
                  {Cookies.get("role") === item.action ? (
                    <div className={styles.home_user}>
                      {item.message.replace(/<[^>]+>/g, " ").includes("Yeay") ? (
                        <Chat chatType={Cookies.get("role") === item.action ? "tutorConfirmed" : "info"} text={item.message.replace(/<[^>]+>/g, " ")} />
                      ) : (
                        <Chat chatType={Cookies.get("role") === item.action ? "tutor" : "info"} text={item.message.replace(/<[^>]+>/g, " ")} />
                      )}
                    </div>
                  ) : (
                    <div className={styles.away_user}>
                      {item.message.replace(/<[^>]+>/g, " ").includes("Yeay") ? (
                        <Chat chatType={Cookies.get("role") === item.action ? "tutorConfirmed" : "info"} text={item.message.replace(/<[^>]+>/g, " ")} />
                      ) : (
                        <Chat chatType={Cookies.get("role") === item.action ? "tutor" : "info"} text={item.message.replace(/<[^>]+>/g, " ")} />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Modal modalInfo={modal} handleModal={handleModal}>
        <div className={styles.lihat_profile}>
          <div className={styles.profile_usia}>
            <div className={styles.profile_usia_label}>Usia</div>
            <div className={styles.profile_usia_value}>{profile.usia}</div>
          </div>
          <div className={styles.profile_riwayat_kursus}>
            <div className={styles.profile_riwayat_kursus_label}>Riwayat Kursus</div>
            <div className={styles.profile_riwayat_kursus_value}>{profile.riwayatKursus} kursus</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

Index.getLayout = function getLayout(Index) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Pesan`}
    >
      {Index}
    </DashboardTemplate>
  );
};

export default Index;
