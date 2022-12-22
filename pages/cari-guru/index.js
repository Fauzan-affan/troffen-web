import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/cari-guru/CariGuru.module.css";

import JumbotronLoc from "../../assets/img/location.svg";
import BgSearch from "../../assets/img/bg-biru.svg";
import Filter from "../../assets/img/filter.svg";
import SubjekThumbnail from "../../assets/img/subjek-thumbnail.svg";
import Favorite from "../../assets/img/Fav.svg";
import Verify from "../../assets/img/Verify.svg";
import Star from "../../assets/img/Star.svg";
import Divider from "../../assets/img/Line8.svg";
import GOR from "../../assets/img/GroupOfReviewer.svg";

import LoginTemplate from "../../components/layouts/LoginTemplate";

export default function index() {
  return (
    <LoginTemplate title={`Cari Guru - Troffen`} desc={`Cari guru yang sesuai denganmu`} icon={`troffen.ico`}>
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
                <input type="text" placeholder="Mau belajar apa hari ini?" />
              </div>
              <div className={styles.search_location}>
                <div className={styles.search_location_left}>
                  <Image src={JumbotronLoc} priority />
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
                  <Image src={Filter} priority className={styles.filer_icon} />
                  <select name="" id="" className={styles.select_filter}>
                    <option id={styles.select_id} value="tarif_low_high">
                      Tarif: Low to High
                    </option>
                    <option id={styles.select_id} value="tarif_high_low">
                      Tarif: High to Low
                    </option>
                    <option id={styles.select_id} value="postingan_oldes_newest">
                      Postingan: Oldest to Newest
                    </option>
                    <option id={styles.select_id} value="postingan_newest_oldes">
                      Postingan: Newest to Oldest
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
              {[0, 1, 2].map((i) => (
                <div className={styles.subjek_gallery_row} key={i}>
                  <div className={styles.subjek_gallery_card}>
                    <div className={styles.subjek_thumbnail}>
                      <Image src={SubjekThumbnail} priority />
                    </div>
                    <div className={styles.subjek_content}>
                      <div className={styles.subjek_content_title}>
                        <div className={styles.subjek_content_title_main}>Basic UI/UX Design</div>
                        <div className={styles.subjek_content_title_fav}>
                          <Image src={Favorite} priority className={styles.favorite} />
                        </div>
                      </div>
                      <div className={styles.subjek_content_tutor}>
                        <nav>John Doe</nav>
                        <Image src={Verify} priority />
                      </div>
                      <div className={styles.subjek_content_rating}>
                        <nav className={styles.star}>
                          <Image src={Star} priority className={styles.star} />
                        </nav>
                        <nav className={styles.ulasan}>4.5 (5 Ulasan)</nav>
                        <nav className={styles.divider}>
                          <Image src={Divider} priority />
                        </nav>
                        <nav className={styles.group_of_reviewer}>
                          <Image src={GOR} priority />
                        </nav>
                        <nav className={styles.murid}>30 Murid</nav>
                      </div>
                      <hr />
                    </div>
                    <div className={styles.subjek_action}>
                      <div className={styles.subjek_action_harga}>Rp 100.000/jam</div>
                      <div className={styles.subjek_action_action}>
                        <Link className={styles.button_submit} href={`cari-guru/${1}`}>
                          BOOK
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.subjek_gallery_card}>
                    <div className={styles.subjek_thumbnail}>
                      <Image src={SubjekThumbnail} priority />
                    </div>
                    <div className={styles.subjek_content}>
                      <div className={styles.subjek_content_title}>
                        <div className={styles.subjek_content_title_main}>Basic UI/UX Design</div>
                        <div className={styles.subjek_content_title_fav}>
                          <Image src={Favorite} priority className={styles.favorite} />
                        </div>
                      </div>
                      <div className={styles.subjek_content_tutor}>
                        <nav>John Doe</nav>
                        <Image src={Verify} priority />
                      </div>
                      <div className={styles.subjek_content_rating}>
                        <nav className={styles.star}>
                          <Image src={Star} priority className={styles.star} />
                        </nav>
                        <nav className={styles.ulasan}>4.5 (5 Ulasan)</nav>
                        <nav className={styles.divider}>
                          <Image src={Divider} priority />
                        </nav>
                        <nav className={styles.group_of_reviewer}>
                          <Image src={GOR} priority />
                        </nav>
                        <nav className={styles.murid}>30 Murid</nav>
                      </div>
                      <hr />
                    </div>
                    <div className={styles.subjek_action}>
                      <div className={styles.subjek_action_harga}>Rp 100.000/jam</div>
                      <div className={styles.subjek_action_action}>
                        <Link className={styles.button_submit} href={`cari-guru/${2}`}>
                          BOOK
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.subjek_gallery_card}>
                    <div className={styles.subjek_thumbnail}>
                      <Image src={SubjekThumbnail} priority />
                    </div>
                    <div className={styles.subjek_content}>
                      <div className={styles.subjek_content_title}>
                        <div className={styles.subjek_content_title_main}>Basic UI/UX Design</div>
                        <div className={styles.subjek_content_title_fav}>
                          <Image src={Favorite} priority className={styles.favorite} />
                        </div>
                      </div>
                      <div className={styles.subjek_content_tutor}>
                        <nav>John Doe</nav>
                        <Image src={Verify} priority />
                      </div>
                      <div className={styles.subjek_content_rating}>
                        <nav className={styles.star}>
                          <Image src={Star} priority className={styles.star} />
                        </nav>
                        <nav className={styles.ulasan}>4.5 (5 Ulasan)</nav>
                        <nav className={styles.divider}>
                          <Image src={Divider} priority />
                        </nav>
                        <nav className={styles.group_of_reviewer}>
                          <Image src={GOR} priority />
                        </nav>
                        <nav className={styles.murid}>30 Murid</nav>
                      </div>
                      <hr />
                    </div>
                    <div className={styles.subjek_action}>
                      <div className={styles.subjek_action_harga}>Rp 100.000/jam</div>
                      <div className={styles.subjek_action_action}>
                        <Link className={styles.button_submit} href={`cari-guru/${3}`}>
                          BOOK
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.subjek_lihat_semua}>
              <div id={styles.pagination}>
                <a href="#" id={styles.disabled} className={styles.blocks}>
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LoginTemplate>
  );
}
