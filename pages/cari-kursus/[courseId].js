import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import GeneralTemplate from "../../components/layouts/GeneralTemplate";
import Tag from "../../components/core/Tag";

import styles from "../../styles/cari-kursus/DetailCourse.module.css";

import SubjekThumbnail from "../../assets/img/Thumbnail.svg";
import Verify from "../../assets/img/Verify.svg";
import Star from "../../assets/img/rating_star.svg";
import GOR from "../../assets/img/GroupOfReviewer.svg";
import loc1 from "../../assets/img/loc1.svg";
import loc2 from "../../assets/img/loc2.svg";
import Online from "../../assets/img/online.svg";
import Favorite from "../../assets/img/Fav.svg";
import Share from "../../assets/img/Share.svg";
import pp_comment from "../../assets/img/pp_comment.svg";
import Divider from "../../assets/img/Line8.svg";
import Filter from "../../assets/img/filter.svg";

const CourseId = () => {
  const router = useRouter();
  const { courseId } = router.query;

  return (
    <GeneralTemplate title={`Cari Guru - Troffen`} desc={`Cari guru yang sesuai denganmu`} icon={`troffen.ico`}>
      <div className={styles.container}>
        <div className={styles.body_left}>
          <div className={styles.card}>
            <div>
              <Image alt="" src={SubjekThumbnail} priority />
              <div className={styles.nama_guru}>
                <div className={styles.label_nama_guru}>Nama Guru</div>
                <div className={styles.value_nama_guru}>
                  <nav>John Doe</nav>
                  <Image alt="" src={Verify} priority />
                </div>
              </div>
              {/* <Link href={"#"} className={styles.view_profile}>
                Lihat Profil Lengkap
              </Link> */}
              <div className={styles.tarif_kursus}>
                <div className={styles.label_tarif_guru}>Tarif kursus &#x28;persesi&#x29;</div>
                <div className={styles.nominal_tarif_guru}>Rp 100.000/jam</div>
              </div>
            </div>
            <div className={styles.action_card_container}>
              <Link href={`reservasi/${courseId}`} className={styles.button}>
                Ajukan Kursus
              </Link>
            </div>
            <nav className={styles.report}>
              <p>Laporkan Guru</p>
            </nav>
          </div>
        </div>
        <div className={styles.body_right}>
          <div className={styles.info}>
            <div className={styles.info_title}>
              <div className={styles.info_title_label}>Basic UI/UX Design</div>
              <Image alt="" src={Divider} priority />
              <div className={styles.info_title_rating_bintang}>
                {[1, 2, 3, 4].map((i) => (
                  <Image alt="" src={Star} key={i} />
                ))}
              </div>
              <div className={styles.info_title_rating_ulasan}>&#x28;{1} ulasan&#x29;</div>
            </div>
            <div className={styles.info_tags}>
              <div className={styles.info_tags_online}>Kursus ini tersedia ONLINE</div>
              {["#DESAIN", "#UI/UX"].map((category, i) => (
                <div className={styles.info_tags_category} key={i}>
                  <Tag>{category}</Tag>
                </div>
              ))}
            </div>
            <div className={styles.info_description}>Kelas ini mengajarkan bagaimana menjadi Product Desainer terbaik dengan menerapkan prinsip-prinsip UI/UX Design</div>
            <div className={styles.info_murid}>
              <Image alt="" src={GOR} priority />
              <p>{30} Murid telah mengikuti kursus ini</p>
            </div>
            <div className={styles.info_area}>
              <div className={styles.info_area_wilayah}>
                <div className={styles.loc}>
                  <Image alt="" src={loc1} className={styles.loc1} />
                  <Image alt="" src={loc2} className={styles.loc2} />
                </div>
                <nav>Area: {`Jakarta`}</nav>
              </div>
              <Image alt="" src={Divider} priority />
              <div className={styles.info_area_online}>
                <Image alt="" src={Online} className={styles.online_img} />
                <nav>Tersedia Online: Ya</nav>
              </div>
            </div>
            <hr className={styles.hr_divider} style={{ margin: "1rem 0" }} />
            <div className={styles.info_action}>
              <div className={styles.info_wishlist}>
                <Image alt="" src={Favorite} />
                <p>Wishlist</p>
              </div>
              <Image alt="" src={Divider} priority />
              <div className={styles.info_share}>
                <Image alt="" src={Share} />
                <p>Share</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="course_info">
        <div className={styles.container_body}>
          <hr className={styles.hr_divider} />
          <div className={styles.course_info}>
            <div className={styles.course_info_title}>Informasi Kursus</div>
            <div className={styles.course_info_detail}>Kelas ini mengajarkan bagaimana menjadi Product Desainer terbaik dengan menerapkan prinsip-prinsip UI/UX Design</div>
          </div>
          <hr className={styles.hr_divider} />
        </div>
      </section>
      <section id="ulasan">
        <div className={styles.container_body}>
          <div className={styles.ulasan_action}>
            <div className={styles.ulasan_action_label}>Ulasan</div>
            <div className={styles.filter}>
              <p>Urutkan:</p>
              <select name="" id="" className={styles.select_filter}>
                <option id={styles.select_id} value="postingan_oldes_newest">
                  Postingan: Oldest to Newest
                </option>
                <option id={styles.select_id} value="postingan_newest_oldes">
                  Postingan: Newest to Oldest
                </option>
              </select>
              <Image alt="" src={Filter} priority className={styles.filter_icon} />
            </div>
          </div>
          {[1, 2, 3].map((i) => (
            <div className={styles.ulasan_commment} key={i}>
              <div className={styles.ulasan_commment_card}>
                <div className={styles.ulasan_comment_header}>
                  <div className={styles.ulasan_commment_card_rating}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Image alt="" src={Star} key={i} />
                    ))}
                  </div>
                  <div className={styles.ulasan_commment_card_time}>4 minggu lalu</div>
                </div>
                <div className={styles.ulasan_comment_body}>
                  <div className={styles.ulasan_comment_body_profile}>
                    <Image alt="" src={pp_comment} />
                    {`Lita`}
                  </div>
                  <div className={styles.ulasan_comment_body_value}>Materi dari guru sangat up to date dan bagus</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </GeneralTemplate>
  );
};

export default CourseId;
