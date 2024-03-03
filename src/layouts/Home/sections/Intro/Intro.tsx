import React from 'react';
import Image from 'next/image';
import mushroom from '../../../../../public/assets/icons/mushroom.png';
import coins from '../../../../../public/assets/icons/coins.png';
import girlGif from '../../../../../public/assets/images/girl.gif';
import boyGif from '../../../../../public/assets/images/boy.gif';
import introBg from '../../../../../public/assets/images/introBg.png';
import styles from './Intro.module.scss';

const Intro = () => {
    return (
        <main className={styles.intro}>
            <Image src={mushroom} alt={'mushroom'} className={styles.mushroom} />
            <Image src={coins} alt={'coins'} className={styles.coins} />
            <Image src={girlGif} alt={'girl'} className={styles.girl} />
            <Image src={boyGif} alt={'boy'} className={styles.boy} />
            <Image src={introBg} alt={'intro'} className={styles.bg} />
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Beyond Gaming</h1>
                <p className={styles.description}>A New Era of Secure, Decentralized Play</p>
            </div>
        </main>
    );
};

export default Intro;