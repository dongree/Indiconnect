import React from 'react';
import ArrowupTitle from '../arrowup_title/arrowup_title';
import styles from './arrowup_contents.module.css';

type Props = {
  children: any;
  text: string;
};

export default function ArrowupContents({ children, text }: Props) {
  return (
    <div style={{ margin: '20px 0' }}>
      <ArrowupTitle text={text} />
      <div className={styles.children}>{children}</div>
    </div>
  );
}
