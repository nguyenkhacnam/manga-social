import React from "react";
import NewsComicCard from "./newsComicCard";
import NewsComicCardSmall from "./newsComicCardSmall";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewsComics = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const dataSlice = mangaData[7]?.data.slice(0, 7);
    return (
        <div className="flex gap-10 mb-[60px]">
            <div className="flex flex-col gap-8">
                {dataSlice?.map((item, index) => {
                    if (index % 2 !== 0) {
                        return (
                            <Link to={`news/${index}`}>
                                <NewsComicCard
                                    key={item.id_news}
                                    index={index}
                                    poster={item.images_poster}
                                    time={item.time_news}
                                    title={item.title_news}
                                />
                            </Link>
                        );
                    }
                })}
            </div>
            <div className="flex flex-col gap-5 lg:gap-10">
                {dataSlice?.map((item, index) => {
                    if (index % 2 === 0) {
                        return (
                            <Link to={`news/${index}`}>
                                <NewsComicCardSmall
                                    key={item.id_news}
                                    index={index}
                                    poster={item.images_poster}
                                    time={item.time_news}
                                    title={item.title_news}
                                />
                            </Link>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default NewsComics;
