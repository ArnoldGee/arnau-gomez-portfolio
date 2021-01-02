import styles from './Section.module.css';

const Section = ({children, noPaddingTop, noPaddingBottom}) => {
  return (
    <section
    style={{paddingBottom: noPaddingBottom && '0', paddingTop: noPaddingTop && '0'}}
      className={styles.section}
    >
      {children}
    </section>
  );
};

export default Section;
