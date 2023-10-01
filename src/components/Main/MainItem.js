import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import style from "./MainItem.module.css";

const MainItem = ({ img, link, title }) => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });
    return (
        <Link to={link} className={!isMobile ? style.wrapper : style.mWrapper}>
            <img
                className={title === "ACADEMIC" ? style.border : ""}
                src={`${process.env.PUBLIC_URL}/img/main/${img}.jpeg`}
            ></img>
            <span className={style.title}>{title}</span>
        </Link>
    );
};

export default MainItem;
