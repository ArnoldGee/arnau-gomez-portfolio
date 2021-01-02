import styles from './Hero.module.css';
import Section from './Section';

const Hero = ({children}) => {
  return (
    <header className={styles.hero}>
      <article className={styles.heroContainer}>
        <Section noPaddingBottom>{children}</Section>
      </article>
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
          d="M0 29.563l10-4.813c11-4.812 32-14.781 53 0 20 14.782 41 54.314 62 61.876 21 7.563 42-17.188 63-12.375 21 4.813 42 39.532 62 49.501 21 9.969 42-4.813 63-19.938 21-14.781 42-29.563 63-34.375 21-5.157 41 0 62 4.812 21 4.813 42 9.969 63 17.188C522 99 543 108.97 563 99c21-9.969 42-39.531 63-49.5 21-9.97 42 0 63 19.938 21 19.594 41 49.5 62 49.5s42-29.906 63-47.094c21-17.532 42-22.344 63-12.375 20 9.969 41 34.719 62 31.969 21-2.406 42-31.97 63-49.5 21-17.189 41-22.001 62-17.189 21 4.813 42 19.938 63 32.313 21 12.376 42 22 63 17.188 20-4.813 41-24.75 62-17.188 21 7.22 42 41.938 63 49.501 21 7.219 42-12.375 62-34.72 21-22.343 42-47.094 53-59.469L1440 0H0v29.563z"
        />
      </svg>
    </header>
  );
};

export default Hero;
