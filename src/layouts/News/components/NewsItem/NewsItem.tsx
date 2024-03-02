import styles from './NewsItem.module.scss';
import {FC} from 'react';
import {TNews} from '@/src/constants/news';
import Image from 'next/image';
import Link from 'next/link';

const NewsItem: FC<TNews> = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.date}>{props.date}</div>
            <Image src={props.image} alt={props.title} className={styles.image} />
            <Link href={`/news/${props.id}`} className={styles.content}>
                <h5 className={styles.title}>{props.title}</h5>
                <p className={styles.description}>{props.description}</p>
                <span className={styles.link}>Read completely</span>
            </Link>
        </div>
    );
};

export default NewsItem;