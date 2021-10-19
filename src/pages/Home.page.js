import axios from "axios";
import React,{useState,useEffect} from 'react';


import EntertainmentCardSlider from '../components/entertainment/entertainment.component';
import Premier from '../components/premier/premier.component';

import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import PremierImages from '../config/TempPosters.config';

const HomePage = () => {

    const [popularMovies,setPopularMovies]=useState([]);

    useEffect(()=>{
        const requestPopularMovies=async()=>{
            const getPopularMovies=await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    },[]);
    console.log({popularMovies});

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-gray-800 py-4">The Best of Entertainment</h1>
                    <EntertainmentCardSlider />
                </div>

                <div className="bg-navCol-900 py-16">

                    <div className="container  mx-auto px-4">
                        {/* <h1 className="text-2xl font-bold text-gray-800 py-4">Recommended Movies</h1> */}
                        <div className="flex">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="Rupay"
                                className="w-full h-full"
                            />

                        </div>
                        <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand new movie release every Friday" isDark />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <PosterSlider
                    images={popularMovies}
                    title="online streaming event"
                    isDark={false}
                />
            </div>
            <div className="container mx-auto px-4">
                <PosterSlider
                    images={popularMovies}
                    title="Outdoor event"
                    isDark={false}
                />
            </div>
        </>
    );
};

export default HomePage;