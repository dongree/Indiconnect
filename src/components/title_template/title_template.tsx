import React from 'react';
import styles from './title_template.module.css';

type Props = {
  title: string;
  children: any;
};

export default function TitleTemplate({ title, children }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{children}</p>
    </div>
  );
}
