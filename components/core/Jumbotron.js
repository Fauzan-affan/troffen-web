import styles from "../../styles/core/Jumbotron.module.css";

import BgSearch from "../../assets/img/bg-biru.svg";

const Jumbotron = ({ title, desc, placeholder, buttonLabel }) => {
  return (
    <section id="search_bar">
      <div className={styles.search_bar} style={{ backgroundImage: `url(${BgSearch.src})` }}>
        <div className={styles.container}>
          <div className={styles.container_search}>
            <div className={styles.search_title}>
              <p>{title}</p>
            </div>
            {desc && (
              <div className={styles.search_desc}>
                <p>{desc}</p>
              </div>
            )}
            {placeholder && buttonLabel && (
              <div className={styles.search_box}>
                <div className={styles.search_location}>
                  <div className={styles.search_location_left}>
                    <input type="text" placeholder={placeholder} />
                  </div>
                  <div className={styles.search_location_right}>
                    <button className={styles.button_search}>{buttonLabel}</button>
                  </div>
                </div>
                {/* <div className={styles.search_location_mobile}>
                <button className={styles.button_search_mobile}>Cari Kursus</button>
              </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
