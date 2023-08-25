import React from "react";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import "./CommentCard.css";
const CommentCard = ({ comment }) => {
  const parsedDate = moment(comment?.time_comment, "[Yesterday,] hh:mm A");
  const formattedDate = parsedDate.subtract(1, "days").format("YYYY/MM/DD");

  console.log("formattedDate", formattedDate);

  return (
    <div className="flex items-start gap-[20px] mt-5">
      <img
        src={comment?.avatar_user}
        className="w-[24px] h-[24px] rounded-[50%] object-cover "
        alt=""
      />
      <div className="w-full">
        <div className=" bg-[#4B4B4B] rounded-[12px] p-[12px] w-[100%]">
          <div className="textCommentCard">{comment?.name_user}</div>
          <div className="textCommentCard">{comment?.content}</div>
        </div>
        <div className="flex items-center justify-between mt-1  ">
          <div className="flex items-center gap-[10px]  ">
            <div className="textCommentCard">{formattedDate}</div>
            <div className="textCommentCard cursor-pointer ">Like</div>
            <div className="textCommentCard  cursor-pointer ">Reply</div>
            <BsThreeDots className="font-semibold text-[20px] leading-[16px] text-white  cursor-pointer  lg:text-[24px] " />
          </div>
          <div className="flex items-center gap-[8px]  ">
            <div className="textCommentCard">{comment?.likes}</div>
            <img
              src="/images/Comment/Frame 48096936.png"
              className="h-[15px] w-[15px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
