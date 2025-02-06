import {Link, NavLink} from 'react-router-dom';
import {useState} from "react";

export default function HeaderHome() {
    const [isInView, setIsInView] = useState(false);

    function handleClick() {
        setIsInView(!isInView);
    }

    function closeMenu() {
        setIsInView(false);
    }

    return (
        <div className={'header_container'}>
            <video autoPlay muted loop id="bgVideo">
                <source
                    src="https://video.wixstatic.com/video/11062b_43edac00571f4b05bb740639157efecd/1080p/mp4/file.mp4"
                    type="video/mp4"
                />
            </video>

            <div className="layer"></div>

            <div className={'menu_container'}>
                <div className={'logo'}>
                    <li><Link to="/">Renovyte.</Link></li>
                </div>
                <div className={'menu'}>
                    <div className={'burger_menu'}>
                        <button className={'get_quote menu_btn orange_hovered_btn flex_center button'}>
                            <a href="/quote">GET A QUOTE</a>
                            <svg className={'get_quote_svg_white'} data-bbox="19.5 21.8 161 156.4" viewBox="0 0 200 200"
                                 height="200" width="200"
                                 xmlns="http://www.w3.org/2000/svg" data-type="shape">
                                <g>
                                    <path
                                        d="M180.5 57.7v120.5H64.8v-19.3H147L19.5 35.7l13.4-13.9 128.2 124V57.7h19.4z"></path>
                                </g>
                            </svg>
                        </button>
                        <img onClick={handleClick} className={`close_btn`} src="/images/burger_menu.png" alt=""/>
                    </div>
                    <div className={`mobile_menu ${isInView ? 'mobile_menu_in_view' : 'mobile_menu_not_in_view'}`}>
                        <div className={'close_box'} onClick={closeMenu}>
                            <img src="/images/close.png" alt="close"/>
                        </div>
                        <li>
                            <NavLink
                                to="/services"
                                className={({isActive}) => (isActive ? "active" : "")}
                            >
                                SERVICES
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({isActive}) => (isActive ? "active" : "")}
                            >
                                PROJECTS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({isActive}) => (isActive ? "active" : "")}
                            >
                                ABOUT US
                            </NavLink>
                        </li>
                    </div>
                    <ul className={'menu_list'}>
                        <li>
                            <NavLink
                                to="/services"
                                className={({isActive}) => (isActive ? "active" : "")}
                            >
                                SERVICES
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({isActive}) => (isActive ? "active" : "")}
                            >
                                PROJECTS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({isActive}) => (isActive ? "active" : "")}
                            >
                                ABOUT US
                            </NavLink>
                        </li>
                    </ul>
                    <button className={'get_quote menu_btn orange_hovered_btn flex_center button'}>
                        <a href="/quote">GET A QUOTE</a>
                        <svg className={'get_quote_svg_white'} data-bbox="19.5 21.8 161 156.4" viewBox="0 0 200 200"
                             height="200" width="200"
                             xmlns="http://www.w3.org/2000/svg" data-type="shape">
                            <g>
                                <path
                                    d="M180.5 57.7v120.5H64.8v-19.3H147L19.5 35.7l13.4-13.9 128.2 124V57.7h19.4z"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={'header_text_container'}>
                <span className={'header_title'}>Transforming Spaces, Enhancing Homes</span>
                <span className={'header_text'}>Experienced & Reliable Remodelers since 1968</span>
                <button className={'get_quote header_btn white_hovered_btn flex_center button'}>
                    <a href="/quote">GET A QUOTE</a>
                    <svg className={'get_quote_svg_black'} data-bbox="19.5 21.8 161 156.4" viewBox="0 0 200 200"
                         height="200" width="200"
                         xmlns="http://www.w3.org/2000/svg" data-type="shape">
                        <g>
                            <path d="M180.5 57.7v120.5H64.8v-19.3H147L19.5 35.7l13.4-13.9 128.2 124V57.7h19.4z"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}