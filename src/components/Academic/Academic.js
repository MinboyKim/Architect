import { useMediaQuery } from "react-responsive";

import Thumbnail from "./Thumbnail";
import { meta } from "../../db";

import style from "./Academic.module.css";

const Academic = () => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });
    return (
        <div className={style.academicWrapper}>
            <h3 className={style.title}>ACADEMIC PROJECTS 2016 ~ 2023</h3>
            <div className={!isMobile ? style.container : style.mContainer}>
                {meta.map((project, index) => {
                    return (
                        <Thumbnail
                            key={index}
                            link={project.link}
                            image={project.image}
                            title={project.title}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Academic;
