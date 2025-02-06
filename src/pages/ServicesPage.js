import React from 'react';
import Header from "../main_components/Header";
import Footer from "../main_components/Footer";
import ServicesSection from "../services_components/ServicesSection";

export default function ServicesPage() {
    return (
        <div className={'services_container'}>
            <Header/>
            <ServicesSection/>
            <Footer/>
        </div>
    );
}