import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import { Logout } from "../../functions/logout";
import Cookies from "js-cookie";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer.js";

import Modal from "../core/modal/Modal";
import ModalPopupLogic from "../core/modal/ModalPopupLogic";

import { loginProvider } from "../../functions/login";

const GeneralTemplate = ({ title, desc, icon, children, isNavbar }) => {
  const router = useRouter();

  const { data: session, status } = useSession();

  const [modalInfo, setModalInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [menu, setMenu] = useState("");
  const [navbar, setNavbar] = useState("");
  const [masukSebagaiType, setMasukSebagaiType] = useState(1);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handlePassword = () => {
    setShowPass(!showPass);
  };

  const modalConfig = (headerMenu, modalStatus) => {
    setMenu(headerMenu);
    setShowModal(modalStatus);
  };

  const handleNavbar = (nav) => {
    if (nav === undefined) {
      setNavbar("");
      router.back();
    } else if (nav === "dashboardNavbar") {
      router.push("/dashboard");
    } else if (nav === "home") {
      router.replace("/");
    } else if (nav === "profile") {
      router.replace("/profile");
    }
  };

  const changeLoginType = (type) => {
    // console.log(type);
    setMasukSebagaiType(type);
    Cookies.set("roleLoginProvider", type);
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
    if (state.email.length !== 0 && state.password.length !== 0) {
      try {
        const res = await fetch(`https://api.troffen-api.com/api/${masukSebagaiType === 1 ? `student` : `tutor`}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // credentials: "include",
          body: JSON.stringify(state),
        });
        const response = await res.json();
        if (response !== undefined && response.meta.code === 200) {
          setIsLogin(true);
          const { data } = response;
          const { token, role, user } = data;
          const { first_name, email } = user;

          Cookies.set("token", token);
          Cookies.set("email", email);
          Cookies.set("firstName", first_name);
          Cookies.set("role", role);
          setShowModal(false);
          router.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleProviderLogin = (provider) => {
    signIn(provider);
    Cookies.set("provider", provider);
  };

  const getOAuthToken = async (token) => {
    try {
      const res = await loginProvider(token);

      if (res !== undefined && res.meta.code === 200) {
        Cookies.set("token", res.data.token);
        Cookies.set("email", res.data.user.email);
        Cookies.set("firstName", res.data.user.first_name);
        Cookies.set("role", res.data.role);
        setIsLogin(true);
      } else {
        setModalInfo(true);
      }
    } catch (error) {
      console.log(error);
      setModalInfo(true);
    }
  };

  const handleLogout = () => {
    Logout();
    setIsLogin(false);
    router.replace("/");
  };

  useEffect(() => {
    isNavbar && setNavbar(isNavbar);

    if (session?.user.account !== undefined && session?.user.account.access_token) {
      getOAuthToken(session?.user.account.access_token);
    }
  }, [navbar, session]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href={`/${icon}`} />
      </Head>
      <Header modalConfig={modalConfig} navbar={navbar} handleNavbar={handleNavbar} isLogin={isLogin} handleLogout={handleLogout} />
      {children}
      <Footer />
      <ModalPopupLogic
        onClose={setShowModal}
        show={showModal}
        title={menu}
        isLogin={isLogin}
        signIn={handleProviderLogin}
        password={showPass}
        masukSebagaiType={masukSebagaiType}
        changeLoginType={changeLoginType}
        handleLogin={handleLogin}
        handleChange={handleChange}
        handlePassword={handlePassword}
      />
      <Modal modalInfo={modalInfo} handleModal={() => setModalInfo(false)}>
        <div>Akun Belum Terdaftar</div>
      </Modal>
    </div>
  );
};

export default GeneralTemplate;
