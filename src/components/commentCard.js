import React from "react";
import { BiSolidBookAlt, BiSolidMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const CommentCard = ({
    avatar_user,
    content,
    name_user,
    time,
    title_manga,
    count_comment,
    count_reply_comment,
}) => {
    const title_manga_path = title_manga?.replaceAll(" ", "-").toLowerCase();

    return (
        <div className="text-[#FFFFFF] flex flex-col gap-[8px] pb-5 md:pb-7 lg:pb-11">
            <div className="flex items-center gap-[8px] md:gap-[18px] text-[14px] md:text-[20px] lg:text-[24px] font-semibold">
                <div className="flex items-center gap-[11px] md:gap-[17px]">
                    <div>
                        <img
                            className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] rounded-full"
                            src={avatar_user}
                            alt="avatar"
                        />
                    </div>
                    <p className="">{name_user}</p>
                </div>
                <p className=" ">Comment at {time}</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[8px] md:gap-[18px]">
                    <BiSolidBookAlt className="w-[20px] h-[20px] md:w-[26px] md:h-[26px] lg:w-[32px] lg:h-[32px]" />
                    <Link to={`/chapter/${title_manga_path}`}>
                        <p className="text-[12px] text-[#F45F17] md:text-[18px] lg:text-[22px] font-semibold">
                            {title_manga}
                        </p>
                    </Link>
                </div>
                <div className="flex items-center gap-[8px] md:gap-[18px]">
                    <p className="text-[11px] md:text-[17px] lg:text-[20px] font-medium">
                        Comments {count_comment}
                    </p>
                    <p className="text-[11px] md:text-[17px] lg:text-[20px] font-medium">
                        Reply {count_reply_comment}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-[8px] md:gap-[18px]">
                <BiSolidMessageDetail className="w-[20px] h-[20px] md:w-[26px] md:h-[26px] lg:w-[32px] lg:h-[32px]" />
                <p className="text-[11px] md:text-[17px] lg:text-[20px] font-medium">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default CommentCard;
