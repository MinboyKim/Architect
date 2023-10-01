import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import style from "./Thumbnail.module.css";

const Thumbnail = ({ link, image, title }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });

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
                        !isMobile
                            ? isHovered
                                ? image + "meta/bright.jpg"
                                : image + "meta/dark.jpg"
                            : image + "meta/bright.jpg"
                    }
                    alt={title}
                />
                <span
                    className={style.title}
                    style={{
                        visibility: !isMobile
                            ? isHovered
                                ? "visible"
                                : "hidden"
                            : "visible",
                    }}
                >
                    {title}
                </span>
            </div>
        </Link>
    );
};

export default Thumbnail;
