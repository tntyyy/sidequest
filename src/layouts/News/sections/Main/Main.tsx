import LayoutWithSidebar from '@/src/components/LayoutWithSidebar/LayoutWithSidebar';
import Sidebar from '@/src/layouts/News/components/Sidebar/Sidebar';
import {useEffect, useState} from 'react';
import {EFilters} from '@/src/layouts/News/constants/filters';
import styles from './Main.module.scss';
import {newsData, TNews} from '@/src/constants/news';
import NewsItem from '@/src/layouts/News/components/NewsItem/NewsItem';

const Main = () => {
    const [selectedFilter, setSelectedFilter] = useState<EFilters>(EFilters.All);
    const [news, setNews] = useState<TNews[]>(newsData);

    const handleSelectFilter = (filter: EFilters) => {
        setSelectedFilter(filter);
    }

    useEffect(() => {
        if (selectedFilter === EFilters.All) {
            setNews(newsData);
        } else {
            const filteredNews = newsData.filter((item) => {
                return item.category === selectedFilter;
            });
            setNews(filteredNews);
        }
    }, [selectedFilter]);

    return (
        <LayoutWithSidebar sidebarElement={<Sidebar selectedFilter={selectedFilter} setSelectedFilter={handleSelectFilter} />}>
            <div className={styles.wrapper}>
                {
                    news.map((item) => {
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