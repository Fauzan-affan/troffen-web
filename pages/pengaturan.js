import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import DashboardTemplate from "../components/layouts/DashboardTemplate";
import Input from "../components/core/Input";
import Modal from "../components/core/modal/Modal";

import styles from "../styles/Pengaturan.module.css";

import { changePassStudent, changePassTutor } from "../functions/pengaturan";

const Pengaturan = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState({
    oldPass: "",
    pengaturanPasswordBaru: "",
    konfirmasiPengaturanPasswordBaru: "",
  });

  const [modalRes, setModalRes] = useState(false);
  const [modalWrong, setModalWrong] = useState(false);
  const [modalNull, setModalNull] = useState(false);

  const closeModal = () => {
    setModalRes(false);
  };

  const closeModalWrong = () => {
    setModalWrong(false);
  };

  const closeModalNull = () => {
    setModalNull(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.oldPass.length === 0 || state.pengaturanPasswordBaru.length === 0 || state.konfirmasiPengaturanPasswordBaru.length === 0) {
      setModalNull(true);
    } else if (state.pengaturanPasswordBaru !== state.konfirmasiPengaturanPasswordBaru) {
      setModalWrong(true);
    } else {
      try {
        if (Cookies.get("role") === "student") {
          const res = await changePassStudent(Cookies.get("token"), state.oldPass, state.konfirmasiPengaturanPasswordBaru);
          if (res !== undefined && res.meta.code === 200) {
            setModalRes(true);
          }
        } else if (Cookies.get("role") === "tutor") {
          const res = await changePassTutor(Cookies.get("token"), state.oldPass, state.konfirmasiPengaturanPasswordBaru);
          if (res !== undefined && res.meta.code === 200) {
            setModalRes(true);
          }
        }
      } catch (error) {
        console.log(error.code);
      }
    }
  };

  useEffect(() => {
    Cookies.get("email").length > 0 && setEmail(Cookies.get("email"));
  }, []);

  return (
    <>
      <div className={styles.pengaturan_container}>
        <div className={styles.pengaturan_title}>Pengaturan</div>
        <form onSubmit={handleSubmit} className={styles.pengaturan_form}>
          <Input label={"Email"} name={"pengaturanEmail"} placeholder={email} handleChange={""} isDisabled={true} />
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
    </>
  );
};

Pengaturan.getLayout = function getLayout(Pengaturan) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Pengaturan`}
    >
      {Pengaturan}
    </DashboardTemplate>
  );
};

export default Pengaturan;
