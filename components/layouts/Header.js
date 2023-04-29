import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import styles from "../../styles/layout/Header.module.css";
import TroffenLogo1 from "../../assets/img/Rectangle63.svg";
import TroffenLogo2 from "../../assets/img/T.svg";
import TroffenLogo3 from "../../assets/img/Troffen.svg";
import Back from "../../assets/img/back.svg";

import Search from "../../assets/img/dashboard/search.png";

import PP from "../../assets/img/PP.svg";
import ProfileIcon from "../../assets/img/dashboard/header/profile.svg";
import UpgradeIcon from "../../assets/img/dashboard/header/upgrade.svg";
import LogoutIcon from "../../assets/img/dashboard/header/logout.svg";

function Header({ modalConfig, navbar, handleNavbar, isLogin, handleLogout }) {
  const router = useRouter();

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let currentTime = hours + ":" + minutes + " " + ampm;

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", { month: "short" });
  }

  let currentDate = getMonthName(month);

  return (
    <>
      {navbar === "dashboardNavbar" && (
        <section id="navbar">
          <div className={styles.container_dashboard}>
            <div className={styles.navbar_content_ds}>
              {/* info */}
              <div className={styles.ds_header_info}>
                <div>
                  <div className={styles.ds_header_info_name}>Hello, {Cookies.get("firstName")}!</div>
                  <div className={styles.ds_header_info_date_time}>
                    {currentTime} {day} {currentDate} {year}
                  </div>
                </div>
              </div>
              {/* search */}
              <div className={styles.ds_header_search}>
                <div>
                  <Image src={Search} width={20} alt="" />
                  <input type="text" placeholder="Lihat Kursus Lain" />
                </div>
              </div>
              {/* notif */}
              {/* <div className={styles.ds_header_notif}>
                <Image alt="" src={ActiveNotif} priority />
              </div> */}
              {/* profile */}
              {Cookies.get("token") !== undefined ? (
                <div className={styles.ds_menu}>
                  <ul className={styles.ds_ul}>
                    <li className={styles.loggedin_menu}>
                      <div className={styles.loggedin_username}>{Cookies.get("firstName")}</div>
                      <Image alt="" src={PP} priority />
                      <ul className={styles.ds_loggedin_menu_body}>
                        <li className={styles.dashboard_menu} onClick={() => handleNavbar("profile")}>
                          <Image src={ProfileIcon} alt={""} />
                          <div className={styles.dashboard_body}>Profile</div>
                        </li>
                        <hr />
                        <li className={styles.upgrade_menu} onClick={() => handleNavbar("upgrade")}>
                          <Image src={UpgradeIcon} alt={""} />
                          <div className={styles.upgrade_body}>Upgrade ke Pro</div>
                        </li>
                        <hr />
                        <li className={styles.logout_menu} onClick={() => handleLogout()}>
                          <Image src={LogoutIcon} alt={""} />
                          <div className={styles.logout_body}>Keluar</div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <hr className={styles.hr} />
        </section>
      )}

      {navbar === "daftarNavbar" && (
        <section id="navbar">
          <div className={styles.container_navbar}>
            <div className={styles.navbar_contents_member}>
              <div className={styles.navbar_contents_logo}>
                <nav className={styles.logo1} onClick={() => router.replace("/")}>
                  <Image alt="" src={TroffenLogo1} className={styles.logo1_1} priority />
                  <Image alt="" src={TroffenLogo2} className={styles.logo1_2} priority />
                </nav>
                <nav className={styles.logo2} onClick={() => router.replace("/")}>
                  <Image alt="" src={TroffenLogo3} priority />
                </nav>
                {process.env.WEB_ENV === "STAGING" && <nav>&nbsp; Staging</nav>}
              </div>
              {Cookies.get("token") === undefined && (
                <div className={styles.navbar_contents_menu}>
                  <div className={styles.navbar_contents_button}>
                    <nav className={styles.navbar_contents_login_text}>
                      Sudah punya akun? <nav onClick={() => modalConfig("masuk", true)}>Masuk</nav>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {navbar === "backNavbar" && (
        <section id="navbar">
          <div className={styles.container_navbar}>
            <div className={styles.navbar_contents}>
              <div className={styles.navbar_contents_logo}>
                <div onClick={() => handleNavbar()}>
                  <nav className={styles.logo_back}>
                    <Image alt="" src={Back} priority />
                    <nav>Kembali</nav>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {navbar === "" && (
        <section id="navbar">
          <div className={styles.container_navbar}>
            <div className={styles.navbar_contents}>
              <div className={styles.navbar_contents_logo}>
                <nav className={styles.logo1} onClick={() => router.replace("/")}>
                  <Image alt="" src={TroffenLogo1} className={styles.logo1_1} priority />
                  <Image alt="" src={TroffenLogo2} className={styles.logo1_2} priority />
                </nav>
                <nav className={styles.logo2} onClick={() => router.replace("/")}>
                  <Image alt="" src={TroffenLogo3} priority />
                </nav>
                {process.env.WEB_ENV === "STAGING" && <nav>&nbsp; Staging</nav>}
              </div>
              <div className={styles.navbar_contents_menu}>
                <div className={styles.navbar_contents_menu1}>
                  <Link href={"/cari-kursus"}>Cari Kursus</Link>
                </div>
                <div className={styles.navbar_contents_menu2}>
                  <Link href={"/blog"}>Blog</Link>
                </div>
                <div className={styles.navbar_contents_menu3}>
                  <Link href={"/coming-soon"}>Tentang Kami</Link>
                </div>

                {Cookies.get("token") === undefined && (
                  <>
                    <div className={styles.navbar_contents_menu4}>
                      <Link href={"#"} onClick={() => modalConfig("daftar", true)}>
                        Daftar
                      </Link>
                    </div>
                    <div className={styles.navbar_contents_button}>
                      <button className={styles.button_submit} onClick={() => modalConfig("masuk", true)}>
                        Masuk
                      </button>
                    </div>
                  </>
                )}

                {Cookies.get("token") !== undefined && (
                  <div className={styles.div}>
                    <div className={styles.loggedin_menu}>
                      <div className={styles.loggedin_username}>{Cookies.get("firstName")}</div>
                      <Image alt="" src={PP} priority />
                      <div className={styles.loggedin_menu_body}>
                        <div className={styles.dashboard_menu} onClick={() => handleNavbar("dashboardNavbar")}>
                          <div className={styles.dashboard_body}>Dasbor</div>
                        </div>
                        <hr />
                        <div className={styles.logout_menu} onClick={() => handleLogout()}>
                          <div className={styles.logout_body}>Keluar</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Header;
