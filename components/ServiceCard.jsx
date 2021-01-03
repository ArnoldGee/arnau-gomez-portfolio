import React from 'react';

import styles from './ServiceCard.module.css';
import Button from './Button.jsx';

const ServiceCard = ({href, title, price, children}) => {
  return (
    <article className={styles.serviceCard}>
      <div className={styles.servicePicture} />
      <section className={styles.serviceContent}>
        <h4 className="inverted">{title}</h4>
        <div className="text_small">{children}</div>
        <div>
          <Button href={href}>{price}</Button>
          <Button
            href="https://www.linkedin.com/in/arnau-g%C3%B3mez-903b49187/"
            light
          >
            Contact
          </Button>
        </div>
      </section>
    </article>
  );
};

export default ServiceCard;
