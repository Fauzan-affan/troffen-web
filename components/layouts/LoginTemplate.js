import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
// import axios from "axios";
// import Cookies from "js-cookie";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer.js";

import ModalPopupLogic from "../../logic/ModalPopupLogic";

const LoginTemplate = ({ title, desc, icon, children, isNavbar }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

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

    // console.log(target);

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // masuk sebagai murid
    if (masukSebagaiType === 1 && state.email.length !== 0 && state.password.length !== 0) {
      console.log(state, "masuk sebagai: " + masukSebagaiType);
      // let email = state.email;
      // let pass = state.password;
      // let email = "email1@email.com";
      // let pass = "password";

      // console.log(token);

      // try {
      //   const res = await axios
      //     .post(
      //       "https://api.troffen.com/api/login",
      //       {
      //         email: "email1@email.com",
      //         password: "password",
      //       },
      //       {
      //         headers: {
      //           "Content-Type": "application/json",
      //           "Access-Control-Allow-Origin": "*",
      //         },
      //       }
      //     )
      //     .then((res) => {
      //       //set token on cookies
      //       // console.log(res);
      //       Cookies.set("token", res.data.token);
      //     });
      //   // console.log(res); //check now
      // } catch (e) {}

      const res = await fetch("https://api.troffen.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: "email1@email.com", password: "password" }),
      });

      const data = await res.json();
      console.log(data);
    }
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
      <Header modalConfig={modalConfig} navbar={navbar} handleNavbar={handleNavbar} session={session} signOut={signOut} />
      {children}
      <Footer />
      <ModalPopupLogic
        onClose={setShowModal}
        show={showModal}
        title={menu}
        status={status}
        session={session}
        signIn={signIn}
        masukSebagaiType={masukSebagaiType}
        changeLoginType={changeLoginType}
        handleLogin={handleLogin}
        handleChange={handleChange}
      />
    </div>
  );
};

export default LoginTemplate;
