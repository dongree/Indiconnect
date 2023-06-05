import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import Map from "../components/Map";
import Footer from "../components/Footer";
import styles from "./Home.module.css";
import ChatBot from "../components/ChatBot";
import UserMap from "../components/userMap";
import UserMain from "../components/userMain";
export default function Home() {
  const [visible, setVisible] = useState(false);
  const ChangeStatus = (visible: boolean) => {
    setVisible(visible);
  };
  return (
    <div className={styles.container}>
      <HomeHeader className={"header"} />
      <Map className="usermap" onChange={ChangeStatus} />
      <Footer />
      {visible ? <ChatBot onChange={ChangeStatus} /> : null}
    </div>
  );
}
