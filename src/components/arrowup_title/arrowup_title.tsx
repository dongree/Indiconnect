import React from 'react';
import styles from './arrowup_title.module.css';

type TitleProps = {
  text: string;
};

export default function ArrowupTitle({ text }: TitleProps) {
  return (
    <div className={styles.container}>
      <div>
        <img src="/icon/arrow-up-right.png" alt="arrow-up-right" />
      </div>
      <p>{text}</p>
    </div>
  );
}
