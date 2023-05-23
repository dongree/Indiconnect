import React, { useState } from "react";
import styles from './ChatBot.module.css'
import x from '../asset/images/x 1.png'
import icon from '../asset/images/icon 2.png'
import card1 from '../asset/images/card.png'
interface Props {
    className?: string;
    status?: boolean;
}

let now = new Date();
let year = now.getFullYear(),
  month = now.getMonth(),
  day = now.getDate(),
  hour = now.getHours(),
  minute = now.getMinutes()


const ChatBot: React.FC<Props> = ({status}) => {
const [visible, setVisible] = useState(true);
const ChangeStatus = () => {
    setVisible(!visible);
}
console.log(visible)
return (
    <div className={styles.wrapper} style={{visibility : visible ? "visible" : "hidden"}}>
        <div className={styles.header}>
            <img src={x} onClick={ChangeStatus}/>
        </div>
        <div className={styles.date}>
            {year + '년 ' + month + '월 ' + day + '일 ' + hour + ':' + minute}
        </div>
        <div>
            <div style={{marginTop:12, marginBottom:6, display:"flex", alignItems:"center"}}>
                <img src={icon} style={{marginRight:8, marginLeft:16}}/>
                <text>인디커넥츠 챗봇</text>
            </div>
            <div className={styles.chatbox} style={{backgroundColor:"white", width:162, height:"auto"}}>
                <text>게스트님, 반갑습니다!</text>
                <br/>
                <text>어떤 도움이 필요하신가요?</text>
            </div>
            <div className={styles.chatbox} style={{backgroundColor:"black", marginTop:16, width:204, height:"auto",marginLeft:160}}>
                <text style={{color:"white"}}>홍대입구역 주변 5-6월에 진행하는 기획 공연을 찾고 싶어.</text>
            </div>
            <div style={{marginTop:12, marginBottom:6, display:"flex", alignItems:"center"}}>
                <img src={icon} style={{marginRight:8, marginLeft:16}}/>
                <text>인디커넥츠 챗봇</text>
            </div>
            <div className={styles.chatbox} style={{backgroundColor:"white", width:162, height:"auto"}}>
                <text>게스트님, 반갑습니다!</text>
                <br/>
                <text>어떤 도움이 필요하신가요?</text>
            </div>
            <div style={{display:"flex"}}>
                <img src={card1} style={{marginTop:12, marginLeft:34, width:482, height:200}} />
            </div>
        </div>
        <div style={{backgroundColor:"white", height: 88, 
        marginTop:40, zIndex:3, borderTop:1, borderTopStyle:"solid",
        textAlign:"center", verticalAlign:"middle"}}>
            <input type="text" style={{justifyContent:"center", height:41, width:342}} />
        </div>
    </div>
);
}
  
  export default ChatBot;