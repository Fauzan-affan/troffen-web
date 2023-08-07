import Image from "next/image";
import GeneralTemplate from "../../components/layouts/GeneralTemplate";
import styles from "../../styles/MonthlyPass.module.css";

import Tab from "../../components/core/Tab";

import PriceIcon from "../../assets/img/priceIcon.svg";
import E1 from "../../assets/img/e1.svg";
import E2 from "../../assets/img/e2.svg";
import Warning from "../../assets/img/warning-sign.svg";

import CIMB from "../../assets/img/bank/CIMB_Niaga_logo.svg";
import Cookies from "js-cookie";

import { loadCoursesFunc } from "../../functions/courses";

export const getStaticPaths = async () => {
  const res = await loadCoursesFunc();
  const paths = res.data.data.map((item) => ({
    params: {
      courseId: `${item.id}`,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      courseId: params.courseId,
    },
  };
};

const tabObj = [
  // {
  //   id: "bank1",
  //   title: "Virtual Account",
  //   optionName: "BCA",
  //   optionImg: BCA,
  //   desc: [
  //     { descId: "desc1", val: "Instruksi 1" },
  //     { descId: "desc2", val: "Instruksi 2" },
  //     { descId: "desc3", val: "Instruksi 3" },
  //     { descId: "desc4", val: "Instruksi 4" },
  //     { descId: "desc5", val: "Instruksi 5" },
  //   ],
  // },
  // {
  //   id: "bank2",
  //   title: "QR",
  //   optionName: "Bank Permata",
  //   optionImg: Permata,
  //   desc: [
  //     { descId: "desc1", val: "Instruksi 1" },
  //     { descId: "desc2", val: "Instruksi 2" },
  //     { descId: "desc3", val: "Instruksi 3" },
  //     { descId: "desc4", val: "Instruksi 4" },
  //     { descId: "desc5", val: "Instruksi 5" },
  //   ],
  // },
  {
    id: "bank1",
    title: "Transfer",
    optionName: "ATM CIMB Niaga",
    optionImg: CIMB,
    desc: [
      { descId: "desc1", val: "Masukkan kartu ATM ke dalam slot kartu di mesin ATM." },
      { descId: "desc2", val: "Pilih bahasa Indonesia untuk memudahkan kamu bertransaksi." },
      { descId: "desc3", val: "Masukkan nomor PIN ATM kamu." },
      { descId: "desc4", val: "Pilih jenis transaksi yang akan dilakukan. Pilih menu TRANSFER." },
      { descId: "desc5", val: "Setelah itu, pilih bank tujuan transfer." },
      {
        descId: "desc6",
        val: "Masukkan nomor rekening tujuan: 800170922300 / SANG HYANG BATARA ISMAYA. Setelah itu pilih BENAR.",
      },
      {
        descId: "desc7",
        val: "Bila transfer ditujukan ke rekening bank lain, kamu perlu memasukkan kode bank terlebih dahulu lalu diikuti dengan nomor rekening tujuan. Apabila kamu mengirim ke sesama rekening CIMB, kamu cukup memasukkan nomor rekening saja. Setelah memasukkan nomor rekening tujuan, pilih BENAR.",
      },
      { descId: "desc8", val: "Masukkan Nominal Uang yang ingin ditransfer ke rekening tujuan Rp 50.000 (Monthly Pass). Pilih BENAR." },
      { descId: "desc9", val: "Masukkan Nomor Referensi (opsional)" },
      { descId: "desc10", val: "Konfirmasi ulang. Setelah semua detail transaksi yang ditampilkan benar, pilih YA." },
      { descId: "desc11", val: "Transfer berhasil. Kamu akan menerima bukti transaksi berupa struk dan kartu ATM-mu kembali." },
    ],
  },
];

const index = ({ courseId }) => {
  const defaultType = tabObj[0].id;

  return (
    <GeneralTemplate title={`Cari Guru - Troffen`} desc={`Cari guru yang sesuai denganmu`} icon={`troffen.ico`} isNavbar={`backNavbar`}>
      <section id={styles.title}>
        <div className={styles.container}>
          <div className={styles.title_1}>LANGGANAN MONTHLY PASS</div>
          <div className={styles.title_2}>Akses selama 30 hari</div>
        </div>
      </section>

      <section id={styles.info}>
        <div className={styles.container}>
          <div className={styles.info_text}>
            <div className={styles.warning_info}>
              <Image alt="" src={Warning} priority />
            </div>
            <nav>
              Mohon lakukan konfirmasi transfer ke{" "}
              <a
                href={`mailto:troffen.office@gmail.com?subject=MONTHLY PASS - [NO. REK] - ${Cookies.get("email")} - ${Cookies.get(
                  "userId"
                )}&body=Hi Troffen, Saya sudah melakukan pembayaran untuk kursus ${courseId} ke nomor rekening, mohon dikonfirmasi. Thank You!`}
              >
                troffen.office@gmail.com
              </a>{" "}
              dengan subjek “MONTHLY PASS - [NO. REK] - [EMAIL PENGGUNA] - [USER ID]” setelah melakukan pembayaran. Atau{" "}
              <a
                href={`mailto:troffen.office@gmail.com?subject=MONTHLY PASS - [NO. REK] - ${Cookies.get("email")} - ${Cookies.get(
                  "userId"
                )}&body=Hi Troffen, Saya sudah melakukan pembayaran untuk id kursus ${courseId} ke nomor rekening, mohon dikonfirmasi. Thank You!`}
              >
                <u>klik di sini</u>
              </a>
            </nav>
          </div>
        </div>
      </section>

      <section id={styles.content}>
        <div className={styles.content_container}>
          <div className={styles.content_left}>
            <div className={styles.content_left_card}>
              <div className={styles.card_header}>
                <div className={styles.card_header_img}>
                  <Image alt="" src={PriceIcon} priority />
                </div>
                <div className={styles.card_header_price}>
                  <div className={styles.card_header_price_label}>Monthly Pass</div>
                  <div className={styles.card_header_price_amount}>
                    <nav>Rp 50.000</nav>
                    <nav>/bulan</nav>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.card_content}>
                <div className={styles.card_content_1}>
                  <nav>Reservasi kursus selama 30 hari</nav>
                  <nav className={styles.img_info_container}>
                    <Image alt="" src={E1} priority className={styles.e1} />
                    <Image alt="" src={E2} priority className={styles.e2} />
                  </nav>
                </div>
                <div className={styles.card_content_2}>
                  <nav>Unlimited reservasi kursus</nav>
                  <nav className={styles.img_info_container}>
                    <Image alt="" src={E1} priority className={styles.e1} />
                    <Image alt="" src={E2} priority className={styles.e2} />
                  </nav>
                </div>
                <div className={styles.card_content_3}>
                  <nav>Review guru</nav>
                  <nav className={styles.img_info_container}>
                    <Image alt="" src={E1} priority className={styles.e1} />
                    <Image alt="" src={E2} priority className={styles.e2} />
                  </nav>
                </div>
              </div>
            </div>
            <div className={styles.content_left_info}>
              <ul>
                <li>Monthly pass dibutuhkan untuk reservasi semua kursus di Troffen.</li>
                <li>Berlaku selama 30 hari dan perpanjangan dilakukan secara manual.</li>
                <li>Tidak dapat memberhentikan Monthly Pass sewaktu- waktu saat sudah aktif, kecuali masa berlaku sudah berakhir.</li>
              </ul>
            </div>
          </div>
          <hr className={styles.vertical_hr} />
          <div className={styles.content_right}>
            <div className={styles.title}>Tipe Pembayaran</div>
            <Tab tabObj={tabObj} defaultType={defaultType} isHeader={true} isBody={true} />
          </div>
        </div>
      </section>
    </GeneralTemplate>
  );
};

export default index;
