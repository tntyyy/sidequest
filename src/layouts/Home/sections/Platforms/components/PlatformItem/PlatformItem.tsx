import styles from './PlatformItem.module.scss';
import Link from 'next/link';

const PlatformItem = ({href, text}: { href: string, text: string }) => {
    return (
        <Link
            href={href}
            className={styles.list__item}
            target={"_blank"}
        >
            <span>{text}</span>
        </Link>
    );
};

export default PlatformItem;