import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
const DirectionChapter = ({
  goToPrevChapter,
  currentChapterIndex,
  loading,
  showModal,
  goToNextChapter,
  chapterNumbers,
}) => {
  return (
    <div className="pt-2 pb-2 ">
      <div className="flex items-center justify-center gap-[30px] ">
        <button
          onClick={goToPrevChapter}
          disabled={currentChapterIndex === 0 || loading} // Tắt khi ở vị trí đầu tiên hoặc đang loading
          className={`flex items-center justify-center text-white font-semibold gap-2 px-4 py-1 md:text-[16px]  ${
            currentChapterIndex === 0 || loading
              ? "bg-[#c8c6c5]"
              : "bg-[#f45f17]"
          } `}
        >
          <AiOutlineArrowLeft className=" font-semibold text-[16px] md:text-[18px] " />
          Prev
        </button>
        <button onClick={showModal}>
          <BsReverseLayoutTextSidebarReverse className="text-[#f45f17] text-[24px] font-bold md:text-[26px]  " />
        </button>
        <button
          onClick={goToNextChapter}
          disabled={
            currentChapterIndex === chapterNumbers?.length - 1 || loading
          } // Tắt khi ở vị trí cuối cùng hoặc đang loading
          className={`flex items-center justify-center gap-2 px-4 py-1 text-white font-semibold md:text-[16px]   ${
            currentChapterIndex === chapterNumbers?.length - 1 || loading
              ? "bg-[#c8c6c5]"
              : "bg-[#f45f17]"
          } `}
        >
          Next
          <AiOutlineArrowRight className=" font-semibold text-[16px] md:text-[18px] " />
        </button>
      </div>
    </div>
  );
};

export default DirectionChapter;
