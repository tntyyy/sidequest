import styles from './FAQ.module.scss';
import MainContainer from '@/src/components/MainContainer/MainContainer';
import Header from '@/src/components/Header/Header';
import LayoutWithSidebar from '@/src/components/LayoutWithSidebar/LayoutWithSidebar';
import Sidebar from '@/src/layouts/FAQ/components/Sidebar/Sidebar';
import Contacts from '@/src/layouts/Home/sections/Contacts/Contacts';
import Footer from '@/src/components/Footer/Footer';
import {questionsData} from '@/src/layouts/FAQ/constants/questions';
import QuestionItem from '@/src/layouts/FAQ/components/QuestionItem/QuestionItem';

const Faq = () => {
    return (
        <MainContainer>
            <Header />
            <LayoutWithSidebar sidebarElement={<Sidebar />}>
                <div className={styles.list}>
                    {questionsData.map((item) => {
                        return (<QuestionItem key={item.number} {...item} />)
                    })}
                </div>
            </LayoutWithSidebar>
            <Contacts />
            <Footer />
        </MainContainer>
    );
};

export default Faq;