import React from "react";
import NewsComics from "./newsComics";
import NewUsers from "./newUsers";

const News = () => {
    return (
        <div className="flex items-start lg:gap-[80px] px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] lg:px-[60px] lg:pb-[60px]">
            <NewsComics />
            <div className="hidden lg:flex flex-col gap-5">
                <NewUsers />
                <NewUsers />
            </div>
        </div>
    );
};

export default News;
