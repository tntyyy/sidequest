import styles from './Contacts.module.scss';
import SectionTitle from '@/src/components/ui/SectionTitle/SectionTitle';
import Image from 'next/image';
import contactsImage from '../../../../../public/assets/images/contactsImage.png';
import classNames from 'classnames';

const Contacts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <SectionTitle>Contacts</SectionTitle>
                    <p className={styles.description}>
                        Email us for any inquiries or support. We aim to respond within 24 hours
                    </p>
                </div>
                <Image src={contactsImage} alt={'Contacts'} className={styles.image} />
            </div>
            <div className={styles.footer}>
                <a href='mailto:Web3@sidequestmeta.com' className={classNames(styles.link, styles.email)}>Web3@sidequestmeta.com</a>
                <a href='/insta' className={styles.link}>instagram</a>
                <a href='/facebook' className={styles.link}>facebook</a>
                <a href='/twitter' className={styles.link}>twitter</a>
            </div>
        </div>
    );
};

export default Contacts;