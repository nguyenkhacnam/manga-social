import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function HeaderMobile() {
    const [isHovered, setIsHovered] = useState(false);
    const [isServerHovered, setIsServerHovered] = useState(false);
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
                <Outlet></Outlet>
        </>
     );
}

export default HeaderMobile;