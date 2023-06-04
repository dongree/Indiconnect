import React from 'react';
import styles from './Success.module.css';
import { Link } from 'react-router-dom';

type Props = {
  text: string;
};

export default function Success({ text }: Props) {
  return (
    <section className={styles.container}>
      <img src="/icon/check.png" alt="check" />
      <p className={styles.text}>{text}</p>
      <Link to="/" className={styles.btn}>
        <p>Home</p>
      </Link>
    </section>
  );
}
