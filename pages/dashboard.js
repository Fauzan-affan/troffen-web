import WrapperController from "../controller/wrapperController";
import styles from "../styles/dashboard/Dashboard.module.css";

const Dashboard = () => {
  return (
    <section id="container">
      <div className={styles.container}>Tes Dashboard</div>
    </section>
  );
};

Dashboard.getLayout = function getLayout(Dashboard) {
  return (
    <WrapperController
      component={`dashboard`}
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
    >
      {Dashboard}
    </WrapperController>
  );
};

export default Dashboard;
