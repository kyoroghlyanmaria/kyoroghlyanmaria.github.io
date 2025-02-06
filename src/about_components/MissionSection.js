import {useEffect, useRef, useState} from "react";

export default function MissionSection() {
    const mission_section_ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {threshold: 0}
        );

        if (mission_section_ref.current) {
            observer.observe(mission_section_ref.current);
        }

        return () => {
            if (mission_section_ref.current) {
                observer.unobserve(mission_section_ref.current);
            }
        };
    }, []);
    useEffect(() => {
        if (isInView) {
            document.querySelector('.title_big_text2').classList.add('title_big_text_in_view2');
        }
    }, [isInView]);

    return (
        <div ref={mission_section_ref} className={'mission_section'}>
            <div className={'mission_content_box'}>
                <div className={'about_content_box'}>
                    <span className={'title_mini_text'}>OUR MISSION</span>
                    <span className={'title_big_text2'}>Building a Sustainable Future</span>
                    <div className={'description_box'}>
                    <span>
                        This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share the company history or highlight a particular feature that sets it apart from competitors.
                    </span>
                        <span>
                            Let the writing speak for itself. Keep a consistent tone and voice throughout the website to stay true to the brand image and give visitors a taste of the company’s values and personality.
                        </span>
                    </div>
                </div>
            </div>
            <div className={'mission_img_box'}>
                <img src="/images/mission_img.avif" alt="mission"/>
            </div>
        </div>
    )
}