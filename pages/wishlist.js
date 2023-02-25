import styles from "../styles/Wishlist.module.css";
import Image from "next/image";
import DashboardTemplate from "../components/layouts/DashboardTemplate";

import Line from "../assets/img/dashboard/line.svg";
import PP from "../assets/img/dashboard/pp_wishlist.svg";
import Love from "../assets/img/dashboard/love.svg";
import Star from "../assets/img/dashboard/star.svg";

const wishlist = () => {
  return (
    <div className={styles.wishlist_container}>
      <div className={styles.wishlist_title}>Daftar Wishlist</div>
      <div className={styles.wishlist_content}>
        {[1, 2, 3, 4, 5].map((val, i) => (
          <div className={styles.wishlist_card} key={i}>
            <div className={styles.wishlist_card_img}>
              <Image src={PP} alt="" />
            </div>
            <div className={styles.wishlist_card_info}>
              <div className={styles.wishlist_card_info_label}>
                <div className={styles.wishlist_card_info_nama_label}>Nama Lengkap:</div>
                <div className={styles.wishlist_card_info_usia_label}>Usia:</div>
                <div className={styles.wishlist_card_info_status_label}>Status:</div>
                <div className={styles.wishlist_card_info_murid_label}>Total Murid:</div>
                <div className={styles.wishlist_card_info_rating_label}>Rating:</div>
              </div>
              <div className={styles.wishlist_card_info_value}>
                <div className={styles.wishlist_card_info_nama_value}>Magdalena Lena</div>
                <div className={styles.wishlist_card_info_usia_value}>24 tahun</div>
                <div className={styles.wishlist_card_info_status_value}>Pemula</div>
                <div className={styles.wishlist_card_info_murid_value}>20 murid</div>
                <div className={styles.wishlist_card_info_rating_value}>
                  <Image src={Star} alt="" />
                  <div>4.5</div>
                  <div>5 (Ulasan)</div>
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
                  <li>Kursus UI/UX Design</li>
                  <li>Bahasa Inggris</li>
                </ul>
              </div>
            </div>
            <div className={styles.wishlist_card_icon_love}>
              <Image src={Love} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

wishlist.getLayout = function getLayout(wishlist) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Wishlist`}
    >
      {wishlist}
    </DashboardTemplate>
  );
};

export default wishlist;
