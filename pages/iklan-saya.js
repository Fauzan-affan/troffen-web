import DashboardTemplate from "../components/layouts/DashboardTemplate";

const Index = () => {
  return <div>Iklan Saya</div>;
};

Index.getLayout = function getLayout(Index) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Iklan Saya`}
    >
      {Index}
    </DashboardTemplate>
  );
};

export default Index;
