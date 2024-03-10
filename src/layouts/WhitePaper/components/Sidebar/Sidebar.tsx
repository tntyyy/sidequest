import styles from './Sidebar.module.scss';
import {FC, useEffect, useState} from 'react';
import classNames from 'classnames';
import { chaptersData } from '@/src/layouts/WhitePaper/constants/chapters';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Sidebar: FC = () => {
    const router = useRouter();

    const [selectedId, setSelectedId] = useState<number>(1);

    useEffect(() => {
        const id = Number(router.asPath.split('#')[1]) || 1;
        setSelectedId(id);
    }, [router]);


    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Whitepaper</h1>
            <div className={styles.list}>
                {
                    chaptersData.map((item) => {
                        return (
                            <Link
                                href={`#${item.id}`}
                                key={item.id}
                                className={classNames(styles.list__item, {
                                    [styles.active]: selectedId === item.id
                                })}
                            >
                                {item.title}
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;