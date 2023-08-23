import React from "react";
import { useSelector } from "react-redux";
import CommentCard from "./commentCard";

const Comments = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    console.log("COmmnets", mangaData);
    const comments = mangaData[13]?.data;
    return (
        <div className="px-[16px] pb-[150px] sm:px-[20px] md:px-[25px] lg:px-[60px] lg:pb-[60px] lg:pt-[30px]">
            {comments?.map((item, index) => (
                <CommentCard
                    key={index}
                    avatar_user={item.avatar_user}
                    content={item.content}
                    name_user={item.name_user}
                    time={item.time_comment}
                    title_manga={item.title_manga}
                    count_comment={item.count_comment}
                    count_reply_comment={item.count_reply_comment}
                />
            ))}
        </div>
    );
};

export default Comments;
