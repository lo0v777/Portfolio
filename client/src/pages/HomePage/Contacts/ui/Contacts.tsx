import styles from './Contacts.module.scss'

import GitSvg from '@/shared/assets/icons/ask/github.svg?react';
import MailSvg from '@/shared/assets/icons/ask/mail.svg?react';
import TgSvg from '@/shared/assets/icons/ask/telegram.svg?react';

const LINKS = [
    { Icon: GitSvg, href: "https://github.com/lo0v777", label: "GitHub" },
    { Icon: MailSvg, href: "mailto:lo0v777@mail.ru", label: "Email" }, 
    { Icon: TgSvg, href: "https://t.me/lo0v777", label: "Telegram" }, 
];

const Contacts = () => {
    
    return (
        <section className={styles["contacts"]}>
            <div className={styles["headline"]}>
                <span className={styles["headline-text"]}>
                     Do you want to ask <span className={styles["word"]}>something interesting?</span>
                </span>
                <div className={styles["link"]}>
                    {LINKS.map(({Icon, href, label}) => <a key={label} href={href} target="_blank" aria-label={label} type="button" className={styles["button"]} ><Icon width="48" height="48" /></a> )}
                </div>
            </div>

            <div className={styles["bottom"]}>
                <p>Contact me. I am in touch mon-fri from 8 am to 8 pm (gmt).</p>
                <p>© Alexander Loskutov, 2025</p>

            </div>
        </section>
    );
}

export default Contacts;
