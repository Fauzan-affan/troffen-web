import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "../../styles/layout/Header.module.css";
import TroffenLogo1 from "../../assets/img/Rectangle63.svg";
import TroffenLogo2 from "../../assets/img/T.svg";
import TroffenLogo3 from "../../assets/img/Troffen.svg";

function Header() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section id="navbar">
      <div className={styles.container_navbar} style={{ backgroundColor: isClicked ? "#1ea9e4" : "transparent" }}>
        <div className={styles.navbar_contents}>
          <div className={styles.navbar_contents_logo}>
            <Link href={"/"}>
              <nav className={styles.logo1}>
                <Image src={TroffenLogo1} className={styles.logo1_1} priority />
                <Image src={TroffenLogo2} className={styles.logo1_2} priority />
              </nav>
            </Link>
            <Link href={"/"}>
              <nav className={styles.logo2}>
                <Image src={TroffenLogo3} priority />
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
            <div className={styles.navbar_contents_menu4}>
              <Link href={"/daftar-sebagai-guru"}>Daftar Sebagai Guru</Link>
            </div>
            <div className={styles.navbar_contents_button}>
              <button className={styles.button_submit}>Masuk</button>
            </div>
            <div className={styles.navbar_contents_hamburger} style={{ backgroundColor: isClicked ? "white" : "transparent" }} onClick={() => setIsClicked(!isClicked)}>
              &#9776;
            </div>
          </div>
        </div>
      </div>
      {isClicked ? (
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
          <Link href={"/daftar-sebagai-guru"}>
            <div className={styles.responsive_menu4}>Daftar Sebagai Guru</div>
          </Link>
          <Link href={"#"}>
            <div className={styles.responsive_menu5}>Masuk</div>
          </Link>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Header;
