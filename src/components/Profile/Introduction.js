import style from "./Introduction.module.css";

const Introduction = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.dy}>
                <img src={`${process.env.PUBLIC_URL}/img/util/dy.png`} />
            </div>
            <div className={style.content}>
                <div className={style.name}>
                    <span>김동영</span>
                    <span>KIM DONG YOUNG</span>
                </div>
                <div className={style.intro}>
                    Multidisciplinary Architectural Designer
                </div>
                <div className={style.contact}>
                    <span>Contact for Inquiries &nbsp;-</span>
                    <div className={style.contact__container}>
                        <a target="_blank" href="mailto:97kimdy@gmail.com">
                            <div className={style.mail__container}>
                                <img
                                    className={style.mail}
                                    src={`${process.env.PUBLIC_URL}/img/util/mail.png`}
                                />{" "}
                                &nbsp; 97kimdy@gmail.com
                            </div>
                        </a>
                        <div>
                            <a
                                className={style.insta}
                                href="https://www.instagram.com/dongvoung/"
                            >
                                <img
                                    className={style.instaImg}
                                    src={`${process.env.PUBLIC_URL}/img/popup/insta.png`}
                                />{" "}
                                &nbsp;
                                <div>dongvoung</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
