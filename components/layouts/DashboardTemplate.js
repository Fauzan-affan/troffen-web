import Head from "next/head";
import Image from "next/image";
import Header from "./Header";
import styles from "../../styles/layout/DashboardTemplate.module.css";

import Logo from "../../assets/img/dashboard/sidebar/logo_troffen.svg";
import Dasbor1 from "../../assets/img/dashboard/sidebar/1dashbor.svg";
import Notif2 from "../../assets/img/dashboard/sidebar/2notif.svg";
import Wishlist4 from "../../assets/img/dashboard/sidebar/4wishlist.svg";
import Ulasan5 from "../../assets/img/dashboard/sidebar/5ulasan.svg";
import UpgradeIcon from "../../assets/img/dashboard/sidebar/Upgrade.svg";

const DashboardTemplate = ({ title, desc, icon, children, modalConfig, navbar, handleNavbar, isLogin, token, firstname, handleLogout }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href={`/${icon}`} />
      </Head>
      <div className={styles.container}>
        <div className={styles.container_dashboard}>
          <div className={styles.left_sidebar}>
            <div className={styles.sidebar_wrapper}>
              <div className={styles.sidebar_header} onClick={() => handleNavbar("home")}>
                <Image src={Logo} alt="" />
              </div>
              <hr className={styles.hr} />
              <div className={styles.sidebar_menu}>
                <ul>
                  <li>
                    <Image src={Dasbor1} alt="" />
                    <nav>Dashbor</nav>
                  </li>
                  <li>
                    <Image src={Notif2} alt="" />
                    <nav>Pesan</nav>
                  </li>
                  <li>
                    <Image src={Dasbor1} alt="" />
                    <nav>Iklan Saya</nav>
                  </li>
                  <li>
                    <Image src={Wishlist4} alt="" />
                    <nav>Wishlist</nav>
                  </li>
                  <li>
                    <Image src={Ulasan5} alt="" />
                    <nav>Ulasan</nav>
                  </li>
                  <li>
                    <Image src={Dasbor1} alt="" />
                    <nav>Langganan</nav>
                  </li>
                  <li>
                    <Image src={Dasbor1} alt="" />
                    <nav>Statistik</nav>
                  </li>
                  <li>
                    <Image src={Dasbor1} alt="" />
                    <nav>Pengaturan</nav>
                  </li>
                </ul>
              </div>
              <div className={styles.sidebar_upgrade}>
                <Image src={UpgradeIcon} width={180} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.right_content}>
            <Header modalConfig={modalConfig} navbar={navbar} handleNavbar={handleNavbar} isLogin={isLogin} token={token} firstname={firstname} handleLogout={handleLogout} />
            <div className={styles.right_content_section}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
