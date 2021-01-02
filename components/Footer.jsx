import React from 'react'

import styles from './Hero.module.css';
import Section from './Section';

const Footer = ({children}) => {
  return (
    <footer className={styles.hero}>
      <svg
        className={styles.heroSVG}
        viewBox="0 0 1400 140"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.heroSVGFill}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-1 92.678l10-11.27c10-11.67 30-35.014 50-28.978 20 5.635 40 40.248 60 34.613 20-5.635 40-52.322 60-72.446C199-5.527 219 .108 239 2.925c20 2.818 40 2.818 60 8.855 20 5.635 40 17.306 60 14.489s40-20.526 60-14.49c20 5.636 40 34.614 60 43.468 20 8.453 40-2.817 60-17.306 20-14.49 40-32.198 60-20.527 20 11.672 40 52.323 60 63.995 20 11.269 40-6.038 60-11.672 20-6.037 40 0 60 0s40-6.037 60-11.672c20-5.635 40-11.672 60-26.161 20-14.49 40-37.43 60-26.161 20 11.671 40 57.956 60 63.994 20 5.634 40-28.979 60-28.979s40 34.613 60 40.65c20 5.635 40-17.709 60-23.343 20-5.635 40 5.635 60 20.124 20 14.489 40 32.198 60 32.198s40-17.71 60-23.344c20-5.635 40 0 50 2.817l10 2.818V145H-1V92.678z"
        />
      </svg>
      <article className={styles.heroContainer}>
        <Section noPaddingTop>
          {children}
        </Section>
      </article>
    </footer>
  );
}

export default Footer
