import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setComments, } from "../Redux/comments/commentsSlice";
import { NavLink } from "react-router-dom";

const CardManga = ({ poster, title, rate, update }) => {
    const dispatch = useDispatch();
    const slug = title?.toLowerCase().replace(/ /g, "-") || "";
    const [selectedManga, setSelectedManga] = useState(null)
    const handleMangaSelect = (title) => {
        const titleManga = title?.toLowerCase().replace(/ /g, "-") || "";
        setSelectedManga(titleManga)
        console.log('titleManga', titleManga)
    }

    useEffect(() => {
        let isMounted = true
        if (selectedManga) {
            axios
                .get(`http://14.225.7.221:7979/manga/${selectedManga}`)
                .then((response) => {
                    if (isMounted) {
                        console.log(response.data.comments)
                        dispatch(setComments(response.data.comments));
                    }
                })
                .catch((error) => {
                    console.error("Error fetching comments:", error);
                });
        }

        return () => {
            isMounted = false;
        };
    }, [selectedManga, dispatch]);
    return (
        <NavLink
            to={`/chapter/${slug}`}
        >
            <div className=" cursor-pointer" onClick={() => handleMangaSelect(title)}>
                <div className="ease-in-out duration-300 hover:scale-105 transition">
                    <img
                        className="w-[119px] h-[140px] sm:w-[140px] sm:h-[163px] md:w-[200px] md:h-[236px] lg:w-[255px] lg:h-[383px] rounded-[8px] lg:rounded-[12px]"
                        src={poster}
                        alt=""
                    ></img>
                </div>
                <div className="text-[#FFFFFF]">
                    <div className="mt-0 lg:mt-5">
                        <h3 className="text-[#FFFFFF] text-[12px] sm-[16px] md:text-[20px] lg:text-[26px] xl:text-[28px] leading-5 md:leading-7 lg:leading-10 font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-[120px] lg:w-[200px]">
                            {title}
                        </h3>
                        <p className="text-[11px] sm-text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] leading-4 md:leading-6 lg:leading-8 font-semibold lg:mt-3">
                            Chapter 247:The dark of sky
                        </p>
                    </div>
                    <div className="flex items-center gap-[6px] lg:gap-[16px]">
                        <img
                            className="w-3 h-3 lg:w-5 lg:h-5"
                            src="/images/star.png"
                            alt=""
                        />
                        <div className="text-[11px] sm-text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px]">
                            <span className="">{rate}</span>
                            <span className="">/5</span>
                        </div>
                    </div>

                    <div className="px-[10px] py-[3px] lg:px-[10px] lg:py-[5px] bg-[#363636] lg:w-max rounded-[33px] mt-3">
                        <p className="text-[11px] sm-text-[13px] md:text-[15px] lg:text-[18px] xl:text-[22px] leading-4 lg:leading-8 font-semibold">
                            Update: {update}
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default CardManga;
