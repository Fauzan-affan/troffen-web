import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import LoginTemplate from "../../components/layouts/LoginTemplate";
import styles from "../../styles/cari-guru/CourseId.module.css";

const CourseId = () => {
  const router = useRouter();
  const { courseId } = router.query;

  return (
    <LoginTemplate title={`Cari Guru - Troffen`} desc={`Cari guru yang sesuai denganmu`} icon={`troffen.ico`}>
      <div className={styles.container}>
        <div className={styles.body_left}>
          <div className={styles.card}>
            <Image />
            <div className={styles.nama_guru}>
              <div className={styles.label_nama_guru}>Nama Guru</div>
              <div className={styles.value_nama_guru}>
                <nav>John Doe</nav>
                <Image />
              </div>
            </div>
            <Link href={`#`} className={styles.view_profile}>
              Lihat Profil Lengkap
            </Link>
            <div className={styles.tarif_kursus}>
              <div className={styles.label_tarif_guru}>Tarif kursus &#x28;persesi&#x29;</div>
              <div className={styles.nominal_tarif_guru}>Rp 100.000/jam</div>
            </div>
            <button className={styles.button}>Ajukan Kursus</button>
            <p>Laporkan Guru</p>
          </div>
        </div>
        <div className={styles.body_right}>
          <div className={styles.info}>masih kosong</div>
        </div>
      </div>
    </LoginTemplate>
  );
};

export default CourseId;
