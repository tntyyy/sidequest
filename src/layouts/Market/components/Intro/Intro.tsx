import styles from './Intro.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import clever from '../../../../../public/assets/images/market/introClever.png';
import game from '../../../../../public/assets/images/market/introGame.png';
import bg from '../../../../../public/assets/images/market/introBg.png';

const Intro = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to the SideQuest Marketplace - Coming Soon!</h1>
                <p className={styles.description}>Your Adventure Starts Here. Are You Ready?</p>
                <Link href='https://linktr.ee/SideQuestProject' target={"_blank"} className={styles.link}>SIGN UP FOR UPDATES</Link>
            </div>
            <Image src={clever} alt={'Market'} className={styles.clever} />
            <Image src={game} alt={'Market'} className={styles.game} />
            <Image src={bg} alt={'Market'} className={styles.bg} />
        </main>
    );
};

export default Intro;