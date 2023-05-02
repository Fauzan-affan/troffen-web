import Jumbotron from "../components/core/Jumbotron";
import Tab from "../components/core/Tab";
import GeneralTemplate from "../components/layouts/GeneralTemplate";

import styles from "../styles/FAQ.module.css";

const tabObj = [
  {
    id: "FAQ1",
    optionName: "Pertanyaan Umum",
    desc: [
      {
        descId: "desc1",
        val: `
        <h3>Apa itu Troffen?</h3>
        <p>Troffen adalah platform kursus online yang menyediakan berbagai kursus dalam berbagai bidang seperti desain grafis, pemrograman, bisnis, dan lainnya.</p>
        <h3>Apa saja kursus yang tersedia di Troffen?</h3>
        <p>Troffen menyediakan kursus dalam berbagai bidang seperti Desain Grafis, Pemrograman, Bisnis, Digital Marketing, Fotografi, dan lainnya.</p>
        <h3>Bagaimana Troffen dapat membantu murid mengembangkan skill melalui kursus yang diikuti?</h3>
        <ul>
          <li>Troffen menyediakan instruktur yang berpengalaman dan ahli di bidangnya.</li>
          <li>Materi pembelajaran yang komprehensif yang mudah dipahami.</li>
          <li>Troffen memiliki komunitas online yang aktif dan terbuka untuk membantu murid memperoleh dukungan. Murid dapat berinteraksi dengan instruktur dan sesama murid untuk saling berbagi pengalaman dan saran.</li>
          <li>Pembelajaran dengan cara praktis dan dapat dipraktekan langsung.</li>
          <li>Pemberian sertifikat kepada murid untuk membantu dalam pengembangan karir mereka dan meningkatkan kepercayaan diri.</li>
        </ul>
        <h3>Kenapa para ahli atau profesional harus mengajar di Troffen?</h3>
        <ul>
          <li>Mengajar di Troffen dapat membantu meningkatkan reputasi dan karir para ahli atau profesional.</li>
          <li>Troffen memiliki komunitas online yang aktif dan terbuka untuk para ahli atau profesional. Ini dapat membantu mereka terhubung dengan sesama ahli atau profesional di bidang yang sama dan memperluas jaringan mereka.</li>
          <li>Mengajar di Troffen dapat membantu para ahli atau profesional meningkatkan keterampilan pengajaran mereka</li>
          <li>Mendapatkan Penghasilan Tambahan</li>
          <li>Mengajar di Troffen dapat membantu para ahli atau profesional membantu orang lain mengembangkan keterampilan mereka di bidang tertentu.</li>
        </ul>
        `,
      },
    ],
  },
  {
    id: "FAQ2",
    optionName: "Pengajar",
    desc: [
      {
        descId: "desc1",
        val: `
          <h3>Bagaimana latar belakang guru di Troffen?</h3>
          <p>Troffen menyediakan peluang bagi semua orang yang memiliki pengetahuan dan keterampilan yang dapat diajarkan di platform. Latar belakang guru di Troffen sangat beragam dan dapat berasal dari berbagai bidang, seperti pendidikan formal, pekerjaan profesional, pengalaman kerja, atau bahkan keterampilan hobi.</p>
          <p>Guru di Troffen harus memiliki pengetahuan dan pengalaman yang memadai di bidang yang mereka ajarkan. Mereka juga harus mampu menyajikan materi pembelajaran dengan jelas dan efektif.</p>
          <h3>Apa persyaratan untuk menjadi pengajar di Troffen?</h3>
          <ul>
            <li>Memiliki pengetahuan dan keterampilan yang cukup dan relevan.</li>
            <li>Bersedia mengajarkan secara online.</li>
            <li>Mampu berkomunikasi dengan baik.</li>
            <li>Membuat akun dan melengkapi profil di website Troffen.</li>
          </ul>
          <h3>Apa yang harus dilakukan jika terjadi masalah dalam proses pengajaran di Troffen?</h3>
          <p>Jika terjadi masalah teknis seperti masalah dengan perangkat lunak video atau masalah dengan akun, Anda dapat menghubungi tim dukungan Troffen di laman Hubungi Kami di website.</p>
          <p>Komunikasikan dengan murid secara terbuka dan jujur. Jika ada masalah yang serius, seperti pelanggaran kode etik atau kebijakan Troffen, laporkan masalah tersebut kepada tim dukungan Troffen. Mereka akan menindaklanjuti dan mengambil tindakan yang sesuai.</p>
          <h3>Apakah Troffen menyediakan bahan ajar untuk guru atau guru harus membuat?</h3>
          <p>Troffen memberikan kebebasan kepada pengajarnya untuk menentukan bahan ajar yang akan digunakan dalam kursus mereka. Sebagai pengajar, Anda harus membuat materi pembelajaran Anda sendiri atau menggunakan sumber daya pembelajaran lainnya yang sesuai dengan kursus yang Anda ajarkan.</p>
        </div>
      `,
      },
    ],
  },
  {
    id: "FAQ3",
    optionName: "Murid",
    desc: [
      {
        descId: "desc1",
        val: `
          <div>
            <h3>Apakah saya perlu memiliki pengalaman sebelum mengikuti kursus di Troffen?</h3>
            <p>Tidak semua kursus di Troffen membutuhkan pengalaman sebelumnya, tergantung pada jenis kursus yang Anda pilih. Beberapa kursus mungkin dirancang khusus untuk pemula dan tidak memerlukan pengalaman sebelumnya. Sedangkan, beberapa kursus yang lebih spesifik mungkin memerlukan pengalaman atau pengetahuan dasar sebelumnya.</p>
          </div>
          <div>
            <h3>Bagaimana saya bisa menghubungi pengajar jika saya memiliki pertanyaan tentang kursus?</h3>
            <ul>
              <li>Melalui platform Troffen.</li>
              <li>Melalui email bila pengajar telah memberikan informasi kontak.</li>
              <li>Melalui forum diskusi.</li>
            </ul>
            <p>Pastikan untuk memperhatikan waktu yang tepat untuk menghubungi pengajar, serta sifat pertanyaan yang diajukan.</p>
          </div>
          <div>
            <h3>Apakah saya akan mendapatkan sertifikat setelah menyelesaikan kursus di Troffen?</h3>
            <p>Ya, Troffen menyediakan sertifikat bagi siswa yang berhasil menyelesaikan kursus secara lengkap. Sertifikat tersebut dapat dijadikan sebagai portofolio atau bukti untuk menunjukkan kepada calon employer atau institusi pendidikan tentang keahlian dan kemampuan Anda dalam suatu bidang.</p>
          </div>
          <div>
            <h3>Apakah Troffen menawarkan kelas percobaan (trial) sebelum memutuskan untuk mendaftar kursus?</h3>
            <p>Ya, Troffen menawarkan kelas percobaan atau trial sebelum Anda memutuskan untuk mendaftar kursus. Kelas percobaan tersebut biasanya berisi beberapa video pembelajaran atau bagian dari kursus untuk memberikan gambaran tentang apa yang akan Anda pelajari selama kursus. Namun, tidak semua kursus di Troffen menawarkan kelas percobaan. Pastikan untuk memeriksa deskripsi kursus untuk mengetahui apakah kursus tersebut menawarkan kelas percobaan atau tidak.</p>
          </div>
        `,
      },
    ],
  },
  {
    id: "FAQ4",
    optionName: "Pendaftaran",
    desc: [
      {
        descId: "desc1",
        val: `
        <h3>Berapa lama waktu yang dibutuhkan untuk menyetujui pendaftaran saya sebagai pengajar di Troffen?</h3>
        <p>Waktu yang dibutuhkan untuk menyetujui pendaftaran sebagai pengajar di Troffen bisa bervariasi tergantung pada volume pendaftaran pengajar yang diterima oleh Troffen pada saat itu. Biasanya, Troffen akan memproses permohonan pendaftaran dalam waktu 1-2 hari setelah menerima formulir pendaftaran lengkap. Jika Anda belum menerima persetujuan dalam waktu yang dijanjikan, Anda dapat menghubungi layanan pelanggan Troffen untuk memperoleh informasi lebih lanjut.</p>
        <h3>Berapa biaya untuk menjadi pengajar di Troffen?</h3>
        <p>Tidak ada biaya yang dikenakan untuk menjadi pengajar di Troffen. Troffen adalah platform pembelajaran online yang gratis bagi pengajar untuk mendaftar dan membuat kursus mereka. Namun, Troffen akan memotong persentase tertentu dari harga kursus yang dibuat oleh pengajar sebagai komisi atas penggunaan platform dan fitur-fitur yang disediakan oleh Troffen. Jumlah persentase tersebut bervariasi tergantung pada kebijakan Troffen dan negosiasi dengan pengajar. Sebelum membuat kursus, pastikan untuk memperhatikan kebijakan dan persyaratan Troffen untuk pengajar sehingga Anda dapat mengoptimalkan potensi pendapatan Anda melalui platform Troffen.</p>
        <h3>Berapa biaya untuk mendaftar sebagai murid di Troffen?</h3>
        <p>Biaya untuk mendaftar sebagai murid di Troffen dapat bervariasi tergantung pada kursus yang dipilih. Troffen memberikan kebebasan bagi pengajar untuk menentukan harga kursus yang mereka buat. Oleh karena itu, harga kursus di Troffen dapat bervariasi dari satu pengajar ke pengajar lainnya.</p>
        <h3>Apa yang harus saya lakukan jika saya mengalami kesulitan dalam proses pendaftaran?</h3>
        <ul>
          <li>Periksa kembali data yang Anda masukkan.</li>
          <li>Hubungi layanan pelanggan Troffen.</li>
          <li>Mencoba mendaftar dengan perangkat lain.</li>
          <li>Mencoba secara berkala.</li>
        </ul>
        `,
      },
    ],
  },
  {
    id: "FAQ5",
    optionName: "Pembayaran",
    desc: [
      {
        descId: "desc1",
        val: `
        <div>
        <h3>Apa metode pembayaran yang tersedia di Troffen?</h3>
        <p>Troffen menerima pembayaran melalui transfer bank, kartu kredit, dan dompet digital seperti GoPay, OVO, dan DANA.</p>
        <h3>Apakah saya bisa mendapatkan pengembalian uang jika saya membatalkan pendaftaran kursus?</h3>
        <p>Ya, Anda dapat membatalkan kursus dan meminta pengembalian dana. Namun, biaya pembatalan dapat dikenakan tergantung pada kebijakan pembatalan Troffen dan jumlah waktu yang telah Anda habiskan dalam kursus tersebut. Pastikan untuk membaca syarat dan ketentuan pembatalan sebelum memutuskan untuk membatalkan kursus.</p>
        <h3>Apakah ada biaya tersembunyi saat melakukan pembayaran?</h3>
        <p>Tidak ada biaya tersembunyi saat melakukan pembayaran di Troffen. Total biaya kursus akan ditampilkan di halaman pembayaran dan Anda akan diberitahu tentang biaya lainnya jika ada.</p>
        </div>
        `,
      },
    ],
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
