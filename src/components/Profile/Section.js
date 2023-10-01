import style from "./Section.module.css";

const Section = ({ name, children }) => {
    return (
        <div
            className={
                !(name === "EXTRA CURRICULAR")
                    ? style.wrapper
                    : style.wrapperExt
            }
            style={name === "ACHIEVEMENTS" ? { marginBottom: "0.5rem" } : {}}
        >
            <div className={style.header}>{name}</div>
            <div className={style.divider}></div>
            <div className={style.content}>{children}</div>
        </div>
    );
};

export default Section;
