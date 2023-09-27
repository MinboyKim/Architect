import { Link } from "react-router-dom";

import style from "./MainItem.module.css";

const MainItem = ({ img, link, title }) => {
    return (
        <Link to={link} className={style.wrapper}>
            <img
                className={title === "ACADEMIC" ? style.border : ""}
                src={`${process.env.PUBLIC_URL}/img/main/${img}.jpeg`}
            ></img>
            <span className={style.title}>{title}</span>
        </Link>
    );
};

export default MainItem;
