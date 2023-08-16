import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function MangaComments() {
    const [image, setImage] = useState(null)
    const [comments, setComments] = useState([])
    const [userImages, setUserImages] = useState({});
    useEffect(() => {
        axios.get('http://14.225.7.221:7979/manga/Prunus+Girl')
            .then(res => {
                console.log('res.data',res.data)
                setComments(res.data.comments)
            })
    }, [])

    useEffect(() => {
        const storedData = localStorage.getItem('persist:root');
        const parsedData = JSON.parse(storedData);
        const userData = JSON.parse(parsedData.user)
        const idUser = userData.id_user
        const AuthToken = JSON.stringify(userData.jwt)
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://14.225.7.221:7979/user/${idUser}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${AuthToken}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    const userData = data.PROFILES

                    setImage(userData.avatar_user)
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [])

    // useEffect(() => {
    //     // Lấy danh sách user IDs từ comments
    //     const userIds = comments.map(comment => comment.user_id);
    //     // Lấy thông tin hình ảnh của tất cả người dùng
    //     const fetchUserImages = async () => {
    //         axios.get('http://14.225.7.221:7979/user/', {
    //             params: {
    //                 ids: userIds.join(',')
    //             } 
    //         })
    //         .then(res => {
    //             console.log(res)
    //         })
    //         // const userImagesData = response.data;
    //         // console.log(response.data)
    //             // setUserImages(userImagesData); // Lưu trữ thông tin hình ảnh của người dùng
    //             .catch(error => {
    //                 console.error('Error fetching data:', error);
    //             });
    //     };

    //     fetchUserImages();
    // }, [comments]);
    return (
        <div className="flex justify-center">
            <div className="w-[1269px] bg-[#2D2D2D]">
                <div className="flex justify-around mt-12 ml-12 mr-12">
                    <img src={image} alt="" className="w-14 h-14 rounded-full" />
                    <input type="text" placeholder="Give a comment" className="w-[937px] h-[52px] rounded-[32px] bg-[#4B4B4B] text-2xl font-semibold pl-3 text-[#fff] outline-none" />
                    <img src="images\MangaComments\Group 48096940.png" alt="" className="w-12 h-12" />
                </div>
                <div className="mx-[179px]">
                    {comments.map((comment, index) => {
                        console.log(comment.user_id)
                        // const usesignle = handeleFetchUser(id)
                        return (
                            <div key={index} className="flex justify-around my-12">
                                <img src={image} alt="" className="w-14 h-14 rounded-full" />
                                <div className="flex flex-col">
                                    <div className="w-[843px] bg-[#4B4B4B] text-white">
                                        <div className="mx-12 my-6">
                                            <h2 className="block mb-[10px] text-2xl font-semibold text-white">User Name</h2>
                                            <p className="font-light">{comment.content}</p>
                                        </div>
                                    </div>
                                    <div className="ml-5 flex justify-between mt-1 text-[22px] text-white">
                                        <div className="flex">
                                            <p>12/07/2023</p>
                                            <p className="block mx-5">Like</p>
                                            <p className="block mx-5">Reply</p>
                                            <img src="images\MangaComments\more-horizontal.png" alt="" className="w-6 h-6 self-center" />
                                        </div>
                                        <div className="flex">
                                            <p className="block mr-2">1</p>
                                            <img src="images\MangaComments\Frame 48096936.png" alt="" className="w-8 h-8 self-center" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center my-12 text-[32px] text-white font-semibold cursor-pointer">
                    <p>See More Comment</p>
                </div>
            </div>
        </div>
    );
}

export default MangaComments;