import React from 'react';
import Circle from '../circle/circle';
import styles from './circles_x.module.css';

type Props = {
  data: Item[];
};

type Item = {
  img: string;
  text: string;
};

export default function CirclesX({ data }: Props) {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <Circle {...item} key={index} />
      ))}
    </div>
  );
}
