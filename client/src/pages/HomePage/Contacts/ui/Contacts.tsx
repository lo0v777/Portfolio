import styles from './Contacts.module.scss'

import GitSvg from '@/shared/assets/icons/ask/github.svg?react';
import MailSvg from '@/shared/assets/icons/ask/mail.svg?react';
import TgSvg from '@/shared/assets/icons/ask/telegram.svg?react';

const LINK = [GitSvg, MailSvg, TgSvg]

const Contacts = () => {
    
    return (
        <section className={styles["contacts"]}>
            <div className={styles["headline"]}>
                <span className={styles["headline-text"]}>
                     Do you want to ask <span className={styles["word"]}>something interesting?</span>
                </span>
                <div className={styles["link"]}>
                    {LINK.map((Icon, index ) => <button type="button" className={styles["button"]} key={index}><Icon width="48" height="48" /></button> )}
                </div>
            </div>

            <div className={styles["bottom"]}>
                <p>Contact me. I am in touch mon-fri from 8 am to 8 pm (gmt).</p>
                <p>© Egor Loskutov, 2025</p>

            </div>
        </section>
    );
}

export default Contacts;
