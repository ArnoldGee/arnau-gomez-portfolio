import Head from 'next/head';
import Hero from '../components/Hero';
import Section from '../components/Section';
import WigglyEffect from '../components/WigglyEffect';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Hero>
        <hgroup>
          <h1>Hi, I'm Arnau Gómez.</h1>
          <h1>
            A <WigglyEffect />
          </h1>
          <h1>web developer</h1>
        </hgroup>
      </Hero>
      <Section>
        <h2>
          You only have one website.
          <br /> Make it <span className="accent">the best</span>.
        </h2>
      </Section>
    </div>
  );
}
