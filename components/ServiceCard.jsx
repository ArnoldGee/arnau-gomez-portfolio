import React from 'react';

import styles from './ServiceCard.module.css';
import Button from './Button.jsx';

const ServiceCard = ({title, price, children}) => {
  return (
    <article className={styles.serviceCard}>
      <div className={styles.servicePicture} />
      <section className={styles.serviceContent}>
        <h4 className="inverted">{title}</h4>
        <p className="text_small">{children}</p>
        <div>
          <Button>{price}</Button>
          <Button light >Contact</Button>
        </div>
      </section>
    </article>
  );
};

export default ServiceCard;
