import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { useState, useEffect } from "react";
import DashboardTemplate from "../../components/layouts/DashboardTemplate";
import Modal from "../../components/core/modal/Modal";
import styles from "../../styles/pesan/Pesan.module.css";

import VectorAction from "../../assets/img/dashboard/VectorAction.svg";
import PP from "../../assets/img/PEPE.svg";
import dot from "../../assets/img/dashboard/dot.svg";

import { getPesan, getPesanStudent } from "../../functions/dashboard";

const Pesan = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState({
    usia: 0,
    riwayatKursus: 0,
  });

  const [message, getMessage] = useState([]);

  const handleModal = (umur, rk) => {
    // console.log(umur, rk);
    setProfile((profile) => ({
      ...profile,
      usia: umur,
      riwayatKursus: rk,
    }));
    setModal(!modal);
  };

  const handleMessageList = async () => {
    try {
      if (Cookies.get("role") === "student") {
        const res = await getPesanStudent(Cookies.get("token"));
        // console.log(res);
        if (res !== undefined && res.meta.code === 200) {
          getMessage(res.data.data);
        }
      } else if (Cookies.get("role") === "tutor") {
        const res = await getPesan(Cookies.get("token"));
        // console.log(res);
        if (res !== undefined && res.meta.code === 200) {
          getMessage(res.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleMessageList();
  }, []);

  return (
    <div className={styles.pesan_container}>
      {/* {console.log(message)} */}
      {message.map((item, i) => (
        <>
          <div className={styles.pesan_card} key={i}>
            <div className={styles.pesan_card_info}>
              <div className={styles.pesan_card_info_profile}>
                <div className={styles.pesan_card_info_profile_pp}>
                  <Image src={PP} alt="" />
                </div>
                <div className={styles.pesan_card_info_profile_name_course}>
                  <div className={styles.pesan_card_info_profile_name_course_top}>
                    <div className={styles.pesan_name}>{item.tutor_name}</div>
                    <Image src={dot} alt="" />
                    <div className={styles.pesan_course}>{`Kursus ${item.course_name}`}</div>
                    <Image src={dot} alt="" />
                    <div className={styles.pesan_course}>{`Kursus ${Cookies.get("role") === "student" ? item.course_status : item.status}`}</div>
                  </div>
                  <div className={styles.pesan_card_info_profile_detail} onClick={() => handleModal(item.student_age, item.student_experiences)}>
                    Lihat profil
                  </div>
                </div>
              </div>
              <div className={styles.pesan_card_info_text}>{item.message}</div>
            </div>
            <div className={styles.pesan_card_action}>
              <Image src={VectorAction} alt="" onClick={() => router.push(`pesan/${item.reservation_id}`)} />
            </div>
          </div>
        </>
      ))}
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
    </div>
  );
};

Pesan.getLayout = function getLayout(Pesan) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Pesan`}
    >
      {Pesan}
    </DashboardTemplate>
  );
};

export default Pesan;
