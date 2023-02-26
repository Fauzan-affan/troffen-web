import DashboardTemplate from "../components/layouts/DashboardTemplate";
import styles from "../styles/Statistik.module.css";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const statistik = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"],
    datasets: [
      {
        label: "Kursus",
        data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#1EA9E4",
      },
    ],
  };
  return (
    <div className={styles.statistik_container}>
      <div className={styles.statistik_title}>Statistik</div>
      <div className={styles.statistik_content}>
        <div className={styles.statistik_content_top}>
          <div className={styles.total_iklan_aktif}>
            <div className={styles.total_iklan_aktif_label}>TOTAL IKLAN AKTIF</div>
            <div className={styles.total_iklan_aktif_value}>{3}</div>
          </div>
          <div className={styles.total_iklan_dilihat}>
            <div className={styles.total_iklan_dilihat_label}>TOTAL IKLAN DILIHAT</div>
            <div className={styles.total_iklan_dilihat_value}>{24}</div>
          </div>
          <div className={styles.total_murid}>
            <div className={styles.total_murid_label}>TOTAL MURID</div>
            <div className={styles.total_murid_value}>{12}</div>
          </div>
        </div>
        <div className={styles.statistik_content_down}>
          <div className={styles.pengajuan_kursus_oleh_murid}>
            <div className={styles.pengajuan_kursus_oleh_murid_label}>PENGAJUAN KURSUS OLEH MURID</div>
            <div className={styles.pengajuan_kursus_oleh_murid_value}>{`${5} Kursus`}</div>
            <div className={styles.pengajuan_kursus_oleh_murid_line_chart}>
              <Line data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

statistik.getLayout = function getLayout(statistik) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Statistik`}
    >
      {statistik}
    </DashboardTemplate>
  );
};

export default statistik;
