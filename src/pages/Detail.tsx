import React from 'react';
import Header from '../components/header/header';
import styles from './Detail.module.css';
import CirclesX from '../components/circles_x/circles_x';
import ArrowupContents from '../components/arrowup_contents/arrowup_contents';
import { Link } from 'react-router-dom';

export default function Detail() {
  return (
    <section className={styles.container}>
      <Header text="스페이스 한강 " />
      <div className={styles.main_img}>
        <img src="/img/music_hall.png" alt="" />
      </div>
      <main className={styles.main}>
        <div className={styles.main_info}>
          <div className={styles.main_info_1}>
            <p className={styles.show_name}>스페이스 한강</p>
            <div className={styles.show_type}>기획 공연</div>
          </div>
          <div className={styles.main_info_2}>
            <p className={styles.period}>05월 14일까지 모집</p>
            <p className={styles.people_num}>3/4팀 모집 완료</p>
          </div>
          <div className={styles.main_info_3}>
            <p>참가비</p>
            <p className={styles.price}>100000</p>
            <p>원</p>
          </div>
          <div className={styles.main_info_4}>
            <div style={{ display: 'flex' }}>
              <div>
                <img src="/icon/calendar.png" alt="" />
              </div>
              <p>05월 16일~20시</p>
            </div>
            <div style={{ display: 'flex' }}>
              <div>
                <img src="/icon/user_line.svg" alt="" />
              </div>
              <p>4팀</p>
            </div>
          </div>
        </div>
        <div className={styles.detail_info}>
          <ArrowupContents text="공연 안내 사항">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              rerum harum molestias, perspiciatis dolor amet recusandae
              consequuntur atque aperiam voluptates distinctio enim repellendus
              earum. Tempore voluptatum quia voluptates. Quas, dolorem.
            </p>
          </ArrowupContents>
          <ArrowupContents text="공간 소개">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              rerum harum molestias, perspiciatis dolor amet recusandae
              consequuntur atque aperiam voluptates distinctio enim repellendus
              earum. Tempore voluptatum quia voluptates. Quas, dolorem.
            </p>
          </ArrowupContents>
          <ArrowupContents text="취소 환불 및 규정">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              rerum harum molestias, perspiciatis dolor amet recusandae
              consequuntur atque aperiam voluptates distinctio enim repellendus
              earum. Tempore voluptatum quia voluptates. Quas, dolorem.
            </p>
          </ArrowupContents>

          <ArrowupContents text="편의 서비스">
            <CirclesX />
          </ArrowupContents>

          <ArrowupContents text="공연 장비">
            <CirclesX />
          </ArrowupContents>
        </div>
      </main>
      <Link to="/apply" className={styles.applyBtn}>
        <p>신청하기</p>
      </Link>
    </section>
  );
}
