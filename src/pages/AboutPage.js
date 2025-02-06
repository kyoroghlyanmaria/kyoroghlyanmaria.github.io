import React from 'react';
import Header from "../main_components/Header";
import Footer from "../main_components/Footer";
import AboutSection from "../about_components/AboutSection";
import AboutSkillSection from "../about_components/AboutSkillSection";
import ReviewSection from "../about_components/ReviewSection";
import MissionSection from "../about_components/MissionSection";

export default function AboutPage() {
    return (
        <div className={'services_container'}>
            <Header/>
            <AboutSection/>
            <AboutSkillSection/>
            <ReviewSection/>
            <MissionSection/>
            <Footer/>
        </div>
    );
}