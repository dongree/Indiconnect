import React from 'react';
import Header from '../components/header/header';
import styles from './Detail.module.css';
import ArrowupTitle from '../components/arrowup_title/arrowup_title';
import CirclesX from '../components/circles_x/circles_x';

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
          <div style={{ margin: '10px 0' }}>
            <ArrowupTitle text="공연 안내 사항" />
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              rerum harum molestias, perspiciatis dolor amet recusandae
              consequuntur atque aperiam voluptates distinctio enim repellendus
              earum. Tempore voluptatum quia voluptates. Quas, dolorem.
            </p>
          </div>
          <div style={{ margin: '10px 0' }}>
            <ArrowupTitle text="공간 소개" />
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              rerum harum molestias, perspiciatis dolor amet recusandae
              consequuntur atque aperiam voluptates distinctio enim repellendus
              earum. Tempore voluptatum quia voluptates. Quas, dolorem.
            </p>
          </div>
          <div style={{ margin: '10px 0' }}>
            <ArrowupTitle text="취소 및 환불 규정" />
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              rerum harum molestias, perspiciatis dolor amet recusandae
              consequuntur atque aperiam voluptates distinctio enim repellendus
              earum. Tempore voluptatum quia voluptates. Quas, dolorem.
            </p>
          </div>
          <div style={{ margin: '10px 0' }}>
            <ArrowupTitle text="편의 서비스" />
            <CirclesX />
          </div>
          <div style={{ margin: '10px 0' }}>
            <ArrowupTitle text="공연 장비" />
            <CirclesX />
          </div>
        </div>
      </main>
      <div className={styles.applyBtn}>
        <p>신청하기</p>
      </div>
    </section>
  );
}
