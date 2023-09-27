import MainItem from "./MainItem";

import style from "./Main.module.css";

const Main = () => {
    return (
        <main className={style.main}>
            <MainItem
                img="portfolio"
                link="/portfolio"
                title="PORTFOLIO 2023"
            />
            <div className={style.divider}></div>
            <MainItem
                img="academic"
                link="/academic"
                title="ACADEMIC PROJECTS"
            />
        </main>
    );
};

export default Main;
