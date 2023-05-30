import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import Image from "next/image";
import Link from "next/link";

import { reqCoursesList, reqCourseDetail, courseReview, addOrRemoveStudentWishlist } from "../../functions/student";

import GeneralTemplate from "../../components/layouts/GeneralTemplate";
import Tag from "../../components/core/Tag";
import Modal from "../../components/core/modal/Modal";

import styles from "../../styles/cari-kursus/DetailCourse.module.css";

import SubjekThumbnail from "../../assets/img/Thumbnail.svg";
import PP from "../../assets/img/thumbnail_blank.svg";

import Verify from "../../assets/img/Verify.svg";
import Star from "../../assets/img/rating_star.svg";
import GOR from "../../assets/img/GroupOfReviewer.svg";
import loc1 from "../../assets/img/loc1.svg";
import loc2 from "../../assets/img/loc2.svg";
import Online from "../../assets/img/online.svg";
import Favorite from "../../assets/img/Fav.svg";
import RedLove from "../../assets/img/love_red.svg";
import Share from "../../assets/img/Share.svg";
import pp_comment from "../../assets/img/pp_comment.svg";
import Divider from "../../assets/img/Line8.svg";
import Filter from "../../assets/img/filter.svg";

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
  const review = await courseReview("Bearer 17|K01ITpaMfBrSTguFHR7XneeQrykSJ8BgX8ADNS2K", params.courseId);

  return {
    props: {
      courseId: params.courseId,
      reviews: review,
    },
  };
};

const CourseId = ({ courseId, reviews }) => {
  // console.log(Cookies.get("token"));

  const router = useRouter();
  // console.log(router.params);

  const [course, setCourse] = useState({ id: "", tutor: "", tarif: "", title: "", rating: "", ulasan: "", is_online: "", hashtag: "", description: "", murid: "", course_area: "", is_wishlist: "" });
  const [modalWishlist, setModalWishlist] = useState(false);

  const { id, tutor, tarif, title, rating, ulasan, is_online, hashtag, description, murid, course_area, is_wishlist } = course;

  const convertToRupiah = (val) => {
    const nominal = parseInt(val);
    const formattedNominal = nominal.toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    });

    return formattedNominal;
  };

  const courseRating = (rating) => {
    let ratings = [];
    const toStringVal = Math.round(parseInt(rating));
    for (let i = 0; i < toStringVal; i++) {
      ratings.push(i + 1);
    }

    return ratings;
  };

  const closeModalWishlist = () => {
    setModalWishlist(false);
    router.reload();
  };

  const handleCourses = async () => {
    try {
      const res = await reqCourseDetail(Cookies.get("token"), courseId);
      if (res.meta.code === 200) {
        const { id, tutor, tarif, title, rating, ulasan, is_online, hashtag, description, murid, course_area, is_wishlist } = res.data;
        setCourse((state) => ({
          ...state,
          ["id"]: id,
          ["tutor"]: tutor,
          ["tarif"]: tarif,
          ["title"]: title,
          ["rating"]: rating,
          ["ulasan"]: ulasan,
          ["is_online"]: is_online,
          ["hashtag"]: hashtag,
          ["description"]: description,
          ["murid"]: murid,
          ["course_area"]: course_area,
          ["is_wishlist"]: is_wishlist,
        }));
      }
    } catch (error) {}
  };

  const handleWishlist = async () => {
    try {
      const res = await addOrRemoveStudentWishlist(Cookies.get("token"), id);
      if (res.meta.code === 200) {
        setModalWishlist(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCourses();
  }, []);

  return (
    <GeneralTemplate title={`Cari Guru - Troffen`} desc={`Cari guru yang sesuai denganmu`} icon={`troffen.ico`}>
      <div className={styles.container}>
        <div className={styles.body_left}>
          <div className={styles.card}>
            <div>
              <Image alt="" src={PP} priority />
              <div className={styles.nama_guru}>
                <div className={styles.label_nama_guru}>Nama Guru</div>
                <div className={styles.value_nama_guru}>
                  <nav>{tutor}</nav>
                  <Image alt="" src={Verify} priority />
                </div>
              </div>
              {/* <Link href={"#"} className={styles.view_profile}>
                Lihat Profil Lengkap
              </Link> */}
              <div className={styles.tarif_kursus}>
                <div className={styles.label_tarif_guru}>Tarif kursus &#x28;persesi&#x29;</div>
                <div className={styles.nominal_tarif_guru}>{convertToRupiah(tarif)}/jam</div>
              </div>
            </div>
            <div className={styles.action_card_container}>
              {/* <Link href={`#`} className={styles.button}>
                Ajukan Kursus
              </Link> */}
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
              <div className={styles.info_title_label}>{title}</div>
              <Image alt="" src={Divider} priority />
              <div className={styles.info_title_rating_bintang}>{courseRating(rating).length > 0 ? courseRating(rating).map((i) => <Image alt="" src={Star} key={i} />) : ""}</div>
              <div className={styles.info_title_rating_ulasan}>&#x28;{ulasan} ulasan&#x29;</div>
            </div>
            <div className={styles.info_tags}>
              {is_online === "1" ? <div className={styles.info_tags_online}>Kursus ini tersedia ONLINE</div> : ""}
              {/* {["#DESAIN", "#UI/UX"].map((category, i) => (
                <div className={styles.info_tags_category} key={i}>
                  <Tag>{category}</Tag>
                </div>
              ))} */}
              <div className={styles.info_tags_category}>
                <Tag>{hashtag}</Tag>
              </div>
            </div>
            <div className={styles.info_description}>{description}</div>
            <div className={styles.info_murid}>
              <Image alt="" src={GOR} priority />
              <p>{murid} Murid telah mengikuti kursus ini</p>
            </div>
            <div className={styles.info_area}>
              <div className={styles.info_area_wilayah}>
                <div className={styles.loc}>
                  <Image alt="" src={loc1} className={styles.loc1} />
                  <Image alt="" src={loc2} className={styles.loc2} />
                </div>
                <nav>Area: {course_area}</nav>
              </div>
              <Image alt="" src={Divider} priority />
              <div className={styles.info_area_online}>
                <Image alt="" src={Online} className={styles.online_img} />
                <nav>Tersedia Online: {is_online === "1" ? "Ya" : "Tidak"}</nav>
              </div>
            </div>
            <hr className={styles.hr_divider} style={{ margin: "1rem 0" }} />
            <div className={styles.info_action}>
              <div className={styles.info_wishlist} onClick={() => handleWishlist()}>
                {is_wishlist === "1" ? <Image alt="" src={RedLove} width={22} /> : <Image alt="" src={Favorite} width={20} />}
                <p>Wishlist</p>
              </div>
              {/* {console.log(wishlist)} */}
              {/* <Image alt="" src={Divider} priority />
              <div className={styles.info_share}>
                <Image alt="" src={Share} />
                <p>Share</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <section id="course_info">
        <div className={styles.container_body}>
          <hr className={styles.hr_divider} />
          <div className={styles.course_info}>
            <div className={styles.course_info_title}>Informasi Kursus</div>
            <div className={styles.course_info_detail}>{description}</div>
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
          {reviews.data.data.length > 0
            ? reviews.data.data.map((item, i) => (
                <div className={styles.ulasan_commment} key={i}>
                  <div className={styles.ulasan_commment_card}>
                    <div className={styles.ulasan_comment_header}>
                      <div className={styles.ulasan_commment_card_rating}>
                        {courseRating(item.rating).map((i) => (
                          <Image alt="" src={Star} key={i} />
                        ))}
                      </div>
                      <div className={styles.ulasan_commment_card_time}>{item.created_at}</div>
                    </div>
                    <div className={styles.ulasan_comment_body}>
                      <div className={styles.ulasan_comment_body_profile}>
                        <Image alt="" src={pp_comment} />
                        <b>{item.user_name}</b>
                      </div>
                      <div className={styles.ulasan_comment_body_value}>{item.comment}</div>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </section>

      <Modal modalInfo={modalWishlist} handleModal={closeModalWishlist}>
        <div className={styles.whitelist_wrapper}>
          Kursus {title} berhasil {is_wishlist === "0" ? "ditambahkan" : "dihapus"}
        </div>
      </Modal>
    </GeneralTemplate>
  );
};

export default CourseId;
