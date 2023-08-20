import React from "react";
import { useSelector } from "react-redux";
import CommentCard from "./commentCard";

const Comments = () => {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    console.log("COmmnets", mangaData);
    const comments = mangaData[13]?.data;
    return (
        // <div>
        //     <div className="comments">
        //         <div className="item-comments">
        //             <div className="left-comment">
        //                 <div className="topic-comic">
        //                     <div className="wrap-mask">
        //                         <img
        //                             className="mask"
        //                             src="/images/Mask group.svg"
        //                             alt=""
        //                         ></img>
        //                     </div>
        //                     <p className="name-topic">Kimetsu No Yaiba #1</p>
        //                 </div>
        //                 <div className="viewer">
        //                     <img
        //                         className="ellips"
        //                         src="/images/Ellipse 1.svg"
        //                         alt=""
        //                     ></img>
        //                     <p className="name-user">User Name</p>
        //                     <p className="add-cmt">Has add a comment</p>
        //                 </div>
        //                 <div className="coment-user">
        //                     <img
        //                         className="bxs-chat"
        //                         src="/images/bxs_chat.svg"
        //                         alt=""
        //                     ></img>
        //                     <p className="mess-chat">
        //                         Lorem ipsum dolor sit amet consectetur ...
        //                     </p>
        //                     <img
        //                         className="ri-book"
        //                         src="/images/ri_book-fill.svg"
        //                         alt=""
        //                     ></img>
        //                     <Link className="comic-name">Kimetsu No Yaiba</Link>
        //                 </div>
        //             </div>
        //             <div className="right-comment">
        //                 <div className="number">
        //                     <p className="title-number">Comment</p>
        //                     <p className="number-cm">273</p>
        //                 </div>
        //                 <div className="number">
        //                     <p className="title-number">Discuss</p>
        //                     <p className="number-cm">145</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="item-comments">
        //             <div className="left-comment">
        //                 <div className="topic-comic">
        //                     <div className="wrap-mask">
        //                         <img
        //                             className="mask"
        //                             src="/images/Mask group.svg"
        //                             alt=""
        //                         ></img>
        //                     </div>
        //                     <p className="name-topic">Kimetsu No Yaiba #1</p>
        //                 </div>
        //                 <div className="viewer">
        //                     <img
        //                         className="ellips"
        //                         src="/images/Ellipse 1.svg"
        //                         alt=""
        //                     ></img>
        //                     <p className="name-user">User Name</p>
        //                     <p className="add-cmt">Has add a comment</p>
        //                 </div>
        //                 <div className="coment-user">
        //                     <img
        //                         className="bxs-chat"
        //                         src="/images/bxs_chat.svg"
        //                         alt=""
        //                     ></img>
        //                     <p className="mess-chat">
        //                         Lorem ipsum dolor sit amet consectetur ...
        //                     </p>
        //                     <img
        //                         className="ri-book"
        //                         src="/images/ri_book-fill.svg"
        //                         alt=""
        //                     ></img>
        //                     <Link className="comic-name">Kimetsu No Yaiba</Link>
        //                 </div>
        //             </div>
        //             <div className="right-comment">
        //                 <div className="number">
        //                     <p className="title-number">Comment</p>
        //                     <p className="number-cm">273</p>
        //                 </div>
        //                 <div className="number">
        //                     <p className="title-number">Discuss</p>
        //                     <p className="number-cm">145</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="item-comments">
        //             <div className="left-comment">
        //                 <div className="topic-comic">
        //                     <div className="wrap-mask">
        //                         <img
        //                             className="mask"
        //                             src="/images/Mask group.svg"
        //                             alt=""
        //                         ></img>
        //                     </div>
        //                     <p className="name-topic">Kimetsu No Yaiba #1</p>
        //                 </div>
        //                 <div className="viewer">
        //                     <img
        //                         className="ellips"
        //                         src="/images/Ellipse 1.svg"
        //                         alt=""
        //                     ></img>
        //                     <p className="name-user">User Name</p>
        //                     <p className="add-cmt">Has add a comment</p>
        //                 </div>
        //                 <div className="coment-user">
        //                     <img
        //                         className="bxs-chat"
        //                         src="/images/bxs_chat.svg"
        //                         alt=""
        //                     ></img>
        //                     <p className="mess-chat">
        //                         Lorem ipsum dolor sit amet consectetur ...
        //                     </p>
        //                     <img
        //                         className="ri-book"
        //                         src="/images/ri_book-fill.svg"
        //                         alt=""
        //                     ></img>
        //                     <Link className="comic-name">Kimetsu No Yaiba</Link>
        //                 </div>
        //             </div>
        //             <div className="right-comment">
        //                 <div className="number">
        //                     <p className="title-number">Comment</p>
        //                     <p className="number-cm">273</p>
        //                 </div>
        //                 <div className="number">
        //                     <p className="title-number">Discuss</p>
        //                     <p className="number-cm">145</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="px-[16px] pb-[150px] sm:px-[20px] md:px-[25px] lg:px-[60px] lg:pb-[60px] lg:pt-[30px]">
            {comments?.map((item, index) => (
                <CommentCard
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
