import React from "react";
import Slider from "react-slick";

//component 
import Poster from '../poster/poster.component';

//config settings
import settings from "../../config/PosterCarousal.config";

//images
import PremierImages from "../../config/TempPosters.config";

const Premier=()=>{
    // const settings={
    //     infinite:true,
    //     autoplay:false,
    //     slidesToShow:5,
    //     slidesToScroll:2,
    //     InitialSlide:0
    // };

    // const PremierImages=[
    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-djhnmgmtvw-portrait.jpg",
    //         alt:"Conjuring",
    //         title:"The Conjuring:The Devil made me do it",
    //         subtitle:"Horror/Thriller"
    //     },
    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyNGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-bgabnepvfd-portrait.jpg",
    //         alt:"Shang-chi",
    //         title:"Shang-chi and the legand of the ten ring",
    //         subtitle:"Action/Adventure"
    //     },
    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
    //         alt:"F9",
    //         title:"Fast and Furious 9",
    //         subtitle:"Action/Adventure/Crime/Thriller"
    //     },
    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-djhnmgmtvw-portrait.jpg",
    //         alt:"Conjuring",
    //         title:"The Conjuring:The Devil made me do it",
    //         subtitle:"Horror/Thriller"
    //     },
    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyNGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-bgabnepvfd-portrait.jpg",
    //         alt:"Shang-chi",
    //         title:"Shang-chi and the legand of the ten ring",
    //         subtitle:"Action/Adventure"
    //     },
    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjclICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00102880-eudztbwuwx-portrait.jpg",
    //         alt:"Chehre",
    //         title:"Chehre",
    //         subtitle:"Mystery/Thriller"
    //     },
    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-djhnmgmtvw-portrait.jpg",
    //         alt:"Conjuring",
    //         title:"The Conjuring:The Devil made me do it",
    //         subtitle:"Horror/Thriller"
    //     },
    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
    //         alt:"F9",
    //         title:"Fast and Furious 9",
    //         subtitle:"Action/Adventure/Crime/Thriller"
    //     },
        
        
    // ]

    return(
        <>
        {/* <div className="flex flex-col items-start py-4">
            <h3 className="text-white text-xl font-bold">Premiers</h3>
            <p className="text-white text-sm">Brand new release every Friday</p>
        </div>
        <Slider {...settings}>
        {PremierImages.map((image)=>(
            <Poster {...image} isDark/>
        ))}
        </Slider> */}
        </>
    );
};


export default Premier;