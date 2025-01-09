import styles from './header.module.scss';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles.header__nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>About</li>
          <li>
            <hr />
          </li>
          <li className="nav-logo">
            <img src="img/logo.png" alt="logo" />
          </li>
          <li>
            <hr />
          </li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li>Contact</li>
        </ul>
      </div>

      <div className={styles.header__search}>
        {/* <hr /> */}
        <img src="img/btn-search-header1.svg" alt="search" />
      </div>
    </header>
  );
}

export default Header;