import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Cookies from "js-cookie";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer.js";

import ModalPopupLogic from "../core/modal/ModalPopupLogic";

const GeneralTemplate = ({ title, desc, icon, children, isNavbar }) => {
  const router = useRouter();
  // session google & FB
  const { data: session } = useSession();

  const [showModal, setShowModal] = useState(false);
  const [menu, setMenu] = useState("");
  const [navbar, setNavbar] = useState("");
  const [masukSebagaiType, setMasukSebagaiType] = useState(1);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState();
  const [firstname, setFirstname] = useState();

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
      // console.log("anjay");
      router.replace("/");
    }
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
    // tutor => email: fabian@gmail.com, pass: password
    // student => email: student@gmail.com, pass: password
    if (state.email.length !== 0 && state.password.length !== 0) {
      Cookies.set("token", 123);
      state.email === "fabian@gmail.com" && Cookies.set("firstName", "fabian");
      state.email === "student@gmail.com" && Cookies.set("firstName", "student");
      setShowModal(false);
      router.reload();

      // try {
      //   const res = await fetch("https://api.troffen-api.com/api/login", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     // credentials: "include",
      //     body: JSON.stringify(state),
      //   });
      //   const data = await res.json();
      //   // console.log(data.data);
      //   if (data.meta.code === 200) {
      //     Cookies.set("token", data.data.token);
      //     Cookies.set("firstName", data.data.user.first_name);
      //     setShowModal(false);
      //     router.reload();
      //   }
      // } catch (error) {
      //   console.log(error);
      //   if (error.meta.code === 422) {
      //     console.log(error);
      //   }
      // }
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("firstName");
    signOut();
  };

  useEffect(() => {
    isNavbar ? setNavbar(isNavbar) : "";

    if (session) {
      setIsLogin(session);
    }

    if (Cookies.get("token") !== undefined && Cookies.get("firstName").length > 0) {
      setFirstname(Cookies.get("firstName"));
    }

    if (Cookies.get("token") !== undefined && Cookies.get("token").length > 0) {
      setToken(Cookies.get("token"));
    }
  }, [isNavbar, isLogin, token, firstname]);

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

export default GeneralTemplate;
