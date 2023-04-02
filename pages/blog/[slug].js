import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/blog/Slug.module.css";

import Modal from "../../components/core/modal/Modal";

import { FacebookShareButton, TwitterShareButton } from "react-share";
import ShareIntagram from "../../functions/shareIntagram";

import GeneralTemplate from "../../components/layouts/GeneralTemplate";
import Breadcrumb from "../../components/core/Breadcrumb";
import Tag from "../../components/core/Tag";
import j from "../../assets/img/blog/girl.png";
import Line from "../../assets/img/blog/line.svg";
import DateCreated from "../../assets/img/blog/date.svg";
import Share from "../../assets/img/blog/artickles/share.svg";
import img from "../../assets/img/blog/artickles/img.svg";
import fb from "../../assets/img//blog/icon/fb.svg";
import twitter from "../../assets/img/blog/icon/twitter.png";

import article1 from "../../assets/img/blog/artickles/artickle1.svg";

const nonActive = {
  color: "#666666",
  backgroundColor: "white",
};

const active = {
  color: "white",
  backgroundColor: "#1ea9e4",
};

const categories = [
  { name: "lifestyle", total: "09" },
  { name: "travel", total: "05" },
  { name: "food", total: "09" },
  { name: "healthcare", total: "10" },
  { name: "technology", total: "03" },
];

export const getStaticPaths = async () => {
  const files = fs.readdirSync("assets/posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const fileName = fs.readFileSync(`assets/posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  const files = fs.readdirSync("assets/posts");
  const allTags = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`assets/posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
      content,
    };
  });

  return {
    props: {
      slug,
      frontmatter,
      content,
      allTags,
    },
  };
};

const Index = ({ slug, frontmatter, content, allTags }) => {
  const router = useRouter();
  const { title, author, metaDesc, date, tags } = frontmatter;
  const alltags = allTags.map((val) => val.frontmatter.tags[0]);

  let filteredTag = [...new Set(alltags)];

  const [adv, setAdv] = useState(false);
  const [modal, setModal] = useState(false);

  const truncate = (str, n) => {
    return str.length > n ? str.slice(0, n - 1) + " ...." : str;
  };

  const handleClick = (slug) => {
    router.push(`/blog/${slug}`);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <GeneralTemplate title={title} desc={metaDesc} icon={`troffen.ico`}>
      <section id="article_detail">
        <div className={styles.container}>
          <div className={styles.article_detail}>
            <div className={styles.breadcrumb}>
              <Breadcrumb text="Blog" isDisabled={true} />
              <nav>/</nav>
              <Breadcrumb text={title} />
            </div>
            <div className={styles.tags}>
              <Tag type="blogTag">{tags[0]}</Tag>
            </div>
            <div className={styles.article_detail_content}>
              <div className={styles.article_detail_content_left}>
                <div className={styles.article_detail_title}>{title}</div>
                <div className={styles.article_detail_creator}>
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
                  <div className={styles.content_share} onClick={() => setModal(true)}>
                    <Image alt="" src={Share} />
                  </div>
                </div>
                <div className={styles.article_detail_img}>
                  <Image alt="" src={img} />
                </div>
                <div className={styles.article_detail_contents}>
                  <div>
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </div>
                </div>
                <hr />

                <section id="artikel_baru">
                  <div>
                    <div className={styles.artikel_baru}>
                      <div className={styles.artikel_baru_title}>Lihat artikel terkait</div>
                      <div className={styles.artikel_baru_card_container}>
                        {allTags.map((article, i) => {
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
                      {filteredTag.map((tag) => (
                        <div className={styles.tag_list_box} key={tag.id} style={tag === tags[0] ? active : nonActive}>
                          {tag}
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

      <Modal modalInfo={modal} handleModal={handleModal}>
        <div className={styles.content_share_icon}>
          <div className={styles.inner}>
            {/* {console.log(slug)} */}
            <FacebookShareButton url={`https://troffen.com/blog/${slug.replace(/ /g, "-")}`} quote={JSON.stringify(slug)} hashtag={tags[0]}>
              <Image alt="" src={fb} />
            </FacebookShareButton>
            <TwitterShareButton url={`https://troffen.com/blog/${slug.replace(/ /g, "-")}`} quote={JSON.stringify(slug)} hashtag={tags[0]}>
              <Image alt="" src={twitter} width={25} height={25} />
            </TwitterShareButton>
            <ShareIntagram caption={`https://troffen.com/blog/${slug.replace(/ /g, "-")}`} imageUrl={article1} />
          </div>
        </div>
      </Modal>
    </GeneralTemplate>
  );
};

export default Index;
