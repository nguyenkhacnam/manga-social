import React from "react";
import UserCard from "./userCard";
import { useSelector } from "react-redux";

const NewUsers = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    const newUsers = mangaData[11]?.data;
    console.log("User:", newUsers);
    return (
        <div className="flex flex-col items-center bg-[#323232] px-[12px] py-[8px] lg:px-[60px] lg:py-[20px] lg:mr-[60px] rounded-[12px]">
            <h2 className="text-[#888] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[30px] font-bold lg:pb-[20px]">
                NEW USER
            </h2>
            <div className="flex flex-col md:gap-2">
                {newUsers?.map((user, index) => (
                    <UserCard
                        key={index}
                        id={user.id_user}
                        avatar={user.avatar_user}
                        name={user.name_user}
                        time={user.participation_time}
                    />
                ))}
            </div>
            <div></div>
            <p className="text-[#7A7A7A] text-[12px] sm:text-[16px] md:text-[24px] lg:text-[26px] font-semibold lg:pt-[20px]">
                See more
            </p>
        </div>
    );
};

export default NewUsers;
