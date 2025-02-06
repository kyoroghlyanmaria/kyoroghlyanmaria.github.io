import React from 'react';
import Header from "../main_components/Header";
import Footer from "../main_components/Footer";
import ProjectsSection from "../projects_components/ProjectsSection";
import ProjectModalSection from "../projects_components/ProjectModalSection";

export default function ServicesPage() {
    return (
        <div className={'services_container'}>
            <Header/>
            <ProjectsSection/>
            <ProjectModalSection/>
            <Footer/>
        </div>
    );
}