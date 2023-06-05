import React, { useState } from "react";
import { useEffect } from "react";
import CheckBox from "./CheckBox";
import styles from "./userMain.module.css";
import infomodal from "../asset/images/infomodal.png";
import chatbot from "../asset/images/chat-bot.png";
import div1_1 from "../asset/images/div1_1.png";
import div1_2 from "../asset/images/div1_2.png";
import div1_3 from "../asset/images/div1_3.png";
import div1_button from "../asset/images/div1_button.png";
import div2_1 from "../asset/images/div2_1.png";
import div2_2 from "../asset/images/div2_2.png";
import div2_3 from "../asset/images/div2_3.png";
import div2_button from "../asset/images/div2_button.png";
import { Link } from "react-router-dom";
interface Props {
  className?: string;
  white?: boolean;
  onChange: any;
}

declare global {
  interface Window {
    kakao: any;
  }
}
const UserMain: React.FC<Props> = ({ onChange }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  // const ChangeStatus = () => {
  //   setVisible(!visible)
  // }
  const ModalOpenHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div
      style={{
        position: "relative",
        height: "80%",
        backgroundColor: "#CCCFD4",
        display: "flex",
        flexDirection: "column",
        overflowY: "scroll", //컨테이너 크기는 고정되고 해당 div에서 스크롤
      }}
    >
      <img
        className={modalOpen ? styles.chatbot_up : styles.chatbot_down}
        src={chatbot}
        onClick={() => onChange(!visible)}
      />
      <img
        className={modalOpen ? styles.modal_open : styles.modal_close}
        src={infomodal}
      />
      {/*div1*/}
      <div className={styles.div_container}>
        <div className={styles.div_header}>
          <text>주변 공연 정보</text>
          <img
            src={div1_button}
            style={{ width: 88, height: 32, marginTop: 20 }}
          />
        </div>
        <div className={styles.div1_imgcontainer}>
          <img src={div1_1} />
          <img src={div1_2} />
          <img src={div1_3} />
        </div>
      </div>
      {/*div2*/}
      <div className={styles.div_container}>
        <div className={styles.div_header}>
          <text>주변 공연 정보</text> {/*merge시 맞는 경로로 수정해주세요*/}
          <text
            style={{
              width: 57,
              height: 19,
              marginTop: 20,
              color: "gray",
              fontSize: 16,
            }}
          >
            전체보기
          </text>
        </div>
        <div className={styles.div2_imgcontainer}>
          <img src={div2_1} />
          <img src={div2_2} />
          <img src={div2_3} />
        </div>
      </div>
      {/*div3*/}
      <div></div>
      {/* {visible ? <ChatBot/> : null} */}
    </div>
  );
};

export default UserMain;
