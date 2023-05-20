import Jumbotron from "../components/core/Jumbotron";
import GeneralTemplate from "../components/layouts/GeneralTemplate";

import styles from "../styles/SyaratKetentuan.module.css";

const index = () => {
  return (
    <GeneralTemplate title={`Ketahui Lebih Banyak Tentang Kami - Troffen`} desc={`Kenali Lebih Dalam Tentang Kami. Visi, Misi dan Berbagai Informasi Layanan Terbaru Mengenai Troffen Disini!`} icon={`troffen.ico`}>
      <Jumbotron type="info" title="Kebijakan Privasi" desc="Diperbarui pada: 12 November 2022" />
      <div className={styles.container}>
        <div className={styles.body}>
          {/* <div className={styles.title}>Frequently Asked Questions</div> */}
          <div className={styles.content}>
            <h3>Kebijakan Privasi</h3>
            <p>
              Situs web ini dimiliki dan dikelola oleh Troffen Academy ({`"Troffen", "kami", "kita", "milik kami"`}). Kebijakan privasi ini akan ditinjau secara berkala untuk memastikan bahwa kebijakan tersebut selalu diperbarui. Sebagai
              pengguna situs web kami ({`"Anda", "kamu", "pelanggan", "pengguna"`}), kami menyarankan Anda untuk memeriksa halaman ini secara teratur, untuk memastikan bahwa Anda selalu mengetahui perubahannya.
            </p>

            <h3>Tentang Kebijakan Privasi</h3>
            <p>
              Kebijakan Privasi kami bertujuan untuk menjelaskan bagaimana kami menghargai, menggunakan, dan mengumpulkan informasi pribadi Anda yang dapat diidentifikasi dan diperoleh dari setiap proses yang sedang berlangsung. Setiap
              informasi pribadi yang Anda kirimkan melalui situs web Troffen Academy atau kegiatan offline akan menjadi risiko Anda sendiri. Dengan mengirimkan informasi pribadi Anda kepada kami, Anda dianggap telah memberikan persetujuan
              atas pengungkapan yang dimaksud dalam kebijakan ini sesuai dengan yang dipersyaratkan.
            </p>

            <h3>Ruang Lingkup Kebijakan</h3>
            <p>
              Kebijakan Privasi ini dimaksudkan untuk mengkomunikasikan penggunaan informasi pribadi Anda yang dikumpulkan dari kunjungan Anda ke situs web atau aktivitas offline kami. Kebijakan Privasi ini juga mencakup perlindungan kami
              terhadap informasi Anda yang kami bagikan dengan mitra bisnis kami, atau informasi pribadi yang Anda berikan kepada kami melalui situs web pihak ketiga. Kebijakan ini tidak berlaku untuk situs web dan aktivitas yang tidak kami
              miliki/kelola, atau individu yang tidak kami pekerjakan.
            </p>

            <h3>Informasi/Data Yang Kami Kumpulkan</h3>
            <p>
              <strong>Informasi pribadi yang Anda berikan:</strong>
            </p>
            <p>
              - Dengan melakukan pemesanan di situs web kami melalui telepon, email, atau secara langsung, di sebuah acara, kami mungkin perlu mengumpulkan nama, alamat email, nomor telepon, nomor identitas, alamat pengiriman, dan alamat
              penagihan Anda. Selain itu, kami mungkin memerlukan detail kartu debit atau kredit Anda seperti nomor kartu, nomor CV2, dan tanggal kadaluarsa kartu.
            </p>
            <p>- Dengan mendaftar ke situs web dan buletin kami, kami akan mengumpulkan alamat email, nama, lokasi, jenis kelamin, usia, dan preferensi Anda yang relevan dengan riset pemasaran atau produk kami.</p>
            <p>
              <strong>Harap diperhatikan:</strong> Kami tidak menerima detail kartu kredit atau debit apa pun melalui email. Jika Anda mengirimkan detail kartu Anda melalui email, Anda akan menanggung risiko sendiri. Email ini dan email
              lain yang menautkan yang dapat mengungkapkan informasi kartu Anda akan segera dimusnahkan.
            </p>

            <p>
              <strong>Informasi pribadi yang kami kumpulkan:</strong>
            </p>
            <p>
              Dengan mengunjungi situs web kami, kami dapat mengumpulkan informasi pribadi Anda seperti alamat IP atau MAC Anda, informasi lokasi, jenis browser yang digunakan, sistem operasi, tanggal dan waktu akses, lama waktu melihat
              halaman, halaman mana yang telah dikunjungi dan berapa kali, dan informasi serupa lainnya yang dihasilkan oleh browser. Informasi ini dikumpulkan dalam bentuk statistik anonim dengan menggunakan cookie dan teknologi serupa di
              situs web kami. Kami tidak akan dapat mengidentifikasi Anda secara pribadi dengan melihat data ini. Silakan lihat Kebijakan Cookie kami untuk informasi lebih lanjut.
            </p>

            <p>
              <strong>Informasi pribadi yang kami terima dari sumber lain:</strong>
            </p>
            <p>
              {`Dengan 'menyukai' halaman Media Sosial kami atau mengomentari postingan kami, kami akan dapat melihat nama Anda, mengakses halaman profil Anda, dan kami dapat mengumpulkan beberapa informasi yang mungkin termasuk data pribadi
              Anda. Prinsip ini berlaku di semua saluran media sosial seperti Instagram, Facebook, dan platform serta aplikasi media sosial lainnya.`}
            </p>
            <p>
              Harap diperhatikan, informasi yang dapat kami akses akan disimpan oleh masing-masing platform media sosial, yang bertanggung jawab atas keamanan Anda dan memiliki kebijakan privasi sendiri, yang telah Anda setujui. Kami
              menyarankan Anda untuk sesekali meninjau Kebijakan Privasi ini untuk memastikan Anda puas dengan cara informasi pribadi Anda diproses dan digunakan.
            </p>

            <h3>Mengapa Kami Mengumpulkan Informasi Pribadi Anda</h3>
            <p>
              <strong>Informasi pribadi yang Anda berikan:</strong>
            </p>
            <p>
              - Dasar hukum yang digunakan untuk memproses pesanan Anda, baik yang dilakukan di situs web kami, melalui telepon, secara langsung, pada suatu acara, adalah kontrak dan kewajiban hukum. Data yang diberikan kepada kami
              memungkinkan kami untuk memproses pesanan Anda dan mengirimkan pesanan kepada Anda, untuk membantu Anda dengan pengembalian dan perbaikan, dan untuk menanggapi pertanyaan Anda.
            </p>
            <p>
              - Dasar hukum yang memungkinkan kami untuk mengirimkan buletin elektronik kepada Anda setelah Anda berlangganan untuk menerima buletin elektronik kami adalah persetujuan. Untuk mendaftar ke buletin kami, Anda harus menyatakan
              bahwa Anda telah membaca Syarat &amp; Ketentuan dan Kebijakan Privasi kami, dan Anda setuju untuk menerima berita pemasaran yang relevan kepada Anda, seperti informasi tentang produk, acara, diskon, pembaruan Troffen, liputan
              pers Troffen, dan informasi pemasaran relevan lainnya. Terkadang, kami dapat menyertakan informasi yang relevan tentang pihak ketiga atau perusahaan lain dalam buletin kami. Kami juga akan mengirimkan email kepada Anda jika
              dan ketika kami membuat perubahan besar pada kebijakan dan ketentuan kami.
            </p>

            <p>
              <strong>Informasi pribadi yang kami kumpulkan:</strong>
            </p>
            <p>
              Saat Anda mengunjungi situs web kami, kami memiliki dasar hukum yang sah atas kepentingan yang sah untuk memproses data Anda untuk menawarkan layanan yang Anda minta dan untuk memberikan pengalaman situs web yang lebih baik,
              seperti menampilkan produk yang baru saja Anda lihat. Data yang dikumpulkan juga memungkinkan kami untuk menampilkan iklan dan penawaran yang relevan kepada Anda di situs web pihak ketiga dan platform media sosial. Selain itu,
              kami menggunakan data ini untuk menganalisis perilaku di situs web kami guna meningkatkan layanan kami kepada Anda. Data ini akan dikumpulkan dengan menggunakan cookie dan teknologi serupa. Silakan lihat Kebijakan Cookie kami
              untuk informasi lebih lanjut.
            </p>

            <p>
              <strong>Informasi pribadi yang kami terima dari sumber lain:</strong>
            </p>
            <p>
              {`Dengan terhubung dengan kami melalui akun media sosial, kami mengumpulkan data, termasuk lokasi, usia, dan bahasa, berdasarkan kepentingan yang sah bagi kami untuk mengembangkan pemahaman tentang audiens kami dan untuk
              membantu kami meningkatkan konten dan layanan kami kepada Anda. Informasi ini tidak memungkinkan kami untuk mengidentifikasi Anda secara pribadi. Kami akan dapat melihat nama yang Anda gunakan di akun media sosial Anda dan
              mengakses profil Anda jika Anda berinteraksi dengan kami di platform media sosial dengan mengirimkan pesan kepada kami, "menyukai" atau mengomentari kiriman kami, atau dengan mengikuti kami.`}
            </p>

            <h3>Bagaimana Kami Memberikan Informasi Pribadi Anda</h3>
            <p>
              <strong>Informasi pribadi yang Anda berikan:</strong>
            </p>
            <p>
              - Data pribadi Anda dapat dibagikan dengan beberapa penyedia layanan yang membantu kami mengoperasikan situs web kami, memproses pesanan Anda, dan mengirimkannya kepada Anda. Perusahaan pihak ketiga ini akan menjadi penyedia
              pembayaran, dukungan TI, pengembang situs web, dan kurir kami.
            </p>
            <p>
              - Jika Anda mendaftar ke situs web atau buletin kami, beberapa data pribadi Anda akan disimpan di platform pihak ketiga yang menyediakan layanan pengumpulan langganan dan pemasaran email kepada kami. Kami juga dapat membagikan
              data ini dengan saluran media sosial, jaringan periklanan, dan pihak ketiga lainnya untuk tujuan periklanan.
            </p>

            <p>
              <strong>Informasi pribadi yang kami kumpulkan:</strong>
            </p>
            <p>
              Beberapa data pribadi Anda, yang dikumpulkan oleh cookie kami dan teknologi serupa lainnya, akan dianalisis menggunakan Google Analytics dan platform serupa untuk memungkinkan kami memahami seberapa baik kinerja situs web dan
              aplikasi kami, bagaimana penggunaannya, seberapa baik iklan kami bekerja, produk kami yang paling populer, dan informasi serupa. Hal ini membantu kami meningkatkan kinerja situs web dan aplikasi kami, produk dan layanan yang
              kami tawarkan, serta kampanye dan penargetan iklan kami. Data ini dapat diakses oleh perusahaan pihak ketiga yang menyediakan layanan periklanan online atas nama kami. Untuk melindungi data Anda, kami akan memiliki perjanjian
              kontrak dengan perusahaan pihak ketiga yang menyediakan layanan ini kepada kami.
            </p>

            <p>
              <strong>Informasi pribadi yang kami terima dari sumber lain:</strong>
            </p>
            <p>
              Dengan berinteraksi dengan kami di media sosial, kami akan memiliki akses ke beberapa data pribadi Anda, dan kami dapat mengumpulkan beberapa informasi yang mungkin termasuk informasi pribadi Anda. Kami dapat memberikan akses
              ke akun media sosial kami kepada perusahaan pihak ketiga yang menyediakan iklan online atas nama kami, untuk memenuhi tugas mereka. Selain itu, kami terkadang mengizinkan beberapa influencer dan blogger untuk mengambil alih
              saluran media sosial kami untuk waktu yang terbatas guna menyediakan konten kepada kami.
            </p>

            <p>
              <strong>Informasi Tambahan</strong>
            </p>
            <p>- Jika Anda ikut serta dalam survei kami, beberapa data pribadi Anda akan disimpan di fasilitas penyimpanan data pihak ketiga yang menyediakan layanan ini kepada kami.</p>
            <p>
              - Kami menjaga kerahasiaan informasi pribadi Anda dengan hati-hati. Dengan demikian, informasi yang Anda berikan kepada kami hanya akan digunakan untuk kepentingan proses akademik. Jika kami memerlukan informasi pribadi Anda
              setelah proses akademik berakhir untuk kebutuhan program lanjutan, kami akan terlebih dahulu meminta persetujuan Anda untuk memberikan informasi Anda kepada pihak ketiga yang merupakan mitra bisnis kami.
            </p>
            <p>
              - Apabila kami membagikan data Anda dengan perusahaan pihak ketiga yang relevan, kami akan memiliki perjanjian kontrak untuk memastikan data Anda terlindungi. Dalam keadaan luar biasa, kami mungkin perlu membagikan data
              pribadi Anda dengan badan pengatur, pemerintah, atau lembaga penegak hukum tertentu.
            </p>

            <h3>Bagaimana Kami Memberikan Informasi Pribadi Anda</h3>
            <p>
              Kerahasiaan informasi pribadi Anda adalah hal yang paling penting bagi kami. Oleh karena itu, kami telah menerapkan teknologi dan kebijakan khusus yang bertujuan untuk melindungi informasi pribadi Anda dari akses yang tidak
              sah dan penggunaan yang tidak semestinya. Meskipun langkah-langkah ini akan terus diperbarui, kami tidak dapat sepenuhnya menjamin bahwa sistem kami benar-benar dapat ditembus oleh aktivitas yang tidak diinginkan. Penting
              untuk diketahui bahwa Anda tidak boleh memberitahukan kata sandi Anda kepada siapa pun dan selalu menjaga keamanan perangkat Anda.
            </p>

            <h3>Siapa Yang Akan Bertanggung Jawab Atas Informasi Pribadi Anda</h3>
            <p>
              Informasi pribadi Anda berada di bawah kendali Troffen Academy, sebuah perusahaan yang didirikan secara hukum di bawah Republik Indonesia, yang berlokasi di [LOKASI]. Selanjutnya, informasi pribadi Anda akan diproses di
              Indonesia.
            </p>

            <h3>Perubahan Kebijakan Privasi</h3>
            <p>
              Perubahan pada Kebijakan Privasi dapat terjadi sewaktu-waktu. Jika ada perubahan, kami akan mempublikasikan perubahan tersebut di halaman ini dan berusaha sebaik mungkin untuk menginformasikan kepada Anda melalui email jika
              ada perubahan yang signifikan. Untuk mencegah kesalahan informasi yang dapat menyebabkan konflik, kami mendorong Anda untuk memeriksa kebijakan privasi kami secara teratur.
            </p>

            <h3>Cookies</h3>
            <p>
              Cookie adalah file data kecil yang ditempatkan oleh browser Anda di komputer atau perangkat Anda. Cookie membantu Anda untuk menggunakan layanan kami yang terkait dengan kegiatan akademik Anda dengan mengingat preferensi Anda
              yang tetap menjadi pengaturan default ketika Anda mengunjungi kembali situs web kami, dan untuk melindungi informasi pribadi Anda. Cookie juga dapat digunakan untuk mengumpulkan informasi agregat tentang area situs web kami
              yang paling sering dikunjungi. Meskipun ada situs web yang menyediakan opsi untuk menonaktifkan cookie, kami sarankan Anda untuk tetap mengaktifkan fitur ini. Dengan demikian, kumpulan informasi ini dapat digunakan untuk
              meningkatkan konten situs web kami dan memberikan pengalaman yang lebih baik kepada Anda dalam menggunakan layanan kami.
            </p>

            <h3>Situs Web Atau Aplikasi Pihak Ketiga</h3>
            <p>
              Harap diperhatikan, situs web dan aplikasi kami mungkin berisi tautan ke situs web dan akun media sosial pihak ketiga lainnya. Kami tidak memiliki kendali atas bagaimana situs dan platform pihak ketiga tersebut mengumpulkan
              dan menggunakan data pribadi Anda dan mendorong Anda untuk membaca kebijakan privasi mereka pada saat kunjungan Anda dengan hati-hati.
            </p>

            <h3>Kebijakan Untuk Anak-Anak</h3>
            <p>Tidak satu pun dari layanan kami yang ditujukan untuk anak-anak. Kami tidak dengan sengaja mengumpulkan informasi pribadi apa pun dari anak-anak di bawah usia 13 tahun. Anda harus berusia minimal 18 tahun.</p>

            <h3>Hubungi Kami</h3>
            <p>
              Jika Anda memiliki pertanyaan atau permintaan tentang Kebijakan Privasi kami, silakan hubungi kami dengan mengirimkan email ke{" "}
              <a href="mailto:troffen.office@gmail.com" style={{ color: "#1ea9e4" }}>
                troffen.office@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </GeneralTemplate>
  );
};

export default index;
