import React, { useState } from 'react';
import styles from './CheckBox.module.css';

interface Props {
  id?: string;
  text?: string;
}

const CheckBox: React.FC<Props> = ({ id, text }) => {
  const [checked, setChecked] = useState(false); // 체크 여부 판단
  const checkHandled = () => {
    setChecked(!checked);
    console.log();
  };

  return (
    <label className={styles.check_container}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={e => checkHandled()}
      />
      <div className={checked ? styles.text_red : styles.text}>{text}</div>
    </label>
  );
};

export default CheckBox;
