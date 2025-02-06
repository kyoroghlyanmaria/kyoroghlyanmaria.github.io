export default function Footer() {
    return(
        <div className="footer_container">
        <div className={'footer_content'}>
            <div className={'logo_text_box'}><a className={'logo_text'} href="#">Renovyte.</a></div>
            <div className={'content'}>
                <div className={'content_box first'}>
                    <a href="#">SERVICES</a>
                    <a href="#"> PROJECTS </a>
                    <a href="#">ABOUT US</a>
                </div>
                <div className={'content_box second'}>
                    <span>HEAD OFFICE</span>
                    <span>
                            500 Terry Francine St,
                        <br/>
                            San Francisco, CA 94158
                    </span>
                    <span>
                        H123-456-7890
                        <br/>
                        info@mysite.com
                    </span>
                </div>
                <div className={'content_box'}>
                    <a href="#">SOCIALS</a>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                </div>
                <div className={'content_box forth'}>
                    <span>INQUIRIES</span>
                    <button className="get_quote header_btn white_hovered_btn flex_center button"><a href="/HomePage">GET A
                        QUOTE</a>
                        <svg className="get_quote_svg_black" data-bbox="19.5 21.8 161 156.4" viewBox="0 0 200 200"
                             height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                            <g>
                                <path
                                    d="M180.5 57.7v120.5H64.8v-19.3H147L19.5 35.7l13.4-13.9 128.2 124V57.7h19.4z"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className={'footer_copyright'}>
            <div className={'footer_copyright_box1'}>
                <span>Privacy Policy</span>
                <span>Accessibility Statement</span>
            </div>
            <span>© 2035 by Renovyte. Made with <span style={{'text-decoration':'underline'}}>Wix Studio</span></span>
        </div>
        </div>)
}