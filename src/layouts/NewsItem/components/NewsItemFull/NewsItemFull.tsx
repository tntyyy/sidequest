import styles from './NewsItemFull.module.scss';
import {FC} from 'react';
import {TNews} from '@/src/constants/news';
import Image from 'next/image';
import Link from 'next/link';
import PixelArrow from '@/src/components/ui/PixelArrow/PixelArrow';

const NewsItemFull: FC<TNews> = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Link href={'/news'} className={styles.btn}>
                    <PixelArrow/>
                </Link>
                <div className={styles.date}>{props.date}</div>
            </div>
            <Image src={props.image} alt={props.title} className={styles.image}/>
            <div className={styles.content}>
                <h5 className={styles.title}>{props.title}</h5>
                <p className={styles.description}>{props.content}</p>
            </div>
        </div>
    );
};

export default NewsItemFull;