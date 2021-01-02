import React from 'react';

import styles from './Button.module.css';

const Button = ({light, href, children}) => {
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className={light ? styles.buttonLight : styles.button}>
          <strong>{children}</strong>
        </button>
      </a>
    );
  else
    return (
      <button className={light ? styles.buttonLight : styles.button}>
        <strong>{children}</strong>
      </button>
    );
};

export default Button;
