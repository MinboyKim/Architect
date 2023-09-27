import { useState } from "react";
import Slider from "react-slick";

import { db } from "../../db";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

import style from "./Project.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";

const Project = ({ title }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 30000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        draggable: false,
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
            <div className={style.content}>
                <span className={style.title}>{projectTitle}</span>
                <p className={style.text}>{projectContent}</p>
            </div>
        </div>
    );
};

export default Project;
