import { useState } from "react";
import { useRouter } from "next/router";
import Autocomplete from "react-autocomplete";
import indonesia from "territory-indonesia";
import styles from "../styles/IklanSaya.module.css";
import DashboardTemplate from "../components/layouts/DashboardTemplate";

import Tab from "../components/core/Tab";
import Tips from "../components/core/Tips";
import Input from "../components/core/Input";
import Select from "../components/core/Select";
import Textarea from "../components/core/Textarea";

const provOption = [];
indonesia
  .getAllProvinces()
  .then((res) => {
    provOption.push(res);
  })
  .catch((err) => console.log(err));
const kotaOption = [];
indonesia
  .getAllRegencies()
  .then((res) => {
    kotaOption.push(res);
  })
  .catch((err) => console.log(err));
const subjekOption = [
  { name: "UI/UX", value: "UI/UX" },
  { name: "Frontend Developer", value: "Frontend Developer" },
  { name: "Backend Developer", value: "Backend Developer" },
];
const hashtagOption = [
  { name: "UI/UX", value: "UI/UX" },
  { name: "Desain", value: "Desain" },
  { name: "Backend Developer", value: "Backend Developer" },
];

const Index = () => {
  const router = useRouter();
  const tabObj = [
    {
      id: "Semua",
      title: "Semua",
    },
    {
      id: "Aktif",
      title: "Aktif",
    },
    {
      id: "Non-Aktif",
      title: "Non-Aktif",
    },
  ];

  const Courses = [
    { status: "Aktif", kursus: "Kursus Programming Phyton", rating: "4.5", totalUlasan: 5 },
    { status: "Non-Aktif", kursus: "Kursus Programming Java", rating: "4.5", totalUlasan: 2 },
    { status: "Aktif", kursus: "Kursus Programming C", rating: "4.5", totalUlasan: 3 },
    { status: "Non-Aktif", kursus: "Kursus Programming C++", rating: "4.5", totalUlasan: 1 },
    { status: "Aktif", kursus: "Kursus Programming PHP", rating: "4.5", totalUlasan: 5 },
  ];

  const defaultType = tabObj[0].id;

  const [stage, setStage] = useState("iklan saya");
  const [state, setState] = useState({
    stage: "",
    email: "",
    password: "",

    namaLengkap: "",
    namaDepan: "",
    namaBelakang: "",
    tanggalLahir: "",
    tempatLahir: "",
    bulanLahir: "",
    tahunLahir: "",
    gender: "",
    fotoProfil: "",
    noHP: "",
    provinsi: "",
    kota: "",
    alamatLengkap: "",

    pengalamanPendidikan: "",
    pengalamanPekerjaan: "",
    sertifikat: "",

    subjekKursus: "",
    judulKursus: "",
    hashtagKursus: "",
    keteranganKursus: "",
    tarifKursus: "",
    onlineKursus: "",
    checkbox: 1,
  });

  const handleStage = (nextStage) => {
    setStage(nextStage);
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

  const handleCheckbox = (val) => {
    setState((state) => ({
      ...state,
      ["checkbox"]: val,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(state);

    if (state.stage === "" && state.email.length !== 0 && state.password.length !== 0) {
      setState((state) => ({
        ...state,
        ["stage"]: "Personal Info",
      }));
    }

    if (
      state.stage === "Personal Info" &&
      state.namaLengkap.length !== 0 &&
      state.namaDepan.length !== 0 &&
      state.namaBelakang.length !== 0 &&
      state.tempatLahir.length !== 0 &&
      state.gender.length !== 0 &&
      state.fotoProfil.length !== 0 &&
      state.noHP.length !== 0 &&
      state.provinsi.length !== 0 &&
      state.kota.length !== 0
    ) {
      setState((state) => ({
        ...state,
        ["stage"]: "Experiences",
      }));
    }

    if (
      state.stage === "Experiences" &&
      state.pengalamanPendidikan.length !== 0 &&
      state.pengalamanPekerjaan.length !== 0
      // && state.sertifikat.length !== 0
    ) {
      setState((state) => ({
        ...state,
        ["stage"]: "Subjek Kursus",
      }));
    }

    if (
      state.stage === "Subjek Kursus" &&
      state.subjekKursus.length !== 0 &&
      state.judulKursus.length !== 0 &&
      state.hashtagKursus.length !== 0 &&
      state.keteranganKursus.length !== 0 &&
      state.tarifKursus.length !== 0 &&
      state.onlineKursus.length !== 0
    ) {
      setState((state) => ({
        ...state,
        ["stage"]: "Done",
      }));
    }
  };

  const handleSubmit = async () => {
    // console.log(state);

    const { namaDepan, namaBelakang, namaLengkap, tempatLahir, tahunLahir, bulanLahir, tanggalLahir, alamatLengkap, fotoProfil, gender, noHP, email, password } = state;

    // try {
    //   const res = await fetch("https://api.troffen-api.com/api/register", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     // credentials: "include",
    //     body: JSON.stringify({
    //       first_name: namaDepan,
    //       last_name: namaBelakang,
    //       full_name: namaLengkap,
    //       birth_place: tempatLahir,
    //       birth_date: `${tahunLahir}-${bulanLahir}-${tanggalLahir}`,
    //       full_address: alamatLengkap,
    //       photo: fotoProfil,
    //       gender: gender,
    //       phone: noHP,
    //       email: email,
    //       password: password,
    //       password_confirmation: password,
    //       user_status: "murid",
    //       id_area: 1,
    //     }),
    //   });

    //   const data = await res.json();
    //   if (data.meta.code === 200) {
    //     // action
    //   }
    // } catch (error) {
    //   console.log(error);
    //   if (error.meta.code === 422) {
    //     console.log(error);
    //   }
    // }
    router.reload();
  };

  const handleReset = () => {
    router.reload();
  };

  return (
    <div>
      {stage === "iklan saya" && <Tab tabObj={tabObj} defaultType={defaultType} isCard={true} isCardBody={true} Courses={Courses} handleStage={handleStage} />}
      {stage === "daftar iklan" && (
        <div className={styles.container_body}>
          <div className={styles.po_body}>
            <div className={styles.po_body_left}>
              <div className={styles.po_body_left_title}>
                <div className={styles.po_title}>
                  {/* <div className={styles.no}>
                    <Image alt="" src={lingkaran} className={styles.no_0} />
                    <Image alt="" src={Tiga} className={styles.no_1} />
                  </div> */}
                  <nav>Buat Iklan</nav>
                </div>
                <div className={styles.po_desc}>Pilih subjek kursus yang sesuai dengan bidang keahlianmu. Kamu hanya dapat memilih 1 subjek kursus</div>
              </div>
              <form onSubmit={handleRegister}>
                {/* {console.log(state.subjekKursus)} */}
                {/* <Autocomplete
                  menuStyle={{
                    borderRadius: "10px",
                    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
                    background: "rgba(255, 255, 255, 0.9)",
                    padding: "2px 0",
                    fontSize: "90%",
                    position: "fixed",
                    overflow: "auto",
                    maxHeight: "50%", // TODO: don't cheat, let it flow to the bottom
                  }}
                  items={subjekOption}
                  shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                  getItemValue={(item) => item.name}
                  renderItem={(item, isHighlighted) => <div style={{ background: isHighlighted ? "lightgray" : "white" }}>{item.name}</div>}
                  value={state.subjekKursus}
                  onChange={(e) => setState({ subjekKursus: e.target.value })}
                  onSelect={(subjekKursus) => setState({ subjekKursus })}
                /> */}
                <Select label="Subjek Kursus" optionLabel="Pilih subjek kursus" desc="" name="subjekKursus" options={subjekOption} handleChange={handleChange} />
                <Input label="Judul Kursus" name="judulKursus" desc="Contoh: Kursus Bahasa Inggris Dasar" placeholder="Mauskkan judul kursus" handleChange={handleChange} />
                <Select label="Hashtag Kursus" optionLabel="Pilih hashtag kursus (sesuai subjek)" desc="" name="hashtagKursus" options={hashtagOption} handleChange={handleChange} />
                <Textarea
                  label="Keterangan Kursus"
                  name="keteranganKursus"
                  desc="Contoh: Bahasa Inggris Dasar untuk pemula. Materi akan membahas Grammar, Vocabulary dan Speaking."
                  col={40}
                  row={4}
                  placeholder="Minimal 250 karakter"
                  handleChange={handleChange}
                />
                <Input type="sideLabel" inputLabel="per sesi" label="Tarif Kursus" name="tarifKursus" desc="Tarif dasar kursus per sesi. Contoh: Rp 50.000/sesi (jam). " placeholder="Masukkan minimal tarif" handleChange={handleChange} />
                <Select label="Area Kursus" optionLabel="Pilih area kursus" desc="" name="areaKursus" options={kotaOption[0]} handleChange={handleChange} />
                <div className={styles.online_offline_title}>Tersedia Kursus Online?</div>
                <div className={styles.online_offline}>
                  <div className={styles.deco}>
                    <label>
                      <input type="checkbox" name="onlineKursus" value="1" onChange={handleChange} onClick={() => handleCheckbox(1)} checked={state.checkbox === 1} />
                      <span>Ada</span>
                    </label>
                  </div>
                  <div className={styles.deco}>
                    <label>
                      <input type="checkbox" name="onlineKursus" value="0" onChange={handleChange} onClick={() => handleCheckbox(0)} checked={state.checkbox === 0} />
                      <span>Tidak</span>
                    </label>
                  </div>
                </div>
                <div className={styles.button_container}>
                  <button type="submit" className={styles.button_kembali} onClick={() => handleReset()}>
                    Reset
                  </button>
                  <button type="submit" className={styles.button} onClick={() => handleSubmit()}>
                    Selesai
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.po_body_right}>
              <Tips
                tips0_title="Judul Subjek Kursus Yang Menarik dan Jelas"
                tips0_desc="Contoh: Kursus Bahasa Inggris Untuk Pemula (SD-SMP)"
                tips1_title="Keterangan Mengandung Ajakan yang Kuat"
                tips1_desc="Contoh:  Guru Bahasa Inggris professional dengan pengalaman 5 tahun mengajar. Memiliki  5 sertifikat internasional dan nilai TOEFL di atas rata-rata. Tersedia mengajar secara offline di area domisili dan juga online."
                tips2_title="Tetapkan Tarif Kursus per Sesi (jam)"
                tips2_desc="Contoh:  Rp 50.000/sesi"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Index.getLayout = function getLayout(Index) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Iklan Saya`}
    >
      {Index}
    </DashboardTemplate>
  );
};

export default Index;
