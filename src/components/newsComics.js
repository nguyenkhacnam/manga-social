import React from "react";
import NewsComicCard from "./newsComicCard";
import NewsComicCardSmall from "./newsComicCardSmall";
import { useSelector } from "react-redux";

const NewsComics = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const dataSlice = mangaData[6]?.data.slice(0, 7);
    return (
        <div className="flex gap-10 mb-[60px]">
            <div className="flex flex-col gap-8">
                {dataSlice.map((item, index) => {
                    if (index % 2 !== 0) {
                        return (
                            <NewsComicCard
                                key={index}
                                index={index}
                                poster={item.images_poster}
                                time={item.time_news}
                                title={item.title_news}
                            />
                        );
                    }
                })}
            </div>
            <div className="flex flex-col gap-10">
                {dataSlice.map((item, index) => {
                    if (index % 2 === 0) {
                        return (
                            <NewsComicCardSmall
                                key={index}
                                index={index}
                                poster={item.images_poster}
                                time={item.time_news}
                                title={item.title_news}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default NewsComics;
