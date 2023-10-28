import { useMediaQuery } from "react-responsive";

import Thumbnail from "./Thumbnail";
import { meta } from "../../db";

import style from "./Academic.module.css";
import { Fragment } from "react";

const Academic = (props) => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });
    return (
        <div className={style.academicWrapper}>
            {props.popup ? (
                ""
            ) : (
                <Fragment>
                    <h3 className={style.title}>
                        ACADEMIC PROJECTS 2016 ~ 2023
                    </h3>
                    <div
                        className={
                            !isMobile ? style.container : style.mContainer
                        }
                    >
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
                </Fragment>
            )}
        </div>
    );
};

export default Academic;
