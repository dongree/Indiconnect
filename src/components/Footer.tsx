import React from 'react';
import home from '../asset/images/home.png';
import heart from '../asset/images/heart.png';
import styles from './Footer.module.css';
interface Props {
  className?: string;
  white?: boolean;
}

const Footer: React.FC<Props> = ({}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.icon_container} style={{ marginLeft: 43 }}>
        <img src={home} />
        <div>HOME</div>
      </div>
      <div className={styles.icon_container}>
        <img src={heart} />
        <div>HEART</div>
      </div>
      <div className={styles.icon_container} style={{ marginRight: 43 }}>
        <img src={home} />
        <div>MY</div>
      </div>
    </div>
  );
};

export default Footer;
