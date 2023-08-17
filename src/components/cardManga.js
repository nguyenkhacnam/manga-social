import React from "react";

const CardManga = ({ poster, title, rate, update }) => {
    return (
        <div className=" cursor-pointer">
            <div className="ease-in-out duration-300 hover:scale-105 transition">
                <img
                    className="w-[119px] h-[140px] lg:w-[255px] lg:h-[383px] rounded-[12px]"
                    src={poster}
                    alt=""
                ></img>
            </div>
            <div className="text-[#FFFFFF]">
                <div className="mt-5">
                    <h3 className="text-[#FFFFFF] text-[12px] sm:text-[16px] md:text-[20px] lg:text-[26px] 2xl:text-[28px] leading-10 font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-[200px]">
                        {title}
                    </h3>
                    <p className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] leading-8 font-semibold mt-3">
                        Chapter 247:The dark of sky
                    </p>
                </div>
                <div className="flex items-center gap-[16px]">
                    <img
                        className="w-3 h-3 lg:w-5 lg:h-5"
                        src="/images/star.png"
                        alt=""
                    />
                    <div className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[20px]">
                        <span className="">{rate}</span>
                        <span className="">/5</span>
                    </div>
                </div>

                <div className="py-[1px] px-[10px] lg:px-[10px] lg:py-[5px] bg-[#363636] w-max rounded-[33px] mt-3">
                    <p className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[20px] xl:text-[22px] leading-8 font-semibold">
                        Update: {update}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardManga;
