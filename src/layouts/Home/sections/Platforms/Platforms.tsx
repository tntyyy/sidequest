import styles from './Platforms.module.scss';
import Image from 'next/image';
import platformImage from '../../../../../public/assets/images/platformImage.png'
import SectionTitle from '@/src/components/ui/SectionTitle/SectionTitle';
import Link from 'next/link';
import {
    platformDataBrowser,
    platformsDataLogin,
} from '@/src/layouts/Home/sections/Platforms/Platforms.data';
import PlatformItem from '@/src/layouts/Home/sections/Platforms/components/PlatformItem/PlatformItem';

const Platforms = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <SectionTitle>Find a Playmate on platforms of your choice</SectionTitle>
                <div className={styles.content__description}>
                    Launch SideQuest on any of your social media
                    platform and start playing with members of your servers.
                </div>
                <div className={styles.list}>
                    <h5 className={styles.list__title}>
                        Login by
                    </h5>
                    <div className={styles.list__content}>
                        {platformsDataLogin.map((item) => {
                            return <PlatformItem key={item.id} {...item} />
                        })}
                    </div>
                </div>
                <div className={styles.list}>
                    <h5 className={styles.list__title}>
                        Add to browser
                    </h5>
                    <div className={styles.list__content}>
                        {platformDataBrowser.map((item) => {
                            return <PlatformItem key={item.id} {...item} />
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                <Image src={platformImage} alt={'Sidequest'} />
            </div>
        </div>
    );
};

export default Platforms;