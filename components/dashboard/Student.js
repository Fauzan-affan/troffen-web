import Image from "next/image";
import { useMemo } from "react";
import { useTable, useFilters, usePagination } from "react-table";
import { useRouter } from "next/router";
import styles from "../../styles/dashboard/Student.module.css";

import Search from "../../assets/img/dashboard/search.png";
import NoChat from "../../assets/img/dashboard/no_chat.svg";
import NewChat from "../../assets/img/dashboard/chat_new.svg";
import PP from "../../assets/img/dashboard/pp.svg";
import Yes from "../../assets/img/dashboard/yes.svg";
import No from "../../assets/img/dashboard/no.svg";

const Student = ({ filterInput, isNewChat, setFilterInput, onOpenModal }) => {
  const router = useRouter();

  const Chat = ({ guru }) => {
    return (
      <>
        {isNewChat ? (
          <Image src={NewChat} alt="" style={{ cursor: "pointer" }} onClick={() => router.push(`/pesan/${guru.name}`)} />
        ) : (
          <Image src={NoChat} alt="" style={{ cursor: "pointer" }} onClick={() => router.push(`/pesan/${guru.name}`)} />
        )}
      </>
    );
  };

  const DataGuru = ({ guru }) => {
    return (
      <>
        <div className={styles.murid_container}>
          <Image src={guru.img} alt="" style={{ borderRadius: "50%", marginRight: "0.5rem" }} />
          <div className={styles.murid_detail}>
            <div className={styles.murid_detail_name}>{guru.name}</div>
            <div className={styles.murid_detail_age}>{guru.age}th</div>
          </div>
        </div>
      </>
    );
  };

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("Kursus", value);
    setFilterInput(value);
  };

  const data = useMemo(
    () => [
      {
        Guru: {
          img: PP,
          name: "Maulana",
          age: 30,
        },
        Pengalaman: "50 murid",
        Status: "Menunggu konfirmasi",
        Area: "Online",
        Kursus: "Desain UI/UX",
      },
      {
        Guru: {
          img: PP,
          name: "Maulana",
          age: 30,
        },
        Pengalaman: "50 murid",
        Status: "Diterima",
        Area: "Online",
        Kursus: "Programmer",
      },
      {
        Guru: {
          img: PP,
          name: "Maulana",
          age: 30,
        },
        Pengalaman: "50 murid",
        Status: "Ditolak",
        Area: "Online",
        Kursus: "Database Design",
      },
      {
        Guru: {
          img: PP,
          name: "Jane",
          age: 17,
        },
        Pengalaman: "100 murid",
        Status: "Berikan ulasan untuk Jane",
        Area: "Online",
        Kursus: "Design UI/UX",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: () => null, // No header
        accessor: "chatStatus", // It needs an ID
        Cell: ({ row }) => <Chat guru={row.original.Guru} />,
      },
      {
        Header: () => "Guru",
        accessor: "Guru",
        Cell: ({ cell: { value } }) => <DataGuru guru={value} />,
      },
      {
        Header: "Pengalaman",
        accessor: "Pengalaman",
      },
      {
        Header: "Status",
        accessor: "Status",
      },
      {
        Header: "Area",
        accessor: "Area",
      },
      {
        Header: "Kursus",
        accessor: "Kursus",
      },
      {
        Header: () => "Respon",
        id: "Respon", // It needs an ID
        Cell: ({ row }) => (
          <>
            {row.original.Status === "Ditolak" && <div className={styles.respon_reject}>Menunggu Respon</div>}
            {row.original.Status === "Diterima" && <div className={styles.respon_approved}>Menunggu Respon</div>}
            {row.original.Status === `Berikan ulasan untuk ${row.original.Guru.name}` && (
              <div className={styles.respon_ulasan} onClick={() => onOpenModal()}>
                Beri Ulasan
              </div>
            )}
            {row.original.Status === "Menunggu konfirmasi" && (
              <div className={styles.respons_container}>
                <div className={styles.respons_yes}>
                  <Image src={Yes} alt="" />
                  <nav>Terima</nav>
                </div>
                <div className={styles.respons_no}>
                  <Image src={No} alt="" />
                  <nav>Tolak</nav>
                </div>
              </div>
            )}
          </>
        ),
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
            <div className={styles.course_request_header_title}>Permintaan Kursus</div>
            <div>|</div>
            <div className={styles.course_request_header_notif}>{3} permintaan menunggu respon</div>
          </div>
          <div className={styles.course_request_header_search}>
            <Image src={Search} alt="" width={15} />
            <input value={filterInput} onChange={handleFilterChange} placeholder={"Cari Kursus"} />
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
        <div className={styles.table_footer_total}>Total murid: {data.length}</div>
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

export default Student;
