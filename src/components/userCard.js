import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ id, avatar, name, time }) => {
    return (
        <Link to={`user-profile/${id}`}>
            <div className="flex items-center justify-between gap-x-3 lg:gap-x-10 lg:pb-[20px]">
                <div className="flex items-center gap-[10px]">
                    <div>
                        <img
                            className="w-[20px] h-[20px] lg:w-[48px] lg:h-[48px] rounded-[12px]"
                            src={avatar}
                            alt="avatar"
                        />
                    </div>
                    <p className="text-[#FFFFFF] text-[12px] sm:text-[16px] md:text-[24px] lg:text-[26px] font-semibold leading-10 overflow-hidden text-ellipsis whitespace-nowrap w-[200px]">
                        {name}
                    </p>
                </div>
                <div>
                    <p className="text-[#FFFFFF] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] whitespace-nowrap font-semibold">
                        {time}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default UserCard;
