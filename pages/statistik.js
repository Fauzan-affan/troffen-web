import { useEffect, useState } from "react";
import DashboardTemplate from "../components/layouts/DashboardTemplate";
import styles from "../styles/Statistik.module.css";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { getStatistik, getMonthlyStatistik } from "../functions/statistik";
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
  const [iklanDilihat, setIklanDilihat] = useState();
  const [totalMurid, setTotalMurid] = useState();

  const [totalKursus, setTotalKursus] = useState();

  const [labelMonths, setLabelMonths] = useState();
  const [studentPerMonth, setStudentPerMonth] = useState();

  const data = {
    labels: labelMonths,
    datasets: [
      {
        label: "Murid",
        data: studentPerMonth,
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
        // console.log(res);
        let totalMurid = parseInt(res.data.data[0].total_iklan_diterima) + parseInt(res.data.data[0].total_iklan_ditolak) + parseInt(res.data.data[0].total_iklan_selesai);
        setIklanAktif(res.data.data[0].total_iklan_aktif);
        setIklanDilihat(res.data.data[0].total_iklan_dilihat);
        setTotalMurid(totalMurid);
        setTotalKursus(res.data.data[0].total_iklan_all);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatistikPerMonth = async () => {
    try {
      const res = await getMonthlyStatistik(Cookies.get("token"), new Date().getFullYear(), "All");
      if (res !== undefined && res.meta.code === 200) {
        // console.log(res);
        let bulan = [];
        let student = [];
        res.data.map((item) => {
          // ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"]
          let stringBulan = "";
          switch (item.month) {
            case "01":
              stringBulan = "Jan";
              break;
            case "02":
              stringBulan = "Feb";
              break;
            case "03":
              stringBulan = "Mar";
              break;
            case "04":
              stringBulan = "Apr";
              break;
            case "05":
              stringBulan = "May";
              break;
            case "06":
              stringBulan = "Jun";
              break;
            case "07":
              stringBulan = "Jul";
              break;
            case "08":
              stringBulan = "Aug";
              break;
            case "09":
              stringBulan = "Sep";
              break;
            case "10":
              stringBulan = "Oct";
              break;
            case "11":
              stringBulan = "Nov";
              break;
            case "12":
              stringBulan = "Des";
              break;

            default:
              stringBulan = "Bulan";
              break;
          }
          bulan.push(stringBulan);
          student.push(item.total_student);
        });
        setLabelMonths(bulan);
        setStudentPerMonth(student);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleChartData();
    handleStatistikPerMonth();
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
            <div className={styles.total_iklan_dilihat_value}>{iklanDilihat}</div>
          </div>
          <div className={styles.total_murid}>
            <div className={styles.total_murid_label}>TOTAL MURID</div>
            <div className={styles.total_murid_value}>{totalMurid}</div>
          </div>
        </div>
        <div className={styles.statistik_content_down}>
          <div className={styles.pengajuan_kursus_oleh_murid}>
            <div className={styles.pengajuan_kursus_oleh_murid_label}>PENGAJUAN KURSUS OLEH MURID</div>
            <div className={styles.pengajuan_kursus_oleh_murid_value}>{`${totalKursus} Kursus`}</div>
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
