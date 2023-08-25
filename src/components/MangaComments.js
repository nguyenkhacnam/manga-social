import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector} from "react-redux";

function MangaComments( { chapterDetail } ) {

    const comments = useSelector(state => state.comments);
    console.log('commentsmaga', comments)
    const [image, setImage] = useState(null);
    console.log('cmt',chapterDetail?.comments)
    useEffect(() => {
        const storedData = localStorage.getItem("persist:root");
        const parsedData = JSON.parse(storedData);
        const userData = JSON.parse(parsedData.user);
        const idUser = userData.id_user;
        const AuthToken = JSON.stringify(userData.jwt);
        const fetchUserData = async () => {
            try {
                const response = await fetch(
                    `http://14.225.7.221:7979/user/${idUser}`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${AuthToken}`,
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    const userData = data.PROFILES;

                    setImage(userData.avatar_user);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);
    return (
        <div className="bg-black">
            <div className="flex justify-center py-[22px] md:py-20">
                <div className="md:w-[1269px] md:bg-[#2D2D2D] rounded-xl">
                    <div className="ml-[25px] mr-[30px] flex justify-around md:mt-12 md:ml-12 md:mr-12 ">
                        <img src={image} alt="" className="w-7 h-7 md:w-14 md:h-14 rounded-full" />
                        <input
                            type="text"
                            placeholder="Give a comment"
                            className="w-[264px] md:w-[937px] h-7 md:h-[52px] rounded-xl md:rounded-[32px] bg-[#4B4B4B] text-xs md:text-2xl md:font-semibold pl-2 md:pl-3 text-[#fff] outline-none"
                        />
                        <img
                            src="/images/MangaComments/Group 48096940.png"
                            alt=""
                            className="w-5 h-5 md:w-12 md:h-12"
                        />
                    </div>
                    <div className="mt-4 md:ml-[25px] md:mr-12 md:mx-[179px] ">
                        {comments?.map((comment, index) => {
                            return (
                                <div key={index} className="flex md:justify-around md:my-12 gap-5 mx-auto mb-3">
                                    <img src={image} alt="" className="w-6 h-6 md:w-14 md:h-14 rounded-full" />
                                    <div className="flex flex-col">
                                        <div className="w-[243px] md:w-[843px] bg-[#4B4B4B] text-white rounded-xl">
                                            <div className="mx-3 my-3 md:mx-12 md:my-6">
                                                <h2 className="block mb-[10px] text-xs md:text-2xl font-semibold text-white">
                                                    User Name
                                                </h2>
                                                <p className="font-light text-xs">{comment.content}</p>
                                            </div>
                                        </div>
                                        <div className="md:ml-5 flex justify-between md:mt-1 md:text-[22px] text-xs text-white">
                                            <div className="flex">
                                                <p>12/07/2023</p>
                                                <p className="block mx-1 md:mx-5">Like</p>
                                                <p className="block mx-1 md:mx-5">Reply</p>
                                                <img
                                                    src="/images/MangaComments/more-horizontal.png"
                                                    alt=""
                                                    className="md:w-6 md:h-6 self-center"
                                                />
                                            </div>
                                            <div className="flex">
                                                <p className="block mr-2">1</p>
                                                <img
                                                    src="/images/MangaComments/Frame 48096936.png"
                                                    alt=""
                                                    className="w-3 h-3 md:w-8 md:h-8 self-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center my-12 text-[32px] text-white font-semibold cursor-pointer">
                        <p>See More Comment</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MangaComments;
