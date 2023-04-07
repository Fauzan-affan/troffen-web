import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import Autocomplete from "react-autocomplete";
import styles from "../../styles/cari-kursus/CariKursus.module.css";

import JumbotronLoc from "../../assets/img/location.svg";
import BgSearch from "../../assets/img/bg-biru.svg";
import Filter from "../../assets/img/filter.svg";
import SubjekThumbnail from "../../assets/img/Thumbnail.svg";
import Favorite from "../../assets/img/Fav.svg";
import Verify from "../../assets/img/Verify.svg";
import Star from "../../assets/img/Star.svg";
import Divider from "../../assets/img/Line8.svg";
import GOR from "../../assets/img/GroupOfReviewer.svg";

import GeneralTemplate from "../../components/layouts/GeneralTemplate";

import { loadCourses } from "../../functions/courses";

export default function Index() {
  const router = useRouter();

  const [payload, setPayload] = useState([]);
  const [courses, setCourses] = useState([]);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [state, setState] = useState({
    title: "",
    loc: "",
  });

  const itemsPerPage = 6;

  const convertToFloat = (val) => {
    const num = parseFloat(val);
    return parseFloat(num.toFixed(2));
  };

  const convertToRupiah = (val) => {
    const nominal = parseInt(val);
    const formattedNominal = nominal.toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    });

    return formattedNominal;
  };

  const Items = ({ currentItems }) => {
    return (
      <div className={styles.items}>
        <div className={styles.subjek_gallery_row}>
          {!currentItems && <div>Loading...</div>}
          {currentItems &&
            currentItems.map((course, i) => (
              <div className={styles.subjek_gallery_card} key={i} onClick={() => router.push(`cari-kursus/${course.id}`)}>
                <div className={styles.subjek_thumbnail}>
                  <Image alt="" src={SubjekThumbnail} priority />
                </div>
                <div className={styles.subjek_content}>
                  <div className={styles.subjek_content_title}>
                    <div className={styles.subjek_content_title_main}>{course.title}</div>
                    <div className={styles.subjek_content_title_fav}>
                      <Image alt="" src={Favorite} priority className={styles.favorite} />
                    </div>
                  </div>
                  <div className={styles.subjek_content_tutor}>
                    <nav>{course.tutor}</nav>
                    <Image alt="" src={Verify} priority />
                  </div>
                  <div className={styles.subjek_content_rating}>
                    <nav className={styles.star}>
                      <Image alt="" src={Star} priority className={styles.star} />
                    </nav>
                    <nav className={styles.ulasan}>
                      {convertToFloat(course.rating)} ({course.ulasan} Ulasan)
                    </nav>
                    <nav className={styles.divider}>
                      <Image alt="" src={Divider} priority />
                    </nav>
                    <nav className={styles.group_of_reviewer}>
                      <Image alt="" src={GOR} priority />
                    </nav>
                    <nav className={styles.murid}>{course.murid} Murid</nav>
                  </div>
                  <hr />
                </div>
                <div className={styles.subjek_action}>
                  <div className={styles.subjek_action_harga}>{convertToRupiah(course.tarif)}/jam</div>
                  <div className={styles.subjek_action_action}>
                    <Link className={styles.button_submit} href={`cari-kursus/${1}`}>
                      BOOK
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % courses.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  const handleCourses = async (title = "", area = "", page = 1) => {
    try {
      const courses = await loadCourses(title, area, page);

      setPayload(courses.data);
      setCourses(courses.data.records);

      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(courses.data.records.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(courses.data.records.length / itemsPerPage));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCourses();
  }, []);

  return (
    <GeneralTemplate title={`Cari Guru - Troffen`} desc={`Cari guru yang sesuai denganmu`} icon={`troffen.ico`}>
      <section id="search_bar">
        <div className={styles.search_bar} style={{ backgroundImage: `url(${BgSearch.src})` }}>
          <div className={styles.container}>
            <div className={styles.search_title}>
              <p>Temukan Kursus Sesuai Preferensimu</p>
            </div>
            <div className={styles.search_filter}>
              <div className={styles.search_filter_1}>
                <button className={styles.button_filter}>Tarif</button>
              </div>
              <div className={styles.search_filter_2}>
                <button className={styles.button_filter}>Rating</button>
              </div>
            </div>
            <div className={styles.search_box}>
              <div className={styles.search_subject}>
                {/* <input type="text" placeholder="Mau belajar apa hari ini?" /> */}
                <div className={styles.wrapper}>
                  {/* <label htmlFor={"Subjek Kursus"}>Subjek Kursus</label> */}
                  {/* <nav>{desc}</nav> */}
                  <div className={styles.input}>
                    <Autocomplete
                      value={state.title}
                      onChange={(e) => setState({ title: e.target.value })}
                      getItemValue={(item) => item.title}
                      items={courses}
                      renderItem={(item, isHighlighted) => (
                        <div style={{ background: isHighlighted ? "lightgray" : "white" }} key={item.id}>
                          {item.title}
                        </div>
                      )}
                      renderInput={(props) => <input {...props} className={styles.input_html} placeholder="Mau belajar apa hari ini?" type="text" />}
                      onSelect={(title) => setState({ title })}
                      shouldItemRender={(item, value) => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1}
                      autoHighlight={true}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.search_location}>
                <div className={styles.search_location_left}>
                  <Image alt="" src={JumbotronLoc} priority />
                  <input type="text" placeholder="Lokasi" />
                </div>
                <div className={styles.search_location_right}>
                  <button className={styles.button_search}>Cari Kursus</button>
                </div>
              </div>
              <div className={styles.search_location_mobile}>
                <button className={styles.button_search_mobile}>Cari Kursus</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="subjek">
        <div className={styles.container}>
          <div className={styles.subjek}>
            <div className={styles.subjek_title}>
              <div className={styles.subjek_title_main}>20 guru yang sesuai dengan kriteria Anda</div>
              <div className={styles.subjek_title_action}>
                <div className={styles.filter_label}>
                  <p>Urutkan :</p>
                </div>
                <div className={styles.filter}>
                  <Image alt="" src={Filter} priority className={styles.filter_icon} />
                  <select name="" id="" className={styles.select_filter}>
                    <option id={styles.select_id} value="tarif_low_high">
                      Tarif: Low to High
                    </option>
                    <option id={styles.select_id} value="tarif_high_low">
                      Tarif: High to Low
                    </option>
                    <option id={styles.select_id} value="postingan_oldes_newest">
                      Postingan: Oldest to ...
                    </option>
                    <option id={styles.select_id} value="postingan_newest_oldes">
                      Postingan: Newest to ...
                    </option>
                    <option id={styles.select_id} value="rating_low_high">
                      Rating: Low to High
                    </option>
                    <option id={styles.select_id} value="rating_high_low">
                      Rating: High to Low
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.subjek_gallery}>
              <Items currentItems={currentItems} />
            </div>
            <div className={styles.subjek_lihat_semua}>
              <div id={styles.pagination}>
                {/* <a href="#" id={styles.disabled} className={styles.blocks}>
                  &laquo;
                </a>
                <a href="#" id={styles.active} className={styles.blocks}>
                  1
                </a>
                <a href="#" className={styles.blocks}>
                  2
                </a>
                <a href="#" className={styles.blocks}>
                  ...
                </a>
                <a href="#" className={styles.blocks}>
                  9
                </a>
                <a href="#" className={styles.blocks}>
                  10
                </a>
                <a href="#" className={styles.blocks}>
                  &raquo;
                </a> */}
                <ReactPaginate
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  // pageClassName={styles["page-item"]}
                  // pageLinkClassName={styles["page-link"]}
                  // previousClassName={styles["page-item"]}
                  // previousLinkClassName={styles["page-link"]}
                  // nextClassName={styles["page-item"]}
                  // nextLinkClassName={styles["page-link"]}
                  breakLabel="..."
                  // breakClassName={styles["page-item"]}
                  // breakLinkClassName={styles["page-link"]}
                  containerClassName={styles["pagination"]}
                  activeClassName={styles["active"]}
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </GeneralTemplate>
  );
}
