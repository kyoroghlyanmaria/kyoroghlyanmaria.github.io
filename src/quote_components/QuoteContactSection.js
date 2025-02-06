export default function QuoteContactSection() {
    return (
        <div className={'quote_contact_section'}>
            <div className={'quote_contact_content_box'}>
                <span className={'quote_title'}>CONTACT US</span>
                <span className={'quote_text'}>For any inquiries or questions contact us:</span>
                <div className={'info_box'}>
                    <div>
                        <span>ADDRESS</span>
                        <span>
                            500 Terry Francine St,<br/>
                            San Francisco, CA 94158
                        </span>
                    </div>
                    <div>
                        <span>OFFICE HOURS</span>
                        <span>
                            Monday - Friday: <br/>
                            7AM - 5PM
                        </span>
                    </div>
                    <div>
                        <span>EMAIL</span>
                        <span>info@mysite.com</span>
                    </div>
                    <div>
                        <span>PHONE</span>
                        <span>123-456-7890</span>
                    </div>
                </div>
            </div>
        </div>
    )
}