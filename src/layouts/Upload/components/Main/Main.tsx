import styles from './Main.module.scss';
import Link from 'next/link';
import FileDropZone from '@/src/layouts/Upload/components/FileDropZone/FileDropZone';
import Image from 'next/image';
import uploadImage from '../../../../../public/assets/icons/upload.png';

const Main = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>Upload Your Profile Avatar</h1>
                <p className={styles.description}>First impressions matter. What’s your style?</p>
                <Link href='https://discord.gg/xbKhvmByvy' target={"_blank"} className={styles.link}>Back to the bot</Link>
            </div>
            <div className={styles.upload}>
                <FileDropZone />
            </div>
            <Image src={uploadImage} alt={'Upload avatar'} className={styles.icon} />
        </main>
    );
};

export default Main;