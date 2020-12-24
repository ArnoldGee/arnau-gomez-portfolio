import styles from './WigglyEffect.module.css'
import {useState, useEffect} from 'react';

const descriptions = [
  'creative',
  'full stack',
  'React',
  'Vue',
  'Next.js',
  'designer and',
  'digital researcher and',
  'hard-working',
  'Typescript',
];

const WigglyEffect = () => {
  const [text, setText] = useState(0);
  const [wigglyState, setWigglyState] = useState('blurredState');

  useEffect(() => {
    const timer = setTimeout(() => {
      if(wigglyState == "normalState"){
        setWigglyState("blurredState")
      } else if (wigglyState == "blurredState"){
        setWigglyState("normalState")
        if (text == descriptions.length - 1) {
          setText(0);
        } else {
          setText(text + 1);
        }
      }
    }, 1200);
    // clearing interval
    return () => clearInterval(timer);
  }, [wigglyState]);
  
  return (
    <span className={styles.contrast}>
      <span className={styles[wigglyState]}>{descriptions[text]}</span>

    </span>
  );
}

export default WigglyEffect
