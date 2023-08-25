import React, { useState } from "react";
import RankItem from "./rankItem";
import { useSelector } from "react-redux";

const Rank = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const [rankComics, setRankComics] = useState(mangaData[9]?.data);
    console.log('rankComics', rankComics)
    const [isFocus, setIsForcus] = useState("week");
    console.log(mangaData);

    const handleRank = (index) => {
        if (index === 9) {
            setIsForcus("week");
        }
        if (index === 10) {
            setIsForcus("month");
        }
        if (index === 11) {
            setIsForcus("year");
        }
        setRankComics(mangaData[index]?.data);
    };

    return (
        <div className="px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] lg:px-[60px] lg:pb-[60px]">
            <div className="text-white flex items-center text-[12px] sm:text-[18px] md:text-[24px] lg:text-[30px] font-semibold gap-[10px] lg:gap-[30px] pb-[10px] lg:pb-[30px]">
                <span
                    onClick={() => handleRank(9)}
                    className={`" cursor-pointer hover:underline" ${
                        isFocus === "week" && "text-[#F45F17]"
                    }`}
                >
                    Weak
                </span>
                <span
                    onClick={() => handleRank(10)}
                    className={`" cursor-pointer hover:underline" ${
                        isFocus === "month" && "text-[#F45F17]"
                    }`}
                >
                    Month
                </span>
                <span
                    onClick={() => handleRank(11)}
                    className={`" cursor-pointer hover:underline" ${
                        isFocus === "year" && "text-[#F45F17]"
                    }`}
                >
                    Year
                </span>
            </div>
            <div className="grid md:grid-rows-[repeat(10,_minmax(0,_1fr))] md:grid-flow-col lg:grid-rows-5 lg:grid-flow-col gap-2 lg:gap-4">
                {rankComics?.map((item, index) => (
                    <RankItem
                        key={index}
                        rank={index + 1}
                        categories={item?.categories}
                        title={item?.title_manga}
                        poster={item?.image_poster}
                    />
                ))}
            </div>
        </div>
    );
};

export default Rank;
