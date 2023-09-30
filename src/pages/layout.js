import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiSolidHome, BiSolidNews, BiSolidUser } from "react-icons/bi";
import { RiSettingsFill } from "react-icons/ri";
import Search from "../components/search";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Layout({ home }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isServerHovered, setIsServerHovered] = useState(false);
    const [userData, setUserData] = useState();
    const location = useLocation();
    const user = useSelector((store) => store.user);

    useEffect(() => {
        fetchDataNewsPage();
    }, []);

    // const fetchDataNewsPage = async () => {
    //     const response = await axios(
    //         `http://14.225.7.221:7979/user/${user.id_user}`
    //     );
    //     const data = response.data;
    //     setUserData(data);
    // };
    const fetchDataNewsPage = async () => {
      try {
        const response = await axios.get(`http://14.225.7.221:7979/user/${user.id_user}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    //handle search
    const [input, setInput] = useState("");
    console.log(input);
    const fetchData = (value) => {
        fetch("http://14.225.7.221:7979/")
            .then((response) => response.json())
            .then((res) => {
                console.log(res[1].data);
                // const results = data.filter((data) => {
                //     return data && data.title_manga && data.title_manga.toLowerCase().includes(value)
                // })
                // console.log(results)
            });
    };

    // useEffect(() => {
    //     axios.get('http://14.225.7.221:7979/')
    //         .then(response => {
    //             response.data.forEach((data, index) => {
    //                 // console.log(data)
    //                 return data.data.forEach((data) => {
    //                     console.log(data)
    //                     // const titleManga = data.filter((data) => {
    //                     //     return data.title_manga
    //                     // })

    //                     // console.log(titleManga)
    //                     // const arrTitleManga = []
    //                     // if (titleManga) {
    //                     //     arrTitleManga.push(titleManga)
    //                     // }
    //                     // console.log(arrTitleManga)
    //                 })
    //             })
    //             // console.log(data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, [])
    const handleChange = (value) => {
        setInput(value);
        fetchData();
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleServerMouseEnter = () => {
        setIsServerHovered(true);
    };

    const handleServerMouseLeave = () => {
        setIsServerHovered(false);
    };
    return (
        <>
            <div className="header-top hidden lg:flex items-center justify-between w-auto lg:px-[60px]">
                <Link to="/">
                    <div className="flex items-center justify-center gap-3">
                        <img
                            className="w-[48px] h-[48px]"
                            src="/images/Ellipse 1.svg"
                            alt=""
                        ></img>
                        <h3 className="lg:text-[22px] xl:text-[28px] text-[#FFFFFF] font-semibold">
                            MangaSocial
                        </h3>
                    </div>
                </Link>
                <div className="">
                    <div className="flex items-center justify-center lg:gap-[30px] xl:gap-[50px]">
                        <Link to="/">
                            <div
                                className="flex items-center justify-center gap-1"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <p className="text-[#FFFFFF] lg:text-[18px] xl:text-[20px] hover:text-[#f45f17] font-semibold">
                                    Comic
                                </p>
                                <img
                                    className=""
                                    src={
                                        isHovered
                                            ? "/images/Polygon cam.svg"
                                            : "/images/Polygon 1.svg"
                                    }
                                    alt="Arrow"
                                />
                            </div>
                        </Link>

                        <Link to="/genres">
                            <p className="text-[#FFFFFF] lg:text-[18px] xl:text-[20px] hover:text-[#f45f17] font-semibold">
                                Genres
                            </p>
                        </Link>

                        <div>
                            <p className="text-[#FFFFFF] lg:text-[18px] xl:text-[20px] hover:text-[#f45f17] font-semibold cursor-pointer">
                                Popular
                            </p>
                        </div>

                        <div
                            className="flex items-center gap-2"
                            onMouseEnter={handleServerMouseEnter}
                            onMouseLeave={handleServerMouseLeave}
                        >
                            <p className="text-[#FFFFFF] lg:text-[18px] xl:text-[20px] hover:text-[#f45f17] font-semibold cursor-pointer">
                                Server
                            </p>
                            <img
                                className=""
                                src={
                                    isServerHovered
                                        ? "/images/Polygon cam.svg"
                                        : "/images/Polygon 1.svg"
                                }
                                alt="Arrow"
                            />
                        </div>
                        <Link to="/contact-us">
                            <p className="text-[#FFFFFF] lg:text-[18px] xl:text-[20px] hover:text-[#f45f17] font-semibold whitespace-nowrap">
                                Contact us
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center relative gap-7">
                    {/* <img
                        className="w-[24px] h-[24px] absolute left-4"
                        src="/images/search.svg"
                        alt=""
                    ></img>
                    <input
                        className="placeholder:text-[#65676b] placeholder:text-[20px] outline-none py-[12px] pl-[50px] lg:pr-0 xl:pr-[100px] rounded-[38px]"
                        type="text"
                        placeholder="Search..."
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                    ></input> */}
                    <Search />
                    <Link to="/user-profile">
                        <div className="lg:p-[6px] xl:p-[12px] bg-[#F69D17] rounded-[51px]">
                            <img
                                className="h-[48px] w-[48px]"
                                src="/images/usersquare.svg"
                                alt=""
                            ></img>
                        </div>
                    </Link>
                </div>
            </div>

            {/* User mobile */}
            <div className="bg-black relative py-5 z-10 h-max px-[16px] sm:px-[20px] md:px-[25px] w-full lg:hidden">
                <div className=" flex flex-col justify-center w-full">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <div className="flex items-center gap-2">
                                <div>
                                    <img
                                        className="w-[45px] h-[45px] rounded-[45px]"
                                        src={`${
                                            userData?.avatar_user ||
                                            "/images/naruto.jpg"
                                        }`}
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col items-start text-[14px] sm:text-[16px] md:text-[18px] text-[#FFFFFF]">
                                    <p className="font-semibold">
                                        {userData?.name_user}
                                    </p>
                                    <p>{userData?.date_of_birth}</p>
                                </div>
                            </div>
                        </Link>

                        <div>
                            <Link to="/user-profile">
                                <div className="">
                                    <img
                                        className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px]"
                                        src="/images/setting.svg"
                                        alt=""
                                    ></img>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="relative pt-3">
                        {/* <img
                            className="w-[20px] h-[20px] absolute bottom-[5px] sm:bottom-[8px] md:bottom-[11px] left-4"
                            src="/images/search.svg"
                            alt=""
                        ></img>
                        <input
                            className="placeholder:text-[#9B9B9B] bg-[#4A4A4A] placeholder:text-[12px] md:placeholder:text-[16px] outline-none pl-[40px] py-[5px] sm:py-[10px] md:[12px] w-full rounded-[38px]"
                            type="text"
                            placeholder="Search..."
                            value={input}
                            onChange={(e) => handleChange(e.target.value)}
                        ></input> */}
                        <Search />
                    </div>
                </div>
            </div>

            {/* Nav bar mobile */}
            <div className="flex items-center justify-center w-full h-[60px] md:h-[80px] fixed z-50 bottom-0 md:bottom-[-1px] bg-[#F45F17] lg:hidden">
                <div className="flex items-center justify-between w-full px-[30px] md:px-[100px]">
                    <div className="">
                        <Link to="/">
                            <div
                                className={`flex flex-col items-center justify-center ${
                                    location.pathname === "/"
                                        ? "bg-[#FFFFFF] p-[8px] md:px-[12px] md:py-[8px] rounded-full text-[#F45F17] mb-[40px] border-[4px] border-[#F45F17]"
                                        : "text-[#FFFFFF]"
                                }`}
                            >
                                <BiSolidHome className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
                                <p className="text-[13px] md:text-[18px] font-semibold">
                                    Home
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        <Link to="/news">
                            <div
                                className={`flex flex-col items-center justify-center ${
                                    location.pathname === "/news"
                                        ? "bg-[#FFFFFF] p-[8px] md:px-[12px] md:py-[8px] rounded-full text-[#F45F17] mb-[40px] border-[4px] border-[#F45F17]"
                                        : "text-[#FFFFFF]"
                                }`}
                            >
                                <BiSolidNews className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
                                <p className=" text-[13px] md:text-[18px] font-semibold">
                                    News
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/genres">
                            <div
                                className={`flex flex-col items-center justify-center ${
                                    location.pathname === "/genres"
                                        ? "bg-[#FFFFFF] p-[8px] md:px-[12px] md:py-[12px] rounded-full text-[#F45F17] mb-[40px] border-[4px] border-[#F45F17]"
                                        : "text-[#FFFFFF]"
                                }`}
                            >
                                <RiSettingsFill className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
                                <p className=" text-[13px] md:text-[18px] font-semibold">
                                    Genres
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/user-profile">
                            <div
                                className={`flex flex-col items-center justify-center ${
                                    location.pathname === "/user-profile"
                                        ? "bg-[#FFFFFF] p-[8px] md:px-[12px] md:py-[8px] rounded-full text-[#F45F17] mb-[40px] border-[4px] border-[#F45F17]"
                                        : "text-[#FFFFFF]"
                                }`}
                            >
                                <BiSolidUser className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
                                <p className=" text-[13px] md:text-[18px] font-semibold">
                                    Profile
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
}
