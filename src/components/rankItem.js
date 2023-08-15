import React from "react";

const RankItem = ({ rank, categories, title, poster }) => {
    return (
        <div className="flex items-center px-[20px] py-[12px] bg-[#2C2C2C] rounded-[20px] w-[370px] gap-5">
            <h2 className="text-[36px] text-[red] font-bold">{rank}</h2>
            <div className="">
                <img
                    className="w-[59px] h-[59px] rounded-[12px]"
                    src={poster}
                    alt=""
                />
            </div>
            <div className="text-white">
                <p className="text-[18px] font-semibold leading-6 overflow-hidden text-ellipsis whitespace-nowrap w-[200px]">
                    {title}
                </p>
                <p className="text-[14px] overflow-hidden text-ellipsis whitespace-nowrap w-[200px]">
                    {categories}
                </p>
            </div>
        </div>
    );
};

export default RankItem;
