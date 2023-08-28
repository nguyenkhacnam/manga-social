import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { BsReplyFill } from "react-icons/bs";

const CommentNewsCard = ({
    avatar_user,
    content,
    time_comment,
    likes,
    name_user,
    replies,
}) => {
    return (
        <div className="">
            <div className="flex items-start gap-5">
                <div>
                    <img
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-[80px] md:h-[80px] object-cover"
                        src={avatar_user}
                        alt="avatar_user"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <p className="text-[#F45F17] font-semibold text-[15px] sm:text-[18px] md:text-[22px] lg:text-[24px] cursor-pointer hover:text-[#f59362]">
                            {name_user}
                        </p>

                        <p className="sm:text-[18px] md:text-[20px] lg:text-[24px]">
                            {time_comment}
                        </p>
                    </div>

                    <p className="sm:text-[18px] md:text-[20px] lg:text-[24px] block text-ellipsis w-[250px] sm:w-[300px] md:w-[600px] lg:w-[800px] xl:w-[1200px]">
                        {content}
                    </p>

                    <div className="flex gap-3">
                        <div className="flex gap-2 items-center sm:text-[18px] md:text-[20px] lg:text-[24px]">
                            <BiSolidLike />
                            <p>{likes}</p>
                        </div>
                        <div className="flex gap-2 items-center sm:text-[18px] md:text-[20px] lg:text-[24px]">
                            <BsReplyFill />
                            <p>{replies?.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentNewsCard;
