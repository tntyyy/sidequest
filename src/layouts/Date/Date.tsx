import MainContainer from '@/src/components/MainContainer/MainContainer';
import Header from '@/src/components/Header/Header';
import Contacts from '@/src/layouts/Home/sections/Contacts/Contacts';
import Footer from '@/src/components/Footer/Footer';
import Main from '@/src/layouts/Date/components/Main/Main';

const Date = () => {
    return (
        <MainContainer>
            <Header />
            <Main />
            <Contacts />
            <Footer />
        </MainContainer>
    );
};

export default Date;