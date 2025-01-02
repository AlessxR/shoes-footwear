import styles from './header.module.scss';

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
          <li>Home</li>
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
          <li>Catalog</li>
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