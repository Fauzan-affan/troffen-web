import Jumbotron from "../components/core/Jumbotron";
import GeneralTemplate from "../components/layouts/GeneralTemplate";

import styles from "../styles/SyaratKetentuan.module.css";

const index = () => {
  return (
    <GeneralTemplate title={`Ketahui Lebih Banyak Tentang Kami - Troffen`} desc={`Kenali Lebih Dalam Tentang Kami. Visi, Misi dan Berbagai Informasi Layanan Terbaru Mengenai Troffen Disini!`} icon={`troffen.ico`}>
      <Jumbotron type="info" title="Hubungi Kami" desc="Diperbarui pada: 12 November 2022" />
      <div className={styles.container}>
        <div className={styles.body}>
          {/* <div className={styles.title}>Frequently Asked Questions</div> */}
          <div className={styles.content}>
            <h3>Hubungi Kami</h3>
            {/* <p>Maps:</p> */}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3452093963767!2d106.8224473153705!3d-6.192343495515914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43686ef3e33%3A0x7fbb8a62e02bde!2sJl.%20MH%20Thamrin%20No.8%2C%20Kebon%20Sirih%2C%20Menteng%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010340!5e0!3m2!1sen!2sid!4v1621500822016!5m2!1sen!2sid"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe> */}
            <p>Telepon: (021) 88997765</p>
            <p>
              Email:{" "}
              <a href="mailto:troffen.office@gmail.com" style={{ color: "#1ea9e4" }}>
                troffen.office@gmail.com
              </a>
            </p>
            <p>Alamat: Jln. MH. Thamrin No.8, Kebon Sirih Menteng, Jakarta Pusat</p>
          </div>
        </div>
      </div>
    </GeneralTemplate>
  );
};

export default index;
