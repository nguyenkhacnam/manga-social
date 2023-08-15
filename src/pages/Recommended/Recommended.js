import React from "react";
import CardManga from "../../components/cardManga";
import useFetch from "../../hooks/useFetch";

const Page_Recommended = () => {
    const recommended = useFetch(4);
    return (
        <div className="bg-black px-[60px] pb-[60px]">
            <div className="">
                <h2 className="text-[57px] leading-[64px] font-semibold text-[#FFFFFF] pt-[50px] pb-[60px]">
                    Recommnended Comics
                </h2>
            </div>
            <div className="grid grid-cols-5 gap-[20px]">
                {recommended.map((item, index) => (
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

export default Page_Recommended;
