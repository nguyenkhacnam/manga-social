import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentNewsCard from "../../components/commentNewsCard";

const ReadNews = () => {
    const { id } = useParams();
    const [dataNewsPage, setDataNewsPage] = useState([]);
    const commentsPart = useRef(null);
    const [itemsToShow, setItemToShow] = useState(20);

    useEffect(() => {
        fetchDataNewsPage();
    }, []);

    const fetchDataNewsPage = async () => {
        const response = await axios(`http://14.225.7.221:7979/news/${id}`);
        const data = response.data;
        setDataNewsPage(data);
    };

    const scrollComments = () => {
        window.scrollTo({
            top: commentsPart.current.offsetTop,
            behavior: "smooth",
        });
    };

    const seeAllHandle = () => {
        setItemToShow((prev) => {
            return prev + 5;
        });
    };

    const seeLessHandle = () => {
        setItemToShow((prev) => {
            return prev - (prev - 20);
        });
    };

    console.log(dataNewsPage);
    const user_name = dataNewsPage.profile_user_post?.slice(30);
    const num_comments = dataNewsPage?.comment?.length;
    return (
        <div className="bg-black px-[16px] pb-[100px] md:px-[25px] md:pb-[150px] lg:px-[60px] lg:pb-[200px] flex flex-col text-white">
            <h1 className="text-white text-[18px] font-semibold sm:text-[20px] md:text-[24px] lg:text-[30px] py-[10px] md:py-[20px] lg:py-[30px]">
                {dataNewsPage?.title_news}
            </h1>
            <div>
                <p className="sm:text-[18px] md:text-[22px] lg:text-[24px]">
                    by{" "}
                    <span className="text-[#F45F17] font-semibold text-[15px] sm:text-[18px] md:text-[22px] lg:text-[24px]">
                        {user_name}
                    </span>
                </p>
                <div className="flex items-center gap-2">
                    <p className="sm:text-[18px] md:text-[22px] lg:text-[24px]">
                        {dataNewsPage?.time_news}
                    </p>
                    <span className="border-[3px] rounded-full h-full"></span>
                    <p
                        onClick={scrollComments}
                        className="text-[#F45F17] font-semibold text-[15px] sm:text-[18px] md:text-[22px] lg:text-[24px] cursor-pointer hover:text-[#f59362] scroll-smooth"
                    >
                        {num_comments} Comments
                    </p>
                </div>
            </div>
            <div className="py-[10px] sm:py-[15px] md:py-[30px] lg:py-[50px]">
                <img
                    className="w-full md:h-[800px] object-cover"
                    src={dataNewsPage?.images_poster}
                    alt="poster"
                />
            </div>
            <p className="md:text-[22px]">{dataNewsPage?.descript_pro}</p>
            <div ref={commentsPart} className="">
                <div className="flex items-center justify-between pt-[30px] pb-[15px] border-b-[1px]">
                    <p className="text-white font-semibold text-[18px] sm:text-[18px] md:text-[22px] lg:text-[24px]">
                        Recent Comments
                    </p>
                    <p className="text-[#F45F17] font-semibold text-[15px] sm:text-[18px] md:text-[22px] lg:text-[24px] cursor-pointer hover:text-[#f59362]">
                        {num_comments >= 20
                            ? `20 of ${num_comments} Comments`
                            : `${num_comments} Comments`}
                    </p>
                </div>
                <div className="flex flex-col gap-6 pt-[20px]">
                    {dataNewsPage?.comment
                        ?.slice(0, itemsToShow)
                        ?.map((item, index) => (
                            <CommentNewsCard
                                key={index}
                                avatar_user={item.avatar_user}
                                content={item.content}
                                time_comment={item.time_comment}
                                likes={item.likes}
                                name_user={item.name_user}
                                replies={item.replies}
                            />
                        ))}
                </div>
                <div>
                    {itemsToShow < num_comments && num_comments > 20 ? (
                        <p
                            onClick={seeAllHandle}
                            className="text-[#F45F17] text-center pt-[20px] font-semibold text-[15px] sm:text-[18px] md:text-[22px] lg:text-[24px] cursor-pointer hover:text-[#f59362]"
                        >
                            See More 5 Comments
                        </p>
                    ) : (
                        <p
                            onClick={seeLessHandle}
                            className="text-[#F45F17] text-center pt-[20px] font-semibold text-[15px] sm:text-[18px] md:text-[22px] lg:text-[24px] cursor-pointer hover:text-[#f59362]"
                        >
                            See Less
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReadNews;
