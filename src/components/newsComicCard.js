import React from "react";

const NewsComicCard = ({ poster, time, title, index }) => {
    return (
        <div className="relative">
            <div className="">
                <img
                    className="w-[541px] h-[629px] rounded-[12px]"
                    src={poster}
                    alt=""
                />
            </div>
            <div className="text-[#FFFFFF] absolute bottom-[28px] left-[20px]">
                <p className="text-[16px]">News, {time}</p>
                <p className="text-[24px] font-semibold">{title}</p>
            </div>
        </div>
    );
};

export default NewsComicCard;
