import React from "react";
import NewsComics from "./newsComics";
import NewUsers from "./newUsers";

const News = () => {
    return (
        <div className="flex items-start gap-[80px]">
            <NewsComics />
            <div className="flex flex-col gap-5">
                <NewUsers />
                <NewUsers />
            </div>
        </div>
    );
};

export default News;
