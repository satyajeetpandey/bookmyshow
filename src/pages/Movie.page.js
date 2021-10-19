import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { BiCameraMovie } from "react-icons/bi";

import ProfileSlider from "../components/RoundCarousal/ProfileCarousal.component";
import TempPosters from "../config/TempPosters.config";


export const launchRazorPay=()=>{
    let options={
        key:"rzp_test_L90RwrAJEOU0Gr",
        amount:100,
        currency:"INR",
        name:"Book My Show Clone",
        description:"Movie Purchasemon Rental",
        image:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler:()=>{
            alert("Payment Done")
        },
        theme:{color:"#c4242d"}
    };
    let rzp=new window.Razorpay(options);
    rzp.open();
};

const Movie = () => {
    return (
        <>
            <MovieHero />
            <div className="my-12 container mx-auto px-4 lg:w-2/3 lg:ml-20">
                <div className="flex flex-col itmes-start gap-3">
                    <h2 className="text-gray-800 font-bold  text-2xl">About the Movie</h2>
                    <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
                </div>
                <div className="my-8">
                    <hr />
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Applicable offers</h1>
                    <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-2 border-dashed rounded-md p-3 w-3/5">
                        <div className="w-8 h-8">
                            <BiCameraMovie className="h-full w-full" />
                        </div>
                        <div className="flex flex-col itmes-start">
                            <h3 className="text-gray-900 text-lg font-bold">Filmy pass</h3>
                            <p className="text-gray-600 text-sm"> Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                        </div>
                    </div>
                </div>
                <div className="my-8">
					<hr />
				</div>

				<div className="flex flex-col items-start gap-3">
					<h2 className="text-gray-800 font-bold text-2xl">Cast</h2>
					<div className="container mx-auto px-4">
						<ProfileSlider images={TempPosters} title="" isDark={false}/>
					</div>
				</div>

				<div className="my-8">
					<hr />
				</div>

				<div className="flex flex-col items-start gap-3">
					<h2 className="text-gray-800 font-bold text-2xl">Crew</h2>
					<div className="container mx-auto px-4">
						<ProfileSlider images={TempPosters} title="" isDark={false}/>
					</div>
				</div>
            </div>
        </>
    );
};

export default Movie;