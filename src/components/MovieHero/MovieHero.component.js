import React from "react";
import { BiShareAlt, BiHeart, BiChevronRight } from "react-icons/bi";
import { launchRazorPay } from "../../pages/Movie.page";

const MovieHero = () => {
    return (
        <>
            <div className="md:hidden" /*style={{height:"calc(180vw)"}}*/>
                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                />
            </div>

            <div className="hidden md:block lg:hidden">
                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                />
            </div>

            <div className=" relative hidden lg:block" style={{ height: "30rem" }}>
                <div className="absolute w-full h-full z-10 "
                    style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }}
                />

                <div className="absolute z-30 w-64 h-96 left-16 top-12">
                    <img
                        src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                        alt="poster"
                        className="w-full h-full rounded-xl"
                    />
                </div>

                <div className=" z-30 absolute left-80 top-10 p-5 align-center flex flex-col gap-3 ">
                    <div className="  text-white left-40 top-10 text-xl font-bold text-3xl block">Shang-Chi and the Legend <br />of the Ten Rings</div>
                    <div className="text-white flex text-xl gap-1">
                        <div className="w-8 h-8">
                            <BiHeart className="w-full h-full " />
                        </div> 93% 
                        <span className="text-sm py-2"> 31.5K Ratings </span>
                        <div className="w-6 h-6">
                            < BiChevronRight className=" w-full h-full" />
                        </div>

                    </div>
                    <div className=" flex justify-between bg-black rounded-xl bg-opacity-80">
                        <div className="text-white align-center px-5 py-2 text-xl">
                            Add your Rating Review &reviews<br />
                            <span className="text-sm text-align-center  ">Your rating Matters </span>
                        </div>
                        <button className="  bg-white text-black rounded-lg p-1 m-3" >Rate on</button>

                    </div>
                    <span className="bg-white text-black rounded-sm bg-opacity-100 w-1/2 ">2D,3D,IMAX 2D,MX4D,4DX</span>
                    <span className="bg-white text-black rounded-sm bg-opacity-100 w-4/5  ">English,Kannada,Tamil,Hindi,Telugu,Malayalam</span>

                    <span className="text-white">2h 12m • Action,Adventure,Fantasy • UA • 3 Sep, 2021</span>


                    <button onClick={launchRazorPay} className=" bg-red-600 rounded-lg align-center text-white p-2 w-1/2 ">Book tickets</button>
                </div>

                <div className="flex bg-opacity-30 bg-black z-30 absolute right-20 top-20 rounded-lg p-2 flex gap-1 ">
                    <div className="w-8 h-8">
                        <BiShareAlt className="w-full h-full  " />
                    </div>
                    <span className="text-white text-xl ">Share</span>
                </div>

                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                    className="w-full h-full"
                />
            </div>

        </>

    )
};


export default MovieHero;
