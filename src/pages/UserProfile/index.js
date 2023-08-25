import ComicRecent from "../../components/comicRecent";
import { useEffect, useState } from "react";
import HeaderMobile from "../../components/HeaderMobile";
import Modal from "../../components/modal";

function UserProfile() {
    const [image, setImage] = useState(null);
    const [userName, setUserNam] = useState("");
    const [year, setYear] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [sex, setSex] = useState("");
    const [isModal, setIsModal] = useState(false);
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
                    // const userData = data.PROFILES;
                    console.log("users: ", data);
                    setImage(data.avatar_user);
                    setYear(data.date_of_birth);
                    setUserNam(data.name_user);
                    setIntroduction(data.introduction);
                    setSex(data.gender);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const handleModal = () => {
        setIsModal((prevState) => {
            return !prevState;
        });
    };
    return (
        <>
            <HeaderMobile />
            <div className="bg-[#000000] h-full">
                <div className="container mx-auto">
                    <div className="md:flex md:flex-col items-center text-[#fff] relative">
                        <img
                            src="images\UserProfile\Rectangle 457.png"
                            alt=""
                            className=""
                        />
                        <div className="flex flex-col md:h-60 md:w-full relative">
                            <div className="absolute top-[-60px] md:top-[-150px] px-[16px] sm:px-[20px] sm:pb-[20px] md:px-[25px] md:pb-[25px] lg:px-[60px] lg:pb-[60px]">
                                <img
                                    src={image}
                                    alt=""
                                    className=" w-[124px] h-[124px] border-4 md:w-[312px] md:h-[312px]
                            rounded-full object-cover border-solid md:border-8"
                                />
                                <div className="flex flex-col font-normal md:text-[28px] md:items-center justify-start md:justify-center md:gap-6 md:ml-6">
                                    <h2 className="text-[#fff] md:text-[45px] text-sm font-semibold">
                                        {userName}
                                    </h2>
                                    <p className="text-white text-xs md:text-[28px] md:text-left">
                                        {year}
                                    </p>
                                    <p className="self-start">278 Friends</p>
                                </div>
                            </div>
                            <img
                                onClick={handleModal}
                                src="images\UserProfile\more-horizontal.png"
                                alt=""
                                className="w-7 h-7 md:w-16 md:h-16 absolute right-4 top-1/2 translate-y-[100%] md:translate-y-[-50%] cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mx-4 md:mx-[25px] mt-[150px] md:mt-[200px] md:w-[526px] max-h-[352px] bg-[#676767] font-semibold text-[#fff] rounded-xl md:p-6 p-[10px]">
                        <div className="pb-[10px]">
                            <h2 className="text-sm md:text-[36px] text-[#fff] pb-[10px] md:pb-[30px]">
                                Introduce
                            </h2>
                            <p className="text-[11px] md:text-[24px] ">
                                {introduction}
                            </p>
                        </div>
                        <div className="flex mb-3 md:mb-[30px]">
                            <img
                                src="images\UserProfile\material-symbols_work-sharp.png"
                                alt=""
                                className="w-4 h-4 md:w-[32px] md:h-[32px]"
                            />
                            <p className="text-[11px] md:text-[22px] pl-2">
                                Officer
                            </p>
                        </div>
                        <div className="flex mb-3 md:mb-[30px]">
                            <img
                                src="images\UserProfile\ph_gender-intersex-bold.png"
                                alt=""
                                className="w-4 h-4 md:w-[32px] md:h-[32px]"
                            />
                            <p className="text-[11px] md:text-[22px] pl-2">
                                {sex ? sex : "Female"}
                            </p>
                        </div>
                        <div className="flex mb-3 md:mb-[30px]">
                            <img
                                src="images\UserProfile\Frame 48097208.png"
                                alt=""
                                className="w-4 h-4 md:w-[32px] md:h-[32px]"
                            />
                            <p className="text-[11px] md:text-[22px] pl-2">
                                Manga-Action-Mystery
                            </p>
                        </div>
                        <div className="flex">
                            <img
                                src="images\UserProfile\jam_birthday-cake-f.png"
                                alt=""
                                className="w-4 h-4 md:w-[32px] md:h-[32px]"
                            />
                            <p className="text-[11px] md:text-[22px] pl-2">
                                {year}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="px-[16px] sm:px-[20px] sm:pb-[20px] md:px-[25px] md:pb-[25px] lg:px-[60px] lg:pb-[60px]">
                            <p className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] leading-[64px] text-[#FFFFFF] pt-[16px] pb-[20px] sm:pt-[20px] sm:pb-[26px] md:pb-[30px] md:pt-[38px] lg:pt-[50px] lg:pb-[60px]">
                                Recent Read Comics
                            </p>
                        </div>
                        <div className="">
                            <ComicRecent />
                        </div>
                    </div>
                    {isModal && (
                        <Modal
                            isModal={isModal}
                            handleModal={handleModal}
                            user_Name={userName}
                            year={year}
                            introduction={introduction}
                            gender={sex}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default UserProfile;
