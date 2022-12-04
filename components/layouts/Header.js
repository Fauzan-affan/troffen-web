import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/layout/Header.module.css";
import TroffenLogo1 from "../../assets/img/Rectangle63.svg";
import TroffenLogo2 from "../../assets/img/T.svg";
import TroffenLogo3 from "../../assets/img/Troffen.svg";

function Header() {
  return (
    <section id="navbar">
      <div className={styles.container_navbar}>
        <div className={styles.navbar_contents}>
          <div className={styles.navbar_contents_logo}>
            <nav className={styles.logo1}>
              <Image src={TroffenLogo1} className={styles.logo1_1} priority />
              <Image src={TroffenLogo2} className={styles.logo1_2} priority />
            </nav>
            <nav className={styles.logo2}>
              <Image src={TroffenLogo3} priority />
            </nav>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
