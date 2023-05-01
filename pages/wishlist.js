import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Wishlist.module.css";
import Image from "next/image";
import DashboardTemplate from "../components/layouts/DashboardTemplate";

import Line from "../assets/img/dashboard/line.svg";
import PP from "../assets/img/dashboard/pp_wishlist.svg";
import Love from "../assets/img/dashboard/love.svg";
import Star from "../assets/img/dashboard/star.svg";

import { getStudentWishlist, getTutorWishlist, addOrDeleteWishlistStudent, addOrDeleteWishlistTutor } from "../functions/wishlist";
import { getProfile } from "../functions/profile";
import Cookies from "js-cookie";

const Wishlist = () => {
  const router = useRouter();

  const [wishlist, setWishlist] = useState([]);
  const [profile, setProfile] = useState();

  const [age, setAge] = useState("");

  const convertToFloat = (val) => {
    const num = parseFloat(val);
    return parseFloat(num.toFixed(2));
  };

  const handleWishlist = async () => {
    try {
      if (Cookies.get("role") === "student") {
        const res = await getStudentWishlist(Cookies.get("token"));
        if (res !== undefined && res.meta.code === 200) {
          setWishlist(res.data.data);
        }
      } else if (Cookies.get("role") === "tutor") {
        const res = await getTutorWishlist(Cookies.get("token"));
        if (res !== undefined && res.meta.code === 200) {
          setWishlist(res.data.data);
        }
      }

      const profile = await getProfile(Cookies.get("token"));
      if (profile !== undefined && profile.meta.code === 200) {
        const age = new Date().getFullYear() - profile.data.user.birth_date.slice(0, 4);
        setAge(age);
        setProfile(profile.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveWishlist = async (courseId) => {
    try {
      if (Cookies.get("role") === "student") {
        const res = await addOrDeleteWishlistStudent(Cookies.get("token"), courseId);
        if (res !== undefined && res.meta.code == 200) {
          router.reload();
        }
      } else if (Cookies.get("role") === "tutor") {
        const res = await addOrDeleteWishlistTutor(Cookies.get("token"), courseId);
        if (res !== undefined && res.meta.code == 200) {
          router.reload();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleWishlist();
  }, []);

  return (
    <div className={styles.wishlist_container}>
      <div className={styles.wishlist_title}>Daftar Wishlist</div>
      <div className={styles.wishlist_content}>
        {/* {console.log(wishlist)} */}
        {/* {console.log(age)} */}
        {wishlist.map((val, i) => (
          <div className={styles.wishlist_card} key={i}>
            <div className={styles.wishlist_card_img}>
              <Image src={PP} alt="" />
            </div>
            <div className={styles.wishlist_card_info}>
              <div className={styles.wishlist_card_info_label}>
                <div className={styles.wishlist_card_info_nama_label}>Nama Lengkap:</div>
                <div className={styles.wishlist_card_info_usia_label}>Usia:</div>
                <div className={styles.wishlist_card_info_murid_label}>Total Murid:</div>
                <div className={styles.wishlist_card_info_rating_label}>Rating:</div>
              </div>
              <div className={styles.wishlist_card_info_value}>
                <div className={styles.wishlist_card_info_nama_value}>{val.tutor}</div>
                <div className={styles.wishlist_card_info_usia_value}>{age} tahun</div>
                <div className={styles.wishlist_card_info_murid_value}>{val.murid} murid</div>
                <div className={styles.wishlist_card_info_rating_value}>
                  <Image src={Star} alt="" />
                  <div>{convertToFloat(val.rating)}</div>
                  <div>({val.ulasan} Ulasan)</div>
                </div>
              </div>
            </div>
            <div className={styles.wishlist_card_line}>
              <Image src={Line} alt="" />
            </div>
            <div className={styles.wishlist_card_subjek_kursus}>
              <div className={styles.wishlist_card_subjek_kursus_title}>Subjek Kursus:</div>
              <div className={styles.wishlist_card_subjek_kursus_values}>
                <ul>
                  {/* harusnya course category */}
                  <li>{val.hashtag}</li>
                </ul>
              </div>
            </div>
            <div className={styles.wishlist_card_icon_love}>
              <Image src={Love} alt="" onClick={() => handleRemoveWishlist(val.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Wishlist.getLayout = function getLayout(Wishlist) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Wishlist`}
    >
      {Wishlist}
    </DashboardTemplate>
  );
};

export default Wishlist;
