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
                <a target={"_blank"} href='mailto:Web3@sidequestmeta.com' className={classNames(styles.link, styles.email)}>Web3@sidequestmeta.com</a>
                <a target={"_blank"} href='https://www.instagram.com/sidequest_hub/' className={styles.link}>instagram</a>
                <a target={"_blank"} href='https://www.facebook.com/sidequesthub' className={styles.link}>facebook</a>
                <a target={"_blank"} href='https://twitter.com/SideQuest_Hub' className={styles.link}>twitter</a>
                <a target={"_blank"} href='https://linktr.ee/SideQuestProject' className={styles.link}>discord</a>
                <a target={"_blank"} href='https://www.youtube.com/@sidequestgamershub/videos' className={styles.link}>youtube</a>
            </div>
        </div>
    );
};

export default Contacts;