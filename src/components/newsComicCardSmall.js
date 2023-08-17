import React from "react";

const NewsComicCardSmall = ({ poster, time, title, index }) => {
    return (
        <div className="">
            <div className="">
                <img
                    className="w-[337px] h-[315px] rounded-[12px]"
                    src={poster}
                    alt=""
                />
            </div>
            <div className="text-[#FFFFFF] pt-[20px]">
                <p className="text-[16px] ">News, {time}</p>
                <p className="text-[22px] font-semibold max-w-[300px]">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default NewsComicCardSmall;
