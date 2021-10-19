import React, { useState, useEffect } from "react";

import HeroSlider from "react-slick";
import axios from "axios";

//component 
import { NextArrow, PrevArrow } from "./Arrows.components";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
            console.log(getImages);
        };
        requestNowPlayingMovies();
    }, []);


    const settingsLg = {
        arrows: true,
        centerMode: true,
        centerPadding: "300px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }


    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <prevArrow />
    };


    //no need as we using api now
    // const images = [
    //     "https://in.bmscdn.com/promotions/cms/creatives/1630432985528_incinemasthisfriday_shangchiandthelegendofthetenrings_webshowcase_1240x300.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1630064233552_chalmeraputt2a_webshowcase_1240x300.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
    //       "https://images.unsplash.com/photo-1630051822408-b80dde2f5681?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    // ]



    return (
        <>
            <div className="lg:hidden">
                <HeroSlider{...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full h-52 md:h-64 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                    alt='testing' className="w-full h-full rounded" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>

            <div className=" hidden lg:block">
                <HeroSlider{...settingsLg}>
                    {
                        images.map((image) => (
                            <div className="w-full h-72 px-2 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                    alt='testing' className="w-full h-full rounded" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>

        </>
    )
};


export default HeroCarousal;