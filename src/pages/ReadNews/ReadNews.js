import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ReadNews = () => {
    const { id } = useParams();
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const newsData = mangaData[6]?.data[id];
    const user_name = newsData.profile_user_post.slice(32);
    return (
        <div className="bg-black px-[16px] pb-[100px] md:px-[25px] md:pb-[150px] lg:px-[60px] lg:pb-[200px] flex flex-col text-white">
            <h1 className="text-white text-[18px] font-semibold sm:text-[20px] md:text-[24px] lg:text-[30px] py-[10px] md:py-[20px] lg:py-[30px]">
                {newsData.title_news}
            </h1>
            <div>
                <p className="sm:text-[18px] md:text-[22px] lg:text-[24px]">
                    by{" "}
                    <span className="text-[#F45F17] font-semibold text-[15px] sm:text-[18px] md:text-[22px] lg:text-[24px]">
                        {user_name}
                    </span>
                </p>
                <div className="flex items-center gap-2">
                    <p className="sm:text-[18px] md:text-[22px] lg:text-[24px]">
                        {newsData.time_news}
                    </p>
                    <span className="border-[3px] rounded-full h-full"></span>
                    <p className="text-[#F45F17] font-semibold text-[15px] sm:text-[18px] md:text-[22px] lg:text-[24px]">
                        {newsData.number_comment} Comments
                    </p>
                </div>
            </div>
            <div className="py-[10px] sm:py-[15px] md:py-[30px] lg:py-[50px]">
                <img
                    className="w-full md:h-[800px] object-cover"
                    src={newsData.images_poster}
                    alt="poster"
                />
            </div>
            <p className="md:text-[22px]">{newsData.descript_pro}</p>
        </div>
    );
};

export default ReadNews;
