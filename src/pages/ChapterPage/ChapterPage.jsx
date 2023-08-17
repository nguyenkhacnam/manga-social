import React, { useEffect, useState } from "react";
import "./ChapterPage.scss";
import ChapterCard from "../../components/ChapterCard/ChapterCard";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import MangaComments from "../../components/MangaComments";
import { useSelector } from "react-redux";

const ChapterPage = () => {
  const [showChapter, setShowChapter] = useState(true);
  const [showComment, setShowComment] = useState(false);
  const [chapterDetail, setChapterDetail] = useState();
  const [visibleChapterCount, setVisibleChapterCount] = useState(12);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const params = useParams();
  const { slug } = params;

  const user = useSelector((store) => store.user);
  console.log("user", user);
  const handleShowChapter = () => {
    setShowChapter(true);
    setShowComment(false);
  };
  const handleShowComment = () => {
    setShowComment(true);
    setShowChapter(false);
  };

  const fetchChapterDetail = async () => {
    try {
      const response = await axios.get(
        `http://14.225.7.221:7979/manga/${slug}`
      );

      setChapterDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChapterDetail();
  }, [slug, user]);

  const handleSeeMore = () => {
    setVisibleChapterCount((prevCount) => prevCount + 10);
  };

  const sortedChapters = chapterDetail?.chapters.sort((a, b) => {
    // Lấy 3 số sau ký tự "chapter-"
    const getLastNumber = (url) =>
      parseInt(
        url.slice(url.indexOf("chapter-") + 8, url.indexOf("chapter-") + 11),
        10
      );

    const chapterNumberA = getLastNumber(a);
    console.log("chapterNumberA", chapterNumberA);
    const chapterNumberB = getLastNumber(b);

    return chapterNumberA - chapterNumberB;
  });

  const viewsString = chapterDetail?.views || "";
  const startIndex = viewsString.lastIndexOf("has ") + 4;
  const viewsPart = viewsString.substring(startIndex);

  console.log(viewsPart);

  const truncatedDescription =
    chapterDetail?.description?.slice(0, 180) + "... ";
  const fullDescription = chapterDetail?.description;

  const firstChapter = chapterDetail?.chapters[0] || "";
  const lastDashIndex = firstChapter.lastIndexOf("/chapter-");

  // Lấy phần từ "chapter-" đến hết trong chuỗi chapter
  const chapterNumber = firstChapter.substring(lastDashIndex + 1);
  console.log("chapterNumber in chapterPage", chapterNumber);
  console.log("chapterDetail", chapterDetail);
  return (
    <div>
      <div
        className=" w-[100%] h-[1000px] bg-cover bg-center bg-no-repeat md:flex md:gap-30 px-[14px] pt-[14px] md:px-[141px] md:pt-[48px] gap-10"
        style={{
          backgroundImage: "url('/images/ChapterPage/bia.png')",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), url('/images/ChapterPage/bia.png'), lightgray 50% / cover no-repeat",
        }}
      >
        <div className="relative">
          <img
            src={chapterDetail?.poster}
            alt=""
            className=" h-[203px] w-[330px] md:h-[649px] md:w-[433px] bg-cover object-cover rounded-[8px]"
          />
          <div className="absolute top-0 right-5  hidden md:block ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="118"
              height="118"
              viewBox="0 0 118 118"
              fill="none"
            >
              <path
                d="M0 0H118V59C118 91.5848 91.5848 118 59 118C26.4152 118 0 91.5848 0 59V0Z"
                fill="#1E1E1E"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="118"
                height="118"
                viewBox="0 0 118 118"
                fill="none"
              >
                <path
                  d="M0 0H118V59C118 91.5848 91.5848 118 59 118C26.4152 118 0 91.5848 0 59V0Z"
                  fill="#1E1E1E"
                />
                <text
                  x="50%"
                  y="50%"
                  font-size="57px"
                  font-weight="bold"
                  fill="white"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  18+
                </text>
              </svg>
            </svg>
          </div>
          <div className="absolute top-0 left-0 hidden md:block ">
            <div className="relative ">
              <img
                src="/images/ChapterPage/Star 1.png"
                alt=""
                className="h-[144px] w-[144px]"
              />
              <div className="h-[64px] w-[125px] text-white font-semibold text-[24px] leading-[32px] absolute top-[30px] left-[10px]  text-center">
                New Chapter
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] md:gap-5 ">
          <div className="flex flex-col gap-[8px] md:gap-[40px]">
            {/* name && tương tác */}
            <div className="flex flex-col gap-[8px] md:gap-[21px]">
              <div className="font-semibold text-[14px] leading-[20px] md:text-[45px] md:leading-[52px] text-white">
                {chapterDetail?.title}
              </div>
              {/* tương tác */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-medium text-[11px] leading-[16px]  md:font-semibold md:text-[22px] md:leading-[28px] text-white ">
                  <img
                    src="/images/ChapterPage/carbon_view-filled.png"
                    alt=""
                    className="h-[32px] w-[32px] hidden md:block "
                  />
                  <div>{viewsPart}</div>
                </div>
                <div className="flex items-center gap-2 font-medium text-[11px] leading-[16px] md:font-semibold md:text-[22px] md:leading-[28px] text-white ">
                  <img
                    src="/images/ChapterPage/mdi_like.png"
                    alt=""
                    className="h-[32px] w-[32px] hidden md:block"
                  />
                  <div>27.8K like</div>
                </div>
                <div className="flex items-center gap-2 font-medium text-[11px] leading-[16px] md:font-semibold md:text-[22px] md:leading-[28px] text-white ">
                  <img
                    src="/images/ChapterPage/jam_files-f.png"
                    alt=""
                    className="h-[32px] w-[32px] hidden md:block"
                  />
                  <div>{`${chapterDetail?.chapters.length} chapter `} </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] md:gap-[40px] md:flex-col-reverse ">
              {/* info chapter */}
              <div className="flex flex-col gap-[8px] md:gap-[16px]">
                <div className="text-[#9E9E9E] font-normal text-[12px] leading-[16px] md:text-[28px]  md:leading-[36px] flex items-center gap-2">
                  <div className="text-white">{chapterDetail?.author}</div>
                </div>
                <div className="text-[#9E9E9E] font-normal text-[12px] leading-[16px] md:text-[28px]  md:leading-[36px] flex items-center gap-2">
                  Artist:
                  <div className="text-white">Some Name</div>
                </div>
                <div className="text-[#9E9E9E] font-normal text-[12px] leading-[16px] md:text-[28px]  md:leading-[36px] flex flex-wrap items-center gap-2">
                  Genres:
                  <div className="text-white">{chapterDetail?.categories}</div>
                </div>
                <div className="text-[#9E9E9E] font-normal text-[12px] leading-[16px] md:text-[28px]  md:leading-[36px] flex items-center gap-2">
                  Age:
                  <div className="text-white">18+</div>
                </div>
              </div>
              {/* server && button */}
              <div className="flex flex-col gap-[40px] md:flex-col-reverse">
                {/* chọn server */}
                <div className="flex flex-col gap-[10px]">
                  <div className=" font-bold text-[12px] leading-[16px]  md:text-[28px] md:leading-[36px] text-white ">
                    Server
                  </div>
                  <div className="flex flex-wrap items-center gap-5 ">
                    <img
                      src="/images/ChapterPage/GB.png"
                      alt=""
                      className="w-[32px] h-[23px]  md:h-[48px]  md:w-[67px] "
                    />

                    <img
                      src="/images/ChapterPage/ES.png"
                      alt=""
                      className="w-[32px] h-[23px]  md:h-[48px]  md:w-[67px] "
                    />
                    <img
                      src="/images/ChapterPage/FR.png"
                      alt=""
                      className="w-[32px] h-[23px]  md:h-[48px]  md:w-[67px] "
                    />
                    <img
                      src="/images/ChapterPage/HU.png"
                      alt=""
                      className="w-[32px] h-[23px]  md:h-[48px]  md:w-[67px] "
                    />
                    <img
                      src="/images/ChapterPage/DK.png"
                      alt=""
                      className="w-[32px] h-[23px]  md:h-[48px]  md:w-[67px] "
                    />
                    <img
                      src="/images/ChapterPage/IT.png"
                      alt=""
                      className="w-[32px] h-[23px]  md:h-[48px]  md:w-[67px] "
                    />
                    <img
                      src="/images/ChapterPage/SA.png"
                      alt=""
                      className="w-[32px] h-[23px]  md:h-[48px]  md:w-[67px] "
                    />
                  </div>
                </div>
                {/* button */}
                <div className="flex  gap-5">
                  <NavLink to={`/chapter/${slug}/${chapterNumber}`}>
                    <button className=" p-[8px]  rounded-[12px] md:px-[52px] md:py-[26px]  bg-[#FF2020]  text-white md:rounded-[67px] ">
                      <div className="font-bold text-[12px] leading-[16px] md:text-[36px] md:leading-[44px] ">
                        Read now
                      </div>
                    </button>
                  </NavLink>

                  <button className=" p-[8px]  rounded-[12px] text-black md:px-[52px] md:py-[26px]   bg-[#496EF1]  md:text-white md:rounded-[67px]">
                    <div className="font-bold text-[12px] leading-[16px] md:text-[36px] md:leading-[44px] flex gap-1 md:gap-3 ">
                      <div> My List </div>
                      <img
                        src="/images/ChapterPage/uil_plus.png"
                        alt=""
                        className="h-[20px] w-[20px] md:h-[48px] md:w-[48px] bg-cover object-cover "
                      />
                    </div>
                  </button>
                  <button className=" p-[8px]  rounded-[12px] md:px-[52px] md:py-[26px] bg-[#F45F17]  text-white md:rounded-[67px]">
                    <div className="font-bold text-[12px] leading-[16px] md:text-[36px] md:leading-[44px] flex gap-1 md:gap-3 ">
                      <div>Rate</div>
                      <img
                        src="/images/ChapterPage/Star 3.png"
                        className="h-[20px] w-[20px] md:h-[48px] md:w-[48px] bg-cover object-cover"
                        alt=""
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* desc */}
          <div>
            <p className="w-[223px] h-[80px] text-[11px] font-medium leading-[16px]  md:w-[747px] md:font-normal md:text-[28px] md:leading-[36px] text-white">
              {showFullDescription ? fullDescription : truncatedDescription}
              {!showFullDescription && (
                <button onClick={() => setShowFullDescription(true)}>
                  <div className=" underline  underline-offset-4">See All</div>
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="py-[12px] flex items-center justify-center gap-[47px] md:gap-[87px] bg-[#3C3B38]">
        <div
          className={` ${showChapter ? "tabbtn" : " none-tab "} `}
          onClick={handleShowChapter}
        >
          Chapter
        </div>
        <div
          className={` ${showComment ? "tabbtn" : " none-tab "} `}
          onClick={handleShowComment}
        >
          Comment
        </div>
      </div>
      <div>
        {showChapter && (
          <div className="bg-[#000] flex p-[18px] md:py-[50px] md:px-[140px] justify-center">
            <div className="md:bg-[#4A4A4A] md:py-[24px] md:px-[48px]">
              <div className=" hidden  md:flex items-center gap-2 font-semibold text-[22px] leading-[28px] text-white   ">
                <img
                  src="/images/ChapterPage/jam_files-f.png"
                  alt=""
                  className="h-[32px] w-[32px]"
                />
                <div>278 Chapter</div>
              </div>
              <div className="flex flex-col gap-5  ">
                {sortedChapters
                  ?.slice(0, visibleChapterCount)
                  .map((chapter, index) => (
                    <div key={index}>
                      <ChapterCard
                        chapter={chapter}
                        title={chapterDetail?.title}
                        des={chapterDetail?.description}
                        poster={chapterDetail?.poster}
                        slug={slug}
                        islogin={
                          user.email
                            ? true
                            : !user?.mail && index > 5
                            ? false
                            : true
                        }
                      />
                    </div>
                  ))}
              </div>
              <div className="text-center mt-5">
                <button
                  className="font-semibold text-[32px] leading-[40px] text-white  "
                  onClick={handleSeeMore}
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {showComment && (
          <div>
            <MangaComments />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterPage;
