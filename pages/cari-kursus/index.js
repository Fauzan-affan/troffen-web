import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import ReactPaginate from "react-paginate";
import Autocomplete from "react-autocomplete";
import indonesia from "territory-indonesia";
import Cookies from "js-cookie";
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
import Modal from "../../components/core/modal/Modal";

import { loadCoursesFunc, searchCourseFunc } from "../../functions/courses";

const kotaOption = [];
indonesia
  .getAllRegencies()
  .then((res) => {
    kotaOption.push(res);
  })
  .catch((err) => console.log(err));

export default function Index() {
  const router = useRouter();

  const { data: session, status } = useSession();

  const [payload, setPayload] = useState([]);
  const [courses, setCourses] = useState([]);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [title, setTitle] = useState("");
  const [areaKursus, setAreaKursus] = useState("");
  const [buttonTarif, setButtonTarif] = useState(false);
  const [buttonRating, setButtonRating] = useState(false);

  const [urutan, setUrutan] = useState("");

  const [modalInfo, setModalInfo] = useState(false);

  const itemsPerPage = 6;

  // menghilangkan duplicate nama course
  const filteredCourses = courses.filter((item, index, arr) => arr.findIndex((t) => t.title === item.title) === index);
  // mendapatkan semua area dari nama course terpilih dan memfilter unique id area saja
  const allArea = courses.filter((item) => item.title === title).map((item) => item.course_area);
  const filteredAreaId = allArea.filter((item, index) => allArea.indexOf(item) === index);
  // mendapatkan kota berdasrkan nama course yg dipilih
  // const filteredArea = kotaOption[0].filter((item) => filteredAreaId.includes(item.id));
  const filteredArea = filteredAreaId.map((item) => ({
    name: item,
  }));

  // mendapatkan id dari area
  const areaKursusId = kotaOption[0].filter((val) => val.name === areaKursus).map((val) => val.id);

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

  const tarifAscendingSort = (a, b) => a.tarif - b.tarif;
  const tarifDescendingSort = (a, b) => b.tarif - a.tarif;

  const ratingAscendingSort = (a, b) => a.rating - b.rating;
  const ratingDescendingSort = (a, b) => b.rating - a.rating;

  const postingAscendingSort = (a, b) => a.created_at - b.created_at;
  const postingDescendingSort = (a, b) => b.created_at - a.created_at;

  const handleChange = (e) => {
    setButtonTarif(false);
    setButtonRating(false);
    setUrutan(e.target.value);
  };

  const handleCloseModalInfo = () => {
    setModalInfo(false);
  };

  const handleBook = (courseId) => {
    if (Cookies.get("token") === undefined) {
      setModalInfo(true);
    } else {
      router.push(`cari-kursus/${courseId}`);
    }
  };

  const Items = ({ currentItems }) => {
    return (
      <div className={styles.items}>
        <div className={styles.subjek_gallery_row}>
          {/* {console.log(urutan)}
          {console.log(currentItems)} */}

          {!currentItems && <div>Loading...</div>}
          {currentItems !== null && currentItems.length === 0 && <div>Maaf kata kunci tidak valid, silahkan refresh dan coba kembali :)</div>}
          {currentItems &&
            !buttonTarif &&
            !buttonRating &&
            urutan.length === 0 &&
            currentItems.sort(tarifAscendingSort).map((course, i) => (
              <div className={styles.subjek_gallery_card} key={i} onClick={() => handleBook(course.id)}>
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
                    <Link className={styles.button_submit} href={`#`}>
                      BOOK
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          {currentItems &&
            buttonTarif &&
            currentItems.sort(tarifDescendingSort).map((course, i) => (
              <div className={styles.subjek_gallery_card} key={i} onClick={() => handleBook(course.id)}>
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
                    <Link className={styles.button_submit} href={`#`}>
                      BOOK
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          {currentItems &&
            buttonRating &&
            currentItems.sort(ratingDescendingSort).map((course, i) => (
              <div className={styles.subjek_gallery_card} key={i} onClick={() => handleBook(course.id)}>
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
                    <Link className={styles.button_submit} href={`#`}>
                      BOOK
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          {currentItems &&
            urutan === "tarif_low_high" &&
            currentItems.sort(tarifAscendingSort).map((course, i) => (
              <div className={styles.subjek_gallery_card} key={i} onClick={() => handleBook(course.id)}>
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
                    <Link className={styles.button_submit} href={`#`}>
                      BOOK
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          {currentItems &&
            urutan === "tarif_high_low" &&
            currentItems.sort(tarifDescendingSort).map((course, i) => (
              <div className={styles.subjek_gallery_card} key={i} onClick={() => handleBook(course.id)}>
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
                    <Link className={styles.button_submit} href={`#`}>
                      BOOK
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          {currentItems &&
            urutan === "postingan_newest_oldes" &&
            currentItems.sort(postingAscendingSort).map((course, i) => (
              <div className={styles.subjek_gallery_card} key={i} onClick={() => handleBook(course.id)}>
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
                    <Link className={styles.button_submit} href={`#`}>
                      BOOK
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          {currentItems &&
            urutan === "postingan_oldes_newest" &&
            currentItems.sort(postingDescendingSort).map((course, i) => (
              <div className={styles.subjek_gallery_card} key={i} onClick={() => handleBook(course.id)}>
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
                    <Link className={styles.button_submit} href={`#`}>
                      BOOK
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          {currentItems &&
            urutan === "rating_low_high" &&
            currentItems.sort(ratingAscendingSort).map((course, i) => (
              <div className={styles.subjek_gallery_card} key={i} onClick={() => handleBook(course.id)}>
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
                    <Link className={styles.button_submit} href={`#`}>
                      BOOK
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          {currentItems &&
            urutan === "rating_high_low" &&
            currentItems.sort(ratingDescendingSort).map((course, i) => (
              <div className={styles.subjek_gallery_card} key={i} onClick={() => handleBook(course.id)}>
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
                    <Link className={styles.button_submit} href={`#`}>
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

  const handleButtonTarif = () => {
    buttonRating && setButtonRating(false);
    urutan.length > 0 && setUrutan("");
    setButtonTarif(!buttonTarif);
  };

  const handleButtonRating = () => {
    buttonTarif && setButtonTarif(false);
    urutan.length > 0 && setUrutan("");
    setButtonRating(!buttonRating);
  };

  const handleCourses = async () => {
    try {
      const courses = await loadCoursesFunc();

      // console.log(courses);

      setPayload(courses.data);
      setCourses(courses.data.data);

      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(courses.data.data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(courses.data.data.length / itemsPerPage));
    } catch (error) {
      console.log(error);
    }
  };

  const searchCourse = async (title, area, page) => {
    try {
      const courses = await searchCourseFunc(title, area, page);

      // console.log(courses);

      setPayload(courses.data);
      courses.data.data !== undefined && setCourses(courses.data.data);

      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(courses.data.data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(courses.data.data.length / itemsPerPage));
    } catch (error) {}
  };

  useEffect(() => {
    handleCourses();

    urutan.length > 0 && setButtonTarif(false) && setButtonRating(false);
  }, [urutan]);

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
                <button className={buttonTarif ? styles.button_filter_active : styles.button_filter} onClick={() => handleButtonTarif()}>
                  Tarif
                </button>
              </div>
              <div className={styles.search_filter_2}>
                <button className={buttonRating ? styles.button_filter_active : styles.button_filter} onClick={() => handleButtonRating()}>
                  Rating
                </button>
              </div>
            </div>
            <div className={styles.search_box}>
              <div className={styles.search_subject}>
                <div className={styles.wrapper}>
                  <div className={styles.input}>
                    <Autocomplete
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      getItemValue={(item) => item.title}
                      items={filteredCourses}
                      renderItem={(item, isHighlighted) => (
                        <div style={{ background: isHighlighted ? "lightgray" : "white" }} key={item.id}>
                          {item.title}
                        </div>
                      )}
                      renderInput={(props) => <input {...props} className={styles.input_html} placeholder="Mau belajar apa hari ini?" type="text" />}
                      onSelect={(title) => setTitle(title)}
                      shouldItemRender={(item, value) => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1}
                      autoHighlight={true}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.search_location}>
                <div className={styles.search_location_left}>
                  <Image alt="" src={JumbotronLoc} priority />
                  <div className={styles.wrapper}>
                    <div className={styles.input}>
                      {/* {console.log(courses)}
                      {console.log(kotaOption[0].filter((val) => val.id === "1304"))} */}
                      <Autocomplete
                        value={areaKursus}
                        onChange={(e) => setAreaKursus(e.target.value)}
                        getItemValue={(item) => item.name}
                        items={title.length === 0 ? kotaOption[0] : filteredArea}
                        renderItem={(item, isHighlighted) => (
                          <div style={{ background: isHighlighted ? "lightgray" : "white" }} key={item.id}>
                            {item.name}
                          </div>
                        )}
                        renderInput={(props) => <input {...props} className={styles.input_html_2} placeholder="Lokasi" type="text" />}
                        onSelect={(areaKursus) => setAreaKursus(areaKursus)}
                        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        autoHighlight={true}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.search_location_right}>
                  <button className={styles.button_search} onClick={() => searchCourse(title, areaKursusId[0])}>
                    Cari Kursus
                  </button>
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
              <div className={styles.subjek_title_main}>{payload.total_records} guru yang sesuai dengan kriteria Anda</div>
              <div className={styles.subjek_title_action}>
                <div className={styles.filter_label}>
                  <p>Urutkan :</p>
                </div>
                <div className={styles.filter}>
                  <Image alt="" src={Filter} priority className={styles.filter_icon} />
                  <select name="urutan" id="" className={styles.select_filter} onChange={handleChange}>
                    <option id={styles.select_id} value="tarif_low_high">
                      Tarif: Low to High
                    </option>
                    <option id={styles.select_id} value="tarif_high_low">
                      Tarif: High to Low
                    </option>
                    <option id={styles.select_id} value="postingan_newest_oldes">
                      Postingan: Newest to ...
                    </option>
                    <option id={styles.select_id} value="postingan_oldes_newest">
                      Postingan: Oldest to ...
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
                {/* <ReactPaginate
                  nextLabel=">>"
                  onPageChange={handlePageClick}
                  // pageRangeDisplayed={3}
                  // marginPagesDisplayed={2}
                  pageCount={pageCount}
                  previousLabel="<<"
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
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal modalInfo={modalInfo} handleModal={handleCloseModalInfo}>
        <div className={styles.modal_info_wrapper}>Silahkan Masuk Terlebih Dahulu</div>
      </Modal>
    </GeneralTemplate>
  );
}
