import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import style from "./Footer.module.css";

const Footer = () => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });
    return (
        <div>
            {!isMobile ? (
                <footer className={style.footer}>
                    <Link to="/profile">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/util/plus.png`}
                            alt="plus"
                        ></img>
                    </Link>
                    <span className={style.text}>
                        Website Date : 25 - 02 - 2022
                    </span>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="mailto:97kimdy@gmail.com"
                    >
                        <span className={style.text}>
                            | E-Mail : 97kimdy@gmail.com
                        </span>
                    </a>
                    <span className={style.text}>
                        | Phone : + 82) 1033063248
                    </span>
                    <Link to="/">
                        <span className={style.text}>
                            | Website : https://kimdongyoung.kr
                        </span>
                    </Link>
                </footer>
            ) : (
                <footer className={style.mFooter}>
                    <span className={style.text}>
                        | E-Mail : 97kimdy@gmail.com
                    </span>
                    <span className={style.text}>
                        | Phone : + 82) 1033063248
                    </span>

                    <a
                        className={style.insta}
                        href="https://www.instagram.com/dongvoung/"
                        target="_blank"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/img/popup/insta.png`}
                        ></img>
                        <span className={style.insta__text}>DONGVOUNG</span>
                        <img
                            className={style.insta__qr}
                            src={`${process.env.PUBLIC_URL}/img/popup/qr.png`}
                        ></img>
                    </a>
                </footer>
            )}
        </div>
    );
};

export default Footer;
