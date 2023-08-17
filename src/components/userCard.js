import React from "react";

const UserCard = ({ avatar, name, time }) => {
    return (
        <div className="flex items-center justify-between gap-x-10 pb-[20px]">
            <div className="flex items-center gap-[10px]">
                <div>
                    <img
                        className="w-[48px] h-[48px] rounded-[12px]"
                        src={avatar}
                        alt="avatar"
                    />
                </div>
                <p className="text-[#FFFFFF] text-[26px] font-semibold leading-10 overflow-hidden text-ellipsis whitespace-nowrap w-[200px]">
                    {name}
                </p>
            </div>
            <div>
                <p className="text-[#FFFFFF] text-[18px] whitespace-nowrap font-semibold">
                    {time}
                </p>
            </div>
        </div>
    );
};

export default UserCard;
