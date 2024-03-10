import styles from './Upload.module.scss';
import MainContainer from '@/src/components/MainContainer/MainContainer';
import Header from '@/src/components/Header/Header';
import Contacts from '@/src/layouts/Home/sections/Contacts/Contacts';
import Footer from '@/src/components/Footer/Footer';
import Main from '@/src/layouts/Upload/components/Main/Main';

const Upload = () => {
    return (
        <MainContainer>
            <Header />
            <Main />
            <Contacts />
            <Footer />
        </MainContainer>
    );
};

export default Upload;