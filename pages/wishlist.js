import DashboardTemplate from "../components/layouts/DashboardTemplate";

const wishlist = () => {
  return <div>Wishlist</div>;
};

wishlist.getLayout = function getLayout(wishlist) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Wishlist`}
    >
      {wishlist}
    </DashboardTemplate>
  );
};

export default wishlist;
