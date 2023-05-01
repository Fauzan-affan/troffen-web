import { useState } from "react";
import styles from "../../styles/core/Stars.module.css";

const Stars = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className={styles.star_rating}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button id={styles.button} type="button" key={index} className={index <= (hover || rating) ? styles.on : styles.off} onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)}>
            <span className={styles.star}>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Stars;
