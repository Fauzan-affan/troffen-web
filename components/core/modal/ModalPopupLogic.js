import { useRouter } from "next/router";
import Image from "next/image";

import Email from "../../../assets/img/png/001-mail.png";
import Pass from "../../../assets/img/png/002-eye.png";
import Google from "../../../assets/img/png/002-search.png";
import Fb from "../../../assets/img/png/001-facebook.png";
import ShowPass from "../../../assets/img/show.png";

import Modal from "../modal/Modal.js";

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

function ModalPopupLogic({ onClose, show, title, iSlogin, signIn, password, masukSebagaiType, changeLoginType, handleLogin, handleChange, handlePassword, handleForgotPass }) {
  const router = useRouter();

  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }

  if (!iSlogin) {
    return (
      <Modal onClose={() => onClose(false)} show={show} title={title}>
        {title === "daftar" && (
          <div className="daftar_modal">
            <button onClick={() => router.push("/daftar-murid")} className="button_murid">
              Daftar Sebagai Murid
            </button>
            <nav>atau</nav>
            <button onClick={() => router.push("/daftar-guru")} className="button_guru">
              Daftar Sebagai Guru
            </button>
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
              <div className="masuk_sebagai_murid" onClick={() => changeLoginType(1)}>
                Masuk Sebagai Murid
              </div>
              <hr />
              <div className="masuk_sebagai_guru" onClick={() => changeLoginType(2)}>
                Masuk Sebagai Guru
              </div>
              <hr />
            </div>
            <div className="masuk_modal_body">
              <form onSubmit={handleLogin}>
                <div className="masuk_email">
                  <label htmlFor="email">Email*</label>
                  <nav>
                    <input id="email" name="email" type="text" placeholder="example@gmail.com" onChange={handleChange} />
                    <Image alt="" src={Email} priority width={20} height={20} />
                  </nav>
                </div>
                <div className="masuk_password">
                  <label htmlFor="password">Password*</label>
                  <nav>
                    <input id="password" name="password" type={password ? "text" : "password"} placeholder="password" onChange={handleChange} />
                    <Image alt="" src={password ? ShowPass : Pass} priority width={20} height={20} onClick={() => handlePassword()} />
                  </nav>
                </div>
                <div className="masuk_action">
                  <div className="action_ingat_saya">
                    <input type="checkbox" name="" id="" />
                    <nav>Ingat Saya</nav>
                  </div>
                  <div className="action_lupa_password">
                    <nav onClick={handleForgotPass}>Lupa Password?</nav>
                  </div>
                </div>
                <button className="masuk_submit" type="submit">
                  Masuk
                </button>
                <div className="masuk_options">
                  <div className="masuk_option_label">atau masuk dengan</div>
                  <div className="masuk_options_body">
                    <div className="masuk_google" onClick={() => signIn("google")}>
                      <Image alt="" src={Google} priority width={20} height={20} />
                      <nav>Google</nav>
                    </div>
                    <div className="masuk_facebook" onClick={() => signIn("facebook")}>
                      <Image alt="" src={Fb} priority width={20} height={20} />
                      <nav>Facebook</nav>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </Modal>
    );
  }
}

export default ModalPopupLogic;
