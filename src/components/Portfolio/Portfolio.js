import { useState } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import MobileNextArrow from "../Project/MobileNextArrow";
import MobilePrevArrow from "../Project/MobilePrevArrow";

import style from "./Portfolio.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";

const Portfolio = () => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });
    const projectImages = [];
    for (let i = 1; i <= 30; i++) {
        projectImages.push(`${process.env.PUBLIC_URL}/img/portfolio/${i}.jpg`);
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = projectImages.length;

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 30000,
        prevArrow: isMobile ? (
            <MobilePrevArrow index={currentIndex} />
        ) : (
            <PrevArrow index={currentIndex} />
        ),
        nextArrow: isMobile ? <MobileNextArrow /> : <NextArrow />,
        beforeChange: (cur, next) => {
            setCurrentIndex(next);
            setCurrentPage(next + 1);
        },
        draggable: false,
    };

    return (
        <div>
            {!isMobile ? (
                <div className={style.wrapper}>
                    <div className={style.carousel}>
                        <Slider {...settings}>
                            {projectImages.map((imageUrl, index) => (
                                <div key={index}>
                                    <img
                                        src={imageUrl}
                                        alt={`Image ${index}`}
                                        className={style.img}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            ) : (
                <div className={style.mWrapper}>
                    <div className={style.mCarousel}>
                        <Slider {...settings}>
                            {projectImages.map((imageUrl, index) => (
                                <div key={index}>
                                    <img
                                        src={imageUrl}
                                        alt={`Image ${index}`}
                                        className={style.mImg}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}
            <div className={!isMobile ? style.page : style.mPage}>
                <span className={style.pageText}>
                    {currentPage}/{totalPage}
                </span>
            </div>
        </div>
    );
};

export default Portfolio;
