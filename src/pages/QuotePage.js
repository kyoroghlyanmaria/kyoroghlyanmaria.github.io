import react from 'react';
import Header from "../main_components/Header";
import QuoteSection from "../quote_components/QuoteSection";
import Footer from "../main_components/Footer";
import QuoteContactSection from "../quote_components/QuoteContactSection";
export default function () {

    return (
        <div className={'services_container'}>
            <Header/>
            <QuoteSection/>
            <QuoteContactSection/>
            <Footer/>
        </div>
    );
}