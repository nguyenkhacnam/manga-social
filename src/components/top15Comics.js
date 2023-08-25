import React from "react";
import CardManga from "./cardManga";
import { useSelector } from "react-redux";

const Top15Comics = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const top15Item = mangaData[4]?.data.slice(0, 15);
    return (
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[10px] gap-y-[20px] lg:gap-[20px] px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] lg:px-[60px] lg:pb-[60px] lg:pt-[30px]">
            {top15Item?.map((item, index) => (
                <CardManga
                    key={index}
                    poster={item?.image_poster_link_goc}
                    title={item?.title_manga}
                    rate={item?.rate}
                    update={item.time_release}
                />
            ))}
        </div>
    );
};

export default Top15Comics;
