import React from "react";
import { useState, useEffect } from "react";
import prodApis from "../api/home";
import CardComming from "./cardComming";

const CommingSoon = () => {
    const [commingSoon, setCommingSoon] = useState([]);
    useEffect(() => {
        getCommingSoon();
    }, []);

    const getCommingSoon = async () => {
        const commingSoonResponse = await prodApis.index();
        console.log(commingSoonResponse.data);
        setCommingSoon(commingSoonResponse.data[3].data);
    };

    const firstThreeItem = commingSoon.slice(0, 3);

    return (
        <div className="grid grid-cols-2 gap-[20px] px-[60px] pb-[60px]">
            {firstThreeItem.map((item, index) => (
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
