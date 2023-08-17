import React from "react";
import NewsComicsPageCard from "../../components/newsComicsPageCard";
import { useSelector } from "react-redux";

const Page_News = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const newsData = mangaData[6]?.data;
    return (
        <div className="bg-black px-[60px] py-[65px]">
            <h1 className="text-[#FFFFFF] text-[20px] md:text-[26px] lg:text-[32px] font-bold mb-[40px]">
                News
            </h1>
            <div className="flex flex-col gap-[60px]">
                {newsData.map((item, index) => (
                    <NewsComicsPageCard
                        key={index}
                        des={item.descript_pro}
                        poster={item.images_poster}
                        num_comment={item.number_comment}
                        title={item.title_news}
                        time={item.time_news}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page_News;
