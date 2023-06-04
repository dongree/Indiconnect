import React from 'react';
import location from '../asset/images/location.png';
import menu from '../asset/images/menu1.png';
import search from '../asset/images/search1.png';
import logo from '../asset/images/indiconnect_icon.png';
import styles from './HomeHeader.module.css';
import { Link } from 'react-router-dom';
interface Props {
  className?: string;
  white?: boolean;
}

const HomeHeader: React.FC<Props> = ({}) => {
  return (
    <div className={styles.header}>
      <img src={menu} alt="menu" />
      <Link to="/home2">
        <img src={logo} alt="logo" />
      </Link>

      <img src={search} alt="search" />
    </div>
  );
};

export default HomeHeader;
