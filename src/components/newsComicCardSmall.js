import React from "react";

const NewsComicCardSmall = ({ poster, time, title, index }) => {
    return (
        <div className="">
            <div className="">
                <img
                    className="w-[120px] h-[150px] md:w-[200px] md:h-[272px] lg:w-[300px] lg:h-[315px] rounded-[12px]"
                    src={poster}
                    alt=""
                />
            </div>
            <div className="text-[#FFFFFF] lg:pt-[20px]">
                <p className="text-[11px] lg:text-[16px]">News, {time}</p>
                <p className="text-[13px] leading-4 lg:leading-7 lg:text-[22px] font-semibold md:w-[200px] lg:w-[300px]">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default NewsComicCardSmall;
