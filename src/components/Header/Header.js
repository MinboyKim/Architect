import { useState } from "react";
import { Link } from "react-router-dom";

import Popup from "../Popup/Popup";

import style from "./Header.module.css";

const Header = () => {
    const [popup, setPopup] = useState(false);

    const handleMouseEnter = () => {
        setPopup(true);
    };

    const handleMouseLeave = () => {
        setPopup(false);
    };

    return (
        <header className={style.header}>
            <div
                className={`${style.popupWrapper}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link to="/">
                    <img
                        className={style.headerImg}
                        src={`${process.env.PUBLIC_URL}/img/main/logo.jpeg`}
                    ></img>
                </Link>
                <div
                    className={style.board}
                    style={{ display: popup ? "block" : "none" }}
                ></div>
                <div style={{ display: popup ? "block" : "none" }}>
                    <Popup />
                </div>
            </div>{" "}
            <Link to="/profile">
                <img
                    className={style.logo}
                    src={`${process.env.PUBLIC_URL}/img/main/popup.jpeg`}
                ></img>{" "}
            </Link>
        </header>
    );
};

export default Header;
