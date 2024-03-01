import styles from './Footer.module.scss';
import Image from 'next/image';
import footerImage from '../../../public/assets/images/footer.png';

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <Image src={footerImage} alt={"Footer"} className={styles.image} />
        </footer>
    );
};

export default Footer;