import React, {useEffect, useRef, useState} from "react";
import HeaderHome from "../home_components/HeaderHome";


export default function ServicesSection() {
    const servicesSectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {threshold: 0.5}
        );

        if (servicesSectionRef.current) {
            observer.observe(servicesSectionRef.current);
        }

        return () => {
            if (servicesSectionRef.current) {
                observer.unobserve(servicesSectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            document.querySelector('.title_big_text').classList.add('title_big_text_in_view');
            setTimeout(() => {
                document.querySelectorAll('.cards_top_container > .offer_card').forEach(card => card.classList.add('opacity_remove'));
                document.querySelectorAll('.cards_top_container > .offer_card').forEach(card => card.classList.add('cards_container_in_view'));

                setTimeout(() => {
                    document.querySelectorAll('.cards_bottom_container > .offer_card').forEach(card => card.classList.add
                    ('opacity_remove'));
                    document.querySelectorAll('.cards_bottom_container > .offer_card').forEach(card => card.classList.add
                    ('cards_container_in_view'));

                },800)
            }, 500)

        }

    }, [isInView]);


    return (
        <div ref={servicesSectionRef} className={'services_section'}>
            <div className="title_box">
                <span className={'title_mini_text'}>OUR SERVICES</span>
                <span className={'title_big_text'}>
                    We Offer a Range of Services to Meet Your Needs
                </span>
            </div>
            <div className={"content_card_container"}>
                <div className={'cards_top_container'}>
                    <div className={'offer_card'}>
                        <svg
                            preserveAspectRatio="xMidYMid meet"
                            data-bbox="18 17 161.99 162"
                            viewBox="18 17 161.99 162"
                            xmlns="http://www.w3.org/2000/svg"
                            data-type="shape"
                            role="presentation"
                            aria-hidden="true"
                            aria-label=""
                            fill={'white'}
                            className={'offer_shape_svg'}
                        >
                            <g>
                                <path
                                    d="M169.03 179H28.97C22.92 179 18 174.08 18 168.03V27.97C18 21.92 22.92 17 28.97 17h140.05c6.05 0 10.97 4.92 10.97 10.97v140.05c0 6.05-4.92 10.97-10.97 10.97ZM28.97 19C24.02 19 20 23.03 20 27.97v140.05c0 4.95 4.03 8.97 8.97 8.97h140.05c4.95 0 8.97-4.03 8.97-8.97V27.97c0-4.95-4.03-8.97-8.97-8.97H28.97Z"></path>
                                <path
                                    d="M140.1 151.59V53.33c0-.73-.59-1.32-1.32-1.32H61.22c-.73 0-1.32.59-1.32 1.32v98.26c0 .73.59 1.32 1.32 1.32h77.55c.73 0 1.32-.59 1.32-1.32Zm-2.65-1.32h-74.9v-9.14h74.91v9.14Zm0-11.8h-74.9V67.31h74.91v71.16Zm0-73.8h-74.9V54.66h74.91v10.01Z"></path>
                                <path
                                    d="M124.46 61.2h5.11c.73 0 1.32-.59 1.32-1.32s-.59-1.32-1.32-1.32h-5.11c-.73 0-1.32.59-1.32 1.32s.59 1.32 1.32 1.32Z"></path>
                                <path
                                    d="M112.12 61.2h5.11c.73 0 1.32-.59 1.32-1.32s-.59-1.32-1.32-1.32h-5.11c-.73 0-1.32.59-1.32 1.32s.59 1.32 1.32 1.32Z"></path>
                                <path
                                    d="M92.39 49.73c.73 0 1.32-.59 1.32-1.32s-.59-1.32-1.32-1.32H70.72c-.73 0-1.32.59-1.32 1.32s.59 1.32 1.32 1.32h21.67Z"></path>
                                <path
                                    d="M129.57 49.73c.73 0 1.32-.59 1.32-1.32s-.59-1.32-1.32-1.32h-22.63c-.73 0-1.32.59-1.32 1.32s.59 1.32 1.32 1.32h22.63Z"></path>
                                <path
                                    d="M70.64 77.19h58.72c.73 0 1.32-.59 1.32-1.32s-.59-1.32-1.32-1.32H70.64c-.73 0-1.32.59-1.32 1.32s.59 1.32 1.32 1.32Z"></path>
                                <path
                                    d="M70.64 126.32h58.72c.73 0 1.32-.59 1.32-1.32V86.05c0-.73-.59-1.32-1.32-1.32H70.64c-.73 0-1.32.59-1.32 1.32V125c0 .73.59 1.32 1.32 1.32Zm1.32-38.95h56.07v36.31H71.96V87.37Z"></path>
                            </g>
                        </svg>

                        <span className={'offer_text1'}>KITCHEN REMODELING</span>
                        <span className={'offer_text2'}>Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.</span>
                    </div>
                    <div className={'offer_card'}>
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="18 17 161.99 162" viewBox="18 17 161.99 162"
                             xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true"
                             aria-label="" fill={'white'} className={'offer_shape_svg'}>
                            <g>
                                <path
                                    d="M169.03 179H28.97C22.92 179 18 174.08 18 168.03V27.97C18 21.92 22.92 17 28.97 17h140.05c6.05 0 10.97 4.92 10.97 10.97v140.05c0 6.05-4.92 10.97-10.97 10.97ZM28.97 19C24.02 19 20 23.03 20 27.97v140.05c0 4.95 4.03 8.97 8.97 8.97h140.05c4.95 0 8.97-4.03 8.97-8.97V27.97c0-4.95-4.03-8.97-8.97-8.97H28.97Z"></path>
                                <path
                                    d="M147.08 61.14a3.644 3.644 0 0 0 2.85-3.55c0-2.01-1.64-3.64-3.64-3.64h-32.44c-3.49-3.66-8.4-5.95-13.84-5.95s-10.35 2.29-13.84 5.95H53.72c-2.01 0-3.64 1.64-3.64 3.64 0 1.74 1.22 3.19 2.85 3.55.11 17.01 6.19 31.27 14.34 35.21h-.62c-2.65 0-4.81 2.16-4.81 4.81s2.16 4.81 4.81 4.81h1.85c-.38 1.9-.58 3.84-.58 5.79 0 13.12 8.65 24.26 20.55 28.02l-2.43 11.57c-.03.16 0 .33.11.45.1.13.26.2.42.2h26.89c.16 0 .32-.07.42-.2.1-.13.14-.29.11-.45l-2.43-11.57c11.9-3.76 20.55-14.89 20.55-28.02 0-1.96-.2-3.9-.58-5.79h1.85c2.65 0 4.81-2.16 4.81-4.81s-2.16-4.81-4.81-4.81h-.62c8.16-3.94 14.24-18.2 14.34-35.21Zm-.79-6.11c1.41 0 2.56 1.15 2.56 2.56s-1.15 2.56-2.56 2.56h-28.47c-.74-1.87-1.74-3.6-3-5.12h31.47ZM100 49.08c9.97 0 18.08 8.11 18.08 18.08v29.19H81.93V67.16c0-9.97 8.11-18.07 18.08-18.07Zm-48.85 8.51c0-1.41 1.15-2.56 2.56-2.56h31.47a19.456 19.456 0 0 0-3 5.12H53.71c-1.41 0-2.56-1.15-2.56-2.56ZM54 61.24h27.78c-.61 1.87-.95 3.86-.95 5.92v29.19H71.8c-9.73 0-17.66-15.7-17.81-35.12Zm58.78 89.68H87.22l2.28-10.83c2.48.68 5.09 1.06 7.78 1.06h5.43c2.69 0 5.3-.37 7.78-1.06l2.28 10.83ZM131 111.76c0 15.6-12.69 28.29-28.29 28.29h-5.43c-15.6 0-28.29-12.69-28.29-28.29 0-1.95.21-3.9.6-5.79h60.81c.39 1.89.6 3.84.6 5.79Zm2.36-14.32c2.05 0 3.73 1.67 3.73 3.73s-1.67 3.73-3.73 3.73H66.64c-2.05 0-3.73-1.67-3.73-3.73s1.67-3.73 3.73-3.73h66.72Zm-5.17-1.09h-9.03V67.16c0-2.07-.34-4.06-.95-5.92h27.78c-.15 19.41-8.08 35.12-17.81 35.12Z"></path>
                                <path
                                    d="M113.45 152.5H86.56c-.31 0-.61-.14-.81-.38-.2-.25-.28-.57-.21-.88l2.34-11.13c-12.26-4.07-20.47-15.41-20.47-28.35 0-1.75.16-3.53.48-5.29h-1.25c-2.93 0-5.31-2.38-5.31-5.31 0-2.56 1.82-4.7 4.23-5.2-7.65-4.97-12.96-18.71-13.14-34.44-1.67-.55-2.85-2.15-2.85-3.93 0-2.29 1.86-4.14 4.15-4.14h32.23c3.74-3.84 8.72-5.95 14.05-5.95s10.31 2.11 14.05 5.95h32.23c2.29 0 4.14 1.86 4.14 4.14 0 1.79-1.18 3.38-2.85 3.93-.18 15.73-5.48 29.47-13.14 34.44a5.32 5.32 0 0 1 4.23 5.2c0 2.93-2.38 5.31-5.31 5.31h-1.25c.32 1.77.48 3.54.48 5.29 0 12.94-8.2 24.28-20.46 28.35l2.34 11.13c.07.31-.01.63-.21.87-.2.24-.49.38-.81.38ZM66.64 96.85a4.31 4.31 0 0 0 0 8.62h2.46l-.12.6c-.38 1.9-.57 3.81-.57 5.69 0 12.66 8.12 23.73 20.2 27.54l.43.14-2.53 12.01 26.93.05-2.48-12.06.43-.14c12.08-3.82 20.2-14.88 20.2-27.54 0-1.88-.19-3.8-.57-5.7l-.12-.6h2.46a4.31 4.31 0 0 0 0-8.62h-2.81l1.97-.95c8.18-3.95 13.96-18.24 14.06-34.76v-.4l.39-.09c1.42-.32 2.46-1.61 2.46-3.06 0-1.73-1.41-3.14-3.14-3.14h-32.66l-.15-.15c-3.57-3.74-8.36-5.79-13.48-5.79s-9.91 2.06-13.48 5.79l-.15.15H53.71c-1.73 0-3.15 1.41-3.15 3.14 0 1.46 1.03 2.75 2.46 3.06l.39.09v.4c.11 16.52 5.89 30.82 14.06 34.76l1.97.95h-2.81Zm46.75 54.57H86.6l2.52-11.96.51.14c2.5.69 5.08 1.04 7.65 1.04h5.43c2.57 0 5.15-.35 7.65-1.04l.51-.14 2.51 11.96Zm-25.55-1h24.32l-2.04-9.72c-2.43.62-4.92.94-7.4.94h-5.43c-2.49 0-4.97-.32-7.4-.94l-2.05 9.72Zm14.88-9.87h-5.43c-15.88 0-28.79-12.92-28.79-28.79 0-1.96.21-3.94.61-5.89l.08-.4h61.62l.08.4c.41 1.95.61 3.93.61 5.89 0 15.88-12.92 28.79-28.79 28.79Zm-32.71-34.08a27.96 27.96 0 0 0-.51 5.29c0 15.32 12.47 27.79 27.79 27.79h5.43c15.32 0 27.79-12.47 27.79-27.79 0-1.76-.17-3.54-.51-5.29H70.01Zm63.35-1.08H66.64c-2.33 0-4.22-1.9-4.22-4.22s1.9-4.23 4.22-4.23h66.72c2.33 0 4.23 1.9 4.23 4.23s-1.9 4.22-4.23 4.22Zm-66.72-7.45a3.224 3.224 0 0 0 0 6.45h66.72c1.78 0 3.23-1.45 3.23-3.22s-1.45-3.23-3.23-3.23H66.64Zm61.55-1.09h-9.53V67.16c0-1.95-.31-3.89-.92-5.77l-.21-.66h28.98v.5c-.15 19.64-8.37 35.61-18.31 35.61Zm-8.53-1h8.53c9.32 0 17.03-15.26 17.3-34.12h-26.6c.51 1.77.77 3.59.77 5.42v28.69Zm-1.08 1H81.43V67.16c0-10.24 8.33-18.57 18.58-18.57s18.58 8.33 18.58 18.58v29.69Zm-36.16-1h35.15V67.16c0-9.69-7.88-17.58-17.58-17.58s-17.58 7.88-17.58 17.57v28.69Zm-1.08 1h-9.53c-9.95 0-18.16-15.98-18.31-35.61v-.5h28.97l-.21.66c-.61 1.88-.92 3.82-.92 5.77v29.69ZM54.51 61.74c.27 18.86 7.99 34.12 17.3 34.12h8.53V67.17c0-1.83.26-3.65.77-5.42h-26.6Zm28.01-1.09H53.71a3.06 3.06 0 1 1 0-6.12h32.52l-.67.82c-1.21 1.48-2.2 3.16-2.92 4.99l-.12.32Zm-28.81-5.12c-1.14 0-2.06.92-2.06 2.06s.92 2.06 2.06 2.06h28.13c.61-1.48 1.39-2.86 2.31-4.12H53.7Zm92.58 5.12h-28.81l-.12-.32a18.43 18.43 0 0 0-2.92-4.99l-.67-.82h32.53a3.06 3.06 0 1 1 0 6.12Zm-28.14-1h28.13c1.14 0 2.06-.92 2.06-2.06s-.92-2.06-2.06-2.06h-30.45c.93 1.26 1.7 2.64 2.31 4.12Z"></path>
                            </g>
                        </svg>

                        <span className={'offer_text1'}>BATHROOM REMODELING</span>
                        <span className={'offer_text2'}>
                            Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.
                        </span>
                    </div>
                    <div className={'offer_card'}>
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="18 17 161.99 162" viewBox="18 17 161.99 162"
                             xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true"
                             aria-label="" fill={'white'} className={'offer_shape_svg'}>
                            <g>
                                <path
                                    d="M169.03 179H28.97C22.92 179 18 174.08 18 168.03V27.97C18 21.92 22.92 17 28.97 17h140.05c6.05 0 10.97 4.92 10.97 10.97v140.05c0 6.05-4.92 10.97-10.97 10.97ZM28.97 19C24.02 19 20 23.03 20 27.97v140.05c0 4.95 4.03 8.97 8.97 8.97h140.05c4.95 0 8.97-4.03 8.97-8.97V27.97c0-4.95-4.03-8.97-8.97-8.97H28.97Z"></path>
                                <path
                                    d="M152.83 152.92h-29.81v-16.98h-16.95V118.8l-16.95.19v-17.2H47.17V47.07h105.66v105.85Zm-27.81-2h25.81V49.08H49.17V99.8h41.95v17.17l16.95-.19v17.16h16.95v16.98Z"></path>
                                <path
                                    d="M83.02 101.51H56.51V58.66h26.51v42.85Zm-24.51-2h22.51V60.66H58.51v38.85Z"></path>
                                <path d="M75.89 79.07a3.06 3.06 0 1 1-6.12 0 3.06 3.06 0 0 1 6.12 0z"></path>
                            </g>
                        </svg>
                        <span className={'offer_text1'}>BASEMENT FINISHING</span>
                        <span className={'offer_text2'}>
                           Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.
                        </span>
                    </div>
                </div>

                <div className={'cards_bottom_container'}>
                    <div className={'offer_card'}>
                        <svg
                            preserveAspectRatio="xMidYMid meet"
                            data-bbox="18 17 161.99 162"
                            viewBox="18 17 161.99 162"
                            xmlns="http://www.w3.org/2000/svg"
                            role="presentation"
                            aria-hidden="true"
                            fill={'white'}
                            className={'offer_shape_svg'}
                        >
                            <g>
                                <path
                                    d="M169.03 179H28.97C22.92 179 18 174.08 18 168.03V27.97C18 21.92 22.92 17 28.97 17h140.05c6.05 0 10.97 4.92 10.97 10.97v140.05c0 6.05-4.92 10.97-10.97 10.97ZM28.97 19C24.02 19 20 23.03 20 27.97v140.05c0 4.95 4.03 8.97 8.97 8.97h140.05c4.95 0 8.97-4.03 8.97-8.97V27.97c0-4.95-4.03-8.97-8.97-8.97H28.97Z"></path>
                                <path
                                    d="M52.2 66.69h2.31v3.58c0 2.86 2.33 5.18 5.18 5.18h79.63c2.86 0 5.18-2.33 5.18-5.18V62.6c3.23.26 5.79 2.94 5.79 6.24v10.44a6.29 6.29 0 0 1-4.25 5.95l-38.75 13.24a12.74 12.74 0 0 0-8.59 11.39h-5.9c-.7 0-1.29.55-1.32 1.25l-1.67 31.86c0 5.53 4.5 10.02 10.02 10.02s10.02-4.49 10.02-10.09l-1.67-31.79c-.04-.7-.62-1.25-1.32-1.25h-5.49c.27-4.04 2.9-7.57 6.78-8.89l38.75-13.25a8.927 8.927 0 0 0 6.04-8.45V68.83c0-4.76-3.74-8.65-8.44-8.91v-7.75c0-2.86-2.33-5.18-5.18-5.18H59.69c-2.86 0-5.18 2.33-5.18 5.18v3.58H52.2c-2.83 0-5.14 2.3-5.14 5.14v.64c0 2.83 2.31 5.14 5.14 5.14Zm53.41 45.83 1.6 30.46c0 4.07-3.31 7.37-7.38 7.37s-7.38-3.31-7.38-7.31l1.6-30.53h11.56ZM57.15 52.18c0-1.4 1.14-2.54 2.54-2.54h79.63c1.4 0 2.54 1.14 2.54 2.54v18.09c0 1.4-1.14 2.54-2.54 2.54H59.69c-1.4 0-2.54-1.14-2.54-2.54V52.18Zm-7.44 8.73c0-1.37 1.12-2.49 2.49-2.49h2.31v5.63H52.2c-1.37 0-2.49-1.12-2.49-2.49v-.64Z"></path>
                            </g>
                        </svg>

                        <span className={'offer_text1'}>HOME ADDITIONS</span>
                        <span className={'offer_text2'}>Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.</span>
                    </div>
                    <div className={'offer_card'}>
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="18 17 161.99 162" viewBox="18 17 161.99 162"
                             xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true"
                             aria-label="" fill={'white'} className={'offer_shape_svg'}>
                            <g>
                                <path
                                    d="M169.03 179H28.97C22.92 179 18 174.08 18 168.03V27.97C18 21.92 22.92 17 28.97 17h140.05c6.05 0 10.97 4.92 10.97 10.97v140.05c0 6.05-4.92 10.97-10.97 10.97ZM28.97 19C24.02 19 20 23.03 20 27.97v140.05c0 4.95 4.03 8.97 8.97 8.97h140.05c4.95 0 8.97-4.03 8.97-8.97V27.97c0-4.95-4.03-8.97-8.97-8.97H28.97Z"></path>
                                <path
                                    d="M152 146.46c0-2.45-1.99-4.44-4.44-4.44H73.02l-1.8-9.23c-.06-.34-.26-.63-.54-.82-.1-.07-10.1-6.97-14.91-16.27-11.35-21.77-2.86-48.72 18.91-60.06 21.78-11.35 48.72-2.87 60.06 18.91.33.63 1.09.88 1.72.57l12.38-6.01c.65-.31.92-1.09.6-1.74-.31-.65-1.09-.92-1.74-.6l-11.26 5.47c-12.33-22.22-40.3-30.71-62.97-18.9-11.16 5.82-19.39 15.63-23.17 27.64-3.74 11.89-2.68 24.53 3 35.61l-1.21 25.47c-2.28.18-4.09 2.08-4.09 4.4v1.09c0 2.45 1.99 4.44 4.44 4.44h95.12c2.45 0 4.44-1.99 4.44-4.44v-1.09Zm-83.24-12.65 1.61 8.21H54.69l1.02-21.39c4.73 6.93 11.28 11.9 13.06 13.18Zm80.64 13.75c0 1.02-.83 1.84-1.84 1.84H52.44c-1.02 0-1.84-.83-1.84-1.84v-1.09c0-1.02.83-1.84 1.84-1.84h95.12c1.02 0 1.84.83 1.84 1.84v1.09Z"></path>
                                <path
                                    d="M130.02 77c-6.56-12.53-19.68-21.1-34.77-21.1-21.63 0-39.23 17.6-39.23 39.23 0 6.25 1.48 12.17 4.09 17.42.01.03.01.06.02.09.02.04.05.07.08.11 6.46 12.81 19.74 21.62 35.03 21.62 21.63 0 39.23-17.6 39.23-39.23a39 39 0 0 0-4.38-17.98c-.01-.03 0-.05-.02-.08-.01-.03-.04-.04-.05-.07ZM95.25 58.5c13.65 0 25.57 7.51 31.87 18.61l-23.49 11.95c-1.24-1.72-2.98-3-5.04-3.65-2.53-.8-5.22-.57-7.57.65a9.881 9.881 0 0 0-4.89 5.81c-.63 2-.61 4.11.03 6.06l-24.25 12.33a36.33 36.33 0 0 1-3.29-15.14c0-20.2 16.43-36.63 36.63-36.63Zm3.59 42.88c-3.27 1.7-7.23.67-9.32-2.24l12.89-6.56a7.319 7.319 0 0 1-3.58 8.79Zm-6.62-13.01a7.344 7.344 0 0 1 9.06 1.88l-12.76 6.49c-.86-3.24.61-6.77 3.7-8.37Zm3.03 43.38c-13.87 0-25.97-7.75-32.18-19.15l24.13-12.27a9.926 9.926 0 0 0 8.29 4.47c1.54 0 3.1-.36 4.55-1.11 4.5-2.33 6.46-7.66 4.72-12.29l23.57-11.98a36.415 36.415 0 0 1 3.55 15.71c0 20.2-16.43 36.63-36.63 36.63Z"></path>
                            </g>
                        </svg>
                        <span className={'offer_text1'}>EXTERIOR RENOVATIONS</span>
                        <span className={'offer_text2'}>
                            Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.
                        </span>
                    </div>
                    <div className={'offer_card'}>
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="18 17 161.99 162" viewBox="18 17 161.99 162"
                             xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true"
                             fill={'white'}
                             aria-label="" className={'offer_shape_svg'}>
                            <g>
                                <path
                                    d="M169.03 179H28.97C22.92 179 18 174.08 18 168.03V27.97C18 21.92 22.92 17 28.97 17h140.05c6.05 0 10.97 4.92 10.97 10.97v140.05c0 6.05-4.92 10.97-10.97 10.97ZM28.97 19C24.02 19 20 23.03 20 27.97v140.05c0 4.95 4.03 8.97 8.97 8.97h140.05c4.95 0 8.97-4.03 8.97-8.97V27.97c0-4.95-4.03-8.97-8.97-8.97H28.97Z"></path>
                                <path
                                    d="M151.45 48H48.55c-.3 0-.55.25-.55.55v102.9c0 .3.25.55.55.55h102.9c.3 0 .55-.25.55-.55V48.55c0-.3-.25-.55-.55-.55Zm-50.9 51.45V74.82h50.35v24.63h-50.35Zm-51.45 1.1h50.35v24.63H49.1v-24.63Zm101.8-26.82h-50.35V49.1h50.35v24.63ZM99.45 99.45H74.82V49.1h24.63v50.35ZM49.1 49.1h24.63v50.35H49.1V49.1Zm0 77.17h50.35v24.63H49.1v-24.63Zm51.45-25.72h24.63v50.35h-24.63v-50.35Zm50.35 50.35h-24.63v-50.35h24.63v50.35Z"></path>
                                <path
                                    d="M151.45 152.5H48.55c-.58 0-1.05-.47-1.05-1.05V48.55c0-.58.47-1.05 1.05-1.05h102.9c.58 0 1.05.47 1.05 1.05v102.9c0 .58-.47 1.05-1.05 1.05Zm-102.9-104L48.5 100v51.45l51.5.05h51.45l.05-51.5V48.55l-.05-.05H48.55Zm51.4 102.9H48.6v-25.63h51.35v25.63Zm-50.35-1h49.35v-23.63H49.6v23.63Zm101.8 1h-25.63v-51.35h25.63v51.35Zm-24.63-1h23.63v-49.35h-23.63v49.35Zm-1.09 1h-25.63v-51.35h25.63v51.35Zm-24.63-1h23.63v-49.35h-23.63v49.35Zm-1.1-24.72H48.6v-25.63h51.35v25.63Zm-50.35-1h49.35v-23.63H49.6v23.63Zm101.8-24.73h-51.35V74.32h51.35v25.63Zm-50.35-1h49.35V75.32h-49.35v23.63Zm-1.1 1H74.32V48.6h25.63v51.35Zm-24.63-1h23.63V49.6H75.32v49.35Zm-1.09 1H48.6V48.6h25.63v51.35Zm-24.63-1h23.63V49.6H49.6v49.35Zm101.8-24.72h-51.35V48.6h51.35v25.63Zm-50.35-1h49.35V49.6h-49.35v23.63Z"></path>
                            </g>
                        </svg>
                        <span className={'offer_text1'}>FLOORING INSTALLATION</span>
                        <span className={'offer_text2'}>
                           Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}