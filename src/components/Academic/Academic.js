import { Link } from "react-router-dom";

import Thumbnail from "./Thumbnail";
import { meta } from "../../db";

import style from "./Academic.module.css";

const Academic = () => {
    return (
        <div className={style.academicWrapper}>
            <h3 className={style.title}>ACADEMIC PROJECTS 2016 ~ 2023</h3>
            <div className={style.container}>
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
