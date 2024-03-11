import styles from './Sidebar.module.scss';
import {EFilters, filtersString} from '@/src/layouts/News/constants/filters';
import {FC} from 'react';
import classNames from 'classnames';

const Sidebar: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>News&Events</h1>
            <p className={styles.description}>
                See what’s new and next in our digital universe.
            </p>
        </div>
    );
};

export default Sidebar;