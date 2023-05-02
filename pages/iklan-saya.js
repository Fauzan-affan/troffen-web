import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Autocomplete from "react-autocomplete";
import indonesia from "territory-indonesia";
import styles from "../styles/IklanSaya.module.css";
import DashboardTemplate from "../components/layouts/DashboardTemplate";

import Tab from "../components/core/Tab";
import Tips from "../components/core/Tips";
import Input from "../components/core/Input";
import Textarea from "../components/core/Textarea";
import Checkbox from "../components/core/Checkbox";
import Modal from "../components/core/modal/Modal";

import { loadProvinceFunc } from "../functions/province";
import { reqCourseList } from "../functions/iklan";
import { submitCourse } from "../functions/tutor";
import Cookies from "js-cookie";

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

let Courses = [
  { id: 1, status: "Aktif", kursus: "Kursus Programming Phyton", rating: "4.5", totalUlasan: 5 },
  { id: 2, status: "Non-Aktif", kursus: "Kursus Programming Java", rating: "4.5", totalUlasan: 2 },
  { id: 3, status: "Aktif", kursus: "Kursus Programming C", rating: "4.5", totalUlasan: 3 },
  { id: 4, status: "Non-Aktif", kursus: "Kursus Programming C++", rating: "4.5", totalUlasan: 1 },
  { id: 5, status: "Aktif", kursus: "Kursus Programming PHP", rating: "4.5", totalUlasan: 5 },
];

const Index = () => {
  const router = useRouter();
  const defaultType = tabObj[0].id;

  const [listCourses, setListCourses] = useState([]);
  const [stage, setStage] = useState("iklan saya");
  const [state, setState] = useState({
    areaKursus: "",
    checkbox: 1,
  });

  const [judulKursus, setJudulKursus] = useState("");
  const [keteranganKursus, setKeteranganKursus] = useState("");
  const [tarifKursus, setTarifKursus] = useState("");
  const [subjekKursus, setSubjekKurses] = useState("");
  const [hashtagKursus, setHashtagKursus] = useState("");
  const [provinces, setProvinces] = useState([]);

  const [modalInfo, setModalInfo] = useState(false);
  const [modalBlank, setModalBlank] = useState(false);

  const closeModalInfo = () => {
    setModalInfo(false);
    router.reload();
  };
  const closeModalBlank = () => {
    setModalBlank(false);
  };

  const handleProvinces = async () => {
    try {
      const prov = await loadProvinceFunc();

      setProvinces(prov);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToogle = (id) => {
    setListCourses((prevState) =>
      prevState.map((obj) => {
        if (obj.id === id && obj.status === "Aktif") {
          return { ...obj, status: "Non-Aktif" };
        } else if (obj.id === id && obj.status === "Non-Aktif") {
          return { ...obj, status: "Aktif" };
        } else return { ...obj };
      })
    );
  };

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

  const handleRegister = async (e) => {
    e.preventDefault();

    const { areaKursus, checkbox } = state;

    if (stage === "daftar iklan" && judulKursus.length !== 0 && keteranganKursus.length !== 0 && tarifKursus.length !== 0 && areaKursus.length !== 0 && subjekKursus.length !== 0 && hashtagKursus.length !== 0) {
      // console.log(stage, judulKursus, keteranganKursus, tarifKursus, areaKursus, subjekKursus, hashtagKursus);
      try {
        const res = await submitCourse(Cookies.get("token"), subjekKursus, judulKursus, hashtagKursus, keteranganKursus, tarifKursus, areaKursus, checkbox);
        // console.log(res);
        if (res !== undefined && res.meta.code === 200) {
          setModalInfo(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setModalBlank(true);
    }
  };

  const handleReset = () => {
    router.reload();
  };

  const handleCourseList = async () => {
    try {
      const res = await reqCourseList(Cookies.get("token"));
      if (res !== undefined && res.meta.code === 200) {
        // setListCourses(res.data.data);
        console.log(res);
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleProvinces();
    handleCourseList();

    Courses !== undefined && listCourses.length === 0 ? setListCourses(Courses) : "";
  }, [listCourses]);

  return (
    <div>
      {stage === "iklan saya" && <Tab tabObj={tabObj} defaultType={defaultType} isCard={true} isCardBody={true} Courses={listCourses} handleStage={handleStage} handleToogleCard={handleToogle} />}
      {stage === "daftar iklan" && (
        <div className={styles.container_body}>
          <div className={styles.po_body}>
            <div className={styles.po_body_left}>
              <div className={styles.po_body_left_title}>
                <div className={styles.po_title}>
                  <nav>Buat Iklan</nav>
                </div>
                <div className={styles.po_desc}>Pilih subjek kursus yang sesuai dengan bidang keahlianmu. Kamu hanya dapat memilih 1 subjek kursus</div>
              </div>
              <form onSubmit={handleRegister}>
                <div className={styles.wrapper}>
                  <label htmlFor={"Subjek Kursus"}>Subjek Kursus</label>
                  <div className={styles.input}>
                    <Autocomplete
                      value={subjekKursus}
                      onChange={(e) => setSubjekKurses(e.target.value)}
                      getItemValue={(item) => item.name}
                      items={subjekOption}
                      renderItem={(item, isHighlighted) => (
                        <div style={{ background: isHighlighted ? "lightgray" : "white" }} key={item.name}>
                          {item.name}
                        </div>
                      )}
                      renderInput={(props) => <input {...props} className={styles.input_html} placeholder="Pilih subjek kursus" type="text" />}
                      onSelect={(subjekKursus) => setSubjekKurses(subjekKursus)}
                      shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                      autoHighlight={true}
                    />
                  </div>
                </div>

                <Input label="Judul Kursus" name="judulKursus" desc="Contoh: Kursus Bahasa Inggris Dasar" placeholder="Mauskkan judul kursus" handleChange={(e) => setJudulKursus(e.target.value)} />

                <div className={styles.wrapper}>
                  <label htmlFor={"Hashtag Kursus"}>Hashtag Kursus</label>
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
                      renderInput={(props) => <input {...props} className={styles.input_html} placeholder="Pilih hashtag kursus (sesuai subjek)" type="text" />}
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
                  col={40}
                  row={4}
                  placeholder="Minimal 250 karakter"
                  handleChange={(e) => setKeteranganKursus(e.target.value)}
                />
                <Input
                  type="sideLabel"
                  inputLabel="per sesi"
                  label="Tarif Kursus"
                  name="tarifKursus"
                  desc="Tarif dasar kursus per sesi. Contoh: Rp 50.000/sesi (jam). "
                  placeholder="Masukkan minimal tarif"
                  handleChange={(e) => setTarifKursus(e.target.value)}
                />
                {/* {console.log(provinces)} */}
                <div className={styles.wrapper}>
                  <label htmlFor={"Area Kursus"}>Area Kursus</label>
                  <div className={styles.input}>
                    <Autocomplete
                      value={state.areaKursus}
                      onChange={(e) => setState({ areaKursus: e.target.value })}
                      getItemValue={(item) => item.name}
                      items={provinces}
                      renderItem={(item, isHighlighted) => (
                        <div style={{ background: isHighlighted ? "lightgray" : "white" }} key={item.name}>
                          {item.name}
                        </div>
                      )}
                      renderInput={(props) => <input {...props} className={styles.input_html} placeholder="Pilih area kursus" type="text" />}
                      onSelect={(areaKursus) => setState({ areaKursus })}
                      shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                      autoHighlight={true}
                    />
                  </div>
                </div>

                <>
                  <div className={styles.online_offline_title}>Tersedia Kursus Online?</div>
                  <Checkbox checkbox={state.checkbox} handleCheckbox={handleCheckbox} />
                </>

                <div className={styles.button_container}>
                  <button type="submit" className={styles.button_kembali} onClick={() => handleReset()}>
                    Reset
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
      )}

      <Modal modalInfo={modalInfo} handleModal={closeModalInfo}>
        <div className={styles.modal_info}>Iklan berhasil dibuat!</div>
      </Modal>
      <Modal modalInfo={modalBlank} handleModal={closeModalBlank}>
        <div className={styles.modal_info}>Field harus diisi semua!</div>
      </Modal>
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
