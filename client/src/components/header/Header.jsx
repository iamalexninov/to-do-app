import { Link } from "react-router-dom";
import styles from './style.module.css'

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">All</Link>
      <Link to="/pending">Pending</Link>
      <Link to="/overdue">Overdue</Link>
    </nav>
  );
};
