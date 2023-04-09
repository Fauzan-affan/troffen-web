import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Logout } from "../../functions/logout";
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
      Cookies.set("email", state.email);
      state.email === "fabian@gmail.com" && Cookies.set("firstName", "fabian") && Cookies.set("role", "tutor");
      state.email === "student@gmail.com" && Cookies.set("firstName", "student") && Cookies.set("role", "student");
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

  useEffect(() => {
    isNavbar ? setNavbar(isNavbar) : "";

    if (session) {
      setIsLogin(session);
    }

    if (Cookies.get("token") !== undefined) {
      setFirstname(Cookies.get("firstName"));
    }

    if (Cookies.get("token") !== undefined) {
      setToken(Cookies.get("token"));
    }
  }, [isNavbar, isLogin, token, firstname, session]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href={`/${icon}`} />
      </Head>
      <Header modalConfig={modalConfig} navbar={navbar} handleNavbar={handleNavbar} isLogin={isLogin} token={token} firstname={firstname} handleLogout={Logout} />
      {children}
      <Footer />
      <ModalPopupLogic
        onClose={setShowModal}
        show={showModal}
        title={menu}
        session={session}
        signIn={signIn}
        password={showPass}
        masukSebagaiType={masukSebagaiType}
        changeLoginType={changeLoginType}
        handleLogin={handleLogin}
        handleChange={handleChange}
        handlePassword={handlePassword}
      />
    </div>
  );
};

export default GeneralTemplate;
