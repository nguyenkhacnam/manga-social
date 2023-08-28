import React, { useState } from "react";
import CardManga from "../../components/cardManga";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Page_SeeAll = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const currentPath = useLocation();
    let mangaDataPage = [];
    let titlePage = "";

    if (currentPath.pathname === "/new-release-comics") {
        mangaDataPage = mangaData[0]?.data;
        titlePage = "New Released Comic";
    }

    if (currentPath.pathname === "/recent-comics") {
        mangaDataPage = mangaData[1]?.data;
        titlePage = "Recent Comics";
    }

    if (currentPath.pathname === "/recommnended-comics") {
        mangaDataPage = mangaData[2]?.data;
        titlePage = "Recommended Comics";
    }

    if (currentPath.pathname === "/comedy-comics") {
        mangaDataPage = mangaData[5]?.data;
        titlePage = "Comedy Comics";
    }

    if (currentPath.pathname === "/free-comics") {
        mangaDataPage = mangaData[6]?.data;
        titlePage = "Free Comics";
    }

    return (
        <div className="bg-black pt-[16px] px-[16px] pb-[100px] md:px-[25px] md:pb-[150px] lg:px-[60px] lg:pb-[200px]">
            <div className="">
                <h2 className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] leading-[64px] text-[#FFFFFF] pt-[16px] pb-[20px] sm:pt-[20px] sm:pb-[26px] md:pb-[30px] md:pt-[38px] lg:pt-[50px] lg:pb-[60px]">
                    {titlePage}
                </h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-x-[10px] gap-y-[20px] lg:gap-[20px] px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] lg:px-[60px] lg:pb-[60px]">
                {mangaDataPage?.map((item, index) => (
                    <CardManga
                        key={index}
                        poster={
                            item?.image_poster_link_goc || item?.image_poster
                        }
                        title={item?.title_manga}
                        rate={item?.rate}
                        update={item.time_release}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page_SeeAll;
