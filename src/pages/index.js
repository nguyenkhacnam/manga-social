import SliderImg from "../components/sliderImg";
import SliderImg2 from "../components/sliderImg2";
import SliderImg3 from "../components/sliderImg3";
import CommingSoon from "../components/commingSoon";
import slider1 from "../assets/imgSlider/Rectangle 1.svg";
import slider2 from "../assets/imgSlider/image 6.svg";
import slider3 from "../assets/imgSlider/image 8.svg";
import slider4 from "../assets/imgSlider/image 9.svg";
import slider5 from "../assets/imgSlider/image 5.svg";
import slider6 from "../assets/imgSlider/image 7.png";
import slider7 from "../assets/imgSlider/Vector 3.png";
import slider8 from "../assets/imgSlider/slider8.svg";
import slider9 from "../assets/imgSlider/sliderImgManga.png";
import Rank from "../components/rank";
import ComicRecent from "../components/comicRecent";
import News from "../components/news";
import { Link } from "react-router-dom";
import Comments from "../components/comments";
import NewRelease from "../components/newRelease";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMangaData } from "../Redux/Feature/mangaData";
import Recommended from "../components/recommended";
import ComedyComics from "../components/comeryComics";
import FreeComics from "../components/freeComics";
import Top15Comics from "../components/top15Comics";
export default function Index() {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    console.log("mangaData", mangaData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMangaData());
    }, []);

    return (
        <>
            <div className="cont overflow-x-hidden">
                <div className="slider">
                    <SliderImg
                        className=""
                        arrImage={[slider1, slider2, slider3, slider4]}
                    ></SliderImg>
                    {/* <div className="slider2">
                        <SliderImg2
                            arrImage2={[slider5, slider6, slider7]}
                        ></SliderImg2>
                    </div> */}
                </div>
                <img
                    className="blur-dots"
                    src="/images/Vector 2.svg"
                    alt=""
                ></img>
                <div className="background-dots"></div>
                <div className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] flex items-center justify-between px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] ">
                    <h2 className="text-[#FFFFFF]">New Released Comic</h2>
                    <Link to="/new-release-comics">
                        <p className="text-[#FFFFFF] text-[12px] sm:text-[16px] md:text-[22px] lg:text-[32px] font-semibold ">
                            See all
                        </p>
                    </Link>
                </div>
                <NewRelease></NewRelease>

                <div className="slider3">
                    <SliderImg3 arrImage3={[slider8, slider9]}></SliderImg3>
                </div>
                <div className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] flex items-center justify-between px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] ">
                    <h2 className="text-[#FFFFFF]">Recent Comics</h2>
                    <Link to="/recent-comics">
                        <p className="text-[#FFFFFF] text-[12px] sm:text-[16px] md:text-[22px] lg:text-[32px] font-semibold ">
                            See all
                        </p>
                    </Link>
                </div>
                <ComicRecent></ComicRecent>
                <div className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] flex items-center justify-between px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] ">
                    <h2 className="text-[#FFFFFF]">Recommnended Comics</h2>
                    <Link to="/recommnended-comics">
                        <p className="text-[#FFFFFF] text-[12px] sm:text-[16px] md:text-[22px] lg:text-[32px] font-semibold ">
                            See all
                        </p>
                    </Link>
                </div>
                <Recommended />
                <div className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] flex items-center justify-between px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] ">
                    <h2 className="text-[#FFFFFF]">Comming Soon Comics</h2>
                    <Link to="/commingsoon">
                        <p className="text-[#FFFFFF] text-[12px] sm:text-[16px] md:text-[22px] lg:text-[32px] font-semibold ">
                            See all
                        </p>
                    </Link>
                </div>
                <CommingSoon></CommingSoon>
                <div className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] flex items-center justify-between px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] ">
                    <h2 className="text-[#FFFFFF]">
                        Top 15 Best Comics of the Week
                    </h2>
                </div>
                <Top15Comics />
                <div className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] flex items-center justify-between px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] ">
                    <h2 className="text-[#FFFFFF]">Comedy Comics</h2>
                    <Link to="/comedy-comics">
                        <p className="text-[#FFFFFF] text-[12px] sm:text-[16px] md:text-[22px] lg:text-[32px] font-semibold ">
                            See all
                        </p>
                    </Link>
                </div>
                <ComedyComics />
                <div className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] flex items-center justify-between px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] ">
                    <h2 className="text-[#FFFFFF]">Free Comics</h2>
                    <Link to="free-comics">
                        <p className="text-[#FFFFFF] text-[12px] sm:text-[16px] md:text-[22px] lg:text-[32px] font-semibold ">
                            See all
                        </p>
                    </Link>
                </div>
                <FreeComics />
                <div className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] flex items-center justify-between px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] ">
                    <h2 className="text-[#FFFFFF]">News</h2>
                    <Link to="/news">
                        <p className="text-[#FFFFFF] text-[12px] sm:text-[16px] md:text-[22px] lg:text-[32px] font-semibold ">
                            See all
                        </p>
                    </Link>
                </div>
                <News></News>

                <div className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] flex items-center justify-between px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] ">
                    <h2 className="text-[#FFFFFF]">Rank</h2>
                </div>
                <Rank></Rank>
                <div className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] flex items-center justify-between px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] ">
                    <h2 className="text-[#FFFFFF]">Comments</h2>
                    <Link to="/news">
                        <p className="text-[#FFFFFF] text-[12px] sm:text-[16px] md:text-[22px] lg:text-[32px] font-semibold ">
                            See all
                        </p>
                    </Link>
                </div>
                <Comments></Comments>
            </div>
        </>
    );
}
