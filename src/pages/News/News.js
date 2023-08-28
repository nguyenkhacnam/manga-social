import React from "react";
import NewsComicsPageCard from "../../components/newsComicsPageCard";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Page_News = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const newsData = mangaData[7]?.data;
    const currentPath = useLocation();
    return (
        <div className="bg-black pt-[16px] px-[16px] pb-[100px] md:px-[25px] md:pb-[150px] lg:px-[60px] lg:pb-[200px]">
            <h1 className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] leading-[64px] text-[#FFFFFF] pt-[16px] pb-[20px] sm:pt-[20px] sm:pb-[26px] md:pb-[30px] md:pt-[38px] lg:pt-[50px] lg:pb-[60px]">
                News
            </h1>
            <div className="flex flex-col gap-[20px] lg:gap-[60px]">
                {newsData?.map((item, index) => (
                    <Link to={currentPath.pathname + "/" + item.id_news}>
                        <NewsComicsPageCard
                            key={item.id_news}
                            poster={item.images_poster}
                            title={item.title_news}
                            time={item.time_news}
                            url_news={item.url_news}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Page_News;
