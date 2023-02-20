import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer.js";

import ModalPopupLogic from "../core/modal/ModalPopupLogic";

const LoginTemplate = ({
  title,
  desc,
  icon,
  children,
  modalConfig,
  navbar,
  handleNavbar,
  isLogin,
  token,
  firstname,
  handleLogout,
  setShowModal,
  showModal,
  menu,
  session,
  masukSebagaiType,
  changeLoginType,
  handleLogin,
  handleChange,
  signIn,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href={`/${icon}`} />
      </Head>
      <Header modalConfig={modalConfig} navbar={navbar} handleNavbar={handleNavbar} isLogin={isLogin} token={token} firstname={firstname} handleLogout={handleLogout} />
      {children}
      <Footer />
      <ModalPopupLogic onClose={setShowModal} show={showModal} title={menu} session={session} signIn={signIn} masukSebagaiType={masukSebagaiType} changeLoginType={changeLoginType} handleLogin={handleLogin} handleChange={handleChange} />
    </div>
  );
};

export default LoginTemplate;
