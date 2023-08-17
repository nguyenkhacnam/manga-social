import React from "react";
import CardManga from "./cardManga";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";

const NewRelease = () => {
  //   const newRelease = useFetch(1);
  //   const firstFiveItem = newRelease.slice(0, 5);

  const mangaData = useSelector((store) => store.mangaData.mangaData);
  const firstFiveItem = mangaData[1].data.slice(0, 5);
  console.log("mangaData in new release", mangaData[1].data);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[20px] px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] lg:px-[60px] lg:pb-[60px]">
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
