import React from 'react';
import styles from './circle.module.css';

type Item = {
  img: string;
  text: string;
};

export default function Circle({ img, text }: Item) {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <img src={img} alt={text} />
      </div>
      <p className={styles.title}>{text}</p>
    </div>
  );
}
