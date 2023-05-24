import React, { useState } from 'react';
import styles from './ChatBot.module.css';
import x from '../asset/images/x 1.png';
import icon from '../asset/images/icon 2.png';
import card1 from '../asset/images/card.png';
import { Link } from 'react-router-dom';
import { text } from 'stream/consumers';
interface Props {
  className?: string;
  status?: boolean;
  onChange: any;
}

let now = new Date();
let year = now.getFullYear(),
  month = now.getMonth(),
  day = now.getDate(),
  hour = now.getHours(),
  minute = now.getMinutes();

const ChatBot: React.FC<Props> = ({ onChange }) => {
  const [visible, setVisible] = useState(true);
  const [textvisible, setTextvisible] = useState(false);
  const [text, setText] = useState('');
  // const ()=>onChange(!visible) = () => {
  //   setVisible(!visible);
  // };
  // console.log(visible);
  const submitHandler = (e: any) => {
    console.log(textvisible)
    e.preventDefault();
    setTextvisible(!textvisible)
    setText("");
  }
  const textHandler = (e: any) => {
    setText(e.currentTarget.value)
  }
  return (
    <div
      className={styles.wrapper}
      style={{ visibility: visible ? 'visible' : 'hidden' }}
    >
      <div className={styles.header}>
        <img src={x} onClick={() => onChange(!visible)} />
      </div>
      <div className={styles.main}>
        <div className={styles.date}>
          {year + '년 ' + month + '월 ' + day + '일 ' + hour + ':' + minute}
        </div>
        <div className={styles.chat_left}>
          <div
            style={{
              marginTop: 12,
              marginBottom: 6,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={icon} style={{ marginRight: 8, marginLeft: 16 }} />
            <div>인디커넥츠 챗봇</div>
          </div>
          <div
            className={styles.chatbox}
            style={{ backgroundColor: 'white', width: 162, height: 'auto' }}
          >
            <div>게스트님, 반갑습니다!</div>
            <br />
            <div>어떤 도움이 필요하신가요?</div>
          </div>
        </div>
        <div className={styles.chat_right} style={{ visibility: textvisible ? 'visible' : 'hidden' }}>
          <div
            className={styles.chatbox}
            style={{
              backgroundColor: 'black',
              marginTop: 16,
              width: 204,
              height: 'auto',
              // marginLeft: 160,
            }}
          >
            <div style={{ color: 'white' }}>
              홍대입구역 주변 5-6월에 진행하는 기획 공연을 찾고 싶어.
            </div>
          </div>
        </div>
        <div className={styles.chat_left} style={{ visibility: textvisible ? 'visible' : 'hidden' }}>
          <div
            style={{
              marginTop: 12,
              marginBottom: 6,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={icon} style={{ marginRight: 8, marginLeft: 16 }} />
            <div>인디커넥츠 챗봇</div>
          </div>
          <div
            className={styles.chatbox}
            style={{ backgroundColor: 'white', width: 162, height: 'auto' }}
          >
            <div>게스트님, 반갑습니다!</div>
            <br />
            <div>어떤 도움이 필요하신가요?</div>
          </div>
        </div>

        <div className={styles.chat_right} style={{ visibility: textvisible ? 'visible' : 'hidden' }}>
          <Link to="/detail">
            <img
              src={card1}
              style={{
                marginTop: 12,
                marginLeft: 34,
                width: 482,
                height: 200,
              }}
            />
          </Link>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'white',
          height: '10%',
          zIndex: 3,
          borderTopStyle: 'solid',
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
      >
        <form onSubmit={submitHandler} >
          <input type="text" style={{ height: '41px', width: '342px' }} value={text} onChange={textHandler} />
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
