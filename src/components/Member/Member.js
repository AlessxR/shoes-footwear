import styles from './member.module.scss';

function Member() {
  return (
    <section className={styles.member}>
      <div className={styles.member__main}>
        <div className={styles.member__content}>
          <div className={styles.member__header}>immediately join our other members</div>
          <div className={styles.member__subheader}>
            Become a Well Shoes member for exclusive discounts, early access to new styles, and
            personalized recommendations. Sign up today to step up your shoe game!
          </div>
          <button className={styles.member__btn}>GET A MEMBER</button>
        </div>
      </div>
    </section>
  );
}

export default Member;
