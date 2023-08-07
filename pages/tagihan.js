import { useState, useEffect } from "react";
import { useMemo } from "react";
import Cookies from "js-cookie";

import TagihanLangganan from "../components/dashboard/TagihanLangganan";
import DashboardTemplate from "../components/layouts/DashboardTemplate";

import { paymentList } from "../functions/admin";

import styles from "../styles/Tagihan.module.css";
import Blank from "../components/blank/blank";

const Tagihan = () => {
  const [paymentlist_, setPaymentlist_] = useState();
  const [filterInput, setFilterInput] = useState("");

  const Status = ({ tagihanStatus }) => {
    return <div className={tagihanStatus === "Terbayar" ? styles.tagihan_terbayar : styles.tagihan}>{tagihanStatus}</div>;
  };

  const handlePaymentlist_ = async () => {
    try {
      const res = await paymentList(Cookies.get("adminToken"));
      if (res !== undefined && res.meta.code === 200) {
        setPaymentlist_(res.data.data.filter((i) => i.user_id === Cookies.get("userId")));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const header1 =
    Cookies.get("role") === "tutor"
      ? {
          Header: "Tagihan",
          accessor: "id",
        }
      : {
          Header: "Langganan",
          accessor: "id",
        };

  const header2 =
    Cookies.get("role") === "tutor"
      ? {
          Header: "Tanggal Tagihan",
          accessor: "created_at",
        }
      : {
          Header: "Tanggal Langganan",
          accessor: "created_at",
        };

  const columns = useMemo(
    () => [
      header1,
      header2,
      {
        Header: () => "Status",
        accessor: "subscription_payment_status",
        Cell: ({ cell: { value } }) => <Status tagihanStatus={value} />,
      },
      {
        Header: `Selesai ${Cookies.get("role") === "tutor" ? "Tagihan" : "Langganan"}`,
        accessor: "subscription_end_period",
      },
      {
        Header: "Nominal",
        accessor: "subscription_payment_price",
      },
    ],
    []
  );

  useEffect(() => {
    handlePaymentlist_();
  }, []);

  return (
    <div className={styles.tagihan_container}>
      {paymentlist_ !== undefined && paymentlist_.length === 0 && <Blank menu={"langganan"} />}
      <div className={styles.tagihan_content}>{paymentlist_ !== undefined && paymentlist_.length > 0 && <TagihanLangganan columns={columns} dataCourse={paymentlist_} filterInput={filterInput} setFilterInput={setFilterInput} />}</div>
    </div>
  );
};

Tagihan.getLayout = function getLayout(Tagihan) {
  return (
    <DashboardTemplate
      isNavbar={`dashboardNavbar`}
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
      menu={`Tagihan`}
    >
      {Tagihan}
    </DashboardTemplate>
  );
};

export default Tagihan;
