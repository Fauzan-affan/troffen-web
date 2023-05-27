import Image from "next/image";
import { useMemo } from "react";
import { useTable, useFilters, usePagination } from "react-table";
import { useRouter } from "next/router";
import styles from "../../styles/dashboard/Student.module.css";

import Search from "../../assets/img/dashboard/search.png";
import NoChat from "../../assets/img/dashboard/no_chat.svg";
import NewChat from "../../assets/img/dashboard/chat_new.svg";
import PP from "../../assets/img/PEPE.svg";
import Yes from "../../assets/img/dashboard/yes.svg";
import No from "../../assets/img/dashboard/no.svg";

const Student = ({ dataCourse, filterInput, setFilterInput, waiting, onOpenModal, age }) => {
  const router = useRouter();

  const Chat = ({ guru }) => {
    return (
      <>
        {guru.course_status === "Menunggu konfirmasi" ? (
          <Image src={NewChat} alt="" style={{ cursor: "pointer" }} onClick={() => router.push(`/pesan/${guru.reservation_id}`)} />
        ) : (
          <Image src={NoChat} alt="" style={{ cursor: "pointer" }} onClick={() => router.push(`/pesan/${guru.reservation_id}`)} />
        )}
      </>
    );
  };

  const DataGuru = ({ guru }) => {
    return (
      <>
        <div className={styles.murid_container}>
          <Image src={PP} alt="" style={{ borderRadius: "50%", marginRight: "0.5rem" }} />
          <div className={styles.murid_detail}>
            <div className={styles.murid_detail_name}>{guru}</div>
            <div className={styles.murid_detail_age}>{age} th</div>
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

  const data = useMemo(() => dataCourse, []);

  const columns = useMemo(
    () => [
      {
        Header: () => null, // No header
        accessor: "chatStatus", // It needs an ID
        Cell: ({ row }) => <Chat guru={row.original} />,
      },
      {
        Header: () => "Guru",
        accessor: "tutor_name",
        Cell: ({ cell: { value } }) => <DataGuru guru={value} />,
      },
      {
        Header: "Pengalaman (Murid)",
        accessor: "tutor_experiences",
      },
      {
        Header: "Status",
        accessor: "course_status",
      },
      {
        Header: "Area",
        accessor: "course_area",
      },
      {
        Header: "Kursus",
        accessor: "course_name",
      },
      {
        Header: () => "Respon",
        id: "respon", // It needs an ID
        Cell: ({ row }) => (
          <>
            {/* {console.log(row)} */}
            {row.original.course_status === "Ditolak" && <div className={styles.respon_reject}>Menunggu Respon</div>}
            {row.original.course_status === "Diterima" && <div className={styles.respon_approved}>Menunggu Respon</div>}
            {row.original.course_status === "Selesai" && (
              <div className={styles.respon_ulasan} onClick={() => onOpenModal(row.original.reservation_id)}>
                Beri Ulasan
              </div>
            )}
            {row.original.course_status === "Menunggu konfirmasi" && <div className={styles.respon_reject}>Menunggu Respon</div>}
            {row.original.course_status === "Sudah diulas" && <div className={styles.respon_reject}>Sudah diulas</div>}
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
            <div className={styles.course_request_header_notif}>{waiting} permintaan menunggu respon</div>
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
