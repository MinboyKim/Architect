import { useMediaQuery } from "react-responsive";

import style from "./Experience.module.css";

const Experience = ({ year, title, description, detail }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return (
        <div className={style.wrapper}>
            <div
                className={!isMobile ? style.year : style.mYear}
                style={
                    year === "SKILLS"
                        ? {
                              fontFamily: "AppleSDGothicNeoM",
                              opacity: "1",
                              fontWeight: "bold",
                          }
                        : {}
                }
            >
                {year}
                <br />
                <br />
            </div>
            <div className={!isMobile ? style.container : style.mContainer}>
                <div className={!isMobile ? style.content : style.mContent}>
                    <div className={style.title}>{title}</div>
                    <div className={style.description}>
                        {description === "" ? "\u00A0" : description}
                    </div>
                </div>
                <div
                    className={
                        !isMobile
                            ? title ===
                                  "지상작전사령부 병영도서관 인테리어 유공" ||
                              description ===
                                  "대한건축사협회 대구광역시건축사회"
                                ? style.detailSilver
                                : style.detail
                            : title ===
                                  "지상작전사령부 병영도서관 인테리어 유공" ||
                              description ===
                                  "대한건축사협회 대구광역시건축사회"
                            ? style.mDetailSilver
                            : style.mDetail
                    }
                >
                    {detail}
                    {!isMobile && <br />}
                    {!isMobile && <br />}
                </div>
            </div>
        </div>
    );
};

export default Experience;
