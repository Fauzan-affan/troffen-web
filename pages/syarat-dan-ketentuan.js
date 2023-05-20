import Jumbotron from "../components/core/Jumbotron";
import GeneralTemplate from "../components/layouts/GeneralTemplate";

import styles from "../styles/SyaratKetentuan.module.css";

const index = () => {
  return (
    <GeneralTemplate title={`Ketahui Lebih Banyak Tentang Kami - Troffen`} desc={`Kenali Lebih Dalam Tentang Kami. Visi, Misi dan Berbagai Informasi Layanan Terbaru Mengenai Troffen Disini!`} icon={`troffen.ico`}>
      <Jumbotron type="info" title="Syarat & Ketentuan" desc="Diperbarui pada: 12 November 2022" />
      <div className={styles.container}>
        <div className={styles.body}>
          {/* <div className={styles.title}>Frequently Asked Questions</div> */}
          <div className={styles.content}>
            <h3>Definisi</h3>
            <p>1. Troffen adalah platform pembelajaran online yang menyediakan layanan pengajaran dan pembelajaran melalui internet.</p>
            <p>2. Murid adalah pengguna yang mendaftar untuk mengambil kursus di Troffen.</p>
            <p>3. Pengajar adalah pengguna yang telah disetujui oleh Troffen untuk memberikan kursus di platform Troffen.</p>
            <p>4. Kursus adalah program yang disediakan oleh Pengajar di platform Troffen.</p>
            <p>5. Biaya kursus adalah biaya yang harus dibayar oleh murid untuk mengikuti kursus di Troffen.</p>
            <p>6. Biaya kursus yang dibayarkan akan diberikan kepada pengajar.</p>
            <p>7. Sertifikat adalah bukti resmi yang dikeluarkan oleh Troffen sebagai tanda bahwa murid telah menyelesaikan kursus.</p>

            <h3>Syarat dan Ketentuan Umum</h3>
            <p>1. Pengguna harus setidaknya berusia 18 tahun untuk mendaftar sebagai murid atau pengajar di Troffen.</p>
            <p>2. Pengguna harus memberikan informasi yang benar dan akurat saat mendaftar di Troffen.</p>
            <p>3. Pengguna bertanggung jawab untuk menjaga kerahasiaan akun Troffen mereka.</p>
            <p>4. Pengguna dilarang menggunakan Troffen untuk tujuan ilegal atau yang melanggar hak kekayaan intelektual Troffen atau pihak ketiga.</p>
            <p>5. Troffen berhak membatalkan akun pengguna dan menghapus kursus tanpa pemberitahuan terlebih dahulu jika pengguna melanggar Syarat dan Ketentuan Troffen.</p>

            <h3>Syarat dan Ketentuan Murid</h3>
            <p>1. Murid harus membayar biaya kursus sebelum memulai kursus.</p>
            <p>2. Biaya kursus dapat dikembalikan setelah pembayaran dilakukan, dengan persetujuan dan ketentuan pengajar dan Troffen.</p>
            <p>3. Murid harus menyelesaikan semua proses kursus yang diberikan untuk mendapatkan sertifikat.</p>
            <p>4. Troffen tidak menjamin kesuksesan murid dalam mendapatkan sertifikat jika murid tidak menyelesaikan semua proses dalam kursus.</p>
            <p>5. Murid dilarang merekam, memperbanyak, atau menyebarkan materi kursus ke pihak ketiga tanpa persetujuan tertulis dari Troffen.</p>

            <h3>Syarat dan Ketentuan Pengajar</h3>
            <p>1. Pengajar harus menentukan biaya kursus mereka sendiri dan memberikan deskripsi kursus yang jelas.</p>
            <p>2. Troffen akan memotong persentase tertentu dari biaya kursus sebagai komisi untuk Troffen.</p>
            <p>3. Pengajar bertanggung jawab untuk memberikan materi kursus yang berkualitas dan menyelesaikan kursus tepat waktu.</p>
            <p>4. Troffen berhak membatalkan kursus dan meminta pengajar untuk mengembalikan biaya kursus jika kursus tidak memenuhi standar Troffen atau tidak sesuai dengan deskripsi yang diberikan.</p>
            <p>5. Pengajar dilarang merekam, memperbanyak, atau menyebarkan materi kursus ke pihak ketiga tanpa persetujuan tertulis dari Troffen.</p>

            <h3>Syarat dan Ketentuan Konten Kursus</h3>
            <p>1. Guru bertanggung jawab untuk mengembangkan dan menyediakan konten kursus, termasuk bahan ajar dan penilaian.</p>
            <p>2. Guru harus memastikan bahwa konten kursus yang mereka buat dan berikan tidak melanggar hak cipta atau hak milik intelektual orang lain.</p>
            <p>3. Troffen berhak untuk menghapus atau membatasi akses ke konten kursus yang melanggar Syarat dan Ketentuan Troffen.</p>

            <h3>Syarat dan Ketentuan Privasi</h3>
            <p>1. Troffen menghargai privasi pengguna dan berkomitmen untuk melindungi informasi pribadi mereka.</p>
            <p>2. Troffen akan mengumpulkan, menyimpan, dan memproses informasi pribadi pengguna sesuai dengan Kebijakan Privasi Troffen.</p>
            <p>3. Troffen dapat menggunakan data pengguna untuk kepentingan pemasaran atau riset dan pengembangan, tetapi hanya dengan izin pengguna.</p>

            <h3>Syarat dan Ketentuan Penyelesaian Sengketa</h3>
            <p>1. Troffen berusaha menyelesaikan semua sengketa yang terkait dengan layanan Troffen melalui musyawarah, adil, dan transparan.</p>
            <p>2. Jika tidak terdapat kesepakatan melalui musyawarah, sengketa akan diselesaikan melalui pengadilan yang berwenang.</p>

            <h3>Syarat dan Ketentuan Perubahan Syarat dan Ketentuan</h3>
            <p>
              Troffen dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. Pengguna akan diberi pemberitahuan sebelum perubahan terjadi dan diminta untuk menyetujui syarat dan ketentuan baru sebelum melanjutkan penggunaan layanan
              Troffen.
            </p>
          </div>
        </div>
      </div>
    </GeneralTemplate>
  );
};

export default index;
