import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ChapterCard.scss";

const ChapterCard = ({ chapter, title, poster, des, slug, islogin }) => {
  const lastDashIndex = chapter.lastIndexOf("/chapter-");

  // Lấy phần từ "chapter-" đến hết trong chuỗi chapter
  const chapterNumber = chapter.substring(lastDashIndex + 1);

  // Giới hạn mô tả chỉ có 50 ký tự
  const truncatedDes = des.length > 50 ? `${des.slice(0, 45)}...` : des;

  const user = useSelector((store) => store.user);
  console.log("user", user);

  return (
    <NavLink
      to={`${islogin ? `/chapter/${slug}/${chapterNumber}` : "/login"} `}
    >
      <div className=" flex items-center cursor-pointer p-[12px] gap-[90px] bg-[#4A4A4A] rounded-[12px] md:gap-[100px] lg:gap-[100px] 2xl:gap-[239px]  2xl:py-[24px] 2xl:px-[48px] hover:bg-slate-700 2xl:border-b-2 2xl:border-gray-500 ">
        {/* chapter info */}
        <div className="md:flex md:items-center md:gap-[40px] 2xl:flex 2xl:items-center lg:gap-[239px] 2xl:gap-[239px] ">
          <div className="flex items-center gap-[12px] ">
            <div
              style={{
                background: islogin
                  ? `url(${poster}) lightgray 50% / cover no-repeat`
                  : `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url(${poster}) lightgray 50% / cover no-repeat`,
              }}
              className="h-[40px] w-[40px] md:h-[70px] md:w-[70px] lg:h-[100px] lg:w-[100px] 2xl:h-[172px] 2xl:w-[172px] 2xl:rounded-[12px] flex items-center justify-center "
            >
              {!islogin && (
                <img
                  src="/images/ChapterPage/ic_baseline-lock.png"
                  alt=""
                  className=" h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px] "
                />
              )}
            </div>
            <div>
              <div className="title-cardChapter">{title}</div>
              <div className=" title-cardChapter ">{chapterNumber}</div>
              <div className=" font-semibold text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] 2xl:text-[22px] 2xl:leading-[28px] text-white ">
                12/07/2023
              </div>
            </div>
          </div>
          <div className=" font-semibold text-[12px] leading-[16px] md:text-[13px] md:leading-[18px] lg:text-[18px] 2xl:text-[24px] 2xl:leading-[32px] text-white">
            {truncatedDes}
          </div>
        </div>

        {islogin ? (
          <div className="font-semibold text-[12px] leading-[16px] lg:text-[18px] 2xl:text-[24px] 2xl:leading-[32px]  text-white"></div>
        ) : (
          <div className="font-semibold text-[12px] leading-[16px] lg:text-[18px] 2xl:text-[24px] 2xl:leading-[32px] text-white">
            Login
          </div>
        )}
      </div>
    </NavLink>
  );
};

export default ChapterCard;
