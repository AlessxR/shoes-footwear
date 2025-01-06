import styles from './featureShoe.module.scss';

// Добавление описания к тегам
const features = [
  {
    id: 'high',
    leftContent: null,
    rightHeader: 'BREATHABILITY AND VENTILATION',
    rightDescription:
      'Sneakers often incorporate breathable materials like mesh or perforated fabrics in the upper part of the shoe to enhance airflow. This design helps to regulate temperature, keeping feet cool and dry by allowing moisture to escape and air to circulate freely.',
  },
  {
    id: 'low',
    leftHeader: 'ANTI-SLIP TECHNOLOGY',
    leftDescription:
      'Many sneakers are equipped with specialized tread patterns or rubber compounds in the outsole that offer superior grip and traction. This technology is designed to prevent slipping on various surfaces, providing stability and safety during activities such as running, walking, or sports.',
    rightContent: null,
  },
];

function FeatureShoe() {
  return (
    <section className={styles.shoe_features}>
      {features.map(({ id, leftContent, leftHeader, leftDescription, rightHeader, rightDescription, rightContent }) => (
        <div key={id} className={styles[`shoe_${id}`]}>
          <div className={styles[`${id}__left`]}>
            {leftHeader && <p className={styles.left__header}>{leftHeader}</p>}
            {leftDescription && <p className={styles.left__descr}>{leftDescription}</p>}
            {leftContent}
          </div>
          <div className={styles[`${id}__right`]}>
            {rightHeader && <p className={styles.right__header}>{rightHeader}</p>}
            {rightDescription && <p className={styles.right__descr}>{rightDescription}</p>}
            {rightContent}
          </div>
        </div>
      ))}
    </section>
  );
}

export default FeatureShoe;
