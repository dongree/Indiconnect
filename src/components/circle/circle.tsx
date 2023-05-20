import React from 'react';
import styles from './circle.module.css';

type CircleProps = {
  text: string;
};

export default function Circle({ text }: CircleProps) {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <p className={styles.title}>{text}</p>
    </div>
  );
}
