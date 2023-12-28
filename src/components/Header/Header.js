import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Popup from "../Popup/Popup";

import style from "./Header.module.css";

const Header = () => {
    const [popup, setPopup] = useState(false);
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });

    const handleMouseEnter = () => {
        setPopup(true);
    };

    const handleMouseLeave = () => {
        setPopup(false);
    };

    return (
        <header className={`${isMobile ? style.mHeader : ""} ${style.header}`}>
            {!isMobile ? (
                <div
                    className={`${style.popupWrapper}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/">
                        <img
                            className={style.headerImg}
                            src={`${process.env.PUBLIC_URL}/img/main/logo.png`}
                        ></img>
                    </Link>
                    <div
                        className={style.board}
                        style={{ display: popup ? "block" : "none" }}
                    ></div>
                    <div style={{ display: popup ? "block" : "none" }}>
                        <Popup />
                    </div>
                </div>
            ) : (
                <Link to="/">
                    <img
                        className={style.mHeaderImg}
                        src={`${process.env.PUBLIC_URL}/img/main/logo.png`}
                        alt="popup"
                    ></img>
                </Link>
            )}{" "}
            <Link to="/profile">
                <img
                    className={style.logo}
                    src={`${process.env.PUBLIC_URL}/img/main/popup.png`}
                ></img>{" "}
            </Link>
        </header>
    );
};

export default Header;
