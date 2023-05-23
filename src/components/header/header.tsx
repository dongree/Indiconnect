import React from 'react';
import styles from './header.module.css';

type HeaderProps = {
  text: string;
};

export default function Header({ text }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.backBtn}>
        <img src="/icon/arrow-left.png" alt="" />
      </div>
      <p className={styles.text}>{text}</p>
    </header>
  );
}
