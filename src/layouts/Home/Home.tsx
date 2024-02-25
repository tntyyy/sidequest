import React from 'react';
import MainContainer from '@/src/components/MainContainer/MainContainer';
import Header from '@/src/components/Header/Header';
import Intro from '@/src/layouts/Home/sections/Intro/Intro';
import EscrowService from '@/src/layouts/Home/sections/EscrowService/EscrowService';
import Steps from '@/src/layouts/Home/sections/Steps/Steps';
import HowItWorks from '@/src/layouts/Home/sections/HowItWorks/HowItWorks';
import Platforms from '@/src/layouts/Home/sections/Platforms/Platforms';
import SocialMedia from '@/src/layouts/Home/sections/SocialMedia/SocialMedia';
import Contacts from '@/src/layouts/Home/sections/Contacts/Contacts';
import Footer from '@/src/components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <Intro />
                <Platforms />
                <EscrowService />
                <Steps />
                <HowItWorks />
                <SocialMedia />
                <Contacts />
            </MainContainer>
            <Footer />
        </>
    );
};

export default Home;