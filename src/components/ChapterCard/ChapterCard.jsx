import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ChapterCard = ({ chapter, title, poster, des, slug }) => {
  const lastDashIndex = chapter.lastIndexOf("/chapter-");

  // Lấy phần từ "chapter-" đến hết trong chuỗi chapter
  const chapterNumber = chapter.substring(lastDashIndex + 1);
  console.log("chapterNumber", chapterNumber);
  // Giới hạn mô tả chỉ có 50 ký tự
  const truncatedDes = des.length > 50 ? `${des.slice(0, 50)}...` : des;

  const user = useSelector((store) => store.user);
  console.log("user", user);

  return (
    <NavLink to={`/chapter/${slug}/${chapterNumber}`}>
      <div className=" flex items-center gap-[239px] cursor-pointer  py-[24px] px-[48px] hover:bg-slate-700 border-b-2 border-gray-500 ">
        {/* chapter info */}
        <div className="flex items-center gap-[12px] ">
          <img
            src={poster}
            alt=""
            className="h-[172px] w-[172px] rounded-[12px] "
          />
          <div>
            <div className="text-[24px] font-semibold leading-[32px] text-white ">
              {`${title} . ${chapterNumber} `}
            </div>
            <div className="text-[22px] font-semibold leading-[28px] text-white ">
              12/07/2023
            </div>
          </div>
        </div>
        <div className="text-[24px] leading-[32px] font-semibold text-white">
          {truncatedDes}
        </div>
        <div className="text-[24px] leading-[32px] font-semibold text-white">
          Login
        </div>
      </div>
    </NavLink>
  );
};

export default ChapterCard;
