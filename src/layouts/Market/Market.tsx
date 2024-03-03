import styles from './Market.module.scss';
import MainContainer from '@/src/components/MainContainer/MainContainer';
import Header from '@/src/components/Header/Header';
import Contacts from '@/src/layouts/Home/sections/Contacts/Contacts';
import Footer from '@/src/components/Footer/Footer';
import Intro from '@/src/layouts/Market/components/Intro/Intro';

const Market = () => {
    return (
        <MainContainer>
            <Header />
            <Intro />
            <Contacts />
            <Footer />
        </MainContainer>
    );
};

export default Market;