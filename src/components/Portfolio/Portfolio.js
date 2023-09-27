import { useState } from "react";
import Slider from "react-slick";

import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

import style from "./Portfolio.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";

const Portfolio = () => {
    const projectImages = [];
    for (let i = 1; i <= 30; i++) {
        projectImages.push(`${process.env.PUBLIC_URL}/img/portfolio/${i}.jpg`);
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 30000,
        prevArrow: <PrevArrow index={currentIndex} />,
        nextArrow: <NextArrow />,
        beforeChange: (_, next) => setCurrentIndex(next),
        draggable: false,
    };

    return (
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
    );
};

export default Portfolio;
