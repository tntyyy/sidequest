import styles from './Platforms.module.scss';
import SectionTitle from '@/src/components/ui/SectionTitle/SectionTitle';
import Link from 'next/link';
import {platformsData} from '@/src/layouts/Home/sections/Platforms/Platforms.data';

const Platforms = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <SectionTitle>Find a Playmate on platforms of your choice</SectionTitle>
                <div className={styles.content__description}>
                    Launch sidekick on any of your social media
                    platform and start playing with members of your servers.
                </div>
                <div className={styles.content__list}>
                    {platformsData.map((item) => {
                        return <Link key={item.id} href={item.href} className={styles.content__list__item}>{item.text}</Link>
                    })}
                </div>
            </div>
            <div className={styles.image}>
                IMAGE
            </div>
        </div>
    );
};

export default Platforms;