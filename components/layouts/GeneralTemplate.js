import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import Cookies from "js-cookie";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer.js";

import Input from "../core/Input";
import Modal from "../core/modal/Modal";
import ModalPopupLogic from "../core/modal/ModalPopupLogic";

import { loginProvider } from "../../functions/login";
import { Logout } from "../../functions/logout";
import { forgotPass } from "../../functions/pengaturan";
import { adminLogin, adminLogout } from "../../functions/admin";

import styles from "../../styles/Pengaturan.module.css";

const GeneralTemplate = ({ title, desc, icon, children, isNavbar }) => {
  const router = useRouter();

  const { data: session, status } = useSession();

  const [modalInfo, setModalInfo] = useState(false);
  const [modalForgotPass, setModalForgotPass] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [menu, setMenu] = useState("");
  const [navbar, setNavbar] = useState("");
  const [masukSebagaiType, setMasukSebagaiType] = useState(1);
  const [state, setState] = useState({
    email: "",
    password: "",
    oldPass: "",
    pengaturanPasswordBaru: "",
    konfirmasiPengaturanPasswordBaru: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const [errMessage, setErrMessage] = useState("");

  const [modalRes, setModalRes] = useState(false);
  const [modalWrong, setModalWrong] = useState(false);
  const [modalNull, setModalNull] = useState(false);

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

    try {
      const res = await adminLogin();

      if (res !== undefined && res.meta.code === 200) {
        const { data } = res;
        const { token, role, user } = data;
        Cookies.set("adminToken", token);
        Cookies.set("adminRole", token);
      }
    } catch (error) {
      console.log(error);
    }

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
          const { data } = response;
          const { token, role, user } = data;
          const { first_name, email, id } = user;

          // console.log(user);

          Cookies.set("token", token);
          Cookies.set("userId", id);
          Cookies.set("email", email);
          Cookies.set("firstName", first_name);
          Cookies.set("role", role);

          setShowModal(false);
          setIsLogin(true);
        } else if (response !== undefined && response.meta.code === 422) {
          setErrMessage(response.error[0]);
          setShowModal(false);
          setModalInfo(true);
        } else if (response !== undefined && response.meta.code === 401) {
          setErrMessage(response.meta.message);
          setShowModal(false);
          setModalInfo(true);
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
        setIsLogin(true);
        Cookies.set("token", res.data.token);
        Cookies.set("email", res.data.user.email);
        Cookies.set("firstName", res.data.user.first_name);
        Cookies.set("role", res.data.role);
        Cookies.set("isProvider", "yes");
        router.reload();
      }
    } catch (error) {
      console.log(error);
      setModalInfo(true);
    }
  };

  const handleForgotPass = () => {
    setShowModal(false);
    setModalForgotPass(true);
  };

  const handleLogout = () => {
    Logout();
    // adminLogout(Cookies.get("adminToken"));
    setIsLogin(false);
    router.replace("/");
  };

  const closeModal = () => {
    setModalRes(false);
    setModalForgotPass(false);
  };

  const closeModalWrong = () => {
    setModalWrong(false);
  };

  const closeModalNull = () => {
    setModalNull(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { oldPass, pengaturanPasswordBaru, konfirmasiPengaturanPasswordBaru } = state;

    if (oldPass.length === 0 || pengaturanPasswordBaru.length === 0 || konfirmasiPengaturanPasswordBaru.length === 0) {
      setModalNull(true);
    } else if (pengaturanPasswordBaru !== konfirmasiPengaturanPasswordBaru) {
      setModalWrong(true);
    } else {
      // tokennya kudu dilepas
      try {
        const res = await forgotPass(state.email, oldPass, konfirmasiPengaturanPasswordBaru);
        if (res !== undefined && res.meta.code === 200) {
          setModalRes(true);
        }
      } catch (error) {
        console.log(error.code);
      }
    }
  };

  useEffect(() => {
    isNavbar && setNavbar(isNavbar);

    if (session?.user.account !== undefined && session?.user.account.access_token) {
      getOAuthToken(session?.user.account.access_token);
    }

    // if (Cookies.get("token") === undefined) {
    //   getOAuthToken(session?.user.account.access_token);
    // }

    // console.log(Cookies.get("token"));
  }, [isLogin, isNavbar, session]);

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
        handleForgotPass={handleForgotPass}
      />
      <Modal modalInfo={modalInfo} handleModal={() => setModalInfo(false)}>
        <div>{errMessage}</div>
      </Modal>
      <Modal modalForgotPass={modalForgotPass} onClose={() => setModalForgotPass(false)}>
        <div className={styles.pengaturan_container}>
          <div className={styles.pengaturan_title}>Change Password</div>
          <form onSubmit={handleSubmit} className={styles.pengaturan_form}>
            <Input label={"Email"} name={"pengaturanEmail"} value={state.email} isDisabled={true} />
            <Input label={"Password Saat Ini"} name={"oldPass"} placeholder={"************"} handleChange={handleChange} />
            <Input label={"Password Baru"} name={"pengaturanPasswordBaru"} placeholder={"************"} handleChange={handleChange} />
            <Input
              label={"Konfirmasi Password Baru"}
              name={"konfirmasiPengaturanPasswordBaru"}
              desc={"Kata sandi yang dimasukkan harus minimal 8 karakter dan kombinasi huruf, angka dan tanda baca."}
              placeholder={"************"}
              handleChange={handleChange}
            />
            <button type="submit" className={styles.button}>
              Ubah
            </button>
          </form>
        </div>
        <Modal modalInfo={modalRes} handleModal={() => closeModal()}>
          <div className={styles.modal_res}>Selamat password baru sudah aktif!</div>
        </Modal>
        <Modal modalInfo={modalNull} handleModal={() => closeModalNull()}>
          <div className={styles.modal_res}>Passwword tidak boleh kosong!</div>
        </Modal>
        <Modal modalInfo={modalWrong} handleModal={() => closeModalWrong()}>
          <div className={styles.modal_res}>Konfirmasi Password Baru dan password Baru belum sesuai, silahkan coba lagi..</div>
        </Modal>
      </Modal>
    </div>
  );
};

export default GeneralTemplate;
