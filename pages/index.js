import Head from 'next/head';
import Hero from '../components/Hero';
import Section from '../components/Section';
import WigglyEffect from '../components/WigglyEffect';
import MiddleHero from '../components/MiddleHero'
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import SkillsSection from '../components/SkillsSection';

export default function Home() {
  return (
    <main className={styles.home}>
      <Head>
        <script
          src="https://kit.fontawesome.com/a24919ac07.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Hero>
        <h1>Hi. I'm Arnau Gómez,</h1>
        <h1>
          a <WigglyEffect />
        </h1>
        <h1>web developer.</h1>
      </Hero>
      <Section>
        <hgroup className="inverted text-center">
          <h2>You only have one website.</h2>
          <h2>
            Make it the <span className="text-accent">best</span>.
          </h2>
        </hgroup>
      </Section>
      <MiddleHero>
        <h2 className="text-center">
          I have the skills that your most demanding projects need.
        </h2>
        <br />
        <SkillsSection />
      </MiddleHero>
      <Section>
        <h2 className="inverted text-center">You name it. I make it.</h2>
      </Section>
      <Footer>
        <h2 className="text-center">Meet me where the future is.</h2>
      </Footer>
    </main>
  );
}
