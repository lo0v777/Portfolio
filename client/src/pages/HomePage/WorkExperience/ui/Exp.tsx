import ViteSvg from '@/shared/assets/icons/coal/vite.svg?react'; 
import TypeScriptSvg from '@/shared/assets/icons/coal/ts.svg?react';
import ReactSvg from '@/shared/assets/icons/coal/react.svg?react';
import ReduxSvg from '@/shared/assets/icons/coal/redux.svg?react';
import SassSvg from '@/shared/assets/icons/coal/sass.svg?react';
import JsSvg from '@/shared/assets/icons/aiBot/javascript.svg?react';
import CssSvg from '@/shared/assets/icons/aiBot/css.svg?react';
import HooksSvg from '@/shared/assets/icons/aiBot/hook.svg?react';
import MuiSvg from '@/shared/assets/icons/coal/material.svg?react';
import TwSvg from '@/shared/assets/icons/coal/tailwind.svg?react';
import HtmlSvg from '@/shared/assets/icons/coal/html.svg?react';
import FigmaSvg from '@/shared/assets/icons/coal/figma.svg?react';
import DockerSvg from '@/shared/assets/icons/coal/docker.svg?react';
import styles from './Exp.module.scss';


const EXPERIENCE = [
    {
      id: 1,
      date: "March 2025 — Present",
      title: "Frontend Developer",
      company: "Freelance",
      description: "Website development. Fixing layout bugs. Writing simple scripts. Creating task for university.",
      stack: [HtmlSvg, CssSvg, JsSvg, ViteSvg, ReactSvg, HooksSvg, TypeScriptSvg, ReduxSvg, MuiSvg, TwSvg, SassSvg, FigmaSvg, DockerSvg],
    },
  ];

const Experience = () => {
  
    return (

        <section className={styles["experience"]}>
            <span className={styles["headline"]}><span className={styles["word"]}>Work</span> Experience</span>
            <div className={styles["main-sections"]}>
                <div className={styles["vertical-timeline"]}>
                    <div className={styles["timeline-dot"]}></div>
                    <div className={styles["timeline-line"]}></div>
                    <div className={styles["timeline-dot"]}></div>
                </div>
                <div className={styles["cards"]}>
                    {EXPERIENCE.map((exp) => (
                        <div key={exp.id} className={styles["card"]}>
                            <div className={styles["info"]}>
                                <div className={styles["date"]}>{exp.date}</div>
                                <div className={styles["title"]}>{exp.company}</div>
                                <div className={styles["company"]}>{exp.title}</div>
                                <div className={styles["description"]}>{exp.description}</div>
                                <div className={styles["stackBorder"]}>
                                    {exp.stack.map((Icon, index) => (
                                        <div key={index} className={styles["iconWrapper"]}>
                                            <Icon width="48" height="48" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
