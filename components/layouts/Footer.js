import Image from "next/image";
import styles from "../../styles/layout/Footer.module.css";
import footerLogo1 from "../../assets/img/LOGO FOOTER/1.Rectangle63.svg";
import footerLogo2 from "../../assets/img/LOGO FOOTER/2.T.svg";
import footerLogo3 from "../../assets/img/LOGO FOOTER/3.Troffen.svg";

function Footer() {
  return (
    <section id="footer">
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer_menu}>
            <div className={styles.footer_alamat}>
              <div className={styles.footer_alamat_logo}>
                <Image src={footerLogo1} className={styles.footer_alamat_logo_1} />
                <Image src={footerLogo2} className={styles.footer_alamat_logo_2} />
                <Image src={footerLogo3} className={styles.footer_alamat_logo_3} />
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
                <div className={styles.tentang_kami}>Tentang Kami</div>
                <div className={styles.jadi_guru}>Jadi Guru</div>
                <div className={styles.blog}>Blog</div>
              </div>
            </div>
            <div className={styles.footer_bantuan}>
              <div className={styles.footer_bantuan_label}>Bantuan</div>
              <div className={styles.footer_bantuan_detail}>
                <div className={styles.FAQ}>FAQ</div>
                <div className={styles.syarat_dan_ketentuan}>Syarat & Ketentuan</div>
                <div className={styles.kebijakan_privasi}>Kebijakan Privasi</div>
                <div className={styles.hubungi_kami}>Hubungi Kami</div>
              </div>
            </div>
            <div className={styles.footer_sosial_media}>
              <div className={styles.footer_sosial_media_label}>Sosial Media</div>
              <div className={styles.footer_sosial_media_detail}>
                <div className={styles.ig}>Instagram</div>
                <div className={styles.fb}>Facebook</div>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.footer_copyright}>
            Copyright Troffen
            <script>document.write(new Date().getFullYear());</script>
            All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
