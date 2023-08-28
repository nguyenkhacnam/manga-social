import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CommentNewsCard from "../../components/commentNewsCard";

const ReadNews = () => {
    const { id } = useParams();
    const [dataNewsPage, setDataNewsPage] = useState([]);

    useEffect(() => {
        fetchDataNewsPage();
    }, []);

    const fetchDataNewsPage = async () => {
        const response = await axios(`http://14.225.7.221:7979/news/${id}`);
        const data = response.data;
        setDataNewsPage(data);
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
                    <p className="text-[#F45F17] font-semibold text-[15px] sm:text-[18px] md:text-[22px] lg:text-[24px] cursor-pointer hover:text-[#f59362]">
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
            <div className="">
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
                    {dataNewsPage?.comment?.slice(0, 20)?.map((item, index) => (
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
                <Link>
                    <p className="text-[#F45F17] text-center pt-[20px] font-semibold text-[15px] sm:text-[18px] md:text-[22px] lg:text-[24px] cursor-pointer hover:text-[#f59362]">
                        See All
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default ReadNews;
