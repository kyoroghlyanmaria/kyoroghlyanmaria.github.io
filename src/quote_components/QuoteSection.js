import {useEffect, useRef, useState} from "react";

export default function QuoteSection() {
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
        if (isInView) {
            document.querySelector('.title_big_text').classList.add('title_big_text_in_view');
        }
    }, [isInView]);

    return (
        <div ref={projects_section_ref} className={'quote_section'}>
            <div className={'quote_content_box'}>
                <div className={'about_content_box'}>
                    <span className={'title_mini_text'}>GET A QUOTE</span>
                    <span className={'title_big_text'}>Request a Quote for Your Next Project</span>
                    <div className={'description_box'}>
                        <span>We'll get back to you with an estimate</span>
                    </div>
                </div>
                <form className={'quote_form'} onSubmit={postMessage}>
                    <div className={'quote_form_content_box'}>
                        <div>
                            <input type="text" placeholder={'First name*'}/>
                            <input type="email" placeholder={'Email*'}/>
                            <input type="text" placeholder={'When are you looking to start?*'}/>
                        </div>
                        <div>
                            <input type="text" placeholder={'Last name*'}/>
                            <input type="text" placeholder={'Subject*'}/>
                            <input type="text" placeholder={'What do you want to build/remodel ?'}/>
                        </div>
                    </div>

                    <button className={'get_quote_submit flex_center'} type={'submit'}>GET A QUOTE</button>
                </form>
            </div>

            <div className={'quote_image_box'}>
                <img src="/images/quote_img.avif" alt="quote img"/>
            </div>
        </div>
    )
}