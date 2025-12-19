import { useState, useEffect } from 'react';

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

import aibotPrew from '@/shared/assets/images/aiBot/aibot.jpg';
import orderPrew from '@/shared/assets/images/oSystem/ordersPrew.jpg';
import coalPrew from '@/shared/assets/images/coal/coal-prew.jpg';

import consZoom from '@/shared/assets/images/oSystem/cons-prew.png';
import coalZoom from '@/shared/assets/images/coal/coal-zoom.png';
import aiZoom from '@/shared/assets/images/aiBot/aiBot-zoom.png';

import styles from './Portfolio.module.scss';

const PROJECTS = [
    {
        id: 1,
        date: 'November 2025',
        name: 'Coal control system',
        description:
        'Artificial intelligence-based prediction of the risk of spontaneous coal combustion using the following technologies: Vite, TypeScript, React, Sass, Redux Toolkit, Vite SVG icon, and FSD. Our CyberSlavs team also won first place at the GlowByte 2025 hackathon while implementing this project.',
        stack: [ViteSvg, ReactSvg, TypeScriptSvg, ReduxSvg, SassSvg, MuiSvg],
        image: coalPrew,
        zoomImage: coalZoom,
    },
    {
        id: 2,
        date: 'September 2025',
        name: 'AiBot interface',
        description:
        'Interface for AI agent using the following technologies: Vite, React, JavaScript, Css, React Hooks, Vite SVG icon.',
        stack: [ViteSvg, ReactSvg, JsSvg, CssSvg, HooksSvg],
        image: aibotPrew,
        zoomImage: aiZoom,
    },
    {
        id: 3,
        date: 'June 2025',
        name: 'Orders Delivery System',
        description:
        'The system for communicating orders to staff is deployed on the department\'s local server.',
        stack: [ViteSvg, ReactSvg, TypeScriptSvg, ReduxSvg, SassSvg, TwSvg],
        image: orderPrew,
        zoomImage: consZoom,
    },
];

const Portfolio = () => {
    const [modalImage, setModalImage] = useState<string | null>(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    useEffect(() => {
        if (modalImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            setZoomLevel(1);
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [modalImage]);

    const openModal = (src: string) => {
        setModalImage(src);
        setZoomLevel(1);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <section className={styles['portfolio']}>
            <h1 className={styles['headline']}>
                My <span className={styles['word']}>Portfolio</span>
            </h1>

            {PROJECTS.map((project) => (
                <div key={project.id} className={styles['card']}>
                    <img
                        src={project.image}
                        alt={project.name}
                        onClick={() => openModal(project.zoomImage)}
                        style={{ cursor: 'zoom-in' }}
                    />

                    <div className={styles['info']}>
                        <div className={styles['date']}>{project.date}</div>
                        <div className={styles['name']}>{project.name}</div>
                        <div className={styles['description']}>{project.description}</div>
                        <div className={styles['stackBorder']}>
                            {project.stack.map((Icon, index) => (
                                <div key={index} className={styles['iconWrapper']}>
                                    <Icon width="48" height="48" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {modalImage && (
                <div className={styles['modal']} onClick={closeModal}>
                    <div className={styles['scrollContainer']}>
                        <img
                            src={modalImage}
                            alt="Zoomed"
                            className={styles['modalImage']}
                            onClick={(e) => {
                                e.stopPropagation();
                                setZoomLevel((prev) => (prev === 1 ? 1.3 : 1));
                            }}
                            style={{
                                transform: `scale(${zoomLevel})`,
                                transformOrigin: 'center',
                                cursor: zoomLevel === 1 ? 'zoom-in' : 'zoom-out',
                                transition: 'transform 0.25s ease',
                            }}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
