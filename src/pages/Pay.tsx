import React, { useState } from 'react';
import styles from './Pay.module.css';
import TitleTemplate from '../components/title_template/title_template';
import ArrowupContents from '../components/arrowup_contents/arrowup_contents';

export default function Pay() {
  const [order, setOrder] = useState(1);

  return (
    <section className={styles.container}>
      <div className={styles.show_type}>기획 공연</div>
      <p className={styles.show_name}>스페이스 한강</p>
      <div className={styles.sub_container}>
        <p className={styles.period}>05월 14일까지 모집</p>
        <p className={styles.people_num}>3/4팀 모집 완료</p>
      </div>
      <div className={styles.main_container}>
        <div className={styles.box}>
          <TitleTemplate title="공연 날짜">2023년 05월 16일</TitleTemplate>
          <TitleTemplate title="공연 시간">16 - 20시, 4시간</TitleTemplate>
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
          <p>신지훈</p>
          <p>010-0000-0000</p>
        </TitleTemplate>
      </div>
      <div className={styles.main_container2}>
        <ArrowupContents text="결제 정보">
          <div className={styles.box3}>
            <p>예약 금액</p>
            <p>100000원</p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            rerum harum molestias, perspiciatis dolor amet recusandae
            consequuntur atque aperiam voluptates distinctio enim repellendus
            earum. Tempore voluptatum quia voluptates. Quas, dolorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            rerum harum molestias, perspiciatis dolor amet recusandae
            consequuntur atque aperiam voluptates distinctio enim repellendus
            earum. Tempore voluptatum quia voluptates. Quas, dolorem.
          </p>
        </ArrowupContents>
      </div>
    </section>
  );
}
