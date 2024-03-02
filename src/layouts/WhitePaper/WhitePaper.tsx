import styles from './WhitePaper.module.scss';
import LayoutWithSidebar from '@/src/components/LayoutWithSidebar/LayoutWithSidebar';
import Sidebar from '@/src/layouts/WhitePaper/components/Sidebar/Sidebar';
import {useState} from 'react';
import MainContainer from '@/src/components/MainContainer/MainContainer';
import Header from '@/src/components/Header/Header';
import Contacts from '@/src/layouts/Home/sections/Contacts/Contacts';
import Footer from '@/src/components/Footer/Footer';
import {chaptersData, TChapter} from '@/src/layouts/WhitePaper/constants/chapters';

const WhitePaper = () => {
    const [selectedChapter, setSelectedChapter] = useState<TChapter>(chaptersData[0]);

    const handleSelectChapter = (chapter: TChapter) => {
        setSelectedChapter(chapter);
    }

    return (
        <MainContainer>
            <Header />
            <LayoutWithSidebar sidebarElement={<Sidebar selectedChapter={selectedChapter} setSelectedChapter={handleSelectChapter} />}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>
                        Introduction
                    </h1>
                    <p className={styles.description}>
                        The internet has opened up a world of instant connection and content delivery, giving creators everywhere a global platform to engage with their audiences. However, the current ad/brand model of selling aggregated attention that drives the bulk of value for creators just scratches the surface of what is possible.
                        There is a whole world of untapped value in the interactions between creators and their audience. This interaction economy is far larger and worth much more than the attention economy, but until now it’s been difficult to capture the value inherent in interactions.
                        The need for trusted centralized platforms and the high administrative costs of managing these interactions have kept this value out of reach for most creators. Smart contracts on the blockchain solve for many of these issues. The time has come to integrate these tools into a coherent platform that benefits the creative middle class
                    </p>
                    <h3 className={styles.subtitle}>
                        The Easiest Way for Creators to Monetize
                    </h3>
                    <p className={styles.description}>
                        Although legacy social platforms offer powerful channels for garnering attention, the options for/pathways toward profitable interactions are slim. The majority of creator revenue stems from external brand deals, while on-platform monetization functions remain fragmented and siloed. Platform take rates remain high, and ad revenues have seen a steady decline. In addition, there is a lack of consistency with respect to content policies and guidelines, which change frequently, resulting in a challenging and uncertain environment for creators
                        REPUBLIK is a content platform that lowers the barrier for online creators to start monetizing their content and interactions. At its core, REPUBLIK is an ecosystem where creators can keep a much bigger share of their earnings while holding a stake in the platform. The platform is comprised of the following key components:
                    </p>
                </div>
            </LayoutWithSidebar>
            <Contacts />
            <Footer />
        </MainContainer>
    );
};

export default WhitePaper;