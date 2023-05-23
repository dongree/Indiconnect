import React from 'react';
import styles from './Success.module.css';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <section className={styles.container}>
      <img src="/icon/check.png" alt="check" />
      <p className={styles.text}>참가 신청 완료!</p>
      <Link to="/" className={styles.btn}>
        <p>Home</p>
      </Link>
    </section>
  );
}
