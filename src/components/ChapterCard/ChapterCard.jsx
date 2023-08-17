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
      <div className=" flex items-center gap-[65px] md:gap-[239px] cursor-pointer p-[12px] md:py-[24px] md:px-[48px] hover:bg-slate-700 md:border-b-2 md:border-gray-500 bg-[#4A4A4A] rounded-[12px]">
        {/* chapter info */}
        <div className="md:flex md:items-center md:gap-[239px] ">
          <div className="flex items-center gap-[12px] ">
            <div
              style={{
                background: islogin
                  ? `url(${poster}) lightgray 50% / cover no-repeat`
                  : `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url(${poster}) lightgray 50% / cover no-repeat`,
              }}
              className="h-[40px] w-[40px] md:h-[172px] md:w-[172px] md:rounded-[12px] flex items-center justify-center "
            >
              {!islogin && (
                <img
                  src="/images/ChapterPage/ic_baseline-lock.png"
                  alt=""
                  className=" h-[24px] w-[24px] md:h-[48px] md:w-[48px] "
                />
              )}
            </div>
            <div>
              <div className=" font-semibold text-[12px] leading-[16px] md:text-[24px] md:leading-[32px] text-white ">
                {title}
              </div>
              <div className=" font-semibold text-[12px] leading-[16px] md:text-[24px] md:leading-[32px] text-white ">
                {chapterNumber}
              </div>
              <div className=" font-semibold text-[12px] leading-[16px] md:text-[22px] md:leading-[28px] text-white ">
                12/07/2023
              </div>
            </div>
          </div>
          <div className=" font-semibold text-[11px] leading-[16px] md:text-[24px] md:leading-[32px] text-white">
            {truncatedDes}
          </div>
        </div>

        {islogin ? (
          <div className="font-semibold text-[12px] leading-[16px] md:text-[24px] md:leading-[32px]  text-white"></div>
        ) : (
          <div className="font-semibold text-[12px] leading-[16px] md:text-[24px] md:leading-[32px] text-white">
            Login
          </div>
        )}
      </div>
    </NavLink>
  );
};

export default ChapterCard;
