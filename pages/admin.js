import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import DashboardTemplate from "../components/layouts/DashboardTemplate";
import styles from "../styles/Admin.module.css";

import AdminDasbor from "../components/dashboard/AdminDasbor";
import Input from "../components/core/Input";
import Modal from "../components/core/modal/Modal";

import { paymentList, addPayment } from "../functions/admin";

const Admin = () => {
  const router = useRouter();

  const [filterInput, setFilterInput] = useState("");
  const [role, setRole] = useState("");

  const [paymentlist_, setPaymentlist_] = useState();

  const [namaKursus, setNamaKursus] = useState("");
  const [studentId, setStudentId] = useState("");

  const [modalInfo, setModalInfo] = useState(false);
  const [modalFailedInfo, setModalFailedInfo] = useState(false);

  const handlePaymentlist_ = async () => {
    try {
      const res = await paymentList(Cookies.get("adminToken"));
      if (res !== undefined && res.meta.code === 200) {
        setPaymentlist_(res.data.data);
        // console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNamaKursus = (e) => {
    const target = e.target;
    const value = target.value;

    setNamaKursus(value);
  };

  const handleStudentId = (e) => {
    const target = e.target;
    const value = target.value;

    setStudentId(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addPayment(Cookies.get("adminToken"), namaKursus, studentId);
      console.log(res);
      if (res !== undefined && res.meta.code === 200) {
        // setCourselist(res.data.data);
        setModalInfo(true);
      } else {
        setModalFailedInfo(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setModalInfo(false);
    setModalFailedInfo(false);
    router.reload;
  };

  useEffect(() => {
    handlePaymentlist_();

    Cookies.get("role").length > 0 && setRole(Cookies.get("role"));
  }, [role]);

  return (
    <section id="container">
      <div className={styles.container}>
        <div className={styles.add_payment}>
          <div className={styles.add_payment_title}>Add Payment</div>
          <form onSubmit={handleSubmit} className={styles.add_payment_form}>
            <Input label={"Course Name"} name={"namaKursus"} placeholder={"Masukkan Nama Kursus"} handleChange={handleNamaKursus} />
            <Input label={"Student Id"} name={"studentId"} placeholder={"Masukkan Student Id"} handleChange={handleStudentId} />

            <button type="submit" className={styles.button}>
              Add
            </button>
          </form>
        </div>
        {Cookies.get("email") === "admin.troffen@gmail.com" && role === "tutor" && paymentlist_ !== undefined && <AdminDasbor dataCourse={paymentlist_} filterInput={filterInput} setFilterInput={setFilterInput} />}
      </div>
      <Modal modalInfo={modalInfo} handleModal={() => closeModal()}>
        <div className={styles.modal_res}>Selamat User Id {studentId} sudah aktif berlangganan!</div>
      </Modal>
      <Modal modalInfo={modalFailedInfo} handleModal={() => closeModal()}>
        <div className={styles.modal_res}>User Id {studentId} tidak terdaftar!</div>
      </Modal>
    </section>
  );
};

Admin.getLayout = function getLayout(Admin) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Admin`}
    >
      {Admin}
    </DashboardTemplate>
  );
};

export default Admin;
