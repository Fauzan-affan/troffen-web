import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "../../styles/layout/Header.module.css";
import TroffenLogo1 from "../../assets/img/Rectangle63.svg";
import TroffenLogo2 from "../../assets/img/T.svg";
import TroffenLogo3 from "../../assets/img/Troffen.svg";
import Back from "../../assets/img/back.svg";

import PP from "../../assets/img/PP.svg";

function Header({ modalConfig, navbar, handleNavbar }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {navbar === "daftarNavbar" && (
        <section id="navbar">
          <div className={styles.container_navbar}>
            <div className={styles.navbar_contents_member}>
              <div className={styles.navbar_contents_logo}>
                <Link href={"/"}>
                  <nav className={styles.logo1}>
                    <Image alt="" src={TroffenLogo1} className={styles.logo1_1} priority />
                    <Image alt="" src={TroffenLogo2} className={styles.logo1_2} priority />
                  </nav>
                </Link>
                <Link href={"/"}>
                  <nav className={styles.logo2}>
                    <Image alt="" src={TroffenLogo3} priority />
                  </nav>
                </Link>
              </div>
              <div className={styles.navbar_contents_menu}>
                <div className={styles.navbar_contents_button}>
                  <nav className={styles.navbar_contents_login_text}>
                    Sudah punya akun? <nav onClick={() => modalConfig("masuk", true)}>Masuk</nav>
                  </nav>
                </div>
              </div>
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
                <Link href={"/"}>
                  <nav className={styles.logo1}>
                    <Image alt="" src={TroffenLogo1} className={styles.logo1_1} priority />
                    <Image alt="" src={TroffenLogo2} className={styles.logo1_2} priority />
                  </nav>
                </Link>
                <Link href={"/"}>
                  <nav className={styles.logo2}>
                    <Image alt="" src={TroffenLogo3} priority />
                  </nav>
                </Link>
              </div>
              <div className={styles.navbar_contents_menu}>
                <div className={styles.navbar_contents_menu1}>
                  <Link href={"/cari-guru"}>Cari Guru</Link>
                </div>
                <div className={styles.navbar_contents_menu2}>
                  <Link href={"/blog"}>Blog</Link>
                </div>
                <div className={styles.navbar_contents_menu3}>
                  <Link href={"/tentang-kami"}>Tentang Kami</Link>
                </div>

                {!isLogin && (
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

                {isLogin && (
                  <>
                    <ul className={styles.ul}>
                      <li className={styles.loggedin_menu}>
                        <div className={styles.loggedin_username}>Fauzan Affan</div>
                        <Image alt="" src={PP} priority />
                        <ul className={styles.loggedin_menu_body}>
                          <li className={styles.dashboard_menu}>
                            <div className={styles.dashboard_label}>Content</div>
                            <div className={styles.dashboard_body}>Dashbor</div>
                          </li>
                          <hr />
                          <li className={styles.logout_menu} onClick={() => setIsLogin(false)}>
                            <div className={styles.logout_label}>Content</div>
                            <div className={styles.logout_body}>Logout</div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </>
                )}

                {/* <div className={styles.navbar_contents_hamburger} style={{ backgroundColor: isClicked ? "white" : "transparent" }} onClick={() => setIsClicked(!isClicked)}>
                  &#9776;
                </div> */}
              </div>
            </div>
          </div>
          {/* {isClicked ? (
            <div className={styles.container_responsive_menu}>
              <Link href={"/cari-guru"}>
                <div className={styles.responsive_menu1}>Cari Guru</div>
              </Link>
              <Link href={"/blog"}>
                <div className={styles.responsive_menu2}>Blog</div>
              </Link>
              <Link href={"/tentang-kami"}>
                <div className={styles.responsive_menu3}>Tentang Kami</div>
              </Link>
              <Link href={"#"}>
                <div className={styles.responsive_menu4} onClick={() => modalConfig("daftar", true)}>
                  Daftar
                </div>
              </Link>
              <Link href={"#"}>
                <div className={styles.responsive_menu5} onClick={() => modalConfig("masuk", true)}>
                  Masuk
                </div>
              </Link>
            </div>
          ) : (
            ""
          )} */}
        </section>
      )}
    </>
  );
}

export default Header;
