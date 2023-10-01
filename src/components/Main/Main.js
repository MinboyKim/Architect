import MainItem from "./MainItem";
import { useMediaQuery } from "react-responsive";

import style from "./Main.module.css";
import { Link } from "react-router-dom";

const Main = () => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });
    return (
        <main className={!isMobile ? style.main : style.mMain}>
            <MainItem
                img="portfolio"
                link="/portfolio"
                title="PORTFOLIO 2023"
            />
            <div className={!isMobile ? style.divider : style.mDivider}></div>
            <MainItem
                img="academic"
                link="/academic"
                title="ACADEMIC PROJECTS"
            />
            {isMobile && (
                <div className={style.nav}>
                    <Link to="/" className={style.navItem}>
                        <span>- MAIN</span>
                    </Link>
                    <Link to="/profile" className={style.navItem}>
                        <span>- PROFILE</span>
                    </Link>
                    <Link to="/portfolio" className={style.navItem}>
                        <span>- PORTFOLIO 2023</span>
                    </Link>
                    <Link to="/academic">
                        <span>- ACADEMIC PROJECTS</span>
                    </Link>
                </div>
            )}
        </main>
    );
};

export default Main;
