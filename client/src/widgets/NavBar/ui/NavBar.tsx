import HackSvg from '@/shared/assets/icons/hacker.svg?react';
import styles from './NavBar.module.scss';

import { SwitchButton } from '../../../shared/ui/ThemeSwitcher';
import { useEffect, useState } from 'react';

import TEqualSvg from '../../../shared/assets/icons/menu.svg?react';
import CrossSvg from '../../../shared/assets/icons/cross.svg?react';

const NAVBAR_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Experience', href: '#work-experience' },
    { label: 'Contacts', href: '#contacts' },
];


const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <section>
            <div className={`${styles["Nav"]} ${isScrolled ? styles["Nav--scrolled"] : ''}`}>
                <div className={styles["logoConteiner"]}>
                    <div className={styles["logoIcon"]}><HackSvg width="70" height="65"/></div>
                </div>
                <div className={styles["menuNav"]}>
                    {NAVBAR_ITEMS.map((item) => (
                        <a key={item.href} href={item.href}>{item.label}</a>
                    ))}
                </div>
                <div>
                    <SwitchButton/>
                </div>
                
                <div className={styles["navBarAdaptiv"]}>
                    <button className={styles["menuButton"]} onClick={toggleMenu}>
                        {isOpen ? <CrossSvg width={20} height={20}/> : <TEqualSvg width={20} height={20}/>}
                    </button>
                    {isOpen && (
                        <ul className={styles["menuAdaptiv"]}>
                            {NAVBAR_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} onClick={handleLinkClick}>{item.label}</a>
                                </li>
                            ))}

                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
};

export default NavBar;
