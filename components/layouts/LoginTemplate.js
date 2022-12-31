import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer.js";

import ModalPopupLogic from "../../logic/ModalPopupLogic";

const LoginTemplate = ({ title, desc, icon, children, isNavbar }) => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [menu, setMenu] = useState("");
  const [navbar, setNavbar] = useState("");

  useEffect(() => {
    isNavbar ? setNavbar(isNavbar) : "";
  }, [isNavbar]);

  const modalConfig = (headerMenu, modalStatus) => {
    setMenu(headerMenu);
    setShowModal(modalStatus);
  };

  const handleNavbar = () => {
    setNavbar("");
    router.back();
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href={`/${icon}`} />
      </Head>
      <Header modalConfig={modalConfig} navbar={navbar} handleNavbar={handleNavbar} />
      {children}
      <Footer />
      <ModalPopupLogic onClose={setShowModal} show={showModal} title={menu} />
    </div>
  );
};

export default LoginTemplate;
