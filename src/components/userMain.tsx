import React, { useState } from 'react';
import styles from './userMain.module.css';
import infomodal from '../asset/images/infomodal.png';
import chatbot from '../asset/images/chat-bot.png';
import div1_1 from '../asset/images/div1_1.png';
import div1_2 from '../asset/images/div1_2.png';
import div1_3 from '../asset/images/div1_3.png';
import div1_button from '../asset/images/div1_button.png';
import div2_1 from '../asset/images/div2_1.png';
import div2_2 from '../asset/images/div2_2.png';
import div2_3 from '../asset/images/div2_3.png';

import HomeHeader from './HomeHeader';
import { Link } from 'react-router-dom';
import Footer from './Footer';
interface Props {
  className?: string;
  white?: boolean;
}

declare global {
  interface Window {
    kakao: any;
  }
}
const UserMain: React.FC<Props> = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <HomeHeader />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'scroll',
        }}
      >
        <img
          className={modalOpen ? styles.chatbot_up : styles.chatbot_down}
          src={chatbot}
        />
        <img
          className={modalOpen ? styles.modal_open : styles.modal_close}
          src={infomodal}
        />
        {/*div1*/}
        <div className={styles.div_container}>
          <div className={styles.div_header}>
            <p className={styles.title}>주변 공연 정보</p>
            <img src={div1_button} style={{ width: 70 }} />
          </div>
          <div className={styles.div1_imgcontainer}>
            <img src={div1_1} />
            <img src={div1_2} />
            <Link to="/detail2">
              <img src={div1_3} />
            </Link>
          </div>
        </div>
        {/*div2*/}
        <div className={styles.div_container}>
          <div className={styles.div_header}>
            <p className={styles.title}>선호하는 아티스트 공연</p>
            {/*merge시 맞는 경로로 수정해주세요*/}
            <p
              style={{
                color: 'gray',
                fontSize: 14,
              }}
            >
              전체보기
            </p>
          </div>
          <div className={styles.div2_imgcontainer}>
            <img src={div2_1} />
            <img src={div2_2} />
            <img src={div2_3} />
          </div>
        </div>
        {/*div3*/}

        {/* {visible ? <ChatBot/> : null} */}
      </div>
      <Footer />
    </div>
  );
};

export default UserMain;
