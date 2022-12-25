import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../../styles/cari-guru/Reservasi.module.css";
import LoginTemplate from "../../../../components/layouts/LoginTemplate";

import SubjekThumbnail from "../../../../assets/img/Thumbnail.svg";
import Divider from "../../../../assets/img/Line8.svg";
import Verify from "../../../../assets/img/Verify.svg";
import Star from "../../../../assets/img/rating_star.svg";
import GOR from "../../../../assets/img/GroupOfReviewer.svg";
import RedLove from "../../../../assets/img/love_red.svg";
import Bohlam from "../../../../assets/img/png/idea.png";

const index = () => {
  const router = useRouter();
  const { courseId } = router.query;

  return (
    <LoginTemplate title={`Cari Guru - Troffen`} desc={`Cari guru yang sesuai denganmu`} icon={`troffen.ico`} isNavbar={false}>
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
                  <div className={styles.atur_jadwal_description_info}>Ceritakan minat Anda ingin mempelajari kursus ini kepada guru (Opsional)</div>
                </div>
                <div className={styles.atur_jadwal_action}>
                  <textarea name="" id="" cols="60" rows="3" placeholder="Contoh: Saya memiiki ketertarikan kepada UI/UX sejak lama dan ingin belajar lebih banyak kepada Pak John."></textarea>
                  <div className={styles.action_container}>
                    <Link href={`${courseId}/monthly-pass`} className={styles.button}>
                      Ajukan Kursus
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.tips}>
                <div className={styles.tips_container}>
                  <div className={styles.tips_title}>
                    <Image alt="tips & trick" src={Bohlam} priority width={30} height={30} />
                    <nav>Troffen’s Tips</nav>
                  </div>
                  <div className={styles.tips_1}>
                    <div className={styles.tips_1_title}>Isi Data Dengan Valid</div>
                    <div className={styles.tips_1_desc}>Setiap data yang Anda masukkan di informasi pribadi harus valid dan dapat dipertanggung jawabkan agar profil Anda dapat dilihat dengan baik oleh murid.</div>
                  </div>
                  <div className={styles.tips_2}>
                    <div className={styles.tips_2_title}>Gunakan Foto Profil yang Jelas</div>
                    <div className={styles.tips_2_desc}>Berikut adalah instruksi untuk foto profil yang baik:</div>
                    <ul>
                      <li>Wajah terlihat jelas dan foto tidak blur</li>
                      <li>Tidak menggunakan logo atau instansi tertentu</li>
                      <li>Foto profil tidak mengandung SARA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </LoginTemplate>
  );
};

export default index;
