import React from "react";
import CardManga from "./cardManga";
import { useSelector } from "react-redux";

const Top15Comics = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const top15Item = mangaData[0]?.data.slice(0, 15);
    return (
        <div className="grid grid-cols-5 gap-[20px] px-[60px] pb-[60px]">
            {top15Item.map((item, index) => (
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
