import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { reqCoursesList, reqCourseDetail, submitAjukanKursus } from "../../../../functions/student";
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
import Cookies from "js-cookie";

export const getStaticPaths = async () => {
  const res = await reqCoursesList("Bearer 17|K01ITpaMfBrSTguFHR7XneeQrykSJ8BgX8ADNS2K");
  // console.log(res);
  const paths = res.data.data.map((item) => ({
    params: {
      courseId: `${item.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await reqCourseDetail("Bearer 17|K01ITpaMfBrSTguFHR7XneeQrykSJ8BgX8ADNS2K", params.courseId);
  return {
    props: {
      courses: res,
    },
  };
};

const Index = ({ courses }) => {
  // console.log(courses);
  const router = useRouter();

  const [ketertarikan, setKetertarikan] = useState("");
  const [reservation_payment_va, set_eservation_payment_va] = useState("BCA");

  const { id, tutor, tarif, title, rating, ulasan, is_online, hashtag, description, murid, course_area, is_wishlist } = courses.data;

  const convertToFloat = (val) => {
    const num = parseFloat(val);
    return parseFloat(num.toFixed(2));
  };

  const convertToRupiah = (val) => {
    const nominal = parseInt(val);
    const formattedNominal = nominal.toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    });

    return formattedNominal;
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    // const name = target.name;

    setKetertarikan(value);
  };

  const handleAjukanKursus = async (token, courseId, reason, reservation_payment_va) => {
    try {
      const res = await submitAjukanKursus(token, courseId, reason, reservation_payment_va);
      if (res.meta.code === 200) {
        router.push(`/monthly-pass`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GeneralTemplate title={`Cari Guru - Troffen`} desc={`Cari guru yang sesuai denganmu`} icon={`troffen.ico`} isNavbar={`backNavbar`}>
      <section id={styles.title}>
        <div className={styles.container}>
          <div className={styles.title_1}>Reservasi Kursus {title}</div>
          <div className={styles.title_2}>Ini akan menjadi kursus pertama Anda dengan {tutor}</div>
        </div>
      </section>

      <section id="content">
        <div className={styles.container}>
          <div className={styles.content_title}>{title}</div>
          <div className={styles.content_body}>
            <div className={styles.content_body_left}>
              <Image alt="" src={SubjekThumbnail} priority />
            </div>
            <div className={styles.content_body_right}>
              <div className={styles.label}>Guru</div>
              <div className={styles.content_body_right_top}>
                <div className={styles.content_body_right_top_guru}>
                  <nav>{tutor}</nav>
                  <Image alt="" src={Verify} priority />
                </div>
                <Image alt="" src={Divider} priority />
                <div className={styles.content_body_right_rating}>
                  <Image src={Star} alt="" />
                  <nav>
                    {convertToFloat(rating)} ({ulasan} Ulasan)
                  </nav>
                </div>
                <Image alt="" src={Divider} priority />
                <div className={styles.content_body_right_student}>
                  <Image alt="" src={GOR} priority />
                  <nav>{murid} Murid</nav>
                </div>
              </div>
              <div className={styles.content_body_right_bottom}>
                <div className={styles.content_body_right_bottom_label}>Tarif kursus (per sesi)</div>
                <div className={styles.content_body_right_bottom_price}>{convertToRupiah(tarif)}/jam</div>
              </div>
            </div>
          </div>
          {is_wishlist === "1" ? (
            <div className={styles.content_whitelist}>
              <Image src={RedLove} alt="" />
              <nav>Kursus sudah ada di wishlist Anda</nav>
            </div>
          ) : (
            ""
          )}

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
                    <div className={styles.button} onClick={() => handleAjukanKursus(Cookies.get("token"), id, ketertarikan, reservation_payment_va)}>
                      Ajukan Kursus
                    </div>
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
