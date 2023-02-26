import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Profile.module.css";
import DashboardTemplate from "../components/layouts/DashboardTemplate";
import Tab from "../components/core/Tab";
import Upload from "../components/core/Upload";
import Input from "../components/core/Input";
import Textarea from "../components/core/Textarea";

import Plus from "../assets/img/dashboard/profile/plus.svg";

const Profile = () => {
  const [stage, setStage] = useState("Informasi Pribadi");
  const [photo, setPhoto] = useState("");
  const [isSubmited, setIsSubmited] = useState(0);
  const [nama, setNama] = useState({
    namaLengkap: "",
    nameDepan: "",
    namaBelakang: "",
  });
  const [isNamaSubmited, setIsNamaSubmited] = useState(0);
  const [bio, setBio] = useState({
    nomorTelepon: "",
    akunInstagram: "",
    alamatLengkap: "",
  });
  const [isBioSubmited, setIsBioSubmited] = useState(0);
  const [pengalaman, setPengalaman] = useState(false);
  const [sertifikat, setSertifikat] = useState({
    sertifikat1: "",
    sertifikat2: "",
    sertifikat3: "",
  });
  const [isSertifikatSubmited, setIsSertifikatSubmited] = useState({
    sertifikat1: 0,
    sertifikat2: 0,
    sertifikat3: 0,
  });

  const tabObj = [
    {
      id: "Informasi Pribadi",
      title: "Informasi Pribadi",
    },
    {
      id: "Pengalaman",
      title: "Pengalaman",
    },
  ];

  const defaultType = tabObj[0].id;

  const handleStage = (nextStage) => {
    setStage(nextStage);
  };

  const handleChange = (e) => {
    const src = URL.createObjectURL(e.target.files[0]);
    setPhoto(src);
  };

  const handleChangeSertifikat = (e) => {
    const target = e.target;
    const name = target.name;
    const src = URL.createObjectURL(target.files[0]);

    setSertifikat((state) => ({
      ...state,
      [name]: src,
    }));
  };

  const handleNama = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setNama((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleBio = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setBio((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setPhoto("");
    setIsSubmited(0);
  };

  const handleResetSertifikat = (state) => {
    state === "sertifikat1" && setSertifikat({ sertifikat1: "" }) && setIsSertifikatSubmited({ sertifikat1: 0 });
    state === "sertifikat2" && setSertifikat({ sertifikat2: "" }) && setIsSertifikatSubmited({ sertifikat2: 0 });
    state === "sertifikat3" && setSertifikat({ sertifikat3: "" }) && setIsSertifikatSubmited({ sertifikat3: 0 });
  };

  const handlePengalaman = () => {};

  const handleSubmitPhoto = () => {
    setIsSubmited(1);
  };

  const handleSubmitNama = () => {
    setIsNamaSubmited(1);
  };

  const handleSubmitBiodata = () => {
    setIsBioSubmited(1);
  };

  const handleSubmitSertifikat = (state) => {
    state === "sertifikat1" && setIsSertifikatSubmited({ sertifikat1: 1 });
    state === "sertifikat2" && setIsSertifikatSubmited({ sertifikat2: 1 });
    state === "sertifikat3" && setIsSertifikatSubmited({ sertifikat3: 1 });
  };

  const handleTambahPengalaman = () => {
    setPengalaman(true);
  };

  useEffect(() => {
    Cookies.get("firstName").length > 0 && setNama({ namaLengkap: `${Cookies.get("firstName")} Maulana`, nameDepan: Cookies.get("firstName"), namaBelakang: "Maulana" });

    bio.nomorTelepon === "" && bio.akunInstagram === "" && bio.alamatLengkap === "" && setBio({ nomorTelepon: "081322787899", akunInstagram: "https://intagram.com/fabianmaulana", alamatLengkap: "Jl. Jakarta, South Jakarta" });
  }, [bio.nomorTelepon, bio.akunInstagram, bio.alamatLengkap]);

  return (
    <div className={styles.profile_container}>
      {/* {JSON.stringify(stage)} */}
      <div className={styles.profile_title}>Profil</div>
      <Tab tabObj={tabObj} defaultType={defaultType} isProfile={true} handleStage={handleStage} />
      {stage === "Informasi Pribadi" && (
        <div className={styles.ib_container}>
          <div className={styles.ib_upload}>
            <Upload stage={stage} src={photo} label="Foto Profil" name="fotoProfil" desc="" handleChange={handleChange} handleReset={handleReset} handleSubmitPhoto={handleSubmitPhoto} isSubmited={isSubmited} />
          </div>
          <div className={styles.ib_data}>
            <div className={styles.ib_nama}>
              <form onSubmit={handleSubmitNama}>
                <Input label="Nama Lengkap" name="namaLengkap" value={nama.namaLengkap} isDisabled={true} />
                <Input label="Nama Depan" name="namaDepan" value={nama.nameDepan} handleChange={handleNama} />
                <Input label="Nama Belakang" name="namaLBelakang" value={nama.namaBelakang} handleChange={handleNama} />
                <button className={styles.button}>Ubah</button>
              </form>
            </div>
            <div className={styles.ib_biodata}>
              <form onSubmit={handleSubmitBiodata}>
                <Input label="Nomor Telepon" name="nomorTelepon" value={bio.nomorTelepon} handleChange={handleBio} />
                <Input label="Akun Instagram" name="akunInstagram" value={bio.akunInstagram} handleChange={handleBio} />
                <Textarea
                  label="Alamat lengkap"
                  name="alamatLengkap"
                  // desc="Contoh: Bahasa Inggris Dasar untuk pemula. Materi akan membahas Grammar, Vocabulary dan Speaking."
                  col={50}
                  row={4}
                  placeholder={bio.alamatLengkap}
                  handleBio={handleBio}
                />
                <button className={styles.button}>Ubah</button>
              </form>
            </div>
          </div>
        </div>
      )}
      {stage === "Pengalaman" && (
        <div className={styles.pengalaman_container}>
          <div className={styles.pengalaman_pendidikan}>
            <Textarea label="Pengalaman Pendidikan" name="pengalamanPendidikan1" desc={"SMA Keren Abis (2010-2013)"} col={50} row={4} placeholder={"3 tahun di SMA Keren Abis"} handlePengalaman={handlePengalaman} />
            <Textarea name="pengalamanPendidikan2" desc={"Universitas ABC (2013-2017)"} col={50} row={4} placeholder={"4 tahun di Universitas ABC"} handlePengalaman={handlePengalaman} />
            <Textarea name="pengalamanPendidikan3" desc={"PT Maju Terus (2018-2020)"} col={50} row={4} placeholder={"2 tahun di PT Maju Terus"} handlePengalaman={handlePengalaman} />
            <Textarea name="pengalamanPendidikan4" desc={"PT Terus Maju (2018-Present)"} col={50} row={4} placeholder={"2 tahun di PT Terus Maju"} handlePengalaman={handlePengalaman} />
            <div className={styles.tambah_pengalaman} onClick={() => handleTambahPengalaman()}>
              <Image src={Plus} alt="" />
              <div>Tambah Pengalaman</div>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.sertifikat}>
            <div className={styles.ib_upload}>
              <Upload
                stage={stage}
                src={sertifikat.sertifikat1}
                label="Sertifikasi 1"
                name="sertifikat1"
                desc=""
                handleChange={handleChangeSertifikat}
                handleReset={handleResetSertifikat}
                handleSubmitSertifikat={handleSubmitSertifikat}
                isSertifikatSubmited={isSertifikatSubmited.sertifikat1}
              />
            </div>
            <div className={styles.ib_upload}>
              <Upload
                stage={stage}
                src={sertifikat.sertifikat2}
                label="Sertifikasi 2"
                name="sertifikat2"
                desc=""
                handleChange={handleChangeSertifikat}
                handleReset={handleResetSertifikat}
                handleSubmitSertifikat={handleSubmitSertifikat}
                isSertifikatSubmited={isSertifikatSubmited.sertifikat2}
              />
            </div>
            <div className={styles.ib_upload}>
              <Upload
                stage={stage}
                src={sertifikat.sertifikat3}
                label="Sertifikasi 3"
                name="sertifikat3"
                desc=""
                handleChange={handleChangeSertifikat}
                handleReset={handleResetSertifikat}
                handleSubmitSertifikat={handleSubmitSertifikat}
                isSertifikatSubmited={isSertifikatSubmited.sertifikat3}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Profile.getLayout = function getLayout(Profile) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Pofile`}
    >
      {Profile}
    </DashboardTemplate>
  );
};

export default Profile;
