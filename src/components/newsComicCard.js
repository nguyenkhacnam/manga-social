import React from "react";

const NewsComicCard = ({ poster, time, title, index }) => {
    return (
        <div className="relative">
            <div className="">
                <img
                    className="w-[180px] h-[220px] md:w-[332px] md:h-[487px] lg:w-[441px] lg:h-[529px] rounded-[12px]"
                    src={poster}
                    alt=""
                />
            </div>
            <div className="text-[#FFFFFF] absolute bottom-[8px] left-[8px] lg:bottom-[28px] lg:left-[20px]">
                <p className="text-[12px] lg:text-[16px]">News, {time}</p>
                <p className="text-[14px] leading-4 lg:leading-7 lg:text-[24px] font-semibold">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default NewsComicCard;
