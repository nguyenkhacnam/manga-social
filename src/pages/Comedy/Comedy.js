import React from "react";
import CardManga from "../../components/cardManga";
import { useSelector } from "react-redux";

const Page_Comedy = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const comedy = mangaData[5]?.data;
    return (
        <div className="bg-black px-[60px] pb-[60px]">
            <div className="">
                <h2 className="text-[57px] leading-[64px] font-semibold text-[#FFFFFF] pt-[50px] pb-[60px]">
                    Comedy Comics
                </h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-x-[10px] gap-y-[20px] lg:gap-[20px] px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] lg:px-[60px] lg:pb-[60px]">
                {comedy?.map((item, index) => (
                    <CardManga
                        key={index}
                        poster={item?.image_poster}
                        title={item?.title_manga}
                        rate={item?.rate}
                        update={item.time_release}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page_Comedy;
