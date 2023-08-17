import { Link, Outlet } from "react-router-dom";
import ComicRecent from "../../components/comicRecent";
import { useEffect, useState } from "react";

function UserProfile() {
    const [isHovered, setIsHovered] = useState(false);
    const [isServerHovered, setIsServerHovered] = useState(false);
    const [input, setInput] = useState("");
    const [image, setImage] = useState(null)
    const [userName, setUserNam] = useState('')
    const [year, setYear] = useState('')
    const [introduction, setIntroduction] = useState('')
    const [sex, setSex] = useState('')
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
                setYear(userData.year_birth)
                setUserNam(userData.name_user)
                setIntroduction(userData.introduction)
                setSex(userData.sex)
              }
            } catch (error) {
              console.error('Error fetching user data:', error);
            }
          };
      
          fetchUserData();
    }, [])

    const fetchData = (value) => {
        // fetch("http://14.225.7.221:7979/")
        //     .then((response) => response.json())
        //     .then((res) => {
        //         console.log(res[1].data);
        //         const results = data.filter((data) => {
        //             return data && data.title_manga && data.title_manga.toLowerCase().includes(value)
        //         })
        //         console.log(results)
        //     });
    };
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
                    <img
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
                    ></input>
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

            <div className="bg-black relative py-5 z-10 h-max px-[16px] sm:px-[20px] md:px-[25px] w-full lg:hidden hidden">
                <div className=" flex flex-col justify-center w-full">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <div className="flex items-center gap-2">
                                <div>
                                    <img
                                        className="w-[45px] h-[45px] rounded-[45px]"
                                        src="/images/naruto.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col items-start text-[14px] sm:text-[16px] md:text-[18px] text-[#FFFFFF]">
                                    <p className="font-semibold">Vu Minh</p>
                                    <p>12/10/2023</p>
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
                        <img
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
                        ></input>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
            <div className="bg-[#000000] h-full">
            <div className="container mx-auto">
                <div className="2xl:flex 2xl:flex-col items-center text-[#fff] relative">
                    <img src="images\UserProfile\Rectangle 457.png" alt="" className="max-h-[247px] md:w-full md:h-[923px] bg-[#ffff] bg-cover lg:rounded-b-[150px] rounded-bl-3xl" />
                    <div className="flex flex-col md:h-60 md:w-full md:relative">
                        <div className="flex md:absolute bottom-0 relative translate-y-[-52%] left-5">
                            <img src={image} alt="" className=" w-[124px] h-[124px] border-4 md:w-[312px] md:h-[312px]
                            rounded-full object-cover border-solid md:border-8" />
                            <div className="flex flex-col font-normal text-[28px] items-center justify-center ml-6">
                                <h2 className="text-[#fff] text-[45px] font-semibold">{userName}</h2>
                                <p className="self-start">{year}</p>
                                <p className="self-start">278 Friends</p>
                            </div>
                        </div>
                        <img src="images\UserProfile\more-horizontal.png" alt="" className="w-16 h-16 absolute right-0 top-1/2 translate-y-[-50%] cursor-pointer"/>
                    </div>
                </div>
                <div className="flex flex-col w-[526px] max-h-[352px] bg-[#676767] mt-[52px] font-semibold text-[#fff] mb-24 rounded-xl p-6">
                    <div>
                        <h2 className="text-[36px] text-[#fff] ">Introduce</h2>
                        <p className="text-[24px] ">{introduction}</p> 
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\material-symbols_work-sharp.png" alt="" className="w-[32px] h-[32px]" />
                        <p className="text-[22px] pl-2">Officer</p>
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\ph_gender-intersex-bold.png" alt="" className="w-[32px] h-[32px]" />
                        <p className="text-[22px] pl-2">{sex ? sex : 'Female'}</p>
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\Frame 48097208.png" alt="" className="w-[32px] h-[32px]" />
                        <p className="text-[22px] pl-2">Manga-Action-Mystery</p>
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\jam_birthday-cake-f.png" alt="" className="w-[32px] h-[32px]" />
                        <p className="text-[22px] pl-2">{year}</p>
                    </div>
                </div>
                <div>
                    <div className="text-6xl text-white mb-10"><Link to="" >Recent Read Comics</Link></div>
                    <div className=""><ComicRecent /></div>
                </div>
            </div>
        </div>
        </>
        
    );
}

export default UserProfile;