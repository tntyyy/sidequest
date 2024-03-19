import React from 'react';
import Image from 'next/image';
import mushroom from '../../../../../public/assets/icons/mushroom.png';
import coins from '../../../../../public/assets/icons/coins.png';
import girlGif from '../../../../../public/assets/images/girl.gif';
import boyGif from '../../../../../public/assets/images/boy.gif';
import styles from './Intro.module.scss';
import classNames from 'classnames';

const Intro = () => {
    return (
        <div className={styles.container}>
            <main className={styles.intro}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Gaming, Social <br/> and Beyond</h1>
                    <p className={styles.description}>User-centric Products For Mass <br/> Adoption of Web 3</p>
                </div>
                <div className={styles.pictures}>
                    <div className={classNames(styles.gifWrapper, styles.gifWrapper__girl)}>
                        <Image src={girlGif} alt={'girl'} className={styles.girl}/>
                        <Image src={mushroom} alt={'mushroom'} className={styles.mushroom}/>
                    </div>
                    <div className={classNames(styles.gifWrapper, styles.gifWrapper__boy)}>
                        <Image src={boyGif} alt={'boy'} className={styles.boy}/>
                        <Image src={coins} alt={'coins'} className={styles.coins}/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Intro;