import React, { useEffect, useState } from "react";
import prodApis from "../api/home";
import CardManga from "./cardManga";

const NewRelease = () => {
    const [newRelease, setNewRelease] = useState([]);

    useEffect(() => {
        getComicNewRelease();
    }, []);

    const getComicNewRelease = async () => {
        const comicRecentResponse = await prodApis.index();
        setNewRelease(comicRecentResponse.data[1].data);
    };

    console.log(newRelease);
    const firstFiveItem = newRelease.slice(0, 5);
    return (
        <div className="grid grid-cols-5 gap-[20px] px-[60px] pb-[60px]">
            {firstFiveItem.map((item, index) => (
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

export default NewRelease;
