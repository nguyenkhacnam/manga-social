import React, { useState, useEffect } from "react";
import prodApis from "../../api/home";
import CardManga from "../../components/cardManga";

const Page_NewRelease = () => {
    const [newRelease, setNewRelease] = useState([]);

    useEffect(() => {
        getComicNewRelease();
    }, []);

    const getComicNewRelease = async () => {
        const comicRecentResponse = await prodApis.index();
        setNewRelease(comicRecentResponse.data[1].data);
    };
    return (
        <div className="bg-black px-[60px] pb-[60px]">
            <div className="">
                <h2 className="text-[57px] leading-[64px] font-semibold text-[#FFFFFF] pt-[50px] pb-[60px]">
                    New Released Comic
                </h2>
            </div>
            <div className="grid grid-cols-5 gap-[20px]">
                {newRelease.map((item, index) => (
                    <CardManga
                        key={index}
                        poster={item?.image_poster_link_goc}
                        title={item?.title_manga}
                        rate={item?.rate}
                        update={item.time_release}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page_NewRelease;
