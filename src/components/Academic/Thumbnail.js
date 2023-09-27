import { useState } from "react";
import { Link } from "react-router-dom";

import style from "./Thumbnail.module.css";

const Thumbnail = ({ link, image, title }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link to={`/${link}`}>
            <div
                className={style.wrapper}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className={style.image}
                    src={
                        isHovered
                            ? image + "meta/bright.jpg"
                            : image + "meta/dark.jpg"
                    }
                    alt={title}
                />
                <span
                    className={style.title}
                    style={{ visibility: isHovered ? "visible" : "hidden" }}
                >
                    {title}
                </span>
            </div>
        </Link>
    );
};

export default Thumbnail;
