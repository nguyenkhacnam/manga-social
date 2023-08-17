import React from "react";
import CardManga from "../../components/cardManga";
import { useSelector } from "react-redux";

const Page_NewRelease = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const newRelease = mangaData[1]?.data;

    return (
        <div className="bg-black px-[16px] pb-[16px] sm:px-[20px] sm:pb-[20px] md:px-[25px] md:pb-[25px] lg:px-[60px] lg:pb-[60px]">
            <div className="">
                <h2 className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] leading-[64px] text-[#FFFFFF] pt-[16px] pb-[20px] sm:pt-[20px] sm:pb-[26px] md:pb-[30px] md:pt-[38px] lg:pt-[50px] lg:pb-[60px]">
                    New Released Comic
                </h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-x-[10px] gap-y-[20px] lg:gap-[20px] px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] lg:px-[60px] lg:pb-[60px]">
                {newRelease.map((item, index) => (
                    <CardManga
                        key={index}
                        poster={item?.image_poster_link_goc}
                        title={item?.title_manga}
                        rate={item?.rate}
                        update={item.time_release}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page_NewRelease;
