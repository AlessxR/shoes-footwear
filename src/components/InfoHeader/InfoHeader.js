// InfoHeader.js
import styles from './infoHeader.module.scss'; // Подключаем стили

function InfoHeader({ title }) {  // Заголовок теперь передается через пропс
  return (
    <div className={styles.info__main}>
      <div className={styles.info_unreal}></div>
      <div className={styles.info_questions}>
        <h2>{title}</h2>
      </div>
      <div className={styles.info_unreal}></div>
    </div>
  );
}

export default InfoHeader;
