import React from "react";

export default function AboutSkillSection() {

    return (
        <div className={'about_skill_section'}>
            <div className={'offer_card_container'}>
                <div className={'offer_card'}>
                    <span className={'offer_text1'}>KITCHEN REMODELING</span>
                    <span className={'offer_text2'}>Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.</span>
                </div>
                <div className={'offer_card'}>
                    <span className={'offer_text1'}>BATHROOM REMODELING</span>
                    <span className={'offer_text2'}>
                            Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.
                        </span>
                </div>
                <div className={'offer_card'}>
                    <span className={'offer_text1'}>HOME ADDITIONS</span>
                    <span className={'offer_text2'}>
                           Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and  how to book.
                    </span>
                </div>
            </div>
        </div>
    )
}