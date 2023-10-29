import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";

import { db } from "../../db";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import MobileNextArrow from "./MobileNextArrow";
import MobilePrevArrow from "./MobilePrevArrow";

import style from "./Project.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";

const Project = ({ title }) => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = db[title].img.length;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 30000,
        prevArrow: isMobile ? <MobilePrevArrow /> : <PrevArrow />,
        nextArrow: isMobile ? <MobileNextArrow /> : <NextArrow />,
        draggable: false,
        afterChange: (current) => setCurrentPage(current + 1),
    };

    const rawTitle = db[title].title;
    const projectTitle = rawTitle.split("\n").map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));
    const rawContent = db[title].content;
    const projectContent = rawContent.split("\n").map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));
    const projectImages = db[title].img;

    return (
        <div className={style.wrapper}>
            {!isMobile ? (
                <div className={style.carousel}>
                    <Slider {...settings}>
                        {projectImages.map((imageUrl, index) => (
                            <div key={index}>
                                <img
                                    src={imageUrl}
                                    alt={`Image ${index}`}
                                    className={`${style.img} ${
                                        index !== 0 &&
                                        !imageUrl.includes("Preview") &&
                                        !imageUrl.includes("Artworks") &&
                                        !imageUrl.includes("Military")
                                            ? style.blur
                                            : ""
                                    }`}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            ) : (
                <div className={style.mCarousel}>
                    <Slider {...settings}>
                        {projectImages.map((imageUrl, index) => (
                            <div key={index}>
                                <img
                                    src={imageUrl}
                                    alt={`Image ${index}`}
                                    className={`${style.mImg} ${
                                        index !== 0 &&
                                        !imageUrl.includes("Preview") &&
                                        !imageUrl.includes("Artworks") &&
                                        !imageUrl.includes("Military")
                                            ? style.blur
                                            : ""
                                    }`}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
            <div className={!isMobile ? "" : style.mPage}>
                <span className={style.pageText}>
                    {currentPage}/{totalPage}
                </span>
            </div>
            <div className={!isMobile ? style.content : style.mContent}>
                <span className={style.title}>{projectTitle}</span>
                <p className={style.text}>{projectContent}</p>
            </div>
        </div>
    );
};

export default Project;
