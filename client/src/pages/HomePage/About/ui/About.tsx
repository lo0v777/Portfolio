import { TextType } from '../../../../shared/ui/TextType';
import { useEffect, useRef } from 'react';

import lottie from 'lottie-web'
import animationData from '../../../../shared/assets/icons/robot.json';
import styles from './About.module.scss';

const About = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => anim.destroy();
    }
  }, []);

  return (
    <section className={ styles['hero'] }>

      <div
        className={ styles['text'] }
      >
        <TextType
          text={"Hello! My name is\n Egor Loskutov.\nI can do some great\n things for you."}
          typingSpeed={75}
          showCursor={true}
          loop={false}
        />
      </div>

      <div className= {styles['hero-animation']}>
        <div ref={animationContainer}  />
      </div>
    </section>
  );
};

export default About;
