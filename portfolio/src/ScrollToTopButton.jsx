import { useState, useEffect } from 'react';
import arrow from './assets/arrow-up.svg';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 700);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        isVisible && (
            <a href="#top" className="back-to-top" title="Back to Top">
                <img src={arrow} alt="Back to Top" className="back-to-top__image" />
            </a>
        )
    );
}
