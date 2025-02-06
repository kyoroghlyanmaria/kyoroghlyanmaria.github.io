import React, {useEffect, useRef, useState} from "react";

export default function ProjectsSection() {
    const projects_section_ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {threshold: 0}
        );

        if (projects_section_ref.current) {
            observer.observe(projects_section_ref.current);
        }

        return () => {
            if (projects_section_ref.current) {
                observer.unobserve(projects_section_ref.current);
            }
        };
    }, []);
    useEffect(() => {
        console.log('isInView:', isInView);
        if (isInView) {
            const titleElement = projects_section_ref.current?.querySelector('.title_big_text');
            if (titleElement) {
                titleElement.classList.add('title_big_text_in_view');
            }
        }
    }, [isInView]);


    const ShowModal = () => {
        const projectModalSection = document.querySelector('.project_modal_section');
        projectModalSection.classList.remove('hidden');
    }

    return (
        <div ref={projects_section_ref} className={'projects_section'}>
            <div className="title_box">
                <span className={'title_mini_text'}>OUR PROJECTS</span>
                <span className={'title_big_text'}>
                    We Build Projects That Last
                </span>
            </div>

            <div className={'projects_card_container'}>
                <div id={'project_1'} className={'project_card'} onClick={ShowModal}>
                    <div className={'project_img'}>
                        <img src="/images/slide_img1.webp" alt="projcect image 1" loading="lazy" className={'project-img'}/>
                    </div>
                    <div className={'project_layer'}></div>
                    <div className={'project_info'}>
                        <span className={'project_title'}>Modernist Kitchen Remodeling</span>
                    </div>
                </div>
                <div id={'project_2'} className={'project_card'} onClick={ShowModal}>
                    <div className={'project_img'}>
                        <img src="/images/slide_img2.webp" alt="projcect image 2" loading="lazy"/>
                    </div>
                    <div className={'project_layer'}></div>
                    <div className={'project_info'}>
                        <span className={'project_title'}>Modernist Kitchen Remodeling</span>
                    </div>
                </div>
                <div id={'project_3'} className={'project_card'} onClick={ShowModal}>
                    <div className={'project_img'}>
                        <img src="/images/slide_img3.webp" alt="projcect image 3" loading="lazy"/>
                    </div>
                    <div className={'project_layer'}></div>
                    <div className={'project_info'}>
                        <span className={'project_title'}>Modernist Kitchen Remodeling</span>
                    </div>
                </div>
                <div id={'project4'} className={'project_card'} onClick={ShowModal}>
                    <div className={'project_img'}>
                        <img src="/images/slide_img4.webp" alt="projcect image 4" loading="lazy"/>
                    </div>
                    <div className={'project_layer'}></div>
                    <div className={'project_info'}>
                        <span className={'project_title'}>Modernist Kitchen Remodeling</span>
                    </div>
                </div>
                <div id={'project_5'} className={'project_card'} onClick={ShowModal}>
                    <div className={'project_img'}>
                        <img src="/images/slide_img5.webp" alt="project image 5" loading="lazy"/>
                    </div>
                    <div className={'project_layer'}></div>
                    <div className={'project_info'}>
                        <span className={'project_title'}>Modernist Kitchen Remodeling</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
