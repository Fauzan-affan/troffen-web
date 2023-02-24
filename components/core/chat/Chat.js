import Image from "next/image";
import styles from "../../../styles/core/chat/Chat.module.css";

import Yes from "../../../assets/img/chat/checklist.svg";
import No from "../../../assets/img/chat/reject.svg";
import Confirmed from "../../../assets/img/chat/handshake.svg";

const Chat = ({ chatType, text, name = "", handleConfirm }) => {
  return (
    <>
      {chatType === "confirm" && (
        <div className={styles.chat_container}>
          <div className={styles.chat_confirm} onClick={() => handleConfirm("yes")}>
            <Image src={Yes} alt="" />
            <nav>Terima Permintaan Kursus</nav>
          </div>
          <div className={styles.chat_reject} onClick={() => handleConfirm("no")}>
            <Image src={No} alt="" />
            <nav>Tolak Permintaan Kursus</nav>
          </div>
        </div>
      )}

      {chatType === "info" && (
        <div className={styles.chat_info_container}>
          <div className={styles.chat_text}>
            <nav>{text}</nav>
          </div>
        </div>
      )}

      {chatType === "tutorConfirmed" && (
        <div className={styles.container_tutor}>
          <div className={styles.chat_tutor_container}>
            <div className={styles.chat_detail}>
              <Image src={Confirmed} alt="" />
              <nav>{text}</nav>
            </div>
          </div>
        </div>
      )}

      {chatType === "tutor" && (
        <div className={styles.container_tutor}>
          <div className={styles.chat_tutor_container}>
            <div className={styles.chat_ttd}>
              <nav>{text}</nav>
              {name.length > 0 && <div className={styles.ttd}>Sampai Jumpa - {name}</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
