import styles from './WhitePaper.module.scss';
import LayoutWithSidebar from '@/src/components/LayoutWithSidebar/LayoutWithSidebar';
import Sidebar from '@/src/layouts/WhitePaper/components/Sidebar/Sidebar';
import {useState} from 'react';
import MainContainer from '@/src/components/MainContainer/MainContainer';
import Header from '@/src/components/Header/Header';
import Contacts from '@/src/layouts/Home/sections/Contacts/Contacts';
import Footer from '@/src/components/Footer/Footer';
import {chaptersData, TChapter} from '@/src/layouts/WhitePaper/constants/chapters';
import {whitepaperData} from '@/src/layouts/WhitePaper/constants/whitepaper';

const WhitePaper = () => {
    return (
        <MainContainer>
            <Header />
            <LayoutWithSidebar sidebarElement={<Sidebar />}>
                <div className={styles.wrapper}>
                    {
                        whitepaperData.map((item) => {
                            return (
                                <div key={item.id} id={String(item.chapterId)} className={styles.item}>
                                    {item.content}
                                </div>
                            );
                        })
                    }
                </div>
            </LayoutWithSidebar>
            <Contacts />
            <Footer />
        </MainContainer>
    );
};

export default WhitePaper;