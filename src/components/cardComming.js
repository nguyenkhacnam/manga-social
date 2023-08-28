import React from "react";
import { NavLink } from "react-router-dom";

const CardComming = ({ poster, title, rate, update, url_manga }) => {
  // Tách chuỗi URL thành mảng các phần tử
  const urlParts = url_manga?.split("/");

  // Xây dựng lại chuỗi từ "manga" đến hết
  const mangaSlug = urlParts?.slice(urlParts?.indexOf("manga")).join("/");
  console.log("mangaSlug ở comming soon", mangaSlug);
  return (
    <NavLink to={`/${mangaSlug}`}>
      <div className=" cursor-pointer">
        <div className="ease-in-out duration-300 hover:scale-105 transition">
          <img
            className="w-[400px] h-[310px] lg:w-[712px] lg:h-[410px]"
            src={poster}
            alt=""
          />
        </div>

        <div className="text-white mt-2 lg:mt-3">
          <div className="">
            <h3 className="text-[#FFFFFF] text-[12px] sm-[16px] md:text-[20px] lg:text-[26px] xl:text-[28px] leading-5 md:leading-7 lg:leading-10 font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-[120px] lg:w-[200px]">
              {title}
            </h3>
            <p className="text-[11px] sm-text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] leading-4 md:leading-6 lg:leading-8 font-semibold lg:mt-3">
              Author:Takeshi
            </p>
          </div>
          <div className="flex items-center gap-3 py-1 lg:py-3">
            <div className="p-[5px] lg:p-[10px] rounded-[33px] bg-[#363636]">
              <p className="text-[11px] sm-text-[13px] md:text-[15px] lg:text-[18px] xl:text-[22px] leading-4 lg:leading-8 font-semiboldlg:text-[20px]">
                Written Stories
              </p>
            </div>
            <div className="p-[5px] lg:p-[10px] rounded-[33px] bg-[#363636]">
              <p className="text-[11px] sm-text-[13px] md:text-[15px] lg:text-[18px] xl:text-[22px] leading-4 lg:leading-8 font-semiboldlg:text-[20px]">
                Series
              </p>
            </div>
            <div className="py-[5px] px-[10px] lg:p-[10px] rounded-[33px] bg-[#363636]">
              <p className="text-[11px] sm-text-[13px] md:text-[15px] lg:text-[18px] xl:text-[22px] leading-4 lg:leading-8 font-semiboldlg:text-[20px]">
                Adventure
              </p>
            </div>
          </div>
          <p className="text-[11px] sm-text-[13px] md:text-[15px] lg:text-[18px] xl:text-[22px] leading-4 lg:leading-8 font-semibold">
            Expected realease date: {update}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default CardComming;
