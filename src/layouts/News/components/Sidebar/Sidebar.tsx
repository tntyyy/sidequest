import styles from './Sidebar.module.scss';
import {EFilters, filtersString} from '@/src/layouts/News/constants/filters';
import {FC} from 'react';
import classNames from 'classnames';

type SidebarProps = {
    selectedFilter: EFilters;
    setSelectedFilter: (filter: EFilters) => void;
}

const Sidebar: FC<SidebarProps> = ({ selectedFilter, setSelectedFilter }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>News&Events</h1>
            <p className={styles.description}>
                Dive into the latest happenings from the worlds of gaming and crypto, and see what`s new and next in our digital universe.
            </p>
            <div className={styles.filters}>
                {
                    filtersString.map((item) => {
                        return (
                            <button
                                key={item}
                                className={classNames(styles.filter, {
                                    [styles.active]: selectedFilter === item
                                })}
                                onClick={() => setSelectedFilter(item)}
                            >
                                {item}
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;