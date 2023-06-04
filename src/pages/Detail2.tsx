import { Link } from 'react-router-dom';
import ArrowupContents from '../components/arrowup_contents/arrowup_contents';
import TitleTemplate from '../components/title_template/title_template';
import styles from './Detail2.module.css';

export default function Detail2() {
  return (
    <section
      style={{
        marginBottom: '80px',
      }}
    >
      <div className={styles.container2}>
        <div className={styles.backBtn}>
          <img src="/icon/arrow-left-white.png" alt="backBtn" />
        </div>
        <div className={styles.container3}>
          <div className={styles.img}>
            <img src="/img/performance.png" alt="프랭클리 데이" />
          </div>
          <div className={styles.infos}>
            <div className={styles.redBtn}>얼터너티브 록</div>
            <div className={styles.title}>
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
      <div className={styles.container4}>
        <div className={styles.box}>
          선호하는 홍대지역의 얼터너티브 록 장르의 <br /> 소규모 공연장입니다.
        </div>
        <TitleTemplate title="공연 일시">
          2023. 06. 03 (토) 오후 5시
        </TitleTemplate>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TitleTemplate title="공연장">
            서울특별시 마포구 와우산로 29길 15
          </TitleTemplate>
          <div className={styles.btn}>길찾기</div>
        </div>
      </div>
      <div className={styles.container5}>
        <ArrowupContents text="가격 정보">
          <p>예약 구매 35,000원</p>
          <p>현장 구매 40,000원</p>
        </ArrowupContents>
        <ArrowupContents text="공연 소개">
          <p>
            밴드 집중 탐구를 위해 2020년 기획된 네스트 나다의 데이시리즈! 이번
            주인공은 솔직한 속마음을 담은 4인조 밴드 ‘프랭클리’입니다. 다양한
            매력을 지닌 프랭클리의 모든 것을 볼 수 있는 특별한 공연이 펼쳐질
            예정입니다. 이번 공연을 축하하기 위해 스페셜 게스트 나무소년이
            오프닝 무대를 함께합니다. 프랭클리의 속마음을 들여다볼 수 있는 기회!
          </p>
        </ArrowupContents>
      </div>
      <Link to="/pay2" className={styles.applyBtn}>
        <p>예매하기</p>
      </Link>
    </section>
  );
}
