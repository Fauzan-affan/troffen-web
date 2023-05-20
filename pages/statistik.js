import { useEffect, useState } from "react";
import DashboardTemplate from "../components/layouts/DashboardTemplate";
import styles from "../styles/Statistik.module.css";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { getStatistik } from "../functions/statistik";
import Cookies from "js-cookie";

// cons statistik = [
//   {
//     month: "Jan",
//     totalStudent: 33
//   },
//   {
//     month: "Feb",
//     totalStudent: 53
//   },
//   {
//     month: "Mar",
//     totalStudent: 33
//   },
//   {
//     month: "Apr",
//     totalStudent: 33
//   },
//   ...
// ]

const Statistik = () => {
  const [iklanAktif, setIklanAktif] = useState();

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"],
    datasets: [
      {
        label: "Murid",
        data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#1EA9E4",
      },
    ],
  };

  const handleChartData = async () => {
    try {
      const res = await getStatistik(Cookies.get("token"));
      if (res !== undefined && res.meta.code === 200) {
        console.log(res);
        setIklanAktif(res.data.data[0].total_iklan_aktif);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleChartData();
  }, []);

  return (
    <div className={styles.statistik_container}>
      <div className={styles.statistik_title}>Statistik</div>
      <div className={styles.statistik_content}>
        <div className={styles.statistik_content_top}>
          <div className={styles.total_iklan_aktif}>
            <div className={styles.total_iklan_aktif_label}>TOTAL IKLAN AKTIF</div>
            <div className={styles.total_iklan_aktif_value}>{iklanAktif}</div>
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

Statistik.getLayout = function getLayout(Statistik) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Statistik`}
    >
      {Statistik}
    </DashboardTemplate>
  );
};

export default Statistik;
