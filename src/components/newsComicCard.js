import React from "react";

const NewsComicCard = ({ poster, time, title, index }) => {
    return (
        <div className="">
            <div className="relative">
                <img
                    className={`${
                        index % 2
                            ? "w-[541px] h-[629px]"
                            : "w-[337px] h-[315px]"
                    } rounded-[12px]`}
                    src={poster}
                    alt=""
                />
            </div>
            <div
                className={`text-[#FFFFFF] ${
                    index % 2 ? "absolute bottom-0 left-0" : ""
                } text-[22px] font-semibold`}
            >
                <p>News, {time}</p>
                <p className="text-[11px]">{title}</p>
            </div>
        </div>
    );
};

export default NewsComicCard;
