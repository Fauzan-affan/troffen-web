import { useState } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer.js";

import ModalPopupLogic from "../../logic/ModalPopupLogic";

const LoginTemplate = ({ title, desc, icon, children }) => {
  const [showModal, setShowModal] = useState(false);
  const [menu, setMenu] = useState("");

  const modalConfig = (headerMenu, modalStatus) => {
    setMenu(headerMenu);
    setShowModal(modalStatus);
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href={`/${icon}`} />
      </Head>
      <Header modalConfig={modalConfig} />
      {children}
      <Footer />
      <ModalPopupLogic onClose={setShowModal} show={showModal} title={menu} />
    </div>
  );
};

export default LoginTemplate;
