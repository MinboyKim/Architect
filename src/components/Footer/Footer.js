import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Link to="/profile">
                <img src={`${process.env.PUBLIC_URL}/img/util/plus.png`}></img>
            </Link>
            <span className={style.text}>Website Date : 25 - 02 - 2022</span>
            <span className={style.text}>| E-Mail : 97kimdy@gmail.com</span>
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
