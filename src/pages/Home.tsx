import React, { useState } from 'react';
import HomeHeader from '../components/HomeHeader';
import Map from '../components/Map';
import Footer from '../components/Footer';
import styles from './Home.module.css';
import ChatBot from '../components/ChatBot';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const ChangeStatus = (visible: boolean) => {
    setVisible(visible);
  };
  return (
    <div className={styles.container}>
      <HomeHeader className={'header'} />
      <Map className="map" onChange={ChangeStatus} />
      <Footer />
      {visible ? <ChatBot onChange={ChangeStatus} /> : null}
    </div>
  );
}
