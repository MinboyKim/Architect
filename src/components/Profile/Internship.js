import { useMediaQuery } from "react-responsive";

import style from "./Internship.module.css";

const Internship = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return (
        <div className={style.wrapper}>
            <div className={!isMobile ? style.year : style.mYear}>
                2019. 10 ~
                <br />
                2022. 09
                <br />
                Vacation
            </div>
            <div className={!isMobile ? style.content : style.mContent}>
                <div className={style.title}>
                    SOME Architectes, Seoul - Internship
                </div>
                <div className={style.description}>
                    <ul className={!isMobile ? style.list : style.mList}>
                        <li className={!isMobile ? style.item : style.mItem}>
                            <div className={style.item__title}>
                                GS Hwado Training Institue
                            </div>
                            <div className={style.item__detail}>Intership</div>
                        </li>
                        <li className={!isMobile ? style.item : style.mItem}>
                            <div className={style.item__title}>
                                Seocho High-end Housing
                            </div>
                            <div className={style.item__detail}>Intership</div>
                        </li>
                        <li className={!isMobile ? style.item : style.mItem}>
                            <div className={style.item__title}>
                                Goseong Surfing Resort
                            </div>
                            <div className={style.item__detail}>Intership</div>
                        </li>
                        <li className={!isMobile ? style.item : style.mItem}>
                            <div className={style.item__title}>
                                PORTRONE Vertiport Prototype
                            </div>
                            <div className={style.item__detail}>Design</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Internship;
