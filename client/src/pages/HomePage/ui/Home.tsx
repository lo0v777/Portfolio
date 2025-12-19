import styles from './Home.module.scss'

import { About } from '../About'
import { Skills } from '../Skills'
import { Portfolio } from '../Portfolio'
import { Experience } from '../WorkExperience'
import { Contacts } from '../Contacts'


const Home = () => {

    return (
        <div className={ styles['home-page'] }>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="portfolio"><Portfolio /></div>
            <div id="work-experience"><Experience /></div>
            <div id="contacts"><Contacts /></div>
        </div>
    );
};

export default Home;
