import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Autocomplete from "react-autocomplete";
import indonesia from "territory-indonesia";

import Image from "next/image";
import styles from "../styles/Home.module.css";

import Tag from "../components/core/Tag";
import Modal from "../components/core/modal/Modal";

import JumbotronLayout from "../assets/img/Group3761.svg";
import JumbotronLoc from "../assets/img/location.svg";
import BlueBanner from "../assets/img/Bluebanner.svg";
import BannerVector from "../assets/img/Vector.svg";
import Benefit1 from "../assets/img/Work1.svg";
// import BenefitBix from "../assets/img/benefit/01.svg";
import BenefitOnline from "../assets/img/benefit/01.svg";
import BenefitPencarian from "../assets/img/benefit/02.svg";
import BenefitTarif from "../assets/img/benefit/03.svg";
import BenefitFleksibel from "../assets/img/benefit/04.svg";
import No1 from "../assets/img/no1.svg";
import No2 from "../assets/img/no2.svg";
import No3 from "../assets/img/no3.svg";
import KursusDesain from "../assets/img/Group3748.svg";
import Book from "../assets/img/book.svg";
import Cal from "../assets/img/cal.svg";
import GuruBenefit from "../assets/img/GuruBenefit.svg";
import MuridBenefit from "../assets/img/MuridBenefit.svg";
import Previous from "../assets/img/Previous.svg";
import Next from "../assets/img/Next.svg";
import article1 from "../assets/img/blog/artickles/artickle1.svg";
import PP from "../assets/img/thumbnail_blank.svg";
import j from "../assets/img/blog/girl.png";
import Line from "../assets/img/blog/line.svg";
import DateCreated from "../assets/img/blog/date.svg";
import Banner from "../assets/img/banner.png";
// import SubjekThumbnail from "../assets/img/Thumbnail.svg";
// import Favorite from "../assets/img/Fav.svg";
// import Verify from "../assets/img/Verify.svg";
// import Star from "../assets/img/Star.svg";
// import Divider from "../assets/img/Line8.svg";
// import GOR from "../assets/img/GroupOfReviewer.svg";

import GeneralTemplate from "../components/layouts/GeneralTemplate";
import { loadCoursesFunc } from "../functions/courses";

const kotaOption = [];
indonesia
  .getAllRegencies()
  .then((res) => {
    kotaOption.push(res);
  })
  .catch((err) => console.log(err));

export const getStaticProps = async () => {
  // get list of files from the posts folder
  const files = fs.readdirSync("assets/posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`assets/posts/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  const router = useRouter();
  const [isClick, setIsClick] = useState(1);
  const [listContent, setListContent] = useState(0);
  const [modalBanner, setModalBanner] = useState(true);
  const [visible, setVisible] = useState(false);

  const [courses, setCourses] = useState([]);

  const [title, setTitle] = useState("");
  const [areaKursus, setAreaKursus] = useState("");

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

  const handleArticleClick = (slug) => {
    router.push(`/blog/${slug}`);
  };

  const truncate = (str, n) => {
    return str.length > n ? str.slice(0, n - 1) + " ...." : str;
  };

  const handleLoadMoreCard = (param) => {
    let total = posts.length;
    if (param === "next") {
      if (listContent === total) {
        setListContent(total);
      } else {
        setListContent(listContent + 1);
      }
    } else if (param === "prev") {
      if (listContent === 1) {
        setListContent(1);
      } else {
        setListContent(listContent - 1);
      }
    } else {
      setListContent(1);
    }
  };

  let cardLists = posts.slice(0, listContent);

  const handleClick = (val) => {
    setIsClick(val);
  };

  const handleCourses = async () => {
    try {
      const courses = await loadCoursesFunc();

      // console.log(courses);
      setCourses(courses.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let pop_status = localStorage.getItem("pop_status");
    if (!pop_status) {
      setVisible(true);
      localStorage.setItem("pop_status", 1);
    }

    handleCourses();

    setListContent(posts.length);
  }, [posts.length]);

  // localStorage.clear();

  return (
    <GeneralTemplate
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
    >
      <section id={styles.jumbotron}>
        <div className={styles.jumbotron_content} style={{ backgroundImage: `url(${JumbotronLayout.src})` }}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.content1}>Temukan dan belajar dari guru yang sesuai kriteriamu.</div>
              <div className={styles.content2}>Apa yang ingin kamu pelajari? Dengan Troffen cukup ketik topik yang kamu minati dan juga ketik lokasi pilihanmu, untuk mendapatkan kursus yang sesuai untuk kamu.</div>
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
                  <button className={styles.button_search} onClick={() => router.push("cari-kursus")}>
                    Cari Kursus
                  </button>
                </div>
              </div>
              <div className={styles.search_location_mobile}>
                <button className={styles.button_search_mobile}>Cari Kursus</button>
              </div>
            </div>
            <div className={styles.content4}>
              Belum tahu tentang Troffen <Link href="/coming-soon">Pelajari di sini</Link>
            </div>
          </div>
        </div>
      </section>

      <section id={styles.jumbotron_mobile}>
        <div className={styles.jumbotron_content} style={{ backgroundImage: `url(${JumbotronLayout.src})` }}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.content1}>Temukan dan belajar dari guru yang sesuai kriteriamu.</div>
              <div className={styles.content2}>Apa yang ingin kamu pelajari? Dengan Troffen cukup ketik topik yang kamu minati dan juga ketik lokasi pilihanmu, untuk mendapatkan kursus yang sesuai untuk kamu.</div>
            </div>
            <div className={styles.search_box}>
              <div className={styles.search_subject}>
                <input type="text" placeholder="Mau belajar apa hari ini?" />
              </div>
              <div className={styles.search_location}>
                <div className={styles.search_location_left}>
                  <Image alt="" src={JumbotronLoc} priority />
                  <input type="text" placeholder="Mau belajar apa hari ini?" />
                </div>
                <div className={styles.search_location_right}>
                  <button className={styles.button_search}>Cari</button>
                </div>
              </div>
            </div>
            <div className={styles.content4}>
              Belum tahu tentang Troffen <Link href="/coming-soon">Pelajari di sini</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="banner-1">
        <div className={styles.banner1} style={{ backgroundImage: `url(${BlueBanner.src})` }}>
          <div className={styles.container}>
            <div className={styles.banner1_label}>
              <div className={styles.banner1_label1}>
                <Image alt="" src={BannerVector} priority />
                <nav>50+ Subject Kursus</nav>
              </div>
              <div className={styles.banner1_label2}>
                <Image alt="" src={BannerVector} priority />
                <nav>Kursus Online & Offline</nav>
              </div>
              <div className={styles.banner1_label3}>
                <Image alt="" src={BannerVector} priority />
                <nav>Tutor Terpercaya</nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefit">
        <div className={styles.container}>
          <div className={styles.benefit}>
            <div className={styles.benefit_title}>Kursus Online Kini Lebih Menyenangkan</div>
            <div className={styles.benefit_content}>
              <div className={styles.benefit_content_left}>
                <Image alt="" className={styles.img} src={Benefit1} priority />
              </div>
              <div className={styles.benefit_content_right}>
                <div className={styles.benefit_content_container}>
                  <div className={styles.benefit1}>
                    <div className={styles.image}>
                      {/* <Image alt="" src={BenefitBix} priority className={styles.image_1} /> */}
                      <Image alt="" src={BenefitOnline} priority className={styles.image_2} />
                    </div>
                    <div className={styles.title}>Online & Offline</div>
                    <div className={styles.text}>Kursus tersedia secara online dan offline, tinggal disesuaikan dengan lokasi kamu.</div>
                  </div>
                  <div className={styles.benefit2}>
                    <div className={styles.image}>
                      {/* <Image alt="" src={BenefitBix} priority className={styles.image_1} /> */}
                      <Image alt="" src={BenefitPencarian} priority className={styles.image_2} />
                    </div>
                    <div className={styles.title}>Pencarian Cepat</div>
                    <div className={styles.text}>Cukup ketik subjek kursus yang kamu inginkan, guru idaman akan muncul!</div>
                  </div>
                  <div className={styles.benefit3}>
                    <div className={styles.image}>
                      {/* <Image alt="" src={BenefitBix} priority className={styles.image_1} /> */}
                      <Image alt="" src={BenefitTarif} priority className={styles.image_2} />
                    </div>
                    <div className={styles.title}>Tarif Sesuai Preferensi</div>
                    <div className={styles.text}>Pilih guru dengan tarif yang fleksibel sesuai dengan preferensimu.</div>
                  </div>
                  <div className={styles.benefit4}>
                    <div className={styles.image}>
                      {/* <Image alt="" src={BenefitBix} priority className={styles.image_1} /> */}
                      <Image alt="" src={BenefitFleksibel} priority className={styles.image_2} />
                    </div>
                    <div className={styles.title}>Jam Kursus Fleksibel</div>
                    <div className={styles.text}>Atur jam kursus langsung dengan guru tanpa batasan apapun.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kursus">
        <div className={styles.container}>
          <div className={styles.kursus}>
            <div className={styles.kursus_title}>
              <div className={styles.kursus_title_1}>Langkah Mudah Menemukan Kursus</div>
              <div className={styles.kursus_title_2}>Cukup 3 langkah untuk mendapatkan guru sesuai kriteria yang kamu inginkan!</div>
            </div>
            <div className={styles.kursus_box}>
              <div className={styles.kursus_box_img_mobile}>
                {isClick === 1 && <Image alt="" src={KursusDesain} priority />}
                {isClick === 2 && <Image alt="" src={Book} priority />}
                {isClick === 3 && <Image alt="" src={Cal} priority />}
              </div>
              <div className={styles.kursus_box_left}>
                <div className={styles.kursus_box_1_left_1} style={{ opacity: isClick === 1 ? "1" : "0.5" }} onClick={() => handleClick(1)}>
                  <div className={styles.kursus_box_1_left_1_title}>
                    <Image alt="" src={No1} priority />
                    <nav>Temukan Guru</nav>
                  </div>
                  <div className={styles.kursus_box_1_left_1_desc}>Temukan Guru : Cek profil guru dengan bebas dan pilih guru yang kamu inginkan, sesuai dengan kebutuhan dan kriteria kamu</div>
                </div>
                <div className={styles.kursus_box_2_left_1} style={{ opacity: isClick === 2 ? "1" : "0.5" }} onClick={() => handleClick(2)}>
                  <div className={styles.kursus_box_2_left_1_title}>
                    <Image alt="" src={No2} priority />
                    <nav>Permintaan Kursus</nav>
                  </div>
                  <div className={styles.kursus_box_2_left_1_desc}>Permintaan kursus: Para guru akan memberikan tanggapan terhadap permintaan kursus kamu dalam beberapa jam!</div>
                </div>
                <div className={styles.kursus_box_3_left_1} style={{ opacity: isClick === 3 ? "1" : "0.5" }} onClick={() => handleClick(3)}>
                  <div className={styles.kursus_box_3_left_1_title}>
                    <Image alt="" src={No3} priority />
                    <nav>Atur Jadwal Kursus</nav>
                  </div>
                  <div className={styles.kursus_box_3_left_1_desc}>Atur Jadwal Kursus: Atur jadwal kursus kamu sendiri dengan kursus dari guru yang dipilih.</div>
                </div>
              </div>
              <div className={styles.kursus_box_right}>
                {isClick === 1 && <Image alt="" src={KursusDesain} priority />}
                {isClick === 2 && <Image alt="" src={Book} priority />}
                {isClick === 3 && <Image alt="" src={Cal} priority />}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="subjek">
        <div className={styles.container}>
          <div className={styles.subjek}>
            <div className={styles.subjek_title}>
              <div className={styles.subjek_title_main}>Artikel Menarik Dari Troffen</div>
              <div className={styles.subjek_title_action}>
                <div className={styles.previous}>
                  <Image alt="" src={Previous} priority onClick={() => handleLoadMoreCard("prev")} />
                </div>
                <div className={styles.next}>
                  <Image alt="" src={Next} priority onClick={() => handleLoadMoreCard("next")} />
                </div>
              </div>
            </div>
            <div className={styles.subjek_gallery}>
              {/* <div className={styles.subjek_gallery_row}>
                {cardLists.map((no, i) => (
                  <div className={styles.subjek_gallery_card} key={i}>
                    <div className={styles.subjek_thumbnail}>
                      <Image alt="" src={SubjekThumbnail} priority />
                    </div>
                    <div className={styles.subjek_content}>
                      <div className={styles.subjek_content_title}>
                        <div className={styles.subjek_content_title_main}>Basic UI/UX Design</div>
                        <div className={styles.subjek_content_title_fav}>
                          <Image alt="" src={Favorite} priority className={styles.favorite} />
                        </div>
                      </div>
                      <div className={styles.subjek_content_tutor}>
                        <nav>John Doe</nav>
                        <Image alt="" src={Verify} priority />
                      </div>
                      <div className={styles.subjek_content_rating}>
                        <nav className={styles.star}>
                          <Image alt="" src={Star} priority className={styles.star} />
                        </nav>
                        <nav className={styles.ulasan}>4.5 (5 Ulasan)</nav>
                        <nav className={styles.divider}>
                          <Image alt="" src={Divider} priority />
                        </nav>
                        <nav className={styles.group_of_reviewer}>
                          <Image alt="" src={GOR} priority />
                        </nav>
                        <nav className={styles.murid}>30 Murid</nav>
                      </div>
                      <hr />
                    </div>
                    <div className={styles.subjek_action}>
                      <div className={styles.subjek_action_harga}>Rp 100.000/jam</div>
                      <div className={styles.subjek_action_action}>
                        <Link className={styles.button_submit} href={`/coming-soon`}>
                          BOOK
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}

              <div className={styles.artikel_baru_card_container}>
                {cardLists.map((article, i) => {
                  //extract slug and frontmatter
                  const { slug, frontmatter, content } = article;
                  //extract frontmatter properties
                  const { title, tags, author, date } = frontmatter;
                  return (
                    <div className={styles.artikel_baru_card} key={slug} onClick={() => handleArticleClick(slug)}>
                      <div className={styles.artikel_baru_card_img}>
                        <Image alt="" src={PP} />
                      </div>
                      <div className={styles.content_highlight}>
                        <nav>
                          <Tag type="blogTag">{tags}</Tag>
                        </nav>
                        <div className={styles.content_title}>{truncate(title, 50)}</div>
                        <div className={styles.content_creator_container}>
                          <div className={styles.content_creator}>
                            <Image alt="" src={j} priority width={20} />
                            <nav>{author}</nav>
                          </div>
                          <Image alt="" src={Line} />
                          <div className={styles.content_created}>
                            <Image alt="" src={DateCreated} />
                            <nav>{date}</nav>
                          </div>
                        </div>
                        <div className={styles.content_desc}>
                          <div className={styles.content_desc_main}>
                            <ReactMarkdown>{truncate(content.replace(/<[^>]+>/g, ""), 300)}</ReactMarkdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.subjek_lihat_semua}>
              <button className={styles.button_lihat_semua} onClick={() => router.push(`/blog`)}>
                Lihat Semua
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefit-sebagai">
        <div className={styles.benefit_sebagai}>
          <div className={styles.benefit_sebagai_tutor}>
            <Link href={`/daftar-guru`}>
              <Image alt="" src={GuruBenefit} priority className={styles.benefit_sebagai_tutor_img} />
            </Link>
          </div>
          <div className={styles.benefit_sebagai_student}>
            <Link href={`/daftar-murid`}>
              <Image alt="" src={MuridBenefit} className={styles.benefit_sebagai_student_img} />
            </Link>
          </div>
        </div>
      </section>

      {!visible ? (
        ""
      ) : (
        <section onClick={() => setVisible(false)}>
          <Modal modalBanner={modalBanner} onClose={() => setModalBanner(false)}>
            <a href={`https://lp.troffen-api.com/`} target="_blank" rel="noreferrer">
              <Image width={700} src={Banner} alt="" priority />
            </a>
          </Modal>
        </section>
      )}
    </GeneralTemplate>
  );
}
