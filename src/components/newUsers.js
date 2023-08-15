import React from "react";
import useFetch from "../hooks/useFetch";
import UserCard from "./userCard";

const NewUsers = () => {
    const newUsers = useFetch(12);
    console.log(newUsers);

    return (
        <div className="flex flex-col items-center bg-[#323232] px-[60px] py-[20px] mr-[60px] rounded-[12px]">
            <h2 className="text-[#888] text-[28px] font-bold pb-[20px]">
                NEW USER
            </h2>
            <div>
                {newUsers?.map((user, index) => (
                    <UserCard
                        key={index}
                        avatar={user.avatar_user}
                        name={user.name_user}
                        time={user.participation_time}
                    />
                ))}
            </div>
            <div></div>
        </div>
    );
};

export default NewUsers;
