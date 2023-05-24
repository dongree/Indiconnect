import React from 'react';
import Header from '../components/header/header';
import styles from './Detail.module.css';
import CirclesX from '../components/circles_x/circles_x';
import ArrowupContents from '../components/arrowup_contents/arrowup_contents';
import { Link } from 'react-router-dom';

export default function Detail() {
  return (
    <section className={styles.container}>
      <Header text="언플러그드 홍대점" />
      <img
        className={styles.main_img}
        src="/img/unpluged_hall.png"
        alt="unluged_hall"
      />
      <main className={styles.main}>
        <div className={styles.main_info}>
          <div className={styles.main_info_1}>
            <p className={styles.show_name}>UNPLUGGED ‘OPENSTAGE’</p>
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
            <div className={styles.box}>
              <div>
                <img src="/icon/calendar.png" alt="" />
              </div>
              <p>06월 22일 20시~</p>
            </div>
            <div className={styles.box}>
              <div>
                <img src="/icon/user_line.svg" alt="" />
              </div>
              <p>4팀</p>
            </div>
          </div>
        </div>
        <div className={styles.detail_info}>
          <ArrowupContents text="공연 안내 사항">
            <div className={styles.box2}>
              <p>1.제공혜택</p>
              <ul>
                <li>공연 포스터 제작</li>
                <li>공연 홍보</li>
                <li>예매 진행 및 관객 안내문 발송</li>
                <li>공연 종료 후 기록물 제공</li>
              </ul>
              <br />
              <p>2.진행 방식</p>
              <ul>
                <li>
                  1회 공연 당 셋체인지 기준 최대 3팀이 함께 진행합니다. 곡마다
                  인원이 변경되는 경우, 각각을 팀으로 인식합니다.
                </li>
                <li>
                  전체 러닝타임은 최대 100분, 팀별 30~35분이며 별도 협의가 없을
                  경우 공연 순서는 임의로 정해드립니다.
                </li>
                <li>
                  공연 시작 2시간 전부터 공연 역순으로 팀별 30분씩 리허설이
                  진행됩니다.
                </li>
              </ul>
              <br />
              <p>3.정산 방식</p>
              <ul>
                <li>
                  정산 방식 티켓 판매 비용 : 예매 20,000원 / 현장 예매 25,000원
                </li>
                <li>
                  티켓을 판매할 때 관객에게 응원하는 뮤지션 확인 후 카운팅하고
                  그 수치에 따라 분배합니다.
                </li>
                <li>공연 종료 후 3일 이내 정산표와 함께 송금해 드립니다.</li>
                <li>
                  뮤지션 수익금 10만 원 이하일 경우 : 공연 수익금 전액 해당
                  뮤지션에게 전달
                </li>
                <li>
                  뮤지션 수익금 10만 원 초과할 경우 : 10만 원 + 정산에서 10만 원
                  제외한 금액의 70%를 해당 뮤지션에게 전달 / 나머지 금액 공연장
                  귀속 기타 안내 사항 언플러그드 기획팀 내부에서 신청 내용 검토
                  후 공연 진행 확정된 분들에게만 개별 연락을 드려 일정을
                  조율합니다.
                </li>
              </ul>
              <br />
              <p>4. 기타 안내 사항</p>
              <ul>
                <li>
                  언플러그드 기획팀 내부에서 신청 내용 검토 후 공연 진행 확정된
                  분들에게만 개별 연락을 드려 일정을 조율합니다.
                </li>
              </ul>
            </div>
          </ArrowupContents>
          <ArrowupContents text="공간 소개">
            <p className={styles.small_font}>
              음악이 끊이지 않는 서교동 안쪽의 공간
            </p>
          </ArrowupContents>

          <ArrowupContents text="편의 서비스">
            <CirclesX
              data={[
                { img: '/img/wifi.png', text: 'WI-FI' },
                { img: '/img/toilet.png', text: '화장실' },
                { img: '/img/chair.png', text: '음향 감독' },
                { img: '/img/audio.png', text: '음향 장비' },
              ]}
            />
          </ArrowupContents>

          <ArrowupContents text="공연 장비">
            <CirclesX
              data={[
                { img: '/img/mic.png', text: '마이크' },
                { img: '/img/piano.png', text: '건반' },
                { img: '/img/amp.png', text: '기타 엠프' },
                { img: '/img/amp.png', text: '베이스 엠프' },
              ]}
            />
          </ArrowupContents>
          <ArrowupContents text="취소 환불 및 규정">
            <p className={styles.small_font}>
              공연 공지 업로드 후 뮤지션 개인 사정으로 인해 참여를 못하게 될
              경우 참가비는 환불 불가능합니다.
            </p>
          </ArrowupContents>
        </div>
      </main>
      <Link to="/apply" className={styles.applyBtn}>
        <p>신청하기</p>
      </Link>
    </section>
  );
}
