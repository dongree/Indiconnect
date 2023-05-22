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
          <img src="/img/band.png" alt="band" className={styles.img} />
        </div>
        <div className={styles.infos}>
          <div className={styles.info_box}>
            <TitleTemplate title="뮤지션 명">하다</TitleTemplate>
            <TitleTemplate title="대표자 연락처">010-0000-0000</TitleTemplate>
          </div>
          <TitleTemplate title="뮤지션 소개">
            장르에 구애 없이 이 시대를 살아가는 우리들을 이야기하는 밴드
          </TitleTemplate>
          <TitleTemplate title="공연 이력">
            <ul>
              <li>2023년 5월 27일 PETSOUNDS INDIE LIVE</li>
              <li>2023년 5월 19일 CLUB A.O.R CRAZY FRIDAY</li>
              <li>2023년 2월 15일 BRICK DAY with BAND</li>
              <li>2022년 5월 28일 MUNIV CONCERT ‘사각지대’</li>
            </ul>
          </TitleTemplate>
          <TitleTemplate title="대표 공연 영상">
            <a href="https://youtu.be/ARz9MSY90Oo">
              https://youtu.be/ARz9MSY90Oo
            </a>
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
