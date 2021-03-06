import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import Section from '../components/Section';
import WigglyEffect from '../components/WigglyEffect';
import MiddleHero from '../components/MiddleHero';
import Footer from '../components/Footer';
import SkillsSection from '../components/SkillsSection';
import FlexboxSection from '../components/FlexboxSection';
import ServiceCard from '../components/ServiceCard'
import ProjectsSection from '../components/ProjectsSection';


export default function Home() {
  return (
    <main className={styles.home}>
      <Head>
        <title>Arnau Gómez | Web Developer</title>
        <meta
          name="Arnau Gómez | Web Developer"
          content="I'm Arnau Gómez, a full stack Web and Mobile Developer specialized in web design and JavaScript / TypeScript front-end libraries like React and Vue."
        />
      </Head>
      <Hero>
        <h1>Hi. I'm Arnau Gómez,</h1>
        <h1>
          a <WigglyEffect />
        </h1>
        <h1>web developer.</h1>
      </Hero>
      <Section noPaddingBottom>
        <hgroup className="inverted text-center">
          <h2>You only have one website.</h2>
          <h2>
            Make it the <span className="text-accent">best</span>.
          </h2>
        </hgroup>
      </Section>
      <ProjectsSection />
      <MiddleHero>
        <h2 className="text-center">
          I have the skills that your most demanding projects need.
        </h2>
        <br />
        <SkillsSection />
      </MiddleHero>
      <Section noPaddingBottom>
        <h2 className="inverted text-center">You name it. I make it.</h2>
      </Section>
      <FlexboxSection>
        <ServiceCard
          href="mailto:agomez1f@gmail.com"
          title="Full stack projects"
          price="3000$"
        >
          <ul className="text_small">
            <li>Complex MERN stack projects</li>
            <li>
              Backend technologies: Node, Deno, MongoDB, SQL, Firebase. Also
              with Java and Python
            </li>
            <li>
              3 years of experience in growth marketing, influencer marketing
              and SEO
            </li>
            <li>
              3 years of experience in digital literature research, skilled in
              teamwork, project management and Agile /Kanban methodologies
            </li>
          </ul>
        </ServiceCard>
        <ServiceCard
          href="mailto:agomez1f@gmail.com"
          title="Frontend & design projects"
          price="1000$"
        >
          <ul className="text_small">
            <li>Stunning landing pages & portfolios</li>
            <li>Complex projects w/ React / Vue / Next/ Gatsby</li>
            <li>UX / UI/ Graphic design</li>
            <li>
              Transform your website into a mobile app / a desktop app with PWA/
              React Native technology.
            </li>
            <li>Fix any bug and improve your app’s performance</li>
          </ul>
        </ServiceCard>
        <ServiceCard
          href="mailto:agomez1f@gmail.com"
          title="Startups"
          price="Free"
        >
          <p className="text_small">
            If you are working on a startup idea that’s going to change the
            world, hire me for a competitive price or let me join as a
            co-founder for free.
          </p>
        </ServiceCard>
      </FlexboxSection>
      <Footer>
        <h2 className="text-center">Meet me where the future is.</h2>
        <br />
        <p className="text-center">
          <a
            href="https://www.linkedin.com/in/arnau-g%C3%B3mez-903b49187/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              className={styles.icon}
              viewBox="0 0 448 512"
            >
              <path
                className={styles.iconShape}
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>
          </a>
          <a
            href="https://dev.to/arnoldgee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              className={styles.icon}
              viewBox="0 0 448 512"
            >
              <path
                className={styles.iconShape}
                d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/ArnoldGee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              className={styles.icon}
              viewBox="0 0 496 512"
            >
              <path
                className={styles.iconShape}
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
        </p>
      </Footer>
    </main>
  );
}
