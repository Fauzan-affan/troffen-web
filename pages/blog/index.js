import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import { FacebookShareButton, InstapaperShareButton, TwitterShareButton } from "react-share";

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
import article1 from "../../assets/img/blog/artickles/artickle1.svg";

import styles from "../../styles/blog/Blog.module.css";

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

export default function Index({ posts }) {
  const router = useRouter();

  const [catActive, setCatActive] = useState("new");
  const [highlight, setHighlight] = useState(1);

  const alltags = posts.map((val) => val.frontmatter.tags[0]);

  let filteredTag = [...new Set(alltags)];

  const handleClick = (slug) => {
    router.push(`/blog/${slug}`);
  };

  const truncate = (str, n) => {
    return str.length > n ? str.slice(0, n - 1) + " ...." : str;
  };

  const handleHighlight = (val) => {
    let total = posts.length - 1;
    if (val === "next") {
      if (highlight === total) {
        setHighlight(0);
      } else {
        setHighlight(highlight + 1);
      }
    } else if (val === "prev") {
      if (highlight < 1) {
        setHighlight(total);
      } else {
        setHighlight(highlight - 1);
      }
    } else {
      setHighlight(1);
    }
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
              {/* <div className={styles.search_box}>
                <div className={styles.search_location}>
                  <div className={styles.search_location_left}>
                    <input type="text" name="cariArticle" placeholder="Cari artikel" />
                  </div>
                  <div className={styles.search_location_right}>
                    <button className={styles.button_search}>Cari Artikel</button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section id="content">
        <div className={styles.container}>
          <div className={styles.highlight}>
            <div className={styles.image_highlight} onClick={() => handleClick(posts[highlight].slug)}>
              <Image alt="" src={Blog} />
            </div>
            <div className={styles.content_highlight}>
              <nav>
                <Tag type="blogTag">{posts[highlight].frontmatter.tags}</Tag>
              </nav>
              <div className={styles.content_title} onClick={() => handleClick(posts[highlight].slug)}>
                {posts[highlight].slug}
              </div>
              <div className={styles.content_creator_container}>
                <div className={styles.content_creator}>
                  <Image alt="" src={j} priority width={20} />
                  <nav>{posts[highlight].frontmatter.author}</nav>
                </div>
                <Image alt="" src={Line} />
                <div className={styles.content_created}>
                  <Image alt="" src={DateCreated} />
                  <nav>{posts[highlight].frontmatter.date}</nav>
                </div>
              </div>
              <div className={styles.content_desc}>
                <div className={styles.content_desc_main}>
                  <ReactMarkdown>{truncate(posts[highlight].content.replace(/<[^>]+>/g, ""), 300)}</ReactMarkdown>
                </div>
              </div>
              <div className={styles.content_share}>
                <nav>Share via:</nav>
                <div className={styles.content_share_icon}>
                  <FacebookShareButton url={`https://troffen.com/blog/${posts[highlight].slug.replace(/ /g, "%20")}`} quote={JSON.stringify(posts[highlight].slug)} hashtag={posts[highlight].frontmatter.tags}>
                    <Image alt="" src={fb} />
                  </FacebookShareButton>
                  <TwitterShareButton url={`https://troffen.com/blog/${posts[highlight].slug.replace(/ /g, "%20")}`} quote={JSON.stringify(posts[highlight].slug)} hashtag={posts[highlight].frontmatter.tags}>
                    <Image alt="" src={twitter} width={25} height={25} />
                  </TwitterShareButton>
                  <InstapaperShareButton url={`https://troffen.com/blog/${posts[highlight].slug.replace(/ /g, "%20")}`} quote={JSON.stringify(posts[highlight].slug)} hashtag={posts[highlight].frontmatter.tags}>
                    <nav>
                      <Image alt="" src={ig1} className={styles.img1} />
                      <Image alt="" src={ig2} className={styles.img2} />
                    </nav>
                  </InstapaperShareButton>
                </div>
              </div>
              <div className={styles.content_actions}>
                <Image alt="" src={Previous} width={25} height={25} onClick={() => handleHighlight("prev")} />
                <Image alt="" src={Next} width={25} height={25} onClick={() => handleHighlight("next")} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="category_menu">
        <div className={styles.container}>
          <div className={styles.category_menu}>
            <ul>
              <li className={(catActive === "new" && styles.active) || styles.negatif} onClick={() => setCatActive("new")}>
                <nav>Terbaru</nav>
                {catActive === "new" && <hr />}
              </li>
              {filteredTag.map((val, i) => {
                return (
                  <li className={(catActive === val && styles.active) || styles.negatif} onClick={() => setCatActive(val)} key={i}>
                    <nav>{val}</nav>
                    {catActive === val && <hr />}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section id="artikel_baru">
        <div className={styles.container}>
          <div className={styles.artikel_baru}>
            <div className={styles.artikel_baru_title}>Artikel Terbaru</div>
            <div className={styles.artikel_baru_card_container}>
              {catActive === "new" &&
                posts.map((article, i) => {
                  //extract slug and frontmatter
                  const { slug, frontmatter, content } = article;
                  //extract frontmatter properties
                  const { title, tags, author, date } = frontmatter;
                  // console.log(tags[0], catActive);
                  return (
                    <div className={styles.artikel_baru_card} key={slug} onClick={() => handleClick(slug)}>
                      <div className={styles.artikel_baru_card_img}>
                        <Image alt="" src={article1} />
                      </div>
                      <div className={styles.content_highlight}>
                        <nav>
                          <Tag type="blogTag">{tags}</Tag>
                        </nav>
                        <div className={styles.content_title}>{title}</div>
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

              {posts.map((article, i) => {
                //extract slug and frontmatter
                const { slug, frontmatter, content } = article;
                //extract frontmatter properties
                const { title, tags, author, date } = frontmatter;
                // console.log(tags[0], catActive);
                if (tags[0] === catActive) {
                  return (
                    <div className={styles.artikel_baru_card} key={slug} onClick={() => handleClick(slug)}>
                      <div className={styles.artikel_baru_card_img}>
                        <Image alt="" src={article1} />
                      </div>
                      <div className={styles.content_highlight}>
                        <nav>
                          <Tag type="blogTag">{tags}</Tag>
                        </nav>
                        <div className={styles.content_title}>{title}</div>
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
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </LoginTemplate>
  );
}
