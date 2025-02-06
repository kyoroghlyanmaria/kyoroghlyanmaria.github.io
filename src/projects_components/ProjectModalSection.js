import React, { useState, useRef } from 'react';

export default function () {
    const contentRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const CloseModal = () => {
        document.querySelector('.project_modal_section').classList.add('hidden');
        handleFullScreen()
    };

    const handleFullScreen = () => {
        if (isFullScreen) {
            // Exit full-screen mode
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen(); // Firefox
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen(); // Safari
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen(); // IE/Edge
            }
            setIsFullScreen(false);
            document.querySelector('.modal_title').classList.remove('hidden');
            document.querySelector('.modal_image').classList.remove('modal_image_full');


        } else {
            // Enter full-screen mode
            if (contentRef.current) {
                if (contentRef.current.requestFullscreen) {
                    contentRef.current.requestFullscreen();
                } else if (contentRef.current.mozRequestFullScreen) {
                    contentRef.current.mozRequestFullScreen(); // Firefox
                } else if (contentRef.current.webkitRequestFullscreen) {
                    contentRef.current.webkitRequestFullscreen(); // Safari
                } else if (contentRef.current.msRequestFullscreen) {
                    contentRef.current.msRequestFullscreen(); // IE/Edge
                }
                setIsFullScreen(true);
                document.querySelector('.modal_title').classList.add('hidden');
                document.querySelector('.modal_image').classList.add('modal_image_full');
            }

        }
    };

    return (
        <div ref={contentRef} className={'project_modal_section hidden'}>
            <div className={'control_box'}>
                <div onClick={handleFullScreen} className={'full-screen'}>
                    <img src="/images/full-screen.png" alt="full screen" />
                </div>
                <div onClick={CloseModal} className={'close'}>
                    <img src="/images/close.png" alt="close" />
                </div>
            </div>
            <div className={'modal_image'}>
                <img src="/images/slide_img1.webp" alt="img" />
            </div>
            <div className={'modal_title'}>
                <span>House entrance renovation</span>
            </div>
        </div>
    );
}
