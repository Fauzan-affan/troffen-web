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
    // test_tutor1@email.com
    // test_student1@email.com
    if (state.email.length !== 0 && state.password.length !== 0) {
      try {
        const res = await fetch(`https://api.troffen-api.com/api/${masukSebagaiType === 1 ? `student` : `tutor`}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // credentials: "include",
          body: JSON.stringify(state),
        });
        const response = await res.json();
        console.log(data);
        if (response !== undefined && response.meta.code === 200) {
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
        // if (error !== undefined && error.meta.code === 422) {
        //   console.log(error);
        // }
      }
    }
  };

  const handleLogout = () => {
    setIsLogin(false);
    Logout();
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
      <Header modalConfig={modalConfig} navbar={navbar} handleNavbar={handleNavbar} isLogin={isLogin} token={token} firstname={firstname} handleLogout={handleLogout} />
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
