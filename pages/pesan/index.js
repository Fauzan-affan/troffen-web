import Image from "next/image";
import { useRouter } from "next/router";

import { useState } from "react";
import DashboardTemplate from "../../components/layouts/DashboardTemplate";
import Modal from "../../components/core/modal/Modal";
import styles from "../../styles/pesan/Pesan.module.css";

import VectorAction from "../../assets/img/dashboard/VectorAction.svg";
import PP from "../../assets/img/dashboard/pp_pesan.svg";
import dot from "../../assets/img/dashboard/dot.svg";

const Pesan = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState({
    usia: 0,
    riwayatKursus: 0,
  });

  const handleModal = (umur, rk) => {
    setProfile((profile) => ({
      ...profile,
      usia: umur,
      riwayatKursus: rk,
    }));
    setModal(!modal);
  };

  return (
    <div className={styles.pesan_container}>
      {[1, 2, 3, 4].map((val, i) => (
        <>
          <div className={styles.pesan_card} key={i}>
            <div className={styles.pesan_card_info}>
              <div className={styles.pesan_card_info_profile}>
                <div className={styles.pesan_card_info_profile_pp}>
                  <Image src={PP} alt="" />
                </div>
                <div className={styles.pesan_card_info_profile_name_course}>
                  <div className={styles.pesan_card_info_profile_name_course_top}>
                    <div className={styles.pesan_name}>{`Fabian Maulana`}</div>
                    <Image src={dot} alt="" />
                    <div className={styles.pesan_course}>{`Kursus Programming Python`}</div>
                  </div>
                  <div className={styles.pesan_card_info_profile_detail} onClick={() => handleModal(26, 2)}>
                    Lihat profil
                  </div>
                </div>
              </div>
              <div className={styles.pesan_card_info_text}>Hi, saya menunggu konfirmasi Anda untuk menerima permintaan menjadi guru...</div>
            </div>
            <div className={styles.pesan_card_action}>
              <Image src={VectorAction} alt="" onClick={() => router.push(`pesan/${i}`)} />
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
