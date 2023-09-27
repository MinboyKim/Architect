import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Link to="/profile">
                <img
                    src={`${process.env.PUBLIC_URL}/img/util/plus.png`}
                    alt="plus"
                ></img>
            </Link>
            <span className={style.text}>Website Date : 25 - 02 - 2022</span>
            <a rel="noreferrer" target="_blank" href="mailto:97kimdy@gmail.com">
                <span className={style.text}>| E-Mail : 97kimdy@gmail.com</span>
            </a>
            <span className={style.text}>| Phone : + 82) 1033063248</span>
            <Link to="/">
                <span className={style.text}>
                    | Website : https://kimdongyoung.kr
                </span>
            </Link>
        </footer>
    );
};

export default Footer;
