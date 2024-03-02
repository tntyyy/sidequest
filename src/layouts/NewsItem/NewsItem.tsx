import styles from './NewsItem.module.scss';
import MainContainer from '@/src/components/MainContainer/MainContainer';
import Contacts from '@/src/layouts/Home/sections/Contacts/Contacts';
import Footer from '@/src/components/Footer/Footer';
import {FC} from 'react';
import NewsItemFull from '@/src/layouts/NewsItem/components/NewsItemFull/NewsItemFull';
import {newsData} from '@/src/constants/news';
import Header from '@/src/components/Header/Header';

type NewsItemProps = {
    id: number;
}


const NewsItem: FC<NewsItemProps> = ({ id }) => {
    const data = newsData.find((item) => item.id === id) ?? newsData[0];

    return (
        <MainContainer>
            <Header />
            <div className={styles.wrapper}>
                <NewsItemFull {...data} />
            </div>
            <Contacts />
            <Footer />
        </MainContainer>
    );
};

export default NewsItem;