import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Cookies from "js-cookie";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer.js";

import ModalPopupLogic from "../../logic/ModalPopupLogic";

const LoginTemplate = ({ title, desc, icon, children, isNavbar }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [showModal, setShowModal] = useState(false);
  const [menu, setMenu] = useState("");
  const [navbar, setNavbar] = useState("");
  const [masukSebagaiType, setMasukSebagaiType] = useState(1);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const modalConfig = (headerMenu, modalStatus) => {
    setMenu(headerMenu);
    setShowModal(modalStatus);
  };

  const handleNavbar = () => {
    setNavbar("");
    router.back();
  };

  const changeLoginType = (type) => {
    setMasukSebagaiType(type);
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // email: email1@gmail.com, pass: password
    // email: email2@email.com, pass: password
    if (state.email.length !== 0 && state.password.length !== 0) {
      try {
        const res = await fetch("https://api.troffen-api.com/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // credentials: "include",
          body: JSON.stringify(state),
        });

        const data = await res.json();
        if (data.meta.code === 200) {
          Cookies.set("token", data.data.token);
          Cookies.set("firstName", data.data.user.first_name);
          setShowModal(false);
        }
      } catch (error) {
        console.log(error);
        if (error.meta.code === 422) {
          console.log(error);
        }
      }
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("firstName");
    signOut();
  };

  useEffect(() => {
    isNavbar ? setNavbar(isNavbar) : "";
  }, [isNavbar]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href={`/${icon}`} />
      </Head>
      <Header modalConfig={modalConfig} navbar={navbar} handleNavbar={handleNavbar} session={session} handleLogout={handleLogout} />
      {children}
      <Footer />
      <ModalPopupLogic onClose={setShowModal} show={showModal} title={menu} session={session} signIn={signIn} masukSebagaiType={masukSebagaiType} changeLoginType={changeLoginType} handleLogin={handleLogin} handleChange={handleChange} />
    </div>
  );
};

export default LoginTemplate;
