import { useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import LoginTemplate from "../../components/layouts/LoginTemplate";
import Progress from "../../components/core/Progress";
import Tips from "../../components/core/Tips";
import Input from "../../components/core/Input";
import Upload from "../../components/core/Upload";
import Select from "../../components/core/Select";
import Textarea from "../../components/core/Textarea";

import styles from "../../styles/DaftarMurid.module.css";

import Jumbo from "../../assets/img/pendaftaraan/bg_daftar_guru.svg";

import Email from "../../assets/img/png/001-mail.png";
import Pass from "../../assets/img/png/002-eye.png";
import Google from "../../assets/img/png/002-search.png";
import Fb from "../../assets/img/png/001-facebook.png";
import Satu from "../../assets/img/1.svg";
import Dua from "../../assets/img/2.svg";
import lingkaran from "../../assets/img/EllipseNo.svg";
import DoneImage from "../../assets/img/done_.svg";

const date = [
  { name: 1, value: 1 },
  { name: 2, value: 2 },
  { name: 3, value: 3 },
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
];
const genderOption = [
  { name: "Laki - Laki", value: "Laki - Laki" },
  { name: "Perempuan", value: "Perempuan" },
];
const provOption = [
  { name: "DKI Jakarta", value: "DKI Jakarta" },
  { name: "Jawa Barat", value: "Jawa Barat" },
  { name: "Bali", value: "Bali" },
];
const kotaOption = [
  { name: "Jakarta Selatan", value: "Jakarta Selatan" },
  { name: "Cirebon", value: "Cirebon" },
  { name: "Kuta", value: "Kuta" },
];

const DaftarMurid = () => {
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
    gender: "",
    fotoProfil: "",
    noHP: "",
    provinsi: "",
    kota: "",
    pengalamanPendidikan: "",
    pengalamanPekerjaan: "",
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

    if (state.stage === "Experiences" && state.pengalamanPendidikan.length !== 0 && state.pengalamanPekerjaan.length !== 0) {
      setState((state) => ({
        ...state,
        ["stage"]: "Done",
      }));
    }
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

  return (
    <LoginTemplate
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
                  <div className={styles.title}>Daftar Sebagai Murid</div>
                  <div className={styles.desc}>Temukan guru sesuai keahlian yang Anda inginkan. Melalui Troffen, Anda dapat mengembangkan keahlian lebih baik.</div>

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
                          <input id="password" name="password" type="password" placeholder="password" value={state.password} onChange={handleChange} />
                          <Image alt="" src={Pass} priority width={20} height={20} />
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
                          <div className="masuk_google">
                            <Image alt="" src={Google} priority width={20} height={20} />
                            <nav>Google</nav>
                          </div>
                          <div className="masuk_facebook">
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
          </div>
        </section>
      )}

      {state.stage === "Personal Info" && (
        <>
          <Progress stage={state.stage} route={"daftar-murid"} />

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
                <form onSubmit={handleRegister}>
                  <Input label="Nama Lengkap" name="namaLengkap" desc="" placeholder="Masukkan nama lengkap" handleChange={handleChange} />
                  <Input label="Nama Depan" name="namaDepan" desc="Nama depan akan muncul di profil Anda." placeholder="Masukkan nama depan" handleChange={handleChange} />
                  <Input label="Nama Belakang" name="namaBelakang" desc="Nama belakang akan muncul di profil Anda." placeholder="Masukkan nama belakang" handleChange={handleChange} />

                  <div className={styles.tanggal_lahir}>
                    <nav>Tanggal Lahir</nav>
                    <div className={styles.select_box}>
                      <div className={styles.select_box_1}>
                        <Select label="" optionLabel="Bulan" desc="" name="tanggalLahir" options={month} handleChange={handleChange} />
                      </div>
                      <div className={styles.select_box_2}>
                        <Select label="" optionLabel="Hari" desc="" name="tanggalLahir" options={date} handleChange={handleChange} />
                      </div>
                      <div className={styles.select_box_3}>
                        <Select label="" optionLabel="Tahun" desc="" name="tanggalLahir" options={year} handleChange={handleChange} />
                      </div>
                    </div>
                  </div>

                  <Input label="Tempat Lahir" name="tempatLahir" desc="" placeholder="Masukkan tempat lahir" handleChange={handleChange} />

                  <Select label="Gender" optionLabel="Gender" desc="" name="gender" options={genderOption} handleChange={handleChange} />

                  <Upload stage={state.stage} label="Foto Profil" name="fotoProfil" desc="" handleChange={handleChange} />
                  <Input label="Nomor Handphone" name="noHP" desc="" placeholder="Cth: 0812 3456 7891" handleChange={handleChange} />

                  <Select label="Provinsi" optionLabel="Provinsi" desc="" name="provinsi" options={provOption} handleChange={handleChange} />
                  <Select label="Kota / Area" optionLabel="Kota" desc="" name="kota" options={kotaOption} handleChange={handleChange} />

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
                  tips1_desc="Setiap data yang Anda masukkan di informasi pribadi harus valid dan dapat dipertanggung jawabkan agar profil Anda dapat dilihat dengan baik oleh guru."
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
          <Progress stage={state.stage} route={"daftar-murid"} />

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
                  <div className={styles.po_desc}>Informasi mengenai pengalaman sangat menentukan tingkat ketertarikan murid melakukan reservasi terhadap iklan dari judul subjek Anda.</div>
                </div>
                <form onSubmit={handleRegister}>
                  <Upload stage={state.stage} label="Pengalaman Pendidikan" desc="Masukkan pengalaman pendidikan Anda (maksimal 3)" name="pengalamanPendidikan" handleChange={handleChange} />
                  <hr className={styles.hr} />
                  <Upload stage={state.stage} label="Pengalaman Pekerjaan" desc="Masukkan pengalaman pekerjaan Anda (maksimal 3)" name="pengalamanPekerjaan" handleChange={handleChange} />
                  <div className={styles.button_container}>
                    <button type="submit" className={styles.button_kembali} onClick={() => handleBack("Personal Info")}>
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
                  tips1_title="Isi Data Dengan Valid"
                  tips1_desc="Setiap data pengalaman yang Anda masukkan d harus valid dan dapat dipertanggung jawabkan agar profil Anda dapat dilihat dengan baik oleh murid."
                  tips2_title="Sertifikat Untuk Menambah Daya Jual"
                  tips2_desc="Dengan mengupload sertifikat keahlian, kemungkinan murid memilih Anda akan lebih besar dibanding guru lain yang tidak memiliki sertifikat keahlian."
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
              <Image alt="" src={DoneImage} priority />
            </div>
            <div className={styles.done_title}>Akun Sukses Dibuat</div>
            <nav className={styles.done_desc}>
              Selamat! Temukan dan reservasi kursus sesuai dengan guru pilihanmu. Langganan <b>Monthly Pass</b> sekarang hanya dengan <b>Rp 15rb/bulan</b> untuk dapat melakukan reservasi kursus.
            </nav>
            <div className={styles.done_action}>
              <button type="submit" className={styles.button_langganan} onClick={() => handleRedirect("/cari-guru")}>
                Langganan Sekarang
              </button>
              <button type="submit" className={styles.button_home} onClick={() => handleRedirect("/")}>
                Nanti saja
              </button>
            </div>
          </div>
        </div>
      )}
    </LoginTemplate>
  );
};

export default DaftarMurid;
