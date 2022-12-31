import { useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

import LoginTemplate from "../../components/layouts/LoginTemplate";
import Tag from "../../components/core/Tag";
import Blog from "../../assets/img/blog/blog.svg";
import j from "../../assets/img/blog/girl.png";
import Line from "../../assets/img/blog/line.svg";
import DateCreated from "../../assets/img/blog/date.svg";
import BgSearch from "../../assets/img/bg-biru.svg";
import fb from "../../assets/img//blog/icon/fb.svg";
import twitter from "../../assets/img/blog/icon/twitter.png";
import ig1 from "../../assets/img/blog/icon/ig1.svg";
import ig2 from "../../assets/img/blog/icon/ig2.svg";
import Previous from "../../assets/img/Previous.svg";
import Next from "../../assets/img/Next.svg";
import artickle1 from "../../assets/img/blog/artickles/artickle1.svg";
import artickle2 from "../../assets/img/blog/artickles/artickle2.svg";
import artickle3 from "../../assets/img/blog/artickles/artickle3.svg";
import artickle4 from "../../assets/img/blog/artickles/artickle4.svg";
import artickle5 from "../../assets/img/blog/artickles/artickle5.svg";

import styles from "../../styles/blog/Blog.module.css";

const articles = [
  { id: 1, tag: "travel", title: "set video playback speed with javascript", img: artickle1, creator: "Jesica koli", articleCreated: "02 december 2022", desc: "Did you come here for something in particular or just general Riker-bashing" },
  { id: 2, tag: "travel", title: "set video playback speed with javascript", img: artickle2, creator: "Jesica koli", articleCreated: "02 december 2022", desc: "Did you come here for something in particular or just general Riker-bashing" },
  { id: 3, tag: "travel", title: "set video playback speed with javascript", img: artickle3, creator: "Jesica koli", articleCreated: "02 december 2022", desc: "Did you come here for something in particular or just general Riker-bashing" },
  { id: 4, tag: "travel", title: "set video playback speed with javascript", img: artickle4, creator: "Jesica koli", articleCreated: "02 december 2022", desc: "Did you come here for something in particular or just general Riker-bashing" },
  { id: 5, tag: "travel", title: "set video playback speed with javascript", img: artickle5, creator: "Jesica koli", articleCreated: "02 december 2022", desc: "Did you come here for something in particular or just general Riker-bashing" },
];

export default function index() {
  const [catActive, setCatActive] = useState(1);

  const router = useRouter();

  const handleClick = (article) => {
    router.push(`/blog/${article.id}`);
  };

  return (
    <LoginTemplate
      title={`Kumpulan Artikel, Tips Karir Serta Informasi Terbaru - Troffen Blog`}
      desc={`Cek berbagai artikel menarik tentang berbagai tips & trik, high demand skills dan kumpulan informasi mengenai dunia karir disini!`}
      icon={`troffen.ico`}
    >
      <section id="search_bar">
        <div className={styles.search_bar} style={{ backgroundImage: `url(${BgSearch.src})` }}>
          <div className={styles.container}>
            <div className={styles.container_search}>
              <div className={styles.search_title}>
                <p>Perluas Wawasan Anda Dengan Artikel di Troffen</p>
              </div>
              <div className={styles.search_box}>
                <div className={styles.search_location}>
                  <div className={styles.search_location_left}>
                    {/* <Image alt="" src={JumbotronLoc} priority /> */}
                    <input type="text" placeholder="Cari artikel" />
                  </div>
                  <div className={styles.search_location_right}>
                    <button className={styles.button_search}>Cari Artikel</button>
                  </div>
                </div>
                <div className={styles.search_location_mobile}>
                  <button className={styles.button_search_mobile}>Cari Kursus</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="content">
        <div className={styles.container}>
          <div className={styles.highlight}>
            <div className={styles.image_highlight}>
              <Image alt="" src={Blog} />
            </div>
            <div className={styles.content_highlight}>
              <nav>
                <Tag type="blogTag">Travel</Tag>
              </nav>
              <div className={styles.content_title}>Title</div>
              <div className={styles.content_creator_container}>
                <div className={styles.content_creator}>
                  <Image alt="" src={j} priority width={20} />
                  <nav>Jesica koli</nav>
                </div>
                <Image alt="" src={Line} />
                <div className={styles.content_created}>
                  <Image alt="" src={DateCreated} />
                  <nav>02 december 2022</nav>
                </div>
              </div>
              <div className={styles.content_desc}>
                <div className={styles.content_desc_main}>
                  Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box
                  functionalities. Authoritatively target proactive vortals vis-a-vis exceptional results. Compellingly brand emerging sources and compelling materials. Globally iterate parallel content
                </div>
                <div className={styles.content_desc_essence}>The best ideas can change who we are.</div>
                <div className={styles.content_desc_secondary}>Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for</div>
              </div>
              <div className={styles.content_share}>
                <nav>Share via:</nav>
                <div className={styles.content_share_icon}>
                  <Image alt="" src={fb} />
                  <Image alt="" src={twitter} width={25} height={25} />
                  <nav>
                    <Image alt="" src={ig1} className={styles.img1} />
                    <Image alt="" src={ig2} className={styles.img2} />
                  </nav>
                </div>
              </div>
              <div className={styles.content_actions}>
                <Image alt="" src={Previous} width={25} height={25} />
                <Image alt="" src={Next} width={25} height={25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="category_menu">
        <div className={styles.container}>
          <div className={styles.category_menu}>
            <ul>
              <li className={(catActive === 1 && styles.active) || styles.negatif} onClick={() => setCatActive(1)}>
                <nav>Terbaru</nav>
                {catActive === 1 && <hr />}
              </li>
              <li className={(catActive === 2 && styles.active) || styles.negatif} onClick={() => setCatActive(2)}>
                <nav>Design & Art</nav>
                {catActive === 2 && <hr />}
              </li>
              <li className={(catActive === 3 && styles.active) || styles.negatif} onClick={() => setCatActive(3)}>
                <nav>Akademik</nav>
                {catActive === 3 && <hr />}
              </li>
              <li className={(catActive === 4 && styles.active) || styles.negatif} onClick={() => setCatActive(4)}>
                <nav>Musik</nav>
                {catActive === 4 && <hr />}
              </li>
              <li className={(catActive === 5 && styles.active) || styles.negatif} onClick={() => setCatActive(5)}>
                <nav>Sport</nav>
                {catActive === 5 && <hr />}
              </li>
              <li className={(catActive === 6 && styles.active) || styles.negatif} onClick={() => setCatActive(6)}>
                <nav>Teknologi</nav>
                {catActive === 6 && <hr />}
              </li>
              <li className={(catActive === 7 && styles.active) || styles.negatif} onClick={() => setCatActive(7)}>
                <nav>Gaya Hidup</nav>
                {catActive === 7 && <hr />}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="artikel_baru">
        <div className={styles.container}>
          <div className={styles.artikel_baru}>
            <div className={styles.artikel_baru_title}>Artikel Terbaru</div>
            <div className={styles.artikel_baru_card_container}>
              {articles.map((article) => {
                // console.log(img);
                return (
                  <div className={styles.artikel_baru_card} key={article.id} onClick={() => handleClick(article)}>
                    <div className={styles.artikel_baru_card_img}>
                      <Image alt="" src={article.img} />
                    </div>
                    <div className={styles.content_highlight}>
                      <nav>
                        <Tag type="blogTag">{article.tag}</Tag>
                      </nav>
                      <div className={styles.content_title}>{article.title}</div>
                      <div className={styles.content_creator_container}>
                        <div className={styles.content_creator}>
                          <Image alt="" src={j} priority width={20} />
                          <nav>{article.creator}</nav>
                        </div>
                        <Image alt="" src={Line} />
                        <div className={styles.content_created}>
                          <Image alt="" src={DateCreated} />
                          <nav>{article.articleCreated}</nav>
                        </div>
                      </div>
                      <div className={styles.content_desc}>
                        <div className={styles.content_desc_main}>{article.desc}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </LoginTemplate>
  );
}
