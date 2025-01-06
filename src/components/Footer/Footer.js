import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__contentOne}>
        <div className={styles.footer__logo}>
          <div className={styles.logo__name}>WELLSHOES</div>
          <div className={styles.logo__descr}>
            Well Shoes offers top-quality footwear with a focus on comfort and style. From casual
            sneakers to formal shoes, our diverse collection meets high standards of design and
            durability. Discover the perfect pair with Well Shoes.
          </div>
        </div>
        <div className={styles.footer__info}>
          <div className={styles.footer__contacts}>
            <ul>
              <li>081236216362</li>
              <li>contact@wellshoes.gom</li>
            </ul>
          </div>
          <div className={styles.footer__addr}>
            <p>Well Shoes Headquarters 1234 Shoe Street, Fashion City, CA 56789, USA</p>
          </div>
          <div className={styles.footer__rules}>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer__nav}>
        <ul>
          <li>AboutUs</li>
          <li>AboutUs</li>
          <li>AboutUs</li>
          <li>AboutUs</li>
          <li>AboutUs</li>
          <li>AboutUs</li>
        </ul>
      </div>

      <div className={styles.footer__get_info}>
        <div className={styles.footer__info_main}>
          <div className={styles.info__header}>
            Get information and updates on wellshoes by entering your email.
          </div>
          <div className={styles.info__inp}>
            <input type="text" placeholder="ENTER YOUR EMAIL"></input>
            <a href="#">
              <img src="img/send.png" alt="send"></img>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
