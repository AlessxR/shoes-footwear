import styles from './catalog.module.scss';
import Footer from '../../components/Footer/Footer';

function Catalog() {
  // Массив данных о товарах
  const products = [
    { imgSrc: 'img/product1.jpg', title: 'WELL SHOES SNEAKERS WHITE - 001', price: '$100' },
    { imgSrc: 'img/product2.jpg', title: 'WELL SHOES SNEAKERS BLACK - 002', price: '$120' },
    { imgSrc: 'img/product3.jpg', title: 'WELL SHOES SNEAKERS RED - 003', price: '$110' },
    { imgSrc: 'img/product4.jpg', title: 'WELL SHOES SNEAKERS BLUE - 004', price: '$130' },
    { imgSrc: 'img/product5.jpg', title: 'WELL SHOES SNEAKERS GREEN - 005', price: '$140' },
    { imgSrc: 'img/product6.jpg', title: 'WELL SHOES SNEAKERS YELLOW - 006', price: '$150' },
  ];

  return (
    <div>
      <div className={styles.catalog__block}>
        <div className={styles.catalog__illistration}></div>
        <div className={styles.catalog__block_login}>
          <div className={styles.catalog__login__content}>
            <div className={styles.login__header}>
              LOGIN
              <br />
              TO PURCHASE
            </div>
            <div className={styles.login__subheader}>
              Get to redeem voucher from discount by WellShoes and get other benefits.
            </div>
            <div className={styles.login__btn}>
              <button>LOGIN</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.catalog__card}>
        <div className={styles.card__header}>
          <div className={styles.header}>EXPLORE</div>
          <div className={styles.sorting}>
            <div className={styles.sorting__choice}>
              <span>SORT BY</span> : RECOMMENDATION
            </div>
            <button className={styles.sort__btn}>
              <img src="img/sort-arrow.png" alt="sort-arrow" />
            </button>
          </div>
        </div>

        <div className={styles.catalog__cards}>
          {/* Перебор массива с товарами и рендеринг карточек */}
          {products.map((product, index) => (
            <div key={index} className={styles.catalog__block}>
              <div className={styles.block__img} style={{ backgroundImage: `url(${product.imgSrc})` }}></div>
              <div className={styles.block__header}>{product.title}</div>
              <div className={styles.block__price}>{product.price}</div>
              <div className={styles.block__buy}>
                <button className={styles.block_btn}>PURCHASE</button>
                <button>
                  <img src="img/purchace.png" alt="buy card" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Catalog;
