import { useRouter } from "next/router";

import Image from "next/image";
import styles from "../../styles/layout/Footer.module.css";
import footerLogo1 from "../../assets/img/LOGO FOOTER/1.Rectangle63.svg";
import footerLogo2 from "../../assets/img/LOGO FOOTER/2.T.svg";
import footerLogo3 from "../../assets/img/LOGO FOOTER/3.Troffen.svg";

function Footer() {
  const router = useRouter();

  const handleRedirect = (url) => {
    router.push(url);
  };

  return (
    <section id="footer">
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer_menu}>
            <div className={styles.footer_alamat}>
              <div className={styles.footer_alamat_logo} onClick={() => handleRedirect("/")}>
                <Image alt="" src={footerLogo1} className={styles.footer_alamat_logo_1} />
                <Image alt="" src={footerLogo2} className={styles.footer_alamat_logo_2} />
                <Image alt="" src={footerLogo3} className={styles.footer_alamat_logo_3} />
              </div>
              <div className={styles.footer_alamat_detail}>
                <nav>Jln. MH. Thamrin No.8, Kebon Sirih Menteng,</nav>
                <nav>Jakarta Pusat</nav>
                <nav>(021) 88997765</nav>
                <nav>troffen.office@gmail.com</nav>
              </div>
            </div>
            <div className={styles.footer_troffen}>
              <div className={styles.footer_troffen_label}>Troffen</div>
              <div className={styles.footer_troffen_detail}>
                <div className={styles.tentang_kami} onClick={() => handleRedirect("/coming-soon")}>
                  Tentang Kami
                </div>
                {/* <div className={styles.tentang_kami} onClick={() => handleRedirect("/tentang-kami")}>
                  Tentang Kami
                </div> */}
                <div className={styles.jadi_guru} onClick={() => handleRedirect("/daftar-guru")}>
                  Jadi Guru
                </div>
                <div className={styles.blog} onClick={() => handleRedirect("/blog")}>
                  Blog
                </div>
              </div>
            </div>
            <div className={styles.footer_bantuan}>
              <div className={styles.footer_bantuan_label}>Bantuan</div>
              <div className={styles.footer_bantuan_detail}>
                <div className={styles.FAQ} onClick={() => handleRedirect("/coming-soon")}>
                  FAQ
                </div>
                <div className={styles.syarat_dan_ketentuan} onClick={() => handleRedirect("/coming-soon")}>
                  Syarat & Ketentuan
                </div>
                <div className={styles.kebijakan_privasi} onClick={() => handleRedirect("/coming-soon")}>
                  Kebijakan Privasi
                </div>
                <div className={styles.hubungi_kami} onClick={() => handleRedirect("/coming-soon")}>
                  Hubungi Kami
                </div>
                {/* <div className={styles.FAQ} onClick={() => handleRedirect("/FAQ")}>
                  FAQ
                </div>
                <div className={styles.syarat_dan_ketentuan} onClick={() => handleRedirect("/syarat-dan-ketentuan")}>
                  Syarat & Ketentuan
                </div>
                <div className={styles.kebijakan_privasi} onClick={() => handleRedirect("/kebijakan-privasi")}>
                  Kebijakan Privasi
                </div>
                <div className={styles.hubungi_kami} onClick={() => handleRedirect("/tentang-kami")}>
                  Hubungi Kami
                </div> */}
              </div>
            </div>
            <div className={styles.footer_sosial_media}>
              <div className={styles.footer_sosial_media_label}>Sosial Media</div>
              <div className={styles.footer_sosial_media_detail}>
                <div className={styles.ig} onClick={() => handleRedirect("https://www.instagram.com/troffen.co/")}>
                  Instagram
                </div>
                <div className={styles.fb} onClick={() => handleRedirect("https://www.facebook.com/profile.php?id=100088431716699")}>
                  Facebook
                </div>
                {/* <div className={styles.fb} onClick={() => handleRedirect("https://www.facebook.com/Jokowi")}>
                  Facebook
                </div> */}
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.footer_copyright}>
            Copyright Troffen
            {` ${new Date().getFullYear()} `}
            All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
