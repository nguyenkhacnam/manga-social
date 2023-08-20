import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadChapter = () => {
  const [imageChapters, setImageChapters] = useState([]);

  const params = useParams();

  const { slug, id } = params;

  const fetchChapter = async () => {
    try {
      const response = await axios.get(
        `http://14.225.7.221:7979/manga/${slug}/${id}`
      );
      console.log("response", response);
      setImageChapters(response.data.ImageChapter);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchChapter();
  }, [slug, id]);

  return (
    <div>
      <div>
        
      </div>
      <div className="flex flex-col items-center justify-center  ">
        {imageChapters?.map((imageChapter, index) => (
          <div key={index}>
            <img
              src={imageChapter}
              alt=""
              className="h-[100%] w-[100%] bg-cover object-cover mt-2 "
            />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadChapter;
