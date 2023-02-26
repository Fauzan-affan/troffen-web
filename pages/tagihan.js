import { useTable, usePagination } from "react-table";
import { useState, useMemo } from "react";
import DashboardTemplate from "../components/layouts/DashboardTemplate";
import styles from "../styles/Tagihan.module.css";

const Tagihan = () => {
  const Status = ({ tagihanStatus }) => {
    return <div className={tagihanStatus === "Terbayar" ? styles.tagihan_terbayar : styles.tagihan}>{tagihanStatus}</div>;
  };

  const data = useMemo(
    () => [
      {
        Tagihan: "Professional Plan Januari 2023",
        TanggalTagihan: "28 Januari 2022, 15:45",
        Status: "Terbayar",
        Nominal: "Rp 50.000",
      },
      {
        Tagihan: "Professional Plan Januari 2023",
        TanggalTagihan: "28 Januari 2022, 15:45",
        Status: "Terbayar",
        Nominal: "Rp 50.000",
      },
      {
        Tagihan: "Professional Plan Januari 2023",
        TanggalTagihan: "28 Januari 2022, 15:45",
        Status: "Terbayar",
        Nominal: "Rp 50.000",
      },
      {
        Tagihan: "Professional Plan Januari 2023",
        TanggalTagihan: "28 Januari 2022, 15:45",
        Status: "Terbayar",
        Nominal: "Rp 50.000",
      },
      {
        Tagihan: "Professional Plan Januari 2023",
        TanggalTagihan: "28 Januari 2022, 15:45",
        Status: "Terbayar",
        Nominal: "Rp 50.000",
      },
      {
        Tagihan: "Professional Plan Januari 2023",
        TanggalTagihan: "28 Januari 2022, 15:45",
        Status: "Terbayar",
        Nominal: "Rp 50.000",
      },
      {
        Tagihan: "Professional Plan Januari 2023",
        TanggalTagihan: "28 Januari 2022, 15:45",
        Status: "Terbayar",
        Nominal: "Rp 50.000",
      },
      {
        Tagihan: "Professional Plan Januari 2023",
        TanggalTagihan: "28 Januari 2022, 15:45",
        Status: "Terbayar",
        Nominal: "Rp 50.000",
      },
      {
        Tagihan: "Professional Plan Januari 2023",
        TanggalTagihan: "28 Januari 2022, 15:45",
        Status: "Terbayar",
        Nominal: "Rp 50.000",
      },
      {
        Tagihan: "Professional Plan Januari 2023",
        TanggalTagihan: "28 Januari 2022, 15:45",
        Status: "Terbayar",
        Nominal: "Rp 50.000",
      },
      {
        Tagihan: "Professional Plan Januari 2023",
        TanggalTagihan: "28 Januari 2022, 15:45",
        Status: "Terbayar",
        Nominal: "Rp 50.000",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Tagihan",
        accessor: "Tagihan",
      },
      {
        Header: "Tanggal Tagihan",
        accessor: "TanggalTagihan",
      },
      {
        Header: () => "Status",
        accessor: "Status",
        Cell: ({ cell: { value } }) => <Status tagihanStatus={value} />,
      },
      {
        Header: "Nominal",
        accessor: "Nominal",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, usePagination);

  return (
    <div className={styles.tagihan_container}>
      <div className={styles.tagihan_title}>Daftar Tagihan</div>
      <div className={styles.tagihan_content}>
        <div className={styles.course_request_body}>
          <table {...getTableProps()} className={styles.table}>
            <thead>
              {headerGroups.map((headerGroup, i) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                  {headerGroup.headers.map((column, i) => (
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        // borderBottom: "solid 3px",
                        background: "#F7F8FA",
                        color: "#4F4F4F",
                        fontWeight: "bold",
                      }}
                      key={i}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={i}>
                    {row.cells.map((cell, i) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            padding: "10px",
                            fontWeight: "bold",
                            fontSize: "10px",
                          }}
                          key={i}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <hr className={styles.hr} />
        <div className={styles.table_footer}>
          <div className={styles.table_footer_total}>Total Tagihan: {data.length}</div>
          <div className={styles.table_footer_pagination}>
            <div className="pagination">
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {"<<"}
              </button>{" "}
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {"<"}
              </button>{" "}
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                {">"}
              </button>{" "}
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {">>"}
              </button>{" "}
              <span>
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
              <span>
                | Go to page:{" "}
                <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    gotoPage(page);
                  }}
                  style={{ width: "100px" }}
                />
              </span>{" "}
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
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
