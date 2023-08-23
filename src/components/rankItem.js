import React from "react";
import { Link } from "react-router-dom";

const RankItem = ({ rank, categories, title, poster }) => {
    const title_manga_path = title.replaceAll(" ", "-").toLowerCase();
    return (
        <Link to={`/chapter/${title_manga_path}`}>
            <div className="flex items-center px-[10px] py-[6px] w-full lg:px-[20px] lg:py-[12px] bg-[#2C2C2C] rounded-[20px] lg:w-auto gap-5">
                <h2 className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[30px] text-[red] font-bold">
                    {rank}
                </h2>
                <div className="">
                    <img
                        className="w-[35px] h-[35px] lg:w-[59px] lg:h-[59px] rounded-[12px]"
                        src={poster}
                        alt=""
                    />
                </div>
                <div className="text-white">
                    <p className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[18px] font-semibold leading-6 overflow-hidden text-ellipsis whitespace-nowrap w-[200px] lg:w-[150px]">
                        {title}
                    </p>
                    <p className="text-[11px] md:text-[14px] overflow-hidden text-ellipsis whitespace-nowrap w-[200px] lg:w-[150px]">
                        {categories}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default RankItem;
