import LayoutWithSidebar from '@/src/components/LayoutWithSidebar/LayoutWithSidebar';
import Sidebar from '@/src/layouts/News/components/Sidebar/Sidebar';
import {useEffect, useState} from 'react';
import {EFilters} from '@/src/layouts/News/constants/filters';
import styles from './Main.module.scss';
import {newsData, TNews} from '@/src/constants/news';
import NewsItem from '@/src/layouts/News/components/NewsItem/NewsItem';

const Main = () => {
    return (
        <LayoutWithSidebar sidebarElement={<Sidebar />}>
            <div className={styles.wrapper}>
                {
                    newsData.map((item) => {
                        return (
                            <NewsItem key={item.id} {...item} />
                        );
                    })
                }
            </div>
        </LayoutWithSidebar>
    );
};

export default Main;