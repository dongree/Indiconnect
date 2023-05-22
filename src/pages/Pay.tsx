import React, { useState } from 'react';
import styles from './Pay.module.css';
import TitleTemplate from '../components/title_template/title_template';
import ArrowupContents from '../components/arrowup_contents/arrowup_contents';

export default function Pay() {
  const [order, setOrder] = useState(1);

  return (
    <section className={styles.container}>
      <div className={styles.show_type}>기획 공연</div>
      <p className={styles.show_name}>UNPLUGGED ‘OPENSTAGE’</p>
      <div className={styles.sub_container}>
        <p className={styles.period}>06월 22일까지 모집</p>
        <p className={styles.people_num}>3/4팀 모집 완료</p>
      </div>
      <div className={styles.main_container}>
        <div className={styles.box}>
          <TitleTemplate title="공연 날짜">2023년 06월 22일</TitleTemplate>
          <TitleTemplate title="공연 시간">20-21시 40분</TitleTemplate>
        </div>
        <TitleTemplate title="희망 공연 순서">
          <div className={styles.box2}>
            <div
              className={styles.circle}
              onClick={() => {
                if (order > 1) {
                  setOrder(order - 1);
                }
              }}
            >
              -
            </div>
            <div className={styles.order}>{`${order}번`}</div>
            <div className={styles.circle} onClick={() => setOrder(order + 1)}>
              +
            </div>
          </div>
        </TitleTemplate>
        <TitleTemplate title="요청 사항">
          <input
            className={styles.input}
            type="text"
            placeholder="따로 남기고 싶은 말을 적어주세요."
          />
        </TitleTemplate>

        <TitleTemplate title="예약자 정보">
          <p>OOO</p>
          <p>010-0000-0000</p>
        </TitleTemplate>
      </div>
      <div className={styles.main_container2}>
        <ArrowupContents text="결제 정보">
          <div className={styles.box3}>
            <p>참가비</p>
            <p>100,000원</p>
          </div>
        </ArrowupContents>
        <ArrowupContents text="결제 수단">
          <div className={styles.box4}>
            <div className={styles.payType}>카드결제</div>
            <div className={styles.payType}>계좌이체</div>
            <div className={styles.payType}>네이버페이</div>
            <div className={styles.payType}>카카오페이</div>
          </div>
        </ArrowupContents>
        <ArrowupContents text="취소 및 환불 규정">
          <p>
            공연 공지 업로드 후 뮤지션 개인 사정으로 인해 참여를 못하게 될 경우
            참가비는 환불 불가능합니다.
          </p>
        </ArrowupContents>
      </div>
    </section>
  );
}
