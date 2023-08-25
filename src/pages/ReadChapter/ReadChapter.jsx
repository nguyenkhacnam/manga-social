import axios from "axios";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Modal } from "antd";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import {
  generateChapterNumber,
  sortedChapters,
} from "../../service/sortChapter";
import Loading from "../../components/Loading/Loading";
import DirectionChapter from "../../components/DirectionChapter/DirectionChapter";

const ReadChapter = () => {
  const [chapter, setChapter] = useState("");
  const [imageChapters, setImageChapters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const { slug, id } = params;

  const fetchChapter = async () => {
    console.log("alo here");
    try {
      const response = await axios.get(
        `http://14.225.7.221:7979/manga/${slug}`
      );

      setChapter(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const sortedChapterList = sortedChapters(chapter?.chapters);
  //console.log("sortedChapterList", sortedChapterList);

  const goToPrevChapter = () => {
    if (currentChapterIndex > 0) {
      const prevChapterIndex = currentChapterIndex - 1; // Tính giá trị mới của currentChapterIndex
      setCurrentChapterIndex(prevChapterIndex); // Cập nhật currentChapterIndex
      const prevChapter = chapterNumbers[prevChapterIndex]; // Lấy chapter mới
      navigate(`/manga/${slug}/${prevChapter}`); // Chuyển đến chapter mới
    }
  };

  const goToNextChapter = () => {
    if (currentChapterIndex < sortedChapterList?.length - 1) {
      const nextChapterIndex = currentChapterIndex + 1; // Tính giá trị mới của currentChapterIndex
      setCurrentChapterIndex(nextChapterIndex); // Cập nhật currentChapterIndex
      const nextChapter = chapterNumbers[nextChapterIndex]; // Lấy chapter mới
      console.log("next", nextChapter);
      navigate(`/manga/${slug}/${nextChapter}`); // Chuyển đến chapter mới
    }
  };

  const chapterNumbers = sortedChapterList?.map(generateChapterNumber);
  useEffect(() => {
    if (sortedChapterList && sortedChapterList?.length > 0) {
      const findChapter = chapterNumbers?.indexOf(id);

      if (findChapter >= 0 && findChapter !== currentChapterIndex) {
        setCurrentChapterIndex(findChapter);
      }
    }
  }, [sortedChapterList, id]);

  const currentChapter =
    chapterNumbers?.length > 0 ? chapterNumbers[currentChapterIndex] : null;

  const fetchReadChapter = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://14.225.7.221:7979/manga/${slug}/${id}`
      );
      setImageChapters(response.data.ImageChapter);
      console.log("imageChapters trong", imageChapters);
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReadChapter();
  }, [currentChapter]);
  useEffect(() => {
    fetchChapter();
  }, [slug]);

  const handleChooseChapter = (chapternumber) => {
    navigate(`/manga/${slug}/${chapternumber}`);
    handleCancel();
  };
  console.log("imageChapters ngoài", imageChapters);

  return (
    <Loading isLoading={loading}>
      <div className="bg-[#111111]">
        <Modal
          title="Chọn Chapter"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          className="w-full"
        >
          <div className="overflow-auto  h-[50vh] grid grid-cols-2 md:grid-cols-4 gap-2 px-3">
            {chapterNumbers?.map((chapternumber, index) => (
              <button
                key={index}
                onClick={() => handleChooseChapter(chapternumber)}
                className="border-[#f45f17] border-[1px] px-2 py-1 hover:bg-[#f45f17] hover:text-white hover:duration-200 "
              >
                {chapternumber}
              </button>
            ))}
          </div>
        </Modal>
        <div className="flex items-center justify-center ">
          <div className=" w-full md:w-[75%] px-4 py-2 lg:w-[65%] bg-white ">
            <div>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>
                  <Link to="/">Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link to={`/manga/${slug}`}>{chapter.title}</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{id}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <NavLink
                to={`/manga/${slug}`}
                className="font-semibold text-[18px] leading-[25px] text-[#EA6016]  "
              >
                {chapter.title}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center sticky top-0">
          <div className="bg-white w-full md:w-[75%] lg:w-[65%]   ">
            <DirectionChapter
              goToPrevChapter={goToPrevChapter}
              currentChapterIndex={currentChapterIndex}
              loading={loading}
              showModal={showModal}
              goToNextChapter={goToNextChapter}
              chapterNumbers={chapterNumbers}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          {loading ? (
            <div>Đang tải ảnh...</div>
          ) : (
            imageChapters?.map((imageChapter, index) => (
              <div key={index} className=" w-full md:w-[75%] lg:w-[65%] ">
                <img
                  src={imageChapter}
                  alt=""
                  className="h-[100%] w-full bg-cover object-cover mt-2 "
                />
                <hr />
              </div>
            ))
          )}
        </div>
      </div>
    </Loading>
  );
};

export default ReadChapter;
