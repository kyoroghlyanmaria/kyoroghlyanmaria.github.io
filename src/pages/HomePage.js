import React from 'react';
import HeaderHome from "../home_components/HeaderHome";
import ContentSection from "../home_components/ContentSection";
import NumberSection from "../home_components/NumberSection";
import MySwiperComponent from "../home_components/SlideSection";
import OfferSection from "../home_components/OfferSection";
import ClientsSection from "../home_components/ClientsSection";
import Footer from "../main_components/Footer";
export default function HomePage() {
    return (
        <div className={'home_container'}>
            <HeaderHome/>
            <ContentSection/>
            <NumberSection/>
            <MySwiperComponent/>
            <OfferSection/>
            <ClientsSection/>
            <Footer/>
        {/*<Footer/>*/}
        </div>
    );
}