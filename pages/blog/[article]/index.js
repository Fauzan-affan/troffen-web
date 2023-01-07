import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/blog/ArticleId.module.css";

import LoginTemplate from "../../../components/layouts/LoginTemplate";
import Breadcrumb from "../../../components/core/Breadcrumb";
import Tag from "../../../components/core/Tag";
import j from "../../../assets/img/blog/girl.png";
import Line from "../../../assets/img/blog/line.svg";
import DateCreated from "../../../assets/img/blog/date.svg";
import Share from "../../../assets/img/blog/artickles/share.svg";
import img from "../../../assets/img/blog/artickles/img.svg";

import artickle1 from "../../../assets/img/blog/artickles/artickle1.svg";
import artickle2 from "../../../assets/img/blog/artickles/artickle2.svg";
import artickle3 from "../../../assets/img/blog/artickles/artickle3.svg";
import artickle4 from "../../../assets/img/blog/artickles/artickle4.svg";
import artickle5 from "../../../assets/img/blog/artickles/artickle5.svg";

import tick from "../../../assets/img/blog/artickles/tick.svg";

const nonActive = {
  color: "#666666",
  backgroundColor: "white",
};

const active = {
  color: "white",
  backgroundColor: "#1ea9e4",
};

const articles = [
  { id: 1, tag: "travel", title: "set video playback speed with javascript", img: artickle1, creator: "Jesica koli", articleCreated: "02 december 2022", desc: "Did you come here for something in particular or just general Riker-bashing" },
  { id: 2, tag: "travel", title: "set video playback speed with javascript", img: artickle2, creator: "Jesica koli", articleCreated: "02 december 2022", desc: "Did you come here for something in particular or just general Riker-bashing" },
  { id: 3, tag: "travel", title: "set video playback speed with javascript", img: artickle3, creator: "Jesica koli", articleCreated: "02 december 2022", desc: "Did you come here for something in particular or just general Riker-bashing" },
  { id: 4, tag: "travel", title: "set video playback speed with javascript", img: artickle4, creator: "Jesica koli", articleCreated: "02 december 2022", desc: "Did you come here for something in particular or just general Riker-bashing" },
  { id: 5, tag: "travel", title: "set video playback speed with javascript", img: artickle5, creator: "Jesica koli", articleCreated: "02 december 2022", desc: "Did you come here for something in particular or just general Riker-bashing" },
];

const categories = [
  { name: "lifestyle", total: "09" },
  { name: "travel", total: "05" },
  { name: "food", total: "09" },
  { name: "healthcare", total: "10" },
  { name: "technology", total: "03" },
];

const tags = [
  { id: 1, name: "Travel", status: 0 },
  { id: 2, name: "lifestyle", status: 0 },
  { id: 3, name: "fashion", status: 0 },
  { id: 4, name: "technology", status: 1 },
  { id: 5, name: "business", status: 0 },
  { id: 6, name: "design", status: 0 },
  { id: 7, name: "health", status: 0 },
  { id: 8, name: "food", status: 0 },
  { id: 9, name: "art", status: 0 },
];

const Index = () => {
  const router = useRouter();
  const { articleId } = router.query;

  const [adv, setAdv] = useState(true);

  return (
    <LoginTemplate
      title={`Kumpulan Artikel, Tips Karir Serta Informasi Terbaru - Troffen Blog`}
      desc={`Cek berbagai artikel menarik tentang berbagai tips & trik, high demand skills dan kumpulan informasi mengenai dunia karir disini!`}
      icon={`troffen.ico`}
    >
      <section id="article_detail">
        <div className={styles.container}>
          <div className={styles.article_detail}>
            <div className={styles.breadcrumb}>
              <Breadcrumb text="Blog" isDisabled={true} />
              <nav>/</nav>
              <Breadcrumb text="Title" />
            </div>
            <div className={styles.tags}>
              <Tag type="blogTag">Lifestyle</Tag>
            </div>
            <div className={styles.article_detail_content}>
              <div className={styles.article_detail_content_left}>
                <div className={styles.article_detail_title}>Title</div>
                <div className={styles.article_detail_creator}>
                  <div className={styles.content_creator_container}>
                    <div className={styles.content_creator}>
                      <Image alt="" src={j} priority width={20} />
                      <nav>Fauzan</nav>
                    </div>
                    <Image alt="" src={Line} />
                    <div className={styles.content_created}>
                      <Image alt="" src={DateCreated} />
                      <nav>02 december 2022</nav>
                    </div>
                  </div>
                  <div className={styles.content_share}>
                    <Image alt="" src={Share} />
                  </div>
                </div>
                <div className={styles.article_detail_img}>
                  <Image alt="" src={img} />
                </div>
                <div className={styles.article_detail_contents}>
                  <div>
                    <nav>
                      Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re
                      dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships.
                    </nav>
                    <h1>I Created a Developer Rap Video - Here{"'"}s What I Learned</h1>
                    <nav>
                      Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re
                      dealing in stolen ore. But I wanna talk about the assassination attempt. Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to
                      be in two places at once. We have a saboteur aboard.
                    </nav>
                    <nav className={styles.article_quotes}>
                      <Image alt="" src={tick} className={styles.article_quotes_1} />
                      <nav>
                        <i>
                          “Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re
                          dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.”
                        </i>
                      </nav>
                    </nav>
                    <nav>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.</nav>
                    <h1>I Created a Developer Rap Video - Here{"'"}s What I Learned</h1>
                    <nav className={styles.ol}>
                      Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.
                      <ol>
                        <ul>1. Did you come here for something in particular or just general</ul>
                        <ul>2. Did you come here for something in particular or just general Riker-bashing</ul>
                        <ul>3. Did you come here for something in particula</ul>
                      </ol>
                    </nav>
                  </div>
                </div>
                <hr />

                <section id="artikel_baru">
                  <div>
                    <div className={styles.artikel_baru}>
                      <div className={styles.artikel_baru_title}>Lihat artikel terkait</div>
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
              </div>
              <div className={styles.article_detail_content_right}>
                <div className={styles.article_right}>
                  {adv && (
                    <div className={styles.article_right_adv}>
                      <div className={styles.article_right_adv_ad}>
                        <nav>Ad</nav>
                      </div>
                      <div className={styles.article_right_adv_title}>Space Iklan</div>
                      <div className={styles.article_right_adv_desc}>Ini space iklan Ini space iklan Ini space iklan Ini space iklan Ini space iklan Ini space iklan </div>
                      <div className={styles.article_right_adv_action}>
                        <nav>Visit Us</nav>
                      </div>
                    </div>
                  )}
                  <div className={styles.article_right_categories}>
                    <div className={styles.article_right_categories_title}>Categories</div>
                    <div className={styles.article_right_categories_list}>
                      {categories.map((cat) => (
                        <div className={styles.categories_list} key={cat.id}>
                          <div className={styles.categories_list_detail}>
                            <div className={styles.categories_list_name}>{cat.name}</div>
                            <div className={styles.categories_list_total}>{cat.total}</div>
                          </div>
                          <hr />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.article_right_tags}>
                    <div className={styles.article_right_tags_title}>Tags</div>
                    <div className={styles.article_right_tags_content}>
                      {tags.map((tag) => (
                        <div className={styles.tag_list_box} key={tag.id} style={tag.status === 1 ? active : nonActive}>
                          {tag.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LoginTemplate>
  );
};

export default Index;
