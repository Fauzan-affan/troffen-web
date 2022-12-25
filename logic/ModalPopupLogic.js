import { useState } from "react";
import Image from "next/image";

import Email from "../assets/img/png/001-mail.png";
import Pass from "../assets/img/png/002-eye.png";
import Google from "../assets/img/png/002-search.png";
import Fb from "../assets/img/png/001-facebook.png";

import Modal from "../components/core/Modal.js";

const masukSebagaiLabel = {
  fontWeight: 400,
};

const masukSebagaiHr = {
  border: "1px solid",
};

const masukSebagaiSelectedLabel = {
  fontWeight: 600,
  fontSize: "16px",
};

const masukSebagaiSelectedHr = {
  border: "2px solid",
};

function ModalPopupLogic({ onClose, show, title }) {
  const [masukSebagaiType, setMasukSebagaiType] = useState(1);

  const changeLoginType = (type) => {
    setMasukSebagaiType(type);
  };

  return (
    <Modal onClose={() => onClose(false)} show={show} title={title}>
      {title === "daftar" && (
        <div className="daftar_modal">
          <button className="button_murid">Daftar Sebagai Murid</button>
          <nav>atau</nav>
          <button className="button_guru">Daftar Sebagai Guru</button>
        </div>
      )}
      {title === "masuk" && (
        <div className="masuk_modal">
          <div className="masuk_modal_type">
            <div className="masuk_sebagai_murid" onClick={() => changeLoginType(1)}>
              <nav style={masukSebagaiType === 1 ? masukSebagaiSelectedLabel : masukSebagaiLabel}>Masuk Sebagai Murid</nav>
              <hr style={masukSebagaiType === 1 ? masukSebagaiSelectedHr : masukSebagaiHr} />
            </div>
            <div className="masuk_sebagai_guru" onClick={() => changeLoginType(2)}>
              <nav style={masukSebagaiType === 2 ? masukSebagaiSelectedLabel : masukSebagaiLabel}>Masuk Sebagai Guru</nav>
              <hr style={masukSebagaiType === 2 ? masukSebagaiSelectedHr : masukSebagaiHr} />
            </div>
          </div>
          <div className="mobile_masuk_modal_type">
            <div className="masuk_sebagai_murid">Masuk Sebagai Murid</div>
            <hr />
            <div className="masuk_sebagai_guru">Masuk Sebagai Guru</div>
            <hr />
          </div>
          <div className="masuk_modal_body">
            <div className="masuk_email">
              <label htmlFor="email">Email*</label>
              <nav>
                <input id="email" type="text" placeholder="example@gmail.com" />
                <Image alt="" src={Email} priority width={20} height={20} />
              </nav>
            </div>
            <div className="masuk_password">
              <label htmlFor="password">Password*</label>
              <nav>
                <input id="password" type="password" placeholder="password" />
                <Image alt="" src={Pass} priority width={20} height={20} />
              </nav>
            </div>
            <div className="masuk_action">
              <div className="action_ingat_saya">
                <input type="checkbox" name="" id="" />
                <nav>Ingat Saya</nav>
              </div>
              <div className="action_lupa_password">
                <nav>Lupa Password?</nav>
              </div>
            </div>
            <button className="masuk_submit">Masuk</button>
            <div className="masuk_options">
              <div className="masuk_option_label">atau masuk dengan</div>
              <div className="masuk_options_body">
                <div className="masuk_google">
                  <Image alt="" src={Google} priority width={20} height={20} />
                  <nav>Google</nav>
                </div>
                <div className="masuk_facebook">
                  <Image alt="" src={Fb} priority width={20} height={20} />
                  <nav>Facebook</nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default ModalPopupLogic;
