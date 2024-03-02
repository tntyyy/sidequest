import React from 'react';
import Header from '@/src/components/Header/Header';
import MainContainer from '@/src/components/MainContainer/MainContainer';
import Main from '@/src/layouts/News/sections/Main/Main';
import Contacts from '@/src/layouts/Home/sections/Contacts/Contacts';
import Footer from '@/src/components/Footer/Footer';

const News = () => {
    return (
        <MainContainer>
            <Header />
            <Main />
            <Contacts />
            <Footer />
        </MainContainer>
    );
};

export default News;