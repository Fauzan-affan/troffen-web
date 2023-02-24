import DashboardTemplate from "../components/layouts/DashboardTemplate";

const statistik = () => {
  return <div>statistik</div>;
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
