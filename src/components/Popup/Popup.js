import { Link } from "react-router-dom";

import style from "./Popup.module.css";

const Popup = () => {
    return (
        <div className={style.popup}>
            <div className={style.popup__content}>
                <Link to="/">
                    <span className={style.popup__content__profile}>
                        - MAIN
                    </span>
                </Link>
                <Link to="/profile">
                    <span className={style.popup__content__profile}>
                        - PROFILE
                    </span>
                </Link>
                <Link to="/portfolio">
                    <span className={style.popup__content__portfolio}>
                        - PORTFOLIO 2023
                    </span>
                </Link>
                <Link to="/academic">
                    <span className={style.popup__content__academic}>
                        - ACADEMIC PROJECTS
                    </span>
                </Link>
                <div className={style.popup__content__contact}>
                    <a
                        target="_blank"
                        href="mailto:97kimdy@gmail.com"
                        className={style.emailText}
                    >
                        <span>| E-Mail : 97kimdy@gmail.com</span>
                    </a>
                    <span>| Phone : +82) 1033063248</span>
                </div>
                <div className={style.popup__content__insta}>
                    <a
                        href="https://www.instagram.com/dongvoung/"
                        target="_blank"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/img/popup/insta.png`}
                        ></img>
                        <span className={style.popup__content__insta__text}>
                            DONGVOUNG
                        </span>
                        <img
                            className={style.qr}
                            src={`${process.env.PUBLIC_URL}/img/popup/qr.png`}
                        ></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Popup;
