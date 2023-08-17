import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

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
      <div className=" flex items-center gap-[90px] lg:gap-[239px] cursor-pointer p-[12px] lg:py-[24px] lg:px-[48px] hover:bg-slate-700 lg:border-b-2 lg:border-gray-500 bg-[#4A4A4A] rounded-[12px]">
        {/* chapter info */}
        <div className="lg:flex lg:items-center lg:gap-[239px] ">
          <div className="flex items-center gap-[12px] ">
            <div
              style={{
                background: islogin
                  ? `url(${poster}) lightgray 50% / cover no-repeat`
                  : `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url(${poster}) lightgray 50% / cover no-repeat`,
              }}
              className="h-[40px] w-[40px] lg:h-[172px] lg:w-[172px] lg:rounded-[12px] flex items-center justify-center "
            >
              {!islogin && (
                <img
                  src="/images/ChapterPage/ic_baseline-lock.png"
                  alt=""
                  className=" h-[24px] w-[24px] lg:h-[48px] lg:w-[48px] "
                />
              )}
            </div>
            <div>
              <div className=" font-semibold text-[12px] leading-[16px] lg:text-[24px] lg:leading-[32px] text-white ">
                {title}
              </div>
              <div className=" font-semibold text-[12px] leading-[16px] lg:text-[24px] lg:leading-[32px] text-white ">
                {chapterNumber}
              </div>
              <div className=" font-semibold text-[12px] leading-[16px] lg:text-[22px] lg:leading-[28px] text-white ">
                12/07/2023
              </div>
            </div>
          </div>
          <div className=" font-semibold text-[11px] leading-[16px] lg:text-[24px] lg:leading-[32px] text-white">
            {truncatedDes}
          </div>
        </div>

        {islogin ? (
          <div className="font-semibold text-[12px] leading-[16px] lg:text-[24px] lg:leading-[32px]  text-white"></div>
        ) : (
          <div className="font-semibold text-[12px] leading-[16px] lg:text-[24px] lg:leading-[32px] text-white">
            Login
          </div>
        )}
      </div>
    </NavLink>
  );
};

export default ChapterCard;
