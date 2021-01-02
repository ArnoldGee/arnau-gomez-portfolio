import React from 'react';

import styles from './FlexboxSection.module.css';

const FlexboxSection = ({children}) => {
  return (
    <div className={styles.sectionWrapper}>
      <section className={styles.flexboxSection}>{children}</section>
    </div>
  );
};

export default FlexboxSection;
