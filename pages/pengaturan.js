import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import DashboardTemplate from "../components/layouts/DashboardTemplate";
import Input from "../components/core/Input";

import styles from "../styles/Pengaturan.module.css";

const Pengaturan = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState({
    pengaturanPasswordBaru: "",
    konfirmasiPengaturanPasswordBaru: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(state);

    // actions
  };

  useEffect(() => {
    Cookies.get("email").length > 0 && setEmail(Cookies.get("email"));
  }, []);

  return (
    <div className={styles.pengaturan_container}>
      <div className={styles.pengaturan_title}>Pengaturan</div>
      <form onSubmit={handleSubmit} className={styles.pengaturan_form}>
        <Input label={"Email"} name={"pengaturanEmail"} placeholder={email} handleChange={""} isDisabled={true} />
        <Input label={"Password Saat Ini"} name={"pengaturanPassword"} placeholder={"************"} isDisabled={true} />
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
