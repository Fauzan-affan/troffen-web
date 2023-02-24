import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import DashboardTemplate from "../../components/layouts/DashboardTemplate";

import styles from "../../styles/pesan/UserId.module.css";

import Modal from "../../components/core/modal/Modal";
import Chat from "../../components/core/chat/Chat";

import PP from "../../assets/img/dashboard/pp_pesan.svg";
import dot from "../../assets/img/dashboard/dot.svg";

const Index = () => {
  const router = useRouter();
  const { userId } = router.query;

  const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState({
    usia: 0,
    riwayatKursus: 0,
  });
  const [actionClick, setActionClick] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

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

  return (
    <>
      <div className={styles.pesan_card}>
        <div className={styles.pesan_card_info_profile}>
          <div className={styles.pesan_card_info_profile_pp}>
            <Image src={PP} alt="" />
          </div>
          <div className={styles.pesan_card_info_profile_name_course}>
            <div className={styles.pesan_card_info_profile_name_course_top}>
              <div className={styles.pesan_name}>{`Fabian Maulana ${userId}`}</div>
              <Image src={dot} alt="" />
              <div className={styles.pesan_course}>{`Kursus Programming Python`}</div>
            </div>
            <div className={styles.pesan_card_info_profile_detail} onClick={() => handleModal(26, 2)}>
              Lihat profil
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.chat_container}>
          <div className={styles.chat_confirm_container}>
            {!actionClick ? (
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
            )}
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
