import Image from "next/image";
import { useMemo } from "react";
import { useTable, useFilters, usePagination } from "react-table";
import styles from "../../styles/dashboard/Tutor.module.css";

import Search from "../../assets/img/dashboard/search.png";

const AdminDasbor = ({ dataCourse, filterInput, setFilterInput }) => {
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("user_id", value);
    setFilterInput(value);
  };

  const data = useMemo(() => dataCourse, []);

  const columns = useMemo(
    () => [
      {
        Header: "Id Tagihan/Langganan",
        accessor: "id",
      },
      {
        Header: "User Id",
        accessor: "user_id",
      },
      {
        Header: "Rp",
        accessor: "subscription_payment_price",
      },
      {
        Header: "Tgl Bayar",
        accessor: "pay_date",
      },
      {
        Header: "Langganan Berakhir",
        accessor: "subscription_end_period",
      },
      {
        Header: "Status Pembayaran",
        accessor: "subscription_payment_status",
      },
      {
        Header: "Judul Kursus",
        accessor: "subscription_title",
      },
      {
        Header: "Nama Lengkap",
        accessor: "user_fullname",
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
    setFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, useFilters, usePagination);

  return (
    <div>
      <div className={styles.course_request}>
        <div className={styles.course_request_header}>
          <div className={styles.course_request_header_group}>
            <div className={styles.course_request_header_title}>Payment List</div>
          </div>
          <div className={styles.course_request_header_search}>
            <Image src={Search} alt="" width={15} />
            <input value={filterInput} onChange={handleFilterChange} placeholder={"Cari User Id"} />
          </div>
        </div>
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
      </div>
      <hr className={styles.hr} />
      <div className={styles.table_footer}>
        <div className={styles.table_footer_total}>Total Payment: {data.length}</div>
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
  );
};

export default AdminDasbor;
