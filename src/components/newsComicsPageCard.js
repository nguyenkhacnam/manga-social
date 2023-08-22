import React from "react";

const NewsComicsPageCard = ({ des, poster, num_comment, title, time }) => {
    return (
        <div className="">
            <div className="relative">
                <img
                    className="w-full h-[138px] md:h-[200px] lg:h-[300px] object-cover rounded-[12px]"
                    src={poster}
                    alt=""
                />
                <div className="text-[#FFFFFF] absolute bottom-[20px] left-[20px]">
                    <p className="text-[11px] font-medium md:text-[16px] lg:text-[22px] lg:font-semibold">
                        News, {time}
                    </p>
                    <p className="text-[12px] font-semibold md:text-[18px] lg:text-[24px]">
                        {title}
                    </p>
                </div>
            </div>

            <div className="text-[#FFFFFF] mt-[20px]">
                <p className="text-[12px] md:text-[18px] lg:text-[24px] font-semibold text-[#157FE0]">
                    {num_comment} Comments
                </p>
                <p className="text-[12px] md:text-[18px] lg:text-[24px] overflow-hidden whitespace-nowrap text-ellipsis w-full">
                    {des}
                </p>
            </div>
        </div>
    );
};

export default NewsComicsPageCard;
