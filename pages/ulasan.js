import DashboardTemplate from "../components/layouts/DashboardTemplate";

const ulasan = () => {
  return <div>ulasan</div>;
};

ulasan.getLayout = function getLayout(ulasan) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Ulasan`}
    >
      {ulasan}
    </DashboardTemplate>
  );
};

export default ulasan;
