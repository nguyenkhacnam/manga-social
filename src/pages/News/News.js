import React from "react";
import NewsComicsPageCard from "../../components/newsComicsPageCard";
import { useSelector } from "react-redux";

const Page_News = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const newsData = mangaData[6]?.data;
    return (
        <div className="bg-black px-[16px] pb-[16px] sm:px-[20px] sm:pb-[20px] md:px-[25px] md:pb-[25px] lg:px-[60px] lg:pb-[60px]">
            <h1 className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] leading-[64px] text-[#FFFFFF] pt-[16px] pb-[20px] sm:pt-[20px] sm:pb-[26px] md:pb-[30px] md:pt-[38px] lg:pt-[50px] lg:pb-[60px]">
                News
            </h1>
            <div className="flex flex-col gap-[20px] lg:gap-[60px]">
                {newsData?.map((item, index) => (
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
