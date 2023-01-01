import Jumbotron from "../components/core/Jumbotron";
import LoginTemplate from "../components/layouts/LoginTemplate";

import styles from "../styles/SyaratKetentuan.module.css";

const index = () => {
  return (
    <LoginTemplate title={`Ketahui Lebih Banyak Tentang Kami - Troffen`} desc={`Kenali Lebih Dalam Tentang Kami. Visi, Misi dan Berbagai Informasi Layanan Terbaru Mengenai Troffen Disini!`} icon={`troffen.ico`}>
      <Jumbotron title="Kebijakan Privasi" desc="Diperbarui pada: 12 November 2022" />
      <div className={styles.container}>
        <div className={styles.body}>
          {/* <div className={styles.title}>Frequently Asked Questions</div> */}
          <div className={styles.content}>
            <p>
              ZMFY Ons Demand having their registered address at Menara Centennial 35th FLoor Jl. Gatot Subroto No.Kav. 24-25, RT.2/RW.2, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930 is
              engaged in facilitating freelance services to customers worldwide remotely via video communication (“Services”). The following terms and conditions govern your access and use of the web portal and all information, content,
              services and functionality available at or through the application and/or the website, ZMFE.ME (“ Platform”). This Platform is owned and operated by ZMFY Ons Demand, a registered company in Indonesia. (“ZMFY”,” we”, “us “, or
              “our “).
            </p>
            <p>This page sets out our Services and Platform terms of use (“ Terms of Service”). The Terms of Service on this page are important because they describe:</p>
            <ul>
              <li>the rlies to be followed when using the Services and Platform; and</li>
              <li>the terms and conditions that apply to any subscription you make on our Services and Platform.</li>
            </ul>
            <p>
              PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE USING THE PLATFORM. By visiting our Platform, you agree to be bound by the following Terms of Service and Privacy Policy , including those additional terms and conditions and
              policies referenced herein and/or available by hyperlink.
            </p>
            <p>
              These Terms of Service apply to all users of the Platform, including without limitation users who are browsers, vendors, customers, service providers, contributors of content , and/or anyone who accesses or uses our Services
              and Platform as well as any features (including the [please insert other features]) and content (including the pricing and FAQ) made available through the Platform (“ you, yours, or Users”). You acknowledge that you have read
              these Terms of Service and indicate your agreement to be bound by these Terms of Service and the documents referred to in them. In the event of any conflict or inconsistency between these Terms of Service and pricing or FAQ,
              these Terms of Service shall prevail. If you do not agree with all of these Terms of Service, then you are prohibited from using the Platform and Services and you must discontinue use immediately. If these Terms of Service are
              considered an offer, acceptance is expressly limited to these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </LoginTemplate>
  );
};

export default index;
