import style from "./Internship.module.css";

const Internship = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.year}>
                2019. 10 ~
                <br />
                2022. 09
                <br />
                Vacation
            </div>
            <div className={style.content}>
                <div className={style.title}>
                    SOME Architectes, Seoul - Internship
                </div>
                <div className={style.description}>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <div className={style.item__title}>
                                GS Hwado Training Institue
                            </div>
                            <div className={style.item__detail}>Intership</div>
                        </li>
                        <li className={style.item}>
                            <div className={style.item__title}>
                                Seocho High-end Housing
                            </div>
                            <div className={style.item__detail}>Intership</div>
                        </li>
                        <li className={style.item}>
                            <div className={style.item__title}>
                                Goseong Surfing Resort
                            </div>
                            <div className={style.item__detail}>Intership</div>
                        </li>
                        <li className={style.item}>
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
