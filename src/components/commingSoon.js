import React from "react";

import CardComming from "./cardComming";
import { useSelector } from "react-redux";

const CommingSoon = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const firstThreeItem = mangaData[3]?.data.slice(0, 3);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] lg:px-[60px] lg:pb-[60px] lg:pt-[30px]">
            {firstThreeItem?.map((item, index) => (
                <CardComming
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

export default CommingSoon;
