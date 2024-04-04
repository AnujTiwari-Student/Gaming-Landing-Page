import React from 'react';

import { ContainerFluid } from '../../components/container';
import BannerSection from './components/banner-section';
import CarouselSection from './components/carousel-section';
import BuySection from './components/buy-section';
import Footer from '../../components/footer';

const Home = () => {
    return (
        <ContainerFluid>
            <BannerSection />
            <CarouselSection />
            <BuySection />
            <Footer />
        </ContainerFluid>
    );
}

export default Home;
