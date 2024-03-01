import styles from './HowItWorks.module.scss';
import Image from 'next/image';
import SectionTitle from '@/src/components/ui/SectionTitle/SectionTitle';

import connectIcon from '../../../../../public/assets/images/connectIcon.png';
import secureIcon from '../../../../../public/assets/images/secureIcon.png';
import payIcon from '../../../../../public/assets/images/payIcon.png';
import Link from 'next/link';
import PixelArrow from '@/src/components/ui/PixelArrow/PixelArrow';

const HowItWorks = () => {
    return (
        <div className={styles.wrapper}>
            <SectionTitle>How It Works</SectionTitle>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.item}>
                        <div className={styles.item__text}>
                            <h5 className={styles.title}>Connect</h5>
                            <p className={styles.description}>
                                Hit up our Discord bot, type /Play, and dive into a quick-select menu of gamers. Pick
                                your partner and gear up for the game!
                            </p>
                            <Link href={'/'} className={styles.link}>
                                <PixelArrow />
                            </Link>
                        </div>
                        <Image className={styles.icon} src={connectIcon} alt={'Connect'} />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.item}>
                        <div className={styles.item__text}>
                            <h5 className={styles.title}>Select & Secure</h5>
                            <p className={styles.description}>
                                Choose your playmate and secure your session with our blockchain escrow service. Funds are held until you confirm the game&apos;s completionz
                            </p>
                            <Link href={'/'} className={styles.link}>
                                <PixelArrow />
                            </Link>
                        </div>
                        <Image className={styles.icon} src={secureIcon} alt={'Select & Secure'}/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item__text}>
                            <h5 className={styles.title}>Play & Pay</h5>
                            <p className={styles.description}>
                                Enjoy your gaming session knowing your transaction is safe. Complete the game and release the funds directly to your playmate&apos;s wallet.
                            </p>
                            <Link href={'/'} className={styles.link}>
                                <PixelArrow />
                            </Link>
                        </div>
                        <Image className={styles.icon} src={payIcon} alt={'Play & Pay'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;