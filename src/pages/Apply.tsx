import React from 'react';
import styles from './Apply.module.css';
import Header from '../components/header/header';
import TitleTemplate from '../components/title_template/title_template';
import { Link } from 'react-router-dom';

export default function Apply() {
  return (
    <section className={styles.container}>
      <Header text="내 정보 확인" />
      <div className={styles.sub_container}>
        <div className={styles.box}>
          <p className={styles.text}>신청할 뮤지션 정보를 확인해주세요.</p>
          <img
            src="/img/music_hall.png"
            alt="music_hall"
            className={styles.img}
          />
        </div>
        <div className={styles.infos}>
          <div className={styles.info_box}>
            <TitleTemplate title="뮤지션 명">Lorem</TitleTemplate>
            <TitleTemplate title="대표자 연락처">010-0000-0000</TitleTemplate>
          </div>
          <TitleTemplate title="뮤지션 소개">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            facere autem animi.
          </TitleTemplate>
          <TitleTemplate title="공연 이력">
            <li>Lorem ipsum dolor sit</li>
            <li>Lorem ipsum dolor sit</li>
            <li>Lorem ipsum dolor sit</li>
            <li>Lorem ipsum dolor sit</li>
          </TitleTemplate>
          <TitleTemplate title="대표 공연 영상">
            <a href="https://www.youtube.com">https://www.youtube.com</a>
          </TitleTemplate>
          <TitleTemplate title="환불 계좌 번호">
            신한은행 000000000
          </TitleTemplate>
        </div>
        <div className={styles.fixBtn}>뮤지션 정보 수정</div>

        <Link to="/pay" className={styles.payBtn}>
          <p>결제하기</p>
        </Link>
      </div>
    </section>
  );
}
