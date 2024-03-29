import axios from "axios";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Modal } from "antd";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import {
  generateChapterNumber,
  sortedChapters,
} from "../../service/sortChapter";
import Loading from "../../components/Loading/Loading";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

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
      <div>
        <Modal
          title="Chọn Chapter"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          className="w-full"
        >
          <div className="overflow-auto  h-[400px] grid grid-cols-2 md:grid-cols-4 ">
            {chapterNumbers?.map((chapternumber, index) => (
              <button
                key={index}
                onClick={() => handleChooseChapter(chapternumber)}
              >
                {chapternumber}
              </button>
            ))}
          </div>
        </Modal>
        <div className="flex items-center justify-center">
          <div className="w-[75%]  ">
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
                className="font-semibold text-[18px] leading-[25px] text-[#EA6016]"
              >
                {chapter.title}
              </NavLink>
            </div>
            <div className="mt-5 mb-3">
              <div className="flex items-center justify-center gap-[30px] ">
                <button
                  onClick={goToPrevChapter}
                  disabled={currentChapterIndex === 0 || loading} // Tắt khi ở vị trí đầu tiên hoặc đang loading
                  className={`flex items-center justify-center gap-2 px-4 py-2 ${
                    currentChapterIndex === 0 || loading
                      ? "bg-[#655e5a]"
                      : "bg-[#fa935c]"
                  } `}
                >
                  <AiOutlineArrowLeft />
                  Prev
                </button>
                <button onClick={showModal}>
                  <BsReverseLayoutTextSidebarReverse />
                </button>
                <button
                  onClick={goToNextChapter}
                  disabled={
                    currentChapterIndex === chapterNumbers?.length - 1 ||
                    loading
                  } // Tắt khi ở vị trí cuối cùng hoặc đang loading
                  className={`flex items-center justify-center gap-2 px-4 py-2 ${
                    currentChapterIndex === chapterNumbers?.length - 1 ||
                    loading
                      ? "bg-[#655e5a]"
                      : "bg-[#fa935c]"
                  } `}
                >
                  Next
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {loading ? (
            <div>Đang tải ảnh...</div>
          ) : (
            imageChapters?.map((imageChapter, index) => (
              <div key={index}>
                <img
                  src={imageChapter}
                  alt=""
                  className="h-[100%] w-[100%] bg-cover object-cover mt-2 "
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
