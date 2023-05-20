import React from 'react';
import Circle from '../circle/circle';
import styles from './circles_x.module.css';

export default function CirclesX() {
  const data = ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'];

  return (
    <div className={styles.container}>
      {data.map(text => (
        <Circle text={text} />
      ))}
    </div>
  );
}
