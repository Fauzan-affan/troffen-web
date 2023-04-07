import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../../styles/cari-kursus/Reservasi.module.css";
import GeneralTemplate from "../../../../components/layouts/GeneralTemplate";
import Tips from "../../../../components/core/Tips";
import Textarea from "../../../../components/core/Textarea";

import SubjekThumbnail from "../../../../assets/img/Thumbnail.svg";
import Divider from "../../../../assets/img/Line8.svg";
import Verify from "../../../../assets/img/Verify.svg";
import Star from "../../../../assets/img/rating_star.svg";
import GOR from "../../../../assets/img/GroupOfReviewer.svg";
import RedLove from "../../../../assets/img/love_red.svg";

const Index = () => {
  const router = useRouter();
  // const { courseId } = router.query;

  const [state, setState] = useState({
    ketertarikan: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    // console.log("Anjay keganti", name, value);

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <GeneralTemplate title={`Cari Guru - Troffen`} desc={`Cari guru yang sesuai denganmu`} icon={`troffen.ico`} isNavbar={`backNavbar`}>
      <section id={styles.title}>
        <div className={styles.container}>
          <div className={styles.title_1}>Reservasi Kursus Basic UI/UX Design</div>
          <div className={styles.title_2}>Ini akan menjadi kursus pertama Anda dengan John Doe</div>
        </div>
      </section>

      <section id="content">
        <div className={styles.container}>
          <div className={styles.content_title}>Basic UI/UX Design</div>
          <div className={styles.content_body}>
            <div className={styles.content_body_left}>
              <Image alt="" src={SubjekThumbnail} priority />
            </div>
            <div className={styles.content_body_right}>
              <div className={styles.label}>Guru</div>
              <div className={styles.content_body_right_top}>
                <div className={styles.content_body_right_top_guru}>
                  <nav>John Doe</nav>
                  <Image alt="" src={Verify} priority />
                </div>
                <Image alt="" src={Divider} priority />
                <div className={styles.content_body_right_rating}>
                  <Image src={Star} alt="" />
                  <nav>4.5 (5 Ulasan)</nav>
                </div>
                <Image alt="" src={Divider} priority />
                <div className={styles.content_body_right_student}>
                  <Image alt="" src={GOR} priority />
                  <nav>30 Murid</nav>
                </div>
              </div>
              <div className={styles.content_body_right_bottom}>
                <div className={styles.content_body_right_bottom_label}>Tarif kursus (per sesi)</div>
                <div className={styles.content_body_right_bottom_price}>Rp 100.000/jam</div>
              </div>
            </div>
          </div>
          <div className={styles.content_whitelist}>
            <Image src={RedLove} alt="" />
            <nav>Kursus sudah ada di wishlist Anda</nav>
          </div>
          <hr />
        </div>

        <section id={styles.action}>
          <div className={styles.container}>
            <div className={styles.action_container}>
              <div className={styles.atur_jadwal}>
                <div className={styles.atur_jadwal_title}>Atur Jadwal Dengan Guru</div>
                <div className={styles.atur_jadwal_description}>
                  <div className={styles.atur_jadwal_description_label}>Deskripsikan Diri Anda</div>
                  <div className={styles.atur_jadwal_description_info}>Dekripsikan Dirimu. Ceritakan minat kamu ingiin mempelajari kursus ini kepada guru (Opsional)</div>
                </div>
                <div className={styles.atur_jadwal_action}>
                  <Textarea label="" name="ketertarikan" desc="" col={60} row={4} placeholder="Contoh: Saya memiiki ketertarikan kepada UI/UX sejak lama dan ingin belajar lebih banyak kepada Pak John." handleChange={handleChange} />
                  <div className={styles.action_container}>
                    <Link href={`/monthly-pass`} className={styles.button}>
                      Ajukan Kursus
                    </Link>
                  </div>
                </div>
              </div>
              <Tips
                tips1_title="Isi Data Dengan Valid"
                tips1_desc="Setiap data yang kamu masukkan di informasi pribadi harus valid dan dapat dipertanggung jawabkan agar profilmu dapat dilihat dengan baik oleh tutor."
                tips2_title="Gunakan Foto Profil yang Jelas"
                tips2_desc="Berikut adalah instruksi untuk foto profil yang baik:"
              />
            </div>
          </div>
        </section>
      </section>
    </GeneralTemplate>
  );
};

export default Index;
