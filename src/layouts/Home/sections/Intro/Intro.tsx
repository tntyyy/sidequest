import React from 'react';
import Image from 'next/image';
import mushroom from '../../../../../public/assets/icons/mushroom.png';
import coins from '../../../../../public/assets/icons/coins.png';
import styles from './Intro.module.scss';

const Intro = () => {
    return (
        <main className={styles.intro}>
            <Image src={mushroom} alt={'mushroom'} className={styles.mushroom} />
            <Image src={coins} alt={'coins'} className={styles.coins} />
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Beyond Gaming</h1>
                <p className={styles.description}>A New Era of Secure, Decentralized Play</p>
            </div>
        </main>
    );
};

export default Intro;