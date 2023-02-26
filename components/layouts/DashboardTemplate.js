import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Logout } from "../../functions/logout";
import Cookies from "js-cookie";

import Head from "next/head";
import Image from "next/image";
import Header from "./Header";
import styles from "../../styles/layout/DashboardTemplate.module.css";

import Logo from "../../assets/img/dashboard/sidebar/logo_troffen.svg";
import Dasbor0 from "../../assets/img/dashboard/sidebar/menu/dasbor00.svg";
import Dasbor1 from "../../assets/img/dashboard/sidebar/menu/dasbor01.svg";
import Pesan0 from "../../assets/img/dashboard/sidebar/menu/pesan00.svg";
import Pesan1 from "../../assets/img/dashboard/sidebar/menu/pesan01.svg";
import IklanLangganan0 from "../../assets/img/dashboard/sidebar/menu/iklanLangganan00.svg";
import IklanLangganan1 from "../../assets/img/dashboard/sidebar/menu/iklanLangganan01.svg";
import Wishlist0 from "../../assets/img/dashboard/sidebar/menu/wishlist00.svg";
import Wishlist1 from "../../assets/img/dashboard/sidebar/menu/wishlist01.svg";
import Ulasan0 from "../../assets/img/dashboard/sidebar/menu/ulasan00.svg";
import Ulasan1 from "../../assets/img/dashboard/sidebar/menu/ulasan01.svg";
import Statistik0 from "../../assets/img/dashboard/sidebar/menu/statistik00.svg";
import Pengaturan0 from "../../assets/img/dashboard/sidebar/menu/pengaturan00.svg";
import Pengaturan1 from "../../assets/img/dashboard/sidebar/menu/pengaturan01.svg";
import Pro from "../../assets/img/dashboard/sidebar/menu/pro.svg";

import UpgradeIcon from "../../assets/img/dashboard/sidebar/Upgrade.svg";

const DashboardTemplate = ({ title, desc, icon, children, isNavbar, menu }) => {
  const router = useRouter();
  // session google & FB
  const { data: session } = useSession();

  const [navbar, setNavbar] = useState("");

  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState();
  const [firstname, setFirstname] = useState();
  const [dashMenu, setDashMenu] = useState("Dashbor");
  const [role, setRole] = useState("");

  const handleNavbar = (nav) => {
    if (nav === undefined) {
      setNavbar("");
      router.back();
    } else if (nav === "dashboardNavbar") {
      router.push("/dashboard");
    } else if (nav === "home") {
      router.replace("/");
    } else if (nav === "profile") {
      router.replace("/profile");
    } else if (nav === "upgrade") {
      router.replace("/monthly-pass");
    }
  };

  useEffect(() => {
    isNavbar ? setNavbar(isNavbar) : "";
    menu ? setDashMenu(menu) : "";

    if (session) {
      setIsLogin(session);
    }

    if (Cookies.get("token") !== undefined && Cookies.get("firstName").length > 0) {
      setFirstname(Cookies.get("firstName"));
      setRole(Cookies.get("role"));
    }

    if (Cookies.get("token") !== undefined && Cookies.get("token").length > 0) {
      setToken(Cookies.get("token"));
    }
  }, [isNavbar, isLogin, token, firstname, dashMenu, menu, role, session]);

  return (
    isLogin ||
    (token && (
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
                  <Image src={Logo} alt={"image"} />
                </div>
                <hr className={styles.hr} />
                <div className={styles.sidebar_menu}>
                  <ul>
                    <li onClick={() => router.push("/dashboard")}>
                      {dashMenu === "Dashbor" ? (
                        <>
                          <Image src={Dasbor1} alt={"image"} />
                          <nav style={{ color: "#1EA9E4" }}>Dashbor</nav>
                        </>
                      ) : (
                        <>
                          <Image src={Dasbor0} alt={"image"} />
                          <nav>Dashbor</nav>
                        </>
                      )}
                    </li>
                    <li onClick={() => router.push("/pesan")}>
                      {dashMenu === "Pesan" ? (
                        <>
                          <Image src={Pesan1} alt={"image"} />
                          <nav style={{ color: "#1EA9E4" }}>Pesan</nav>
                        </>
                      ) : (
                        <>
                          <Image src={Pesan0} alt={"image"} />
                          <nav>Pesan</nav>
                        </>
                      )}
                    </li>
                    <li onClick={() => router.push("/tagihan")}>
                      {dashMenu === "Tagihan" ? (
                        <>
                          <Image src={IklanLangganan1} alt={"image"} />
                          <nav style={{ color: "#1EA9E4" }}>Tagihan</nav>
                        </>
                      ) : (
                        <>
                          <Image src={IklanLangganan0} alt={"image"} />
                          <nav>Tagihan</nav>
                        </>
                      )}
                    </li>
                    {role === "tutor" && (
                      <li onClick={() => router.push("/iklan-saya")}>
                        {dashMenu === "Iklan Saya" ? (
                          <>
                            <Image src={IklanLangganan1} alt={"image"} />
                            <nav style={{ color: "#1EA9E4" }}>Iklan Saya</nav>
                          </>
                        ) : (
                          <>
                            <Image src={IklanLangganan0} alt={"image"} />
                            <nav>Iklan Saya</nav>
                          </>
                        )}
                      </li>
                    )}
                    <li onClick={() => router.push("/wishlist")}>
                      {dashMenu === "Wishlist" ? (
                        <>
                          <Image src={Wishlist1} alt={"image"} />
                          <nav style={{ color: "#1EA9E4" }}>Wishlist</nav>
                        </>
                      ) : (
                        <>
                          <Image src={Wishlist0} alt={"image"} />
                          <nav>Wishlist</nav>
                        </>
                      )}
                    </li>
                    <li onClick={() => router.push("/ulasan")}>
                      {dashMenu === "Ulasan" ? (
                        <>
                          <Image src={Ulasan1} alt={"image"} />
                          <nav style={{ color: "#1EA9E4" }}>Ulasan</nav>
                        </>
                      ) : (
                        <>
                          <Image src={Ulasan0} alt={"image"} />
                          <nav>Ulasan</nav>
                        </>
                      )}
                    </li>
                    {role === "tutor" && (
                      <li onClick={() => router.push("/statistik")}>
                        {dashMenu === "Statistik" ? (
                          <>
                            <Image src={Statistik0} alt={"image"} />
                            <nav style={{ color: "#1EA9E4" }}>Statistik</nav>
                            <Image src={Pro} alt="" className={styles.pro} />
                          </>
                        ) : (
                          <>
                            <Image src={Statistik0} alt={"image"} />
                            <nav>Statistik</nav>
                            <Image src={Pro} alt="" className={styles.pro} />
                          </>
                        )}
                      </li>
                    )}
                    <li onClick={() => router.push("/pengaturan")}>
                      {dashMenu === "Pengaturan" ? (
                        <>
                          <Image src={Pengaturan1} alt={"image"} />
                          <nav style={{ color: "#1EA9E4" }}>Pengaturan</nav>
                        </>
                      ) : (
                        <>
                          <Image src={Pengaturan0} alt={"image"} />
                          <nav>Pengaturan</nav>
                        </>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.sidebar_upgrade}>
                <Image src={UpgradeIcon} width={180} alt={"image"} />
              </div>
            </div>
            <div className={styles.right_content}>
              <Header navbar={navbar} handleNavbar={handleNavbar} isLogin={isLogin} token={token} firstname={firstname} handleLogout={Logout} />
              <div className={styles.right_content_section}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
};

export default DashboardTemplate;
