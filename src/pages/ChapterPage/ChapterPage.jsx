import React, { useEffect, useState } from "react";
import "./ChapterPage.css";
import ChapterCard from "../../components/ChapterCard/ChapterCard";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { sortedChapters } from "../../service/sortChapter";
import Comments from "../../components/Comments/Comments";

const ChapterPage = () => {
  const [showChapter, setShowChapter] = useState(true);
  const [showComment, setShowComment] = useState(false);
  const [chapterDetail, setChapterDetail] = useState();
  const [visibleChapterCount, setVisibleChapterCount] = useState(12);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const params = useParams();
  const { slug } = params;
  const user = useSelector((store) => store.user);

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

  const sortedChapterList = sortedChapters(chapterDetail?.chapters);

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
  //console.log("chapterNumber in chapterPage", chapterNumber);
  console.log("chapterDetail", chapterDetail);

  return (
    <div>
      <div
        className={`w-[100%] min-h-[100px] bg-cover bg-center bg-no-repeat px-[14px] pt-[14px] gap-10 lg:flex lg:gap-5  lg:px-[100px] lg:py-[48px]  2xl:flex 2xl:gap-30  2xl:px-[141px] 2xl:py-[48px] `}
        style={{
          backgroundImage: "url('/images/ChapterPage/bia.png')",
          backgroundRepeat: "no-repeat",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), url('/images/ChapterPage/bia.png'), lightgray 50% / cover no-repeat",
        }}
      >
        {/* chính nó  */}
        <div className="relative">
          <img
            src={chapterDetail?.poster}
            alt=""
            className=" h-[203px] w-[100%] md:h-[406px] lg:h-[450px] 2xl:h-[649px] 2xl:w-[433px] bg-cover object-cover rounded-[8px]"
          />
          <div className="absolute top-0 right-5  hidden  2xl:block ">
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
          <div className="absolute top-0 left-0 hidden  2xl:block ">
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
          <div className="absolute bottom-2 left-2  ">
            <p className="w-[223px] text-[11px] font-medium leading-[16px] text-white md:w-[500px] md:text-[20px] md:leading-[24px]  lg:hidden 2xl:hidden ">
              {showFullDescription ? fullDescription : truncatedDescription}
              {!showFullDescription && (
                <button onClick={() => setShowFullDescription(true)}>
                  <div className=" underline  underline-offset-4">See All</div>
                </button>
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] 2xl:gap-5 ">
          <div className="flex flex-col gap-[8px] lg:gap-[20px] 2xl:gap-[40px]">
            {/* name && tương tác */}
            <div className="flex flex-col gap-[8px] lg:gap-[15px] 2xl:gap-[21px] mt-3 lg:mt-0 2xl:mt-0 ">
              <div className="font-semibold text-[14px] leading-[20px] text-white md:text-[25px] md:leading-[30px] lg:text-[35px] 2xl:text-[45px] 2xl:leading-[52px] ">
                {chapterDetail?.title}
              </div>
              {/* tương tác */}
              <div className="flex items-center gap-4">
                <div className="text-social-chapterpage">
                  <img
                    src="/images/ChapterPage/carbon_view-filled.png"
                    alt=""
                    className="h-[32px] w-[32px] hidden lg:block 2xl:block "
                  />
                  <div>{viewsPart}</div>
                </div>
                <div className="text-social-chapterpage ">
                  <img
                    src="/images/ChapterPage/mdi_like.png"
                    alt=""
                    className="h-[32px] w-[32px] hidden lg:block 2xl:block"
                  />
                  <div>27.8K like</div>
                </div>
                <div className="text-social-chapterpage ">
                  <img
                    src="/images/ChapterPage/jam_files-f.png"
                    alt=""
                    className="h-[32px] w-[32px] hidden lg:block 2xl:block"
                  />
                  <div>{`${chapterDetail?.chapters.length} chapter `} </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] lg:gap-[30px] lg:flex-col-reverse  2xl:gap-[40px] 2xl:flex-col-reverse ">
              {/* info chapter */}
              <div className="flex flex-col gap-[8px] 2xl:gap-[16px]">
                <div className="info-chapterpage">
                  Author:
                  <div className="text-white">{chapterDetail?.author}</div>
                </div>
                <div className="info-chapterpage">
                  Artist:
                  <div className="text-white">Some Name</div>
                </div>
                <div className="info-chapterpage">
                  Genres:
                  <div className="text-white w-[100%]">
                    {chapterDetail?.categories}
                  </div>
                </div>
                <div className="info-chapterpage">
                  Age:
                  <div className="text-white">18+</div>
                </div>
              </div>
              {/* server && button */}
              <div className="flex flex-col gap-[16px] lg:gap-[20px] lg:flex-col-reverse 2xl:gap-[40px] 2xl:flex-col-reverse">
                {/* chọn server */}
                <div className="flex flex-col gap-[10px]">
                  <div className=" font-bold text-[12px] leading-[16px] md:text-[15px] md:leading-[20px] ld:text-[20px] 2xl:text-[28px] 2xl:leading-[36px] text-white ">
                    Server
                  </div>
                  <div className="flex flex-wrap items-center gap-5 ">
                    <img
                      src="/images/ChapterPage/GB.png"
                      alt=""
                      className="flag-chapterpage"
                    />

                    <img
                      src="/images/ChapterPage/ES.png"
                      alt=""
                      className="flag-chapterpage"
                    />
                    <img
                      src="/images/ChapterPage/FR.png"
                      alt=""
                      className="flag-chapterpage"
                    />
                    <img
                      src="/images/ChapterPage/HU.png"
                      alt=""
                      className="flag-chapterpage"
                    />
                    <img
                      src="/images/ChapterPage/DK.png"
                      alt=""
                      className="flag-chapterpage"
                    />
                    <img
                      src="/images/ChapterPage/BZ.png"
                      alt=""
                      className="flag-chapterpage"
                    />
                    <img
                      src="/images/ChapterPage/IT.png"
                      alt=""
                      className="flag-chapterpage"
                    />
                    <img
                      src="/images/ChapterPage/SA.png"
                      alt=""
                      className="flag-chapterpage"
                    />
                  </div>
                </div>
                {/* button */}
                <div className="flex  gap-5">
                  <NavLink to={`/chapter/${slug}/${chapterNumber}`}>
                    <button className=" min-h-[32px] p-[8px]  rounded-[12px] md:px-[35px] md:py-[15px] md:rounded-[20px] 2xl:px-[52px] 2xl:py-[26px]  bg-[#FF2020]  text-white 2xl:rounded-[67px] ">
                      <div className="font-bold text-[12px] leading-[16px] md:text-[20px] 2xl:text-[36px] 2xl:leading-[44px] ">
                        Read now
                      </div>
                    </button>
                    <img src="" alt="" />
                  </NavLink>

                  <button className=" min-h-[32px] p-[8px]  rounded-[12px] text-black md:px-[35px] md:py-[15px] md:rounded-[20px] lg:text-white 2xl:px-[52px] 2xl:py-[26px]  bg-[#496EF1]  2xl:text-white 2xl:rounded-[67px]">
                    <div className="font-bold text-[12px] leading-[16px] md:text-[20px] 2xl:text-[36px] 2xl:leading-[44px] flex items-center gap-[4px] 2xl:gap-3 ">
                      <div> My List </div>
                      <img
                        src="/images/ChapterPage/uil_plus.png"
                        alt=""
                        className="h-[15px] w-[15px]  2xl:h-[48px] 2xl:w-[48px] bg-cover object-cover "
                      />
                    </div>
                  </button>
                  <button className=" min-h-[32px] p-[8px]  rounded-[12px] md:px-[35px] md:py-[15px] md:rounded-[20px] 2xl:px-[52px] 2xl:py-[26px] bg-[#F45F17]  text-white 2xl:rounded-[67px]">
                    <div className="font-bold text-[12px] leading-[16px] md:text-[20px] 2xl:text-[36px] 2xl:leading-[44px] flex items-center gap-[4px] 2xl:gap-3 ">
                      <div>Rate</div>
                      <img
                        src="/images/ChapterPage/Star 3.png"
                        className="h-[15px] w-[15px] 2xl:h-[48px] 2xl:w-[48px] bg-cover object-cover"
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
            <p className="w-[223px]  text-[11px] font-medium leading-[16px] text-white hidden lg:w-[500px] lg:font-normal lg:text-[20px] lg:leading-[25px]  lg:block  2xl:w-[747px] 2xl:font-normal 2xl:text-[28px] 2xl:leading-[36px]  2xl:block ">
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

      <div className="py-[12px] flex items-center justify-center  gap-[65px] lg:gap-[75px] 2xl:gap-[87px] bg-[#3C3B38]">
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
          <div className="bg-[#000] flex p-[18px] justify-center lg:py-[50px] lg:px-[100px] 2xl:py-[50px] 2xl:px-[140px] ">
            <div className=" lg:bg-[#4A4A4A] lg:py-[24px] lg:px-[20px] 2xl:bg-[#4A4A4A] 2xl:py-[24px] 2xl:px-[48px]">
              <div className=" hidden items-center text-white  font-semibold gap-2 lg:flex lg:mb-2 2xl:mb-2  2xl:flex 2xl:text-[22px] 2xl:leading-[28px] ">
                <img
                  src="/images/ChapterPage/jam_files-f.png"
                  alt=""
                  className="h-[32px] w-[32px]"
                />
                <div>278 Chapter</div>
              </div>
              <div className="flex flex-col gap-5  ">
                {sortedChapterList
                  ?.slice(0, visibleChapterCount)
                  ?.map((chapter, index) => (
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
              <div className="text-center mt-5 pb-[100px]">
                <button
                  className="font-semibold text-[12px] leading-[16px] lg:text-[20px] 2xl:text-[32px] 2xl:leading-[40px] text-white  "
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
            <Comments comments={chapterDetail.comments} slug={slug} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterPage;
