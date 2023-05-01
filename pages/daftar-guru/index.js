import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Autocomplete from "react-autocomplete";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import Cookies from "js-cookie";

import Image from "next/image";
import GeneralTemplate from "../../components/layouts/GeneralTemplate";
import Progress from "../../components/core/Progress";
import Tips from "../../components/core/Tips";
import Input from "../../components/core/Input";
import Upload from "../../components/core/Upload";
import Select from "../../components/core/Select";
import Textarea from "../../components/core/Textarea";

import styles from "../../styles/DaftarGuru.module.css";

import Jumbo from "../../assets/img/pendaftaraan/bg_daftar_guru.svg";

import Email from "../../assets/img/png/001-mail.png";
import Pass from "../../assets/img/png/002-eye.png";
import Google from "../../assets/img/png/002-search.png";
import Fb from "../../assets/img/png/001-facebook.png";
import Satu from "../../assets/img/1.svg";
import Dua from "../../assets/img/2.svg";
import Tiga from "../../assets/img/3.svg";
import lingkaran from "../../assets/img/EllipseNo.svg";
import CMG1 from "../../assets/img/pendaftaraan/g10.svg";
import CMG2 from "../../assets/img/pendaftaraan/g11.svg";
import no1 from "../../assets/img/pendaftaraan/no1.svg";
import no2 from "../../assets/img/pendaftaraan/no2.svg";
import DoneIklan from "../../assets/img/iklan_done.svg";
import ShowPass from "../../assets/img/show.png";

import Modal from "../../components/core/modal/Modal";
import Checkbox from "../../components/core/Checkbox";

import { loadProvinceFunc } from "../../functions/province";
import { loadCityFunc } from "../../functions/city";
import { submitPersonalInfo, submitEducation, submitWork, submitCertificate, submitCourse, getUserDetail, registerProvider } from "../../functions/tutor";

const date = [
  { name: 1, value: 1 },
  { name: 2, value: 2 },
  { name: 4, value: 4 },
  { name: 5, value: 5 },
  { name: 6, value: 6 },
  { name: 7, value: 7 },
  { name: 8, value: 8 },
  { name: 9, value: 9 },
  { name: 10, value: 10 },
  { name: 11, value: 11 },
  { name: 12, value: 12 },
  { name: 13, value: 13 },
  { name: 14, value: 14 },
  { name: 15, value: 15 },
  { name: 16, value: 16 },
  { name: 17, value: 17 },
  { name: 18, value: 18 },
  { name: 19, value: 19 },
  { name: 20, value: 20 },
  { name: 21, value: 21 },
  { name: 22, value: 22 },
  { name: 23, value: 23 },
  { name: 24, value: 24 },
  { name: 25, value: 25 },
  { name: 26, value: 26 },
  { name: 27, value: 27 },
  { name: 28, value: 28 },
  { name: 29, value: 29 },
  { name: 30, value: 30 },
  { name: 31, value: 31 },
];
const month = [
  { name: 1, value: 1 },
  { name: 2, value: 2 },
  { name: 3, value: 3 },
  { name: 4, value: 4 },
  { name: 5, value: 5 },
  { name: 6, value: 6 },
  { name: 7, value: 7 },
  { name: 8, value: 8 },
  { name: 9, value: 9 },
  { name: 10, value: 10 },
  { name: 11, value: 11 },
  { name: 12, value: 12 },
];
const year = [
  { name: 1980, value: 1980 },
  { name: 1981, value: 1981 },
  { name: 1982, value: 1982 },
  { name: 1983, value: 1983 },
  { name: 1984, value: 1984 },
  { name: 1985, value: 1985 },
  { name: 1986, value: 1986 },
  { name: 1987, value: 1987 },
  { name: 1988, value: 1988 },
  { name: 1989, value: 1989 },
  { name: 1990, value: 1990 },
  { name: 1991, value: 1991 },
  { name: 1992, value: 1992 },
  { name: 1993, value: 1993 },
  { name: 1994, value: 1994 },
  { name: 1995, value: 1995 },
  { name: 1996, value: 1996 },
  { name: 1997, value: 1997 },
  { name: 1998, value: 1998 },
  { name: 1999, value: 1999 },
  { name: 2001, value: 2001 },
  { name: 2002, value: 2002 },
  { name: 2003, value: 2003 },
  { name: 2004, value: 2004 },
  { name: 2005, value: 2005 },
  { name: 2006, value: 2006 },
  { name: 2007, value: 2007 },
  { name: 2008, value: 2008 },
  { name: 2009, value: 2009 },
  { name: 2010, value: 2010 },
  { name: 2011, value: 2011 },
  { name: 2012, value: 2012 },
  { name: 2013, value: 2013 },
  { name: 2014, value: 2014 },
  { name: 2015, value: 2015 },
  { name: 2016, value: 2016 },
  { name: 2017, value: 2017 },
  { name: 2018, value: 2018 },
  { name: 2019, value: 2019 },
  { name: 2020, value: 2020 },
  { name: 2021, value: 2021 },
  { name: 2022, value: 2022 },
  { name: 2023, value: 2023 },
];
const degree = [
  { name: "SD", value: "SD" },
  { name: "SMP", value: "SMP" },
  { name: "SMA", value: "SMA" },
  { name: "S1", value: "S1" },
  { name: "S2", value: "S2" },
  { name: "S3", value: "S3" },
];
const genderOption = [
  { name: "Laki - Laki", value: "Laki - Laki" },
  { name: "Perempuan", value: "Perempuan" },
];
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

const DaftarGuru = () => {
  const router = useRouter();

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
    fotoProfil: "",
    noHP: "",
    alamatLengkap: "",
  });

  const [stateExp, setStateExp] = useState({
    token: "",
    eduSchool: "",
    eduDegree: "",
    startDate: "",
    endDate: "",

    userId: "",
    companyName: "",
    workTitle: "",
    startWork: "",
    endWork: "",
    workDesc: "",
    sertifikat: "",
  });

  // token,
  // courseCategory = subjekKursus,
  // (courseTitle = judulKursus),
  // (courseHashtag = hashtagKursus),
  // (courseDescription = keteranganKursus),
  // courseDetail,
  // (coursePrice = tarifKursus),
  // courseArea = areaKursus,
  // isOnline = onlineKursus;

  const [stateCourse, setStateCourse] = useState({
    judulKursus: "", // done
    keteranganKursus: "", // done
    tarifKursus: "", // done
    // areaKursus: "", // done
    onlineKursus: 1, // done
  });

  const [subjekKursus, setSubjekKursus] = useState("");
  const [hashtagKursus, setHashtagKursus] = useState("");

  const [areaKursus, setAreaKursus] = useState("");

  const [user, setUser] = useState([]);

  const [gender, setGender] = useState("");

  const [provinces, setProvinces] = useState([]);
  const [provinsi, setProvinsi] = useState("");

  const [cities, setCities] = useState([]);
  const [kota, setKota] = useState("");
  const [selectedKotaId, setSelectedKotaId] = useState(0);
  const [personalInfoRes, setPersonalInfoRes] = useState([]);

  const [password, setPassword] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalPend, setModalPend] = useState(false);
  const [modalPek, setModalPek] = useState(false);
  const [modalRegisterProvider, setModalRegisterProvider] = useState(false);

  const handleProvinces = async () => {
    try {
      const prov = await loadProvinceFunc();

      setProvinces(prov);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCities = async (provinceId) => {
    try {
      const city = await loadCityFunc(provinceId);

      setCities(city);
    } catch (error) {
      console.log(error);
    }
  };

  const selectedProv = (prov) => {
    const id = provinces.filter((item) => item.name === prov)[0].id;
    setProvinsi(prov);
    handleCities(id);
  };

  const selectedKota = (kota) => {
    const id = cities.filter((item) => item.name === kota)[0].id;
    setSelectedKotaId(id);
    setKota(kota);
  };

  const handleRegisterProvider = (provider) => {
    signIn(provider);
    Cookies.set("provider", provider);
  };

  const submitRegisterProviderAPI = async () => {
    const res = await registerProvider(Cookies.get("token"));
    // console.log(Cookies.get("provider"));
    // console.log(res);
    setModalRegisterProvider(true);
  };

  const handlePassword = () => {
    setPassword(!password);
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

  const handleChangeExperiance = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setStateExp((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleChangeCourse = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setStateCourse((state) => ({
      ...state,
      [name]: value,
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

    if (state.stage === "Personal Info" && state.namaLengkap.length !== 0 && state.namaDepan.length !== 0 && state.namaBelakang.length !== 0 && state.tempatLahir.length !== 0 && state.fotoProfil.length !== 0 && state.noHP.length !== 0) {
      setState((state) => ({
        ...state,
        ["stage"]: "Experiences",
      }));
    }

    if (state.stage === "Experiences") {
      setState((state) => ({
        ...state,
        ["stage"]: "Subjek Kursus",
      }));
    }

    // if (
    //   state.stage === "Subjek Kursus" &&
    //   stateCourse.subjekKursus.length !== 0 &&
    //   stateCourse.judulKursus.length !== 0 &&
    //   stateCourse.hashtagKursus.length !== 0 &&
    //   stateCourse.keteranganKursus.length !== 0 &&
    //   stateCourse.tarifKursus.length !== 0 &&
    //   stateCourse.onlineKursus.length !== 0
    // ) {
    //   setState((state) => ({
    //     ...state,
    //     ["stage"]: "Done",
    //   }));
    // }
  };

  const handleCheckbox = (val) => {
    setStateCourse((state) => ({
      ...state,
      ["onlineKursus"]: val,
    }));
  };

  const handleBack = (value) => {
    setState((state) => ({
      ...state,
      ["stage"]: value,
    }));
  };

  const handleRedirect = (url) => {
    router.replace(url);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleCloseModalPend = () => {
    setModalPend(false);
  };

  const handleCloseModalPek = () => {
    setModalPek(false);
  };

  const handleCloseModalProv = () => {
    setModalRegisterProvider(false);
    router.replace("/");
  };

  const handlePersonalInfo = async (e) => {
    e.preventDefault();
    const { namaDepan, namaBelakang, namaLengkap, tempatLahir, tahunLahir, bulanLahir, tanggalLahir, alamatLengkap, fotoProfil, noHP, email, password } = state;
    if (state.stage === "Personal Info" && namaLengkap.length !== 0 && namaDepan.length !== 0 && namaBelakang.length !== 0 && tempatLahir.length !== 0 && fotoProfil.length !== 0 && noHP.length !== 0) {
      const tanggalLhr = `${tahunLahir}-${bulanLahir}-${tanggalLahir}`;
      const res = await submitPersonalInfo(namaDepan, namaBelakang, namaLengkap, tempatLahir, tanggalLhr, alamatLengkap, fotoProfil, gender, noHP, email, password, "tutor", selectedKotaId);

      if (res.meta.code === 401) {
        // sudent exist, silahkan login
        setPersonalInfoRes(res);
        setModal(true);
      } else if (res.meta.code === 200) {
        setPersonalInfoRes(res);
        setStateExp((state) => ({
          ...state,
          ["token"]: res.data.token,
          ["userId"]: res.data.user.id,
        }));
        setState((state) => ({
          ...state,
          ["stage"]: "Experiences",
        }));
      }
    }
  };

  const handleSubmitPendidikan = async () => {
    const { token, eduSchool, eduDegree, startDate, endDate } = stateExp;
    if (state.stage === "Experiences" && token.length !== 0 && eduSchool.length !== 0 && eduDegree.length !== 0 && startDate.length !== 0 && endDate.length !== 0) {
      const res = await submitEducation(token, eduSchool, eduDegree, startDate, endDate);
      if (res.meta.code === 200) {
        const user = await getUserDetail(token);
        setUser(user);
        setModalPend(false);
      }
    }
  };

  const handleSubmitPekerjaan = async () => {
    const { token, userId, companyName, workTitle, startWork, endWork, workDesc } = stateExp;
    if (state.stage === "Experiences" && companyName.length !== 0 && workTitle.length !== 0 && startWork.length !== 0 && endWork.length !== 0 && workDesc.length !== 0) {
      const res = await submitWork(token, userId, companyName, workTitle, startWork, endWork, workDesc);
      if (res.meta.code === 200) {
        const user = await getUserDetail(token);
        setUser(user);
        setModalPek(false);
      }
    }
  };

  const handleCourse = async (e) => {
    e.preventDefault();
    const { token } = stateExp;
    const { judulKursus, keteranganKursus, tarifKursus, onlineKursus } = stateCourse;
    if (state.stage === "Subjek Kursus" && token.length !== 0 && subjekKursus.length !== 0 && judulKursus.length !== 0 && hashtagKursus.length !== 0 && keteranganKursus.length !== 0 && tarifKursus.length !== 0 && areaKursus.length !== 0) {
      // console.log(token, subjekKursus, judulKursus, hashtagKursus, keteranganKursus, tarifKursus, areaKursus, onlineKursus);
      const res = await submitCourse(token, subjekKursus, judulKursus, hashtagKursus, keteranganKursus, tarifKursus, areaKursus, onlineKursus);
      // console.log(res);
      if (res.meta.code === 200) {
        setState((state) => ({
          ...state,
          ["stage"]: "Done",
        }));
      }
    }
  };

  useEffect(() => {
    handleProvinces();

    Cookies.get("email") !== undefined && submitRegisterProviderAPI();
  }, []);

  return (
    <GeneralTemplate
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      isNavbar={`daftarNavbar`}
    >
      {state.stage === "" && (
        <section id={styles.jumbotron}>
          <div className={styles.container}>
            <div className={styles.body}>
              <div className={styles.body_left}>
                <Image alt="" src={Jumbo} width={550} height={700} />
              </div>
              <div className={styles.body_right}>
                <div className={styles.body_right_container}>
                  <div className={styles.title}>Daftar Sebagai Guru</div>
                  <div className={styles.desc}>Dapatkan penghasilan tambahan dengan menjadi guru Troffen. Berikan kursus terbaik kepada murid sesuai bidang keahlian kamu.</div>

                  <form onSubmit={handleRegister}>
                    <div className="masuk_modal_body">
                      <div className="masuk_email">
                        <label htmlFor="email">Email*</label>
                        <nav>
                          <input id="email" name="email" type="text" placeholder="example@gmail.com" value={state.email} onChange={handleChange} />
                          <Image alt="" src={Email} priority width={20} height={20} />
                        </nav>
                      </div>
                      <div className="masuk_password">
                        <label htmlFor="password">Password*</label>
                        <nav>
                          <input id="password" name="password" type={password ? "text" : "password"} placeholder="password" value={state.password} onChange={handleChange} />
                          <Image alt="" src={password ? ShowPass : Pass} priority width={20} height={20} onClick={() => handlePassword()} />
                        </nav>
                      </div>
                      <button type="submit" className="masuk_submit">
                        Daftar
                      </button>
                      <div className="masuk_options">
                        <div className="masuk_option_label" style={{ margin: "2rem" }}>
                          atau masuk dengan
                        </div>
                        <div className="masuk_options_body">
                          <div className="masuk_google" onClick={() => handleRegisterProvider("google")}>
                            <Image alt="" src={Google} priority width={20} height={20} />
                            <nav>Google</nav>
                          </div>
                          <div className="masuk_facebook" onClick={() => handleRegisterProvider("facebook")}>
                            <Image alt="" src={Fb} priority width={20} height={20} />
                            <nav>Facebook</nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <hr className={styles.hr} />

            <div className={styles.body_footer}>
              <div className={styles.body_footer_wrapper}>
                <div className={styles.body_footer_title}>Bagaimana Saya Bisa Menjadi Guru di Troffen?</div>
                <div className={styles.body_footer_content_1}>
                  <div className={styles.body_footer_content_1_left}>
                    <Image alt="" src={CMG1} priority />
                  </div>
                  <div className={styles.body_footer_content_1_right}>
                    <div>
                      <div className={styles.content_1_right_title}>
                        <div className={styles.content_1_right_title_img}>
                          <Image alt="" src={no1} />
                        </div>
                        <div className={styles.content_1_right_title_}>Buat Kursus Anda Secara Gratis</div>
                      </div>
                      <div className={styles.content_1_right_desc}>Di Troffen, kamu bisa membuat kursus secara gratis dan membagikan passion kamu sesegera mungkin.</div>
                    </div>
                  </div>
                </div>

                <div className={styles.body_footer_content_2}>
                  <div className={styles.body_footer_content_2_left}>
                    <div>
                      <div className={styles.content_2_left_title}>
                        <div className={styles.content_2_left_title_img}>
                          <Image alt="" src={no2} />
                        </div>
                        <div className={styles.content_2_left_title_}>Tentukan Syarat dan ketentuan Kursus yang Kamu berikan</div>
                      </div>
                      <div className={styles.content_2_left_desc}>Kamu bisa mengatur jadwal, tarif dan metode pembelajaran sesuai dengan keinginanmu</div>
                    </div>
                  </div>
                  <div className={styles.body_footer_content_2_right}>
                    <Image alt="" src={CMG2} priority />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {state.stage === "Personal Info" && (
        <>
          <Progress stage={state.stage} route={"daftar-guru"} />

          <div className={styles.container_body}>
            <div className={styles.po_body}>
              <div className={styles.po_body_left}>
                <div className={styles.po_body_left_title}>
                  <div className={styles.po_title}>
                    <div className={styles.no}>
                      <Image alt="" src={lingkaran} className={styles.no_0} />
                      <Image alt="" src={Satu} className={styles.no_1} />
                    </div>
                    <nav>Informasi Pribadi</nav>
                  </div>
                  <div className={styles.po_desc}>Masukkan informasi pribadi mengenai Anda.</div>
                </div>
                <form onSubmit={handlePersonalInfo}>
                  <Input label="Nama Lengkap" name="namaLengkap" desc="" placeholder="Masukkan nama lengkap" handleChange={handleChange} />
                  <Input label="Nama Depan" name="namaDepan" desc="Nama depan akan muncul di profil Anda." placeholder="Masukkan nama depan" handleChange={handleChange} />
                  <Input label="Nama Belakang" name="namaBelakang" desc="Nama belakang akan muncul di profil Anda." placeholder="Masukkan nama belakang" handleChange={handleChange} />

                  <div className={styles.tanggal_lahir}>
                    <nav>Tanggal Lahir</nav>
                    <div className={styles.select_box}>
                      <div className={styles.select_box_1}>
                        <Select label="" optionLabel="Bulan" desc="" name="bulanLahir" options={month} handleChange={handleChange} />
                      </div>
                      <div className={styles.select_box_2}>
                        <Select label="" optionLabel="Hari" desc="" name="tanggalLahir" options={date} handleChange={handleChange} />
                      </div>
                      <div className={styles.select_box_3}>
                        <Select label="" optionLabel="Tahun" desc="" name="tahunLahir" options={year} handleChange={handleChange} />
                      </div>
                    </div>
                  </div>

                  <Input label="Tempat Lahir" name="tempatLahir" desc="" placeholder="Masukkan tempat lahir" handleChange={handleChange} />

                  <div className={styles.wrapper}>
                    <label htmlFor={"Gender"}>Gender</label>
                    <div className={styles.input}>
                      <Autocomplete
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        getItemValue={(item) => item.name}
                        items={genderOption}
                        renderItem={(item, isHighlighted) => (
                          <div style={{ background: isHighlighted ? "lightgray" : "white" }} key={item.name}>
                            {item.name}
                          </div>
                        )}
                        renderInput={(props) => <input {...props} className={styles.input_html} placeholder="Pilih jenis kelamin" type="text" />}
                        onSelect={(gender) => setGender(gender)}
                        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        autoHighlight={true}
                      />
                    </div>
                  </div>

                  <Upload stage={state.stage} label="Foto Profil" name="fotoProfil" desc="" handleChange={handleChange} />
                  <Input label="Nomor Handphone" name="noHP" desc="" placeholder="Cth: 0812 3456 7891" handleChange={handleChange} />

                  {/* <Select label="Provinsi" optionLabel="Provinsi" desc="" name="provinsi" options={provOption[0]} handleChange={handleChange} />
                  <Select label="Kota / Area" optionLabel="Kota" desc="" name="kota" options={kotaOption[0]} handleChange={handleChange} /> */}

                  <div className={styles.wrapper}>
                    <label htmlFor={"Provinsi"}>Provinsi</label>
                    <div className={styles.input}>
                      <Autocomplete
                        value={provinsi}
                        onChange={(e) => setProvinsi(e.target.value)}
                        getItemValue={(item) => item.name}
                        items={provinces}
                        renderItem={(item, isHighlighted) => (
                          <div style={{ background: isHighlighted ? "lightgray" : "white" }} key={item.name}>
                            {item.name}
                          </div>
                        )}
                        renderInput={(props) => <input {...props} className={styles.input_html} placeholder="Pilih provinsi" type="text" />}
                        onSelect={(provinsi) => selectedProv(provinsi)}
                        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        autoHighlight={true}
                      />
                    </div>
                  </div>

                  <div className={styles.wrapper}>
                    <label htmlFor="">Kota / Area</label>
                    <div className={styles.input}>
                      <Autocomplete
                        value={kota}
                        onChange={(e) => setKota(e.target.value)}
                        getItemValue={(item) => item.name}
                        items={cities}
                        renderItem={(item, isHighlighted) => (
                          <div style={{ background: isHighlighted ? "lightgray" : "white" }} key={item.name}>
                            {item.name}
                          </div>
                        )}
                        renderInput={(props) => <input {...props} className={styles.input_html} placeholder="Pilih provinsi terlebih dahulu" type="text" />}
                        onSelect={(kota) => selectedKota(kota)}
                        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        autoHighlight={true}
                      />
                    </div>
                  </div>

                  <Textarea label="Alamat Lengkap" name="alamatLengkap" desc="" col={60} row={4} placeholder="Masukkan alamat lengkap" handleChange={handleChange} />

                  <div className={styles.button_container}>
                    <button type="submit" className={styles.button}>
                      Lanjut
                    </button>
                  </div>
                </form>
              </div>
              <div className={styles.po_body_right}>
                <Tips
                  tips1_title="Isi Data Dengan Valid"
                  tips1_desc="Setiap data yang Anda masukkan di informasi pribadi harus valid dan dapat dipertanggung jawabkan agar profil Anda dapat dilihat dengan baik oleh murid."
                  tips2_title="Gunakan Foto Profil yang Jelas"
                  tips2_desc="Berikut adalah instruksi untuk foto profil yang baik:"
                />
              </div>
            </div>
          </div>
        </>
      )}

      {state.stage === "Experiences" && (
        <>
          <Progress stage={state.stage} route={"daftar-guru"} />

          <div className={styles.container_body}>
            <div className={styles.po_body}>
              <div className={styles.po_body_left}>
                <div className={styles.po_body_left_title}>
                  <div className={styles.po_title}>
                    <div className={styles.no}>
                      <Image alt="" src={lingkaran} className={styles.no_0} />
                      <Image alt="" src={Dua} className={styles.no_1} />
                    </div>
                    <nav>Pengalaman</nav>
                  </div>
                  <div className={styles.po_desc}>Informasi mengenai pengalaman sangat menentukan tingkat ketertarikan murid untuk melakukan reservasi kursus. Judul subjek yang menarik juga bisa membantu.</div>
                </div>
                <form onSubmit={handleRegister}>
                  <div className={styles.pendidikan_wrapper}>
                    <label htmlFor={""}>Pengalaman Pendidikan (Opsional)</label>
                    <nav>Masukkan pengalaman pendidikan Anda (maksimal 3)</nav>
                    {user.length !== 0 && user.data.user.educations.map((item, i) => <div key={i}>- {item.education_school}</div>)}
                    {user.length !== 0 && user.data.user.educations.length < 3 && (
                      <div className={styles.tambah_pendidikan} onClick={() => setModalPend(true)}>
                        <b>+ Tambah Pendidikan</b>
                      </div>
                    )}
                    {user.length === 0 && (
                      <div className={styles.tambah_pendidikan} onClick={() => setModalPend(true)}>
                        <b>+ Tambah Pendidikan</b>
                      </div>
                    )}
                  </div>
                  <hr className={styles.hr} />
                  <div className={styles.pekerjaan_wrapper}>
                    <label htmlFor={""}>Pengalaman Pekerjaan (Opsional)</label>
                    <nav>Masukkan pengalaman pekerjaan Anda (maksimal 3)</nav>
                    {user.length !== 0 && user.data.user.works.map((item, i) => <div key={i}>- {item.work_company_name}</div>)}
                    {user.length !== 0 && user.data.user.works.length < 3 && (
                      <div className={styles.tambah_pekerjaan} onClick={() => setModalPek(true)}>
                        <b>+ Tambah Pekerjaan</b>
                      </div>
                    )}
                    {user.length === 0 && (
                      <div className={styles.tambah_pekerjaan} onClick={() => setModalPek(true)}>
                        <b>+ Tambah Pekerjaan</b>
                      </div>
                    )}
                  </div>
                  <div className={styles.button_container}>
                    <button type="submit" className={styles.button_kembali} onClick={() => handleBack("Personal Info")}>
                      Kembali
                    </button>
                    <button type="submit" className={styles.button} onClick={() => handleBack("Subjek Kursus")}>
                      Lanjut
                    </button>
                  </div>
                </form>
              </div>
              <div className={styles.po_body_right}>
                <Tips
                  tips1_title="Isi Data Dengan Valid"
                  tips1_desc="Supaya profil kamu dapat dilihat baik oleh murid, pastikan setiap data pengalaman yang kamu masukan harus valid dan dapat dipertanggung jawabkan."
                  tips2_title="Sertifikat Untuk Menambah Daya Jual"
                  tips2_desc="Dengan mengupload sertifikat keahlian, kemungkinan murid memilih kamu akan lebih besar dibanding guru lain yang tidak mengupload sertifikat mereka."
                />
              </div>
            </div>
          </div>
        </>
      )}

      {state.stage === "Subjek Kursus" && (
        <>
          <Progress stage={state.stage} route={"daftar-guru"} />

          <div className={styles.container_body}>
            <div className={styles.po_body}>
              <div className={styles.po_body_left}>
                <div className={styles.po_body_left_title}>
                  <div className={styles.po_title}>
                    <div className={styles.no}>
                      <Image alt="" src={lingkaran} className={styles.no_0} />
                      <Image alt="" src={Tiga} className={styles.no_1} />
                    </div>
                    <nav>Subjek Kursus</nav>
                  </div>
                  <div className={styles.po_desc}>Pilih subjek kursus yang sesuai dengan bidang keahlianmu. Kamu hanya dapat memilih 1 subjek kursus</div>
                </div>
                <form onSubmit={handleCourse}>
                  <div className={styles.wrapper}>
                    <label htmlFor="Subjek Kursus">Subjek Kursus</label>
                    <div className={styles.input}>
                      <Autocomplete
                        value={subjekKursus}
                        onChange={(e) => setSubjekKursus(e.target.value)}
                        getItemValue={(item) => item.name}
                        items={subjekOption}
                        renderItem={(item, isHighlighted) => (
                          <div style={{ background: isHighlighted ? "lightgray" : "white" }} key={item.name}>
                            {item.name}
                          </div>
                        )}
                        renderInput={(props) => <input {...props} className={styles.input_html} placeholder="Pilih subjek kursus" type="text" />}
                        onSelect={(subjekKursus) => setSubjekKursus(subjekKursus)}
                        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        autoHighlight={true}
                      />
                    </div>
                  </div>
                  <Input label="Judul Kursus" name="judulKursus" desc="Contoh: Kursus Bahasa Inggris Dasar" placeholder="Mauskkan judul kursus" handleChange={handleChangeCourse} />
                  <div className={styles.wrapper}>
                    <label htmlFor="Hashtag Kursus">Hashtag Kursus</label>
                    <div className={styles.input}>
                      <Autocomplete
                        value={hashtagKursus}
                        onChange={(e) => setHashtagKursus(e.target.value)}
                        getItemValue={(item) => item.name}
                        items={hashtagOption}
                        renderItem={(item, isHighlighted) => (
                          <div style={{ background: isHighlighted ? "lightgray" : "white" }} key={item.name}>
                            {item.name}
                          </div>
                        )}
                        renderInput={(props) => <input {...props} className={styles.input_html} placeholder="Pilih subjek kursus" type="text" />}
                        onSelect={(hashtagKursus) => setHashtagKursus(hashtagKursus)}
                        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        autoHighlight={true}
                      />
                    </div>
                  </div>
                  <Textarea
                    label="Keterangan Kursus"
                    name="keteranganKursus"
                    desc="Contoh: Bahasa Inggris Dasar untuk pemula. Materi akan membahas Grammar, Vocabulary dan Speaking."
                    col={60}
                    row={4}
                    placeholder="Minimal 250 karakter"
                    handleChange={handleChangeCourse}
                  />
                  <Input
                    type="sideLabel"
                    inputLabel="per sesi"
                    label="Tarif Kursus"
                    name="tarifKursus"
                    desc="Tarif dasar kursus per sesi. Contoh: Rp 50.000/sesi (jam). "
                    placeholder="Masukkan minimal tarif"
                    handleChange={handleChangeCourse}
                  />
                  <div className={styles.wrapper}>
                    <label htmlFor="Area Kursus">Area Kursus</label>
                    <div className={styles.input}>
                      <Autocomplete
                        value={areaKursus}
                        onChange={(e) => setAreaKursus(e.target.value)}
                        getItemValue={(item) => item.name}
                        items={cities}
                        renderItem={(item, isHighlighted) => (
                          <div style={{ background: isHighlighted ? "lightgray" : "white" }} key={item.name}>
                            {item.name}
                          </div>
                        )}
                        renderInput={(props) => <input {...props} className={styles.input_html} placeholder="Pilih area kursus" type="text" />}
                        onSelect={(areaKursus) => setAreaKursus(areaKursus)}
                        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        autoHighlight={true}
                      />
                    </div>
                  </div>
                  <div className={styles.online_offline_wrapper}>
                    <div className={styles.online_offline_title}>Tersedia Kursus Online?</div>
                    <Checkbox checkbox={stateCourse.onlineKursus} handleCheckbox={handleCheckbox} />
                  </div>
                  {/* <div className={styles.online_offline_title}>Tersedia Kursus Online?</div>
                  <div className={styles.online_offline}>
                    <div className={styles.deco}>
                      <label>
                        <input type="checkbox" name="onlineKursus" value="1" onChange={handleChange} onClick={() => handleCheckbox(1)} checked={stateCourse.onlineKursus === "1"} />
                        <span>Ada</span>
                      </label>
                    </div>
                    <div className={styles.deco}>
                      <label>
                        <input type="checkbox" name="onlineKursus" value="0" onChange={handleChange} onClick={() => handleCheckbox(0)} checked={stateCourse.onlineKursus === "0"} />
                        <span>Tidak</span>
                      </label>
                    </div>
                  </div> */}
                  <div className={styles.button_container}>
                    <button type="submit" className={styles.button_kembali} onClick={() => handleBack("Experiences")}>
                      Kembali
                    </button>
                    <button type="submit" className={styles.button}>
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
        </>
      )}

      {state.stage === "Done" && (
        <div className={styles.done_container}>
          <div className={styles.done_height}>
            <div className={styles.done}>
              <Image alt="" src={DoneIklan} priority />
            </div>
            <div className={styles.done_title}>Iklan Sukses Dibuat!</div>
            <nav className={styles.done_desc}>
              Selamat! Sekarang murid dapat melakukan reservasi terhadap iklan kamu. Tingkatkan visibilitas iklan dengan mengubah ke Professional Plan, hanya mulai dari <b>Rp 100rb/bulan</b> saja!
            </nav>
            <div className={styles.done_action}>
              <button type="submit" className={styles.button_langganan} onClick={() => handleRedirect("/monthly-pass")}>
                Upgrade
              </button>
              <button type="submit" className={styles.button_home} onClick={() => handleRedirect("/")}>
                Nanti saja
              </button>
            </div>
          </div>
        </div>
      )}

      <Modal modalInfo={modal} handleModal={handleCloseModal}>
        <>{personalInfoRes.length !== 0 && personalInfoRes.meta.code === 401 && <p>{state.email} sudah terdaftar. Silahkan masuk terlebih dahulu.</p>}</>
      </Modal>

      <Modal modalForm={modalPend} onClose={handleCloseModalPend}>
        <div className={styles.modal_title}>Tambah Pengalaman Pendidikan</div>
        <div className={styles.eduSchool}>
          <Input label="Nama Sekolah/Universitas" name="eduSchool" desc="" placeholder="Cth: Sekolah Menengah Atas ABC" handleChange={handleChangeExperiance} />
        </div>
        <div className={styles.eduDegree}>
          <Select label="Tingkat" optionLabel="Degree" desc="" name="eduDegree" options={degree} handleChange={handleChangeExperiance} />
        </div>
        <div className={styles.startDate}>
          <Select label="Tahun Mulai" optionLabel="Tahun" desc="" name="startDate" options={year} handleChange={handleChangeExperiance} />
        </div>
        <div className={styles.endDate}>
          <Select label="Tahun Selesai" optionLabel="Tahun" desc="" name="endDate" options={year} handleChange={handleChangeExperiance} />
        </div>
        <button type="submit" className={styles.button} onClick={() => handleSubmitPendidikan()}>
          Selesai
        </button>
      </Modal>

      <Modal modalForm={modalPek} onClose={handleCloseModalPek}>
        <div className={styles.modal_title}>Tambah Pengalaman Pekerjaan</div>
        <div className={styles.companyName}>
          <Input label="Nama Institusi/Perusahaan" name="companyName" desc="" placeholder="Cth: Google" handleChange={handleChangeExperiance} />
        </div>
        <div className={styles.workTitle}>
          <Input label="Jabatan Pekerjaan" name="workTitle" desc="" placeholder="Cth: Software Engineer" handleChange={handleChangeExperiance} />
        </div>
        <div className={styles.workDate}>
          <nav>
            <Select label="Tahun Mulai" optionLabel="Tahun" desc="" name="startWork" options={year} handleChange={handleChangeExperiance} />
          </nav>
          <nav>
            <Select label="Tahun Selesai" optionLabel="Tahun" desc="" name="endWork" options={year} handleChange={handleChangeExperiance} />
          </nav>
        </div>
        <div className={styles.workDesc}>
          <Textarea label="Deskripsi Pekerjaan" name="workDesc" desc="" col={60} row={2} placeholder="Masukkan deskripsi pekerjaan" handleChange={handleChangeExperiance} />
        </div>
        <button type="submit" className={styles.button} onClick={() => handleSubmitPekerjaan()}>
          Selesai
        </button>
      </Modal>

      <Modal modalInfo={modalRegisterProvider} handleModal={handleCloseModalProv}>
        <>
          <b>{Cookies.get("email")}</b>
          {` Telah Berhasil Didaftarkan!`}
        </>
      </Modal>
    </GeneralTemplate>
  );
};

export default DaftarGuru;
