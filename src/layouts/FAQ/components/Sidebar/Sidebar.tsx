import styles from './Sidebar.module.scss';
import {FC} from 'react';
import Image from 'next/image';
import icon from '../../../../../public/assets/images/faqIcon.png';

const Sidebar: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Questions <br/> and answers</h1>
            <Image src={icon} alt={'FAQ'} className={styles.icon} />
        </div>
    );
};

export default Sidebar;