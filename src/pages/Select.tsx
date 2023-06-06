import { Link } from 'react-router-dom';
import styles from './Select.module.css';

export default function Select() {
  return (
    <div className={styles.container}>
      <Link to="/home">
        <div className={styles.circle}>인디 뮤지션</div>
      </Link>
      <Link to="/home2">
        <div className={styles.circle}>점주</div>
      </Link>
      <Link to="/geneuser">
        <div className={styles.circle}>일반 유저</div>
      </Link>
    </div>
  );
}
