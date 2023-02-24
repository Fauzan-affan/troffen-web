import DashboardTemplate from "../components/layouts/DashboardTemplate";

const pengaturan = () => {
  return <div>pengaturan</div>;
};

pengaturan.getLayout = function getLayout(pengaturan) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Pengaturan`}
    >
      {pengaturan}
    </DashboardTemplate>
  );
};

export default pengaturan;
