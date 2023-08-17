import React from "react";
import RankItem from "./rankItem";
import { useSelector } from "react-redux";

const Rank = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const rankComics = mangaData[9]?.data;

    return (
        <div className="px-[65px] pb-[60px]">
            <div className="text-white flex items-center text-[30px] font-semibold gap-[30px] pb-[30px]">
                <span className=" cursor-pointer hover:underline">Weak</span>
                <span className=" cursor-pointer hover:underline">Month</span>
                <span className=" cursor-pointer hover:underline">Year</span>
            </div>
            <div className="grid grid-rows-5 grid-flow-col gap-4">
                {rankComics.map((item, index) => (
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
