import { Link } from 'react-router-dom';
import ArrowupContents from '../components/arrowup_contents/arrowup_contents';
import Header from '../components/header/header';
import styles from './Pay2.module.css';

export default function Pay2() {
  return (
    <section className={styles.container}>
      <Header text="결제 페이지" />
      <div className={styles.container2}>
        <p className={styles.title1}>공연 정보</p>
        <div style={{ display: 'flex' }}>
          <div className={styles.img}>
            <img src="/img/performance.png" alt="프랭클리 데이" />
          </div>
          <div className={styles.infos}>
            <div className={styles.redBtn}>얼터너티브 록</div>
            <div className={styles.title2}>
              <p>네스트 나다 데이 시리즈</p>
              <p>- 프랭클리 데이</p>
            </div>
            <div className={styles.sub}>
              <p>티켓 오픈 | 2023.05.19 (금) 오전 10시</p>
              <p>관람 시간 | 200분</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        <ArrowupContents text="티켓 정보">
          <p>입장 순서 | 15번</p>
        </ArrowupContents>
        <ArrowupContents text="가격 정보">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>티켓 금액 </p>
            <p>35,000원</p>
          </div>
        </ArrowupContents>
        <ArrowupContents text="결제 수단">
          <div className={styles.box}>
            <div className={styles.payType}>카드결제</div>
            <div className={styles.payType}>계좌이체</div>
            <div className={styles.payType}>네이버페이</div>
            <div className={styles.payType}>카카오페이</div>
          </div>
        </ArrowupContents>
        <ArrowupContents text="예매 공지사항">
          <p>
            본 공연은 스탠딩과 비지정 좌석을 함께 운영하며, 예매순으로 입장
            순서가 배정됩니다. 입장 대기는 4시 20분부터이며, 입장 시 ‘실물
            신분증’ 확인 부탁드립니다. 미확인 시 입장 불가합니다. 현장 예매는
            카드 사용이 불가하며, 기존 예매자의 입장이 모두 끝난 후부터 입장이
            가능합니다.
          </p>
        </ArrowupContents>
      </div>
      <Link to="/success2" className={styles.payBtn}>
        <p>결제하기</p>
      </Link>
    </section>
  );
}
