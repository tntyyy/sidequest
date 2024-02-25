import styles from './SocialMedia.module.scss';
import SectionTitle from '@/src/components/ui/SectionTitle/SectionTitle';
import Link from 'next/link';

const SocialMedia = () => {
    return (
        <div className={styles.wrapper}>
            <SectionTitle>Social Media</SectionTitle>
            <div className={styles.content}>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        ICON
                    </div>
                    <Link href={'/mock'} className={styles.button}>JOIN OUR SOCIAL</Link>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        ICON
                    </div>
                    <Link href={'/mock'} className={styles.button}>JOIN OUR SOCIAL</Link>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        ICON
                    </div>
                    <Link href={'/mock'} className={styles.button}>JOIN OUR SOCIAL</Link>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;