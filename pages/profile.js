import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Profile.module.css";
import DashboardTemplate from "../components/layouts/DashboardTemplate";
import Tab from "../components/core/Tab";
import Upload from "../components/core/Upload";
import Input from "../components/core/Input";
import Textarea from "../components/core/Textarea";
import Modal from "../components/core/modal/Modal";
import Select from "../components/core/Select";

import Plus from "../assets/img/dashboard/profile/plus.svg";

import { getProfile, updateEducation, updateProfile } from "../functions/profile";
import { submitEducation } from "../functions/tutor";

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

const Profile = () => {
  const router = useRouter();

  const [stage, setStage] = useState("Informasi Pribadi");
  // const [isSubmited, setIsSubmited] = useState(0);
  // const [nama, setNama] = useState({
  //   namaLengkap: "",
  //   nameDepan: "",
  //   namaBelakang: "",
  // });

  // const [bio, setBio] = useState({
  //   nomorTelepon: "",
  //   akunInstagram: "",
  //   alamatLengkap: "",
  // });
  // const [pengalaman, setPengalaman] = useState(false);
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

  const [isLoading, setIsLoading] = useState(false);

  const [pendidikan, setPendidikan] = useState();
  const [newIdPend, setNewIdPend] = useState();
  const [newPendidikan, setNewPendidikan] = useState();

  const [photo, setPhoto] = useState("");
  const [fullname, setFullname] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();

  const [phone, setPhone] = useState();
  const [fullAddress, setFullAddress] = useState();
  const [Ig, setIg] = useState();

  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalPend, setModalPend] = useState(false);

  const [stateExp, setStateExp] = useState({
    eduSchool: "",
    eduDegree: "",
    startDate: "",
    endDate: "",
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

  const processFile = async (e) => {
    setIsLoading(true);

    var file = e.target.files[0];

    // Set your cloud name and unsigned upload preset here:
    var YOUR_CLOUD_NAME = "db4qplcj9";
    var YOUR_UNSIGNED_UPLOAD_PRESET = "troffen01";

    var POST_URL = "https://api.cloudinary.com/v1_1/" + YOUR_CLOUD_NAME + "/auto/upload";

    var XUniqueUploadId = +new Date();

    processFile();

    function processFile(e) {
      var size = file.size;
      var sliceSize = 20000000;
      var start = 0;

      setTimeout(loop, 3);

      function loop() {
        var end = start + sliceSize;

        if (end > size) {
          end = size;
        }
        var s = slice(file, start, end);
        send(s, start, end - 1, size);
        if (end < size) {
          start += sliceSize;
          setTimeout(loop, 3);
        }
      }
    }

    function send(piece, start, end, size) {
      console.log("start ", start);
      console.log("end", end);

      var formdata = new FormData();
      console.log(XUniqueUploadId);

      console.log(piece);

      formdata.append("file", piece);
      formdata.append("cloud_name", YOUR_CLOUD_NAME);
      formdata.append("upload_preset", YOUR_UNSIGNED_UPLOAD_PRESET);
      formdata.append("public_id", XUniqueUploadId);

      var xhr = new XMLHttpRequest();
      xhr.open("POST", POST_URL, false);
      xhr.setRequestHeader("X-Unique-Upload-Id", XUniqueUploadId);
      xhr.setRequestHeader("Content-Range", "bytes " + start + "-" + end + "/" + size);

      xhr.onload = function () {
        // do something to response
        const resImg = JSON.parse(this.responseText);
        // console.log(resImg);
        handleSubmitPhoto(resImg.secure_url);
      };

      xhr.send(formdata);
    }

    function slice(file, start, end) {
      var slice = file.mozSlice ? file.mozSlice : file.webkitSlice ? file.webkitSlice : file.slice ? file.slice : noop;

      return slice.bind(file)(start, end);
    }

    function noop() {}
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

  const handleNamaDepan = (e) => {
    const target = e.target;
    const value = target.value;

    setFirstname(value);
  };

  const handleNamaBelakang = (e) => {
    const target = e.target;
    const value = target.value;

    setLastname(value);
  };

  const handlePhone = (e) => {
    const target = e.target;
    const value = target.value;

    setPhone(value);
  };

  const handleIg = (e) => {
    const target = e.target;
    const value = target.value;

    setIg(value);
  };

  const handleFullAddress = (e) => {
    const target = e.target;
    const value = target.value;

    setFullAddress(value);
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

  const handleCloseModalSuccess = () => {
    setModalSuccess(false);
    router.reload();
  };

  const handleCloseModalPend = () => {
    setModalPend(false);
  };

  const handleReset = () => {
    setPhoto("");
    // setIsSubmited(0);
  };

  const handleResetSertifikat = (state) => {
    state === "sertifikat1" && setSertifikat({ sertifikat1: "" }) && setIsSertifikatSubmited({ sertifikat1: 0 });
    state === "sertifikat2" && setSertifikat({ sertifikat2: "" }) && setIsSertifikatSubmited({ sertifikat2: 0 });
    state === "sertifikat3" && setSertifikat({ sertifikat3: "" }) && setIsSertifikatSubmited({ sertifikat3: 0 });
  };

  const handlePendidikan = (e) => {
    const id = e.target.name;
    const value = e.target.value;

    setPendidikan((current) =>
      current.map((obj) => {
        if (obj.id === parseInt(id)) {
          return { ...obj, education_degree: value };
        }
        return obj;
      })
    );

    setNewIdPend(id);
    setNewPendidikan(value);
  };

  const handleSubmitPhoto = async (photoUrl) => {
    // e.preventDefault();
    const obj = {
      photo: photoUrl,
    };
    try {
      const res = await updateProfile(Cookies.get("token"), obj);
      // console.log(res);
      if (res.meta.code === 200) {
        setModalSuccess(true);
        setIsLoading(false);
      }
    } catch (error) {}
  };

  const handleSubmitNama = async (e) => {
    e.preventDefault();
    const obj = {
      first_name: firstname,
      last_name: lastname,
    };
    try {
      const res = await updateProfile(Cookies.get("token"), obj);
      // console.log(res);
      if (res.meta.code === 200) {
        setModalSuccess(true);
      }
    } catch (error) {}
  };

  const handleSubmitBiodata = async (e) => {
    e.preventDefault();
    const obj = {
      phone: phone,
      full_address: fullAddress,
      instagram_link: Ig,
    };
    try {
      const res = await updateProfile(Cookies.get("token"), obj);
      // console.log(res);
      if (res.meta.code === 200) {
        setModalSuccess(true);
      }
    } catch (error) {}
  };

  const handleSavePend = async (e) => {
    e.preventDefault();
    const obj = {
      id: newIdPend,
      education_degree: newPendidikan,
    };
    try {
      const res = await updateEducation(Cookies.get("token"), obj);
      // console.log(res);
      if (res.meta.code === 200) {
        setModalSuccess(true);
      }
    } catch (error) {}
  };

  const handleSubmitPendidikan = async () => {
    const { eduSchool, eduDegree, startDate, endDate } = stateExp;
    if (stage === "Pengalaman" && eduSchool.length !== 0 && eduDegree.length !== 0 && startDate.length !== 0 && endDate.length !== 0) {
      const res = await submitEducation(Cookies.get("token"), eduSchool, eduDegree, startDate, endDate);
      if (res.meta.code === 200) {
        setModalPend(false);
        setModalSuccess(true);
      }
    }
  };

  const handleSubmitSertifikat = (state) => {
    state === "sertifikat1" && setIsSertifikatSubmited({ sertifikat1: 1 });
    state === "sertifikat2" && setIsSertifikatSubmited({ sertifikat2: 1 });
    state === "sertifikat3" && setIsSertifikatSubmited({ sertifikat3: 1 });
  };

  const handleTambahPengalaman = () => {
    setModalPend(true);
  };

  const handleProfile = async () => {
    try {
      const res = await getProfile(Cookies.get("token"));
      if (res !== undefined && res.meta.code === 200) {
        // console.log(res.data.user);
        setPendidikan(res.data.user.educations);

        setPhoto(res.data.user.photo);
        setFullname(res.data.user.full_name);
        setFirstname(res.data.user.first_name);
        setLastname(res.data.user.last_name);
        setPhone(res.data.user.phone);
        setIg(res.data.user.instagram_link);
        setFullAddress(res.data.user.full_address);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleProfile();
    // Cookies.get("firstName") !== undefined && setNama({ namaLengkap: `${Cookies.get("firstName")} Maulana`, nameDepan: Cookies.get("firstName"), namaBelakang: "Maulana" });

    // bio.nomorTelepon === "" && bio.akunInstagram === "" && bio.alamatLengkap === "" && setBio({ nomorTelepon: "081322787899", akunInstagram: "https://intagram.com/fabianmaulana", alamatLengkap: "Jl. Jakarta, South Jakarta" });
  }, []);

  return (
    <div className={styles.profile_container}>
      {/* {JSON.stringify(stage)} */}
      {/* {console.log(profile)} */}
      <div className={styles.profile_title}>Profil</div>
      <Tab tabObj={tabObj} defaultType={defaultType} isProfile={true} handleStage={handleStage} />
      {stage === "Informasi Pribadi" && (
        <div className={styles.ib_container}>
          <div className={styles.ib_upload}>
            <Upload stage={stage} src={photo} label="Foto Profil" name="fotoProfil" desc="" handleChange={processFile} isLoading={isLoading} handleReset={handleReset} />
          </div>
          <div className={styles.ib_data}>
            <div className={styles.ib_nama}>
              <form onSubmit={handleSubmitNama}>
                <Input label="Nama Lengkap" name="namaLengkap" value={fullname} isDisabled={true} />
                <Input label="Nama Depan" name="namaDepan" value={firstname} handleChange={handleNamaDepan} />
                <Input label="Nama Belakang" name="namaLBelakang" value={lastname} handleChange={handleNamaBelakang} />
                <button className={styles.button}>Ubah</button>
              </form>
            </div>
            <div className={styles.ib_biodata}>
              <form onSubmit={handleSubmitBiodata}>
                <Input label="Nomor Telepon" name="nomorTelepon" value={phone} handleChange={handlePhone} isDisabled={true} />
                <Input label="Akun Instagram" name="akunInstagram" value={Ig} handleChange={handleIg} />
                <Textarea
                  label="Alamat lengkap"
                  name="alamatLengkap"
                  // desc="Contoh: Bahasa Inggris Dasar untuk pemula. Materi akan membahas Grammar, Vocabulary dan Speaking."
                  col={50}
                  row={4}
                  value={fullAddress}
                  handleChange={handleFullAddress}
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
            {/* {console.log(pendidikan)} */}
            {pendidikan !== undefined &&
              pendidikan.map((item, i) => (
                <form onSubmit={handleSavePend} key={i}>
                  <Textarea
                    key={i}
                    label="Pengalaman Pendidikan"
                    name={item.id}
                    desc={`${item.education_school} (${item.education_start_date}-${item.education_end_date})`}
                    col={50}
                    row={4}
                    value={item.education_degree}
                    placeholder={"Silahkan isi pendidikan..."}
                    handleChange={handlePendidikan}
                  />
                  <button type="submit" className={styles.button_save}>
                    Simpan
                  </button>
                </form>
              ))}

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

      <Modal modalInfo={modalSuccess} handleModal={handleCloseModalSuccess}>
        <>Profile berhasil diubah!</>
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
