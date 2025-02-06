import React, {useEffect, useRef, useState} from 'react';


export default function NumberSection() {
    const numberSectionRef = useRef(null)
    const [isInView, setIsInView] = useState(false)


    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                setIsInView(entry.isIntersecting)
            }, {threshold: 0.7}
        )

        if(numberSectionRef.current){
            observer.observe(numberSectionRef.current)
        }

        return() => {
            if(numberSectionRef.current){
                observer.unobserve(numberSectionRef.current)
            }
        }

    },[]);

    useEffect( () => {
        if(isInView){
            document.querySelectorAll('.number_box').forEach(box => box.classList.add('number_section_in_view'))
        }
    }, [isInView]);


    return (
        <div ref={numberSectionRef} className={'number_section'}>
            <span className={'number_title'}>US IN NUMBERS</span>
            <div className={'number_box_container'}>
                <div className={'number_box flex_center'}>
                    <span className={'number'}>48</span>
                    <span className={'number_text'}>Current Projects</span>
                </div>
                <div className={'number_box flex_center'}>
                    <span className={'number'}>282</span>
                    <span className={'number_text'}>Homes Renovated</span>
                </div>
                <div className={'number_box flex_center'}>
                    <span className={'number'}>35</span>
                    <span className={'number_text'}>Valued Partners</span>
                </div>
            </div>
        </div>
    )
}