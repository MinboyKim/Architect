import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import style from "./LandingImage.module.css";

const LandingImage = (props) => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });
    const [fadeOut, setFadeOut] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false);

    useEffect(() => {
        if (fadeOut) {
            const timeoutId = setTimeout(() => {
                setIsRemoved(true);
            }, 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [fadeOut]);

    const clickHandler = () => {
        setFadeOut(true);
        setTimeout(() => props.setPopup(), 1000);
    };

    if (isRemoved) {
        return null;
    }

    return (
        <div
            className={`${style.landingImage} ${fadeOut ? style.fadeOut : ""} ${
                isMobile ? style.hfull : ""
            }`}
            onClick={clickHandler}
        >
            <img src="/img/renewal.jpg" alt="renewal" className={style.img} />
            {isMobile && (
                <img
                    src="/img/util/escape.png"
                    alt="escape"
                    className={style.escape}
                />
            )}
        </div>
    );
};

export default LandingImage;
