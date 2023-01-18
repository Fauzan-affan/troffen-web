import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import styles from "../styles/Home.module.css";

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
import SubjekThumbnail from "../assets/img/Thumbnail.svg";
import Favorite from "../assets/img/Fav.svg";
import Verify from "../assets/img/Verify.svg";
import Star from "../assets/img/Star.svg";
import Divider from "../assets/img/Line8.svg";
import GOR from "../assets/img/GroupOfReviewer.svg";

import LoginTemplate from "../components/layouts/LoginTemplate";

export default function Home() {
  const [isClick, setIsClick] = useState(1);
  const [list, setList] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 16, 17]);

  let cardLists = [];

  cardLists = list.slice(0, 6);

  const handleClick = (val) => {
    setIsClick(val);
  };

  return (
    <LoginTemplate
      title={`Platform Belajar High Demand Skill Dengan Mudah - Troffen`}
      desc={`Bingung Cara Belajar Skill Baru? atau Kesulitan Nemuin Pengajar Berkualitas? Tinggal cari aja di Troffen, Platform Belajar Skill Baru Dengan Mudah`}
      icon={`troffen.ico`}
    >
      <section id={styles.jumbotron}>
        <div className={styles.jumbotron_content} style={{ backgroundImage: `url(${JumbotronLayout.src})` }}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.content1}>Temukan dan belajar dari guru yang sesuai kriteriamu.</div>
              <div className={styles.content2}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
            </div>
            {/* <div className={styles.search_box}>
              <div className={styles.search_subject}>
                <input type="text" placeholder="Mau belajar apa hari ini?" />
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
            </div> */}
            <div className={styles.content4}>
              Belum tahu tentang Troffen <a href="#">Pelajari di sini</a>
            </div>
          </div>
        </div>
      </section>

      <section id={styles.jumbotron_mobile}>
        <div className={styles.jumbotron_content} style={{ backgroundImage: `url(${JumbotronLayout.src})` }}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.content1}>Temukan dan belajar dari guru yang sesuai kriteriamu.</div>
              <div className={styles.content2}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
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
              Belum tahu tentang Troffen <a href="#">Pelajari di sini</a>
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
                    <div className={styles.text}>Kursus tersedia secara online dan offline sesuai domisili kamu.</div>
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
                  <div className={styles.kursus_box_1_left_1_desc}>Cek profil guru dengan bebas dan pilih guru yang kamu inginkan sesuai dengan kebutuhan dan kriteria.</div>
                </div>
                <div className={styles.kursus_box_2_left_1} style={{ opacity: isClick === 2 ? "1" : "0.5" }} onClick={() => handleClick(2)}>
                  <div className={styles.kursus_box_2_left_1_title}>
                    <Image alt="" src={No2} priority />
                    <nav>Permintaan Kursus</nav>
                  </div>
                  <div className={styles.kursus_box_2_left_1_desc}>Para guru akan memberikan tanggapan terhadap permintaan kursus kamu dalam beberapa jam!</div>
                </div>
                <div className={styles.kursus_box_3_left_1} style={{ opacity: isClick === 3 ? "1" : "0.5" }} onClick={() => handleClick(3)}>
                  <div className={styles.kursus_box_3_left_1_title}>
                    <Image alt="" src={No3} priority />
                    <nav>Atur Jadwal Kursus</nav>
                  </div>
                  <div className={styles.kursus_box_3_left_1_desc}>Atur jadwal kursus Kamu sendiri dengan kursus dan guru yang dipilih.</div>
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
              <div className={styles.subjek_title_main}>Temukan subjek dan guru yang sesuai</div>
              <div className={styles.subjek_title_action}>
                <div className={styles.previous}>
                  <Image alt="" src={Previous} priority />
                </div>
                <div className={styles.next}>
                  <Image alt="" src={Next} priority />
                </div>
              </div>
            </div>
            <div className={styles.subjek_gallery}>
              <div className={styles.subjek_gallery_row}>
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
                        <Link className={styles.button_submit} href={`cari-guru/${no}`}>
                          BOOK
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.subjek_lihat_semua}>
              <button className={styles.button_lihat_semua}>Lihat Semua</button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefit-sebagai">
        <div className={styles.container}>
          <div className={styles.benefit_sebagai}>
            <div className={styles.benefit_sebagai_tutor}>
              <Link href={`daftar-guru`}>
                <Image alt="" src={GuruBenefit} priority className={styles.benefit_sebagai_tutor_img} />
              </Link>
            </div>
            <div className={styles.benefit_sebagai_student}>
              <Image alt="" src={MuridBenefit} className={styles.benefit_sebagai_student_img} />
            </div>
          </div>
        </div>
      </section>
    </LoginTemplate>
  );
}
