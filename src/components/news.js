import React from "react";
import NewsComics from "./newsComics";
import NewUsers from "./newUsers";

const News = () => {
    return (
        <div className="flex items-start gap-[200px]">
            <NewsComics />
            <NewUsers />
        </div>
    );
};

export default News;
