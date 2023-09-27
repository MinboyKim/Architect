import style from "./Experience.module.css";

const Experience = ({ year, title, description, detail }) => {
    return (
        <div className={style.wrapper}>
            <div
                className={style.year}
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
            <div className={style.content}>
                <div className={style.title}>{title}</div>
                <div className={style.description}>
                    {description === "" ? "\u00A0" : description}
                </div>
            </div>
            <div
                className={
                    title === "지상작전사령부 병영도서관 인테리어 유공" ||
                    description === "대한건축사협회 대구광역시건축사회"
                        ? style.detailSilver
                        : style.detail
                }
            >
                {detail}
                <br />
                <br />
            </div>
        </div>
    );
};

export default Experience;
