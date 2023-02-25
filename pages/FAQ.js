import Jumbotron from "../components/core/Jumbotron";
import Tab from "../components/core/Tab";
import GeneralTemplate from "../components/layouts/GeneralTemplate";

import styles from "../styles/FAQ.module.css";

const tabObj = [
  {
    id: "FAQ1",
    optionName: "Apa itu Troffen?",
    desc: [
      {
        descId: "desc1",
        val: "Troffen adalah tempat kamu bisa belajar skill apapun dari tutor yang terpecaya. Melalui Troffen kita membuat akses kelas yang fleksibel karena tersedia kelas offline atau online. semua ini bisa dicapai dengan satu web, yaitu melalui Troffen. ",
      },
    ],
  },
  {
    id: "FAQ2",
    optionName: "Bagaimana Cara Menjadi Guru di Troffen?",
    desc: [{ descId: "desc1", val: "Instruksi 1" }],
  },
  {
    id: "FAQ3",
    optionName: "Bagaimana Cara Memesan Kursus di Troffen?",
    desc: [{ descId: "desc1", val: "Instruksi 1" }],
  },
];

const FAQ = () => {
  const defaultType = tabObj[0].id;
  return (
    <GeneralTemplate title={`Ketahui Lebih Banyak Tentang Kami - Troffen`} desc={`Kenali Lebih Dalam Tentang Kami. Visi, Misi dan Berbagai Informasi Layanan Terbaru Mengenai Troffen Disini!`} icon={`troffen.ico`}>
      <Jumbotron title="Butuh bantuan?" placeholder="Cari informasi disini..." buttonLabel="Cari" />
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.title}>Frequently Asked Questions</div>
          <div className={styles.content}>
            <Tab tabObj={tabObj} defaultType={defaultType} isBody={true} />
          </div>
        </div>
      </div>
    </GeneralTemplate>
  );
};

export default FAQ;
