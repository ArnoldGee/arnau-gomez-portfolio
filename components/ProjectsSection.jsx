import React, {useState} from 'react';

import styles from './ProjectsSection.module.css';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

const projectsInfo = [
  {
    title: 'Maximal Style',
    description:
      'A full-fledged clothes shop with user authentication and online payments.',
    builtWith: 'React, Redux, React-Router, SASS and Firebase',
    website: 'https://maximal-style.herokuapp.com/',
    gitHub: 'https://github.com/ArnoldGee/minimal-clothes-1',
    picture: 'https://i.imgur.com/WZRqOia.jpg',
  },
  {
    title: 'Gretel Research Group (UAB)',
    description:
      "2 years of experience as web developer and researcher in digital literature. Increased 10x the visibility of the researchers' papers.",
    builtWith: 'WordPress',
    website: 'https://www.gretel.cat/',
    gitHub: null,
    picture: 'https://i.imgur.com/uZ8aLel.jpg',
  },
  {
    title: 'DiverTeach',
    description:
      'A team project with an illustrator and a web designer. DiverTeach provides all the tools that creative teachers need in one place. Currently working on version 2, which will be installable on mobile devices.',
    builtWith: 'React, Redux, TypeScript',
    website: 'https://diverteach.netlify.app/',
    gitHub: 'https://github.com/ArnoldGee/diverteach',
    picture: 'https://i.imgur.com/Q71N5Sa.jpg',
  },
  {
    title: 'DnDB (contributor)',
    description: 'A pioneering noSQL database for Deno servers.',
    builtWith: 'Vue.js, Tailwind, Deno',
    website: 'https://dndb.crawford.ml/',
    gitHub: 'https://github.com/denyncrawford/dndb-web',
    picture: 'https://i.imgur.com/FeGyaQH.png',
  },
  {
    title: 'MatMat',
    description:
      "A mobile-friendly app used by hundreds of students to learn maths while exploring a magical universe. It allows students to self-assess themselves and teachers to collect data about their results.",
    builtWith: 'React, Redux, Framer Motion',
    website: 'https://mat-mat.netlify.app/',
    gitHub: 'https://github.com/ArnoldGee/mat-mat',
    picture: 'https://i.imgur.com/430SpnG.jpg',
  },
];

const ProjectsSection = () => {
  const [directionRight, setDirectionRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleButtonClick = (directionRight) => {
    if(directionRight){
      setDirectionRight(true);
      setCurrentIndex((currentIndex + 1) % projectsInfo.length)
    } else {
      setDirectionRight(false)
      setCurrentIndex(currentIndex === 0 ? projectsInfo.length -1 : currentIndex - 1);
    }
  }
  return (
    <section className={styles.projectsSection}>
      <AnimatePresence exitBeforeEnter>
        {projectsInfo.map((item, index) => {
          if (index === currentIndex) {
            return (
              <motion.div
                key={index}
                initial={{opacity: 0, x: directionRight ? -800 : 800}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: directionRight ? 1000 : -1000}}
                className={styles.projectsCard}
              >
                <div
                  style={{
                    background: `url(${item.picture}) center / cover, var(--dominant)`,
                  }}
                  className={styles.projectPicture}
                />
                <article className={styles.projectDescription}>
                  <h3 style={{marginTop: 0}} className="inverted">
                    {item.title}
                  </h3>
                  <p className="inverted">{item.description}</p>
                  <p>
                    <Button href={item.website}>Try it out</Button>
                    <Button href={item.gitHub} light>
                      GitHub
                    </Button>
                  </p>
                  <p className="text_small">Built with {item.builtWith}</p>
                </article>
              </motion.div>
            );
          }
        })}
      </AnimatePresence>
      <button
        onClick={() => handleButtonClick(false)}
        className={styles.chevronLeft}
      >
        <svg className={styles.chevron} viewBox="0 0 320 512">
          <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
        </svg>
      </button>
      <button
        onClick={() => handleButtonClick(true)}
        className={styles.chevronRight}
      >
        <svg className={styles.chevron} viewBox="0 0 320 512">
          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
        </svg>
      </button>
    </section>
  );
};

export default ProjectsSection;

