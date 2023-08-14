import React from "react";

const CardComming = ({ poster, title, rate, update }) => {
    return (
        // <div className="recent_comic wrap-poster">
        //     <div className="item-comic commingsoon">
        //         <div className="wrap-img-zomm custom-wrap">
        //             <img className="img-comic" src={poster} alt="" />
        //         </div>

        //         <div className="comic_name">
        //             <h3>{title}</h3>
        //             <p className="name-auth">Author:Takeshi</p>
        //         </div>
        //         <div className="wrap-hastag">
        //             <div className="update">
        //                 {" "}
        //                 <p>Written Stories</p>
        //             </div>
        //             <div className="update">
        //                 <p>Series</p>
        //             </div>
        //             <div className="update">
        //                 <p>Adventure</p>
        //             </div>
        //         </div>
        //         <p className="date-at">Expected realease date: {update}</p>
        //     </div>
        // </div>

        // ============================================

        <div className=" cursor-pointer">
            <div className="ease-in-out duration-300 hover:scale-105 transition">
                <img className="w-[712px] h-[410px]" src={poster} alt="" />
            </div>

            <div className="text-white mt-3">
                <div className="">
                    <h3 className="text-white lg:text-[26px] 2xl:text-[28px] leading-10 font-semibold">
                        {title}
                    </h3>
                    <p className="lg:text-[18px] 2xl:text-[20px] leading-8 font-semibold ">
                        Author:Takeshi
                    </p>
                </div>
                <div className="flex items-center gap-3 py-3">
                    <div className="p-[10px] rounded-[33px] bg-[#363636]">
                        <p className="text-[20px]">Written Stories</p>
                    </div>
                    <div className="p-[10px] rounded-[33px] bg-[#363636]">
                        <p className="text-[20px]">Series</p>
                    </div>
                    <div className="p-[10px] rounded-[33px] bg-[#363636]">
                        <p className="text-[20px]">Adventure</p>
                    </div>
                </div>
                <p className="lg:text-[20px] 2xl:text-[22px] leading-8 font-semibold">
                    Expected realease date: {update}
                </p>
            </div>
        </div>
    );
};

export default CardComming;
