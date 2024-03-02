import styles from './Sidebar.module.scss';
import {FC} from 'react';
import classNames from 'classnames';
import {chaptersData, TChapter} from '@/src/layouts/WhitePaper/constants/chapters';

type SidebarProps = {
    selectedChapter: TChapter;
    setSelectedChapter: (chapter: TChapter) => void;
}

const Sidebar: FC<SidebarProps> = ({ selectedChapter, setSelectedChapter }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>News&Events</h1>
            <div className={styles.list}>
                {
                    chaptersData.map((item) => {
                        return (
                            <button
                                key={item.id}
                                className={classNames(styles.list__item, {
                                    [styles.active]: selectedChapter.id === item.id
                                })}
                                onClick={() => setSelectedChapter(item)}
                            >
                                {item.title}
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;