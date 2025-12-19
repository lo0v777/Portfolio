import styles from './Skills.module.scss';

const HARD_SKILLS = [ 
    "HTML5, CSS3, JS, TS",
    "React, Next.js",
    "Redux (Redux Toolkit), Zustand",
    "Material UI, React Bits",
    "Axios, React Router, React Query",
    "Webpack, Vite", "REST API, WebSockets",
    "BEM, Feature-Sliced Design",
    "Git (GitHub), Figma",
    "Linux, Docker",
    "Python, Flask, FastApi",
]

const SOFT_SKILLS = [
    "I know how to work in a team, I have experience in communication with designers, managers and other developers",
    "I am responsible about deadlines ", 
    "I am attentive to the details of the terms of reference",
    "I am demanding of the quality of my code, I follow the code-style ",
    "I have time management skills", 
    "I welcome constructive criticism and am always happy to find new points of professional and personal growth",
    "I am correctly convey thoughts, formulate questions",
    "I write detailed reports on the work done, if required ",
    "I have experience working with a geographically distributed team (remote work)",
]

const Skills = () => {

    return (
        <section className={styles['columns']}>
            <div className={styles['column']}>
                <h1><span className={styles['word']}>Hard</span> skills</h1>
                {HARD_SKILLS.map((skill, index) => <div key={index} className={styles['card']}>{skill}</div>)}
            </div>
            <div className={styles['column']}>
                <h1><span className={styles['word']}>Soft</span> skills</h1>
                {SOFT_SKILLS.map((skill, index) => <div key={index} className={styles['card']}>{skill}</div>)}
            </div>
        </section>
    );
};

export default Skills;
