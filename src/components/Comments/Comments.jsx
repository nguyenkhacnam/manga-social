import { Button, Form } from "antd";
import React, { useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import { useSelector } from "react-redux";
import axios from "axios";

const Comments = ({ comments, slug }) => {
  const [comment, setComment] = useState("");

  const user = useSelector((store) => store.user);
  console.log("user", user);
  const initialTextareaHeight = "30px"; // Set the initial height
  console.log("comments", comments);
  const handleTextareaChange = (event) => {
    setComment(event.target.value);
    event.target.style.height = initialTextareaHeight; // Set the initial height before recalculating
    event.target.style.height = event.target.scrollHeight + "px"; // Set the height based on content
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        `http://14.225.7.221:7979/manga/apocalyptic-super-system/`,
        values
      );
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateComment = (_, value) => {
    if (!value) {
      return Promise.reject("Comment cannot be empty.");
    }

    const trimmedValue = value.trim();
    if (trimmedValue === "") {
      return Promise.reject("Comment cannot be just whitespace.");
    }

    return Promise.resolve();
  };

  return (
    <div className="lg:bg-black  lg:px-[200px] lg:py-[50px] ">
      <div className="  lg:bg-[#2D2D2D]  lg:px-[40px] lg:rounded-[12px] ">
        <div className="pb-[100px] bg-[#1D1D1D] md:px-[50px] lg:bg-[#2D2D2D] px-[25px] py-[25px] ">
          <div className="flex items-center gap-[8px]  ">
            <img
              src="/images/Comment/Ellipse 8.png"
              className="w-[28px] h-[28px]"
              alt=""
            />
            <Form
              name="basic"
              onFinishFailed={onFinishFailed}
              onFinish={onFinish}
              autoComplete="off"
              className=" w-full flex items-center gap-[8px] "
            >
              <Form.Item
                name="comment"
                rules={[
                  {
                    validator: validateComment,
                  },
                ]}
                className="mb-0 w-full"
                validateTrigger="onSubmit"
              >
                <textarea
                  className="w-full py-[4px] px-[8px] rounded-[12px] bg-[#474747] text-[#f5f5f5] outline-none placeholder-shown:border-[#9A9A9A]"
                  placeholder="Give a comment"
                  value={comment}
                  style={{ height: initialTextareaHeight }} // Set the initial height
                  onChange={handleTextareaChange}
                />
              </Form.Item>
              <button htmlType="submit">
                <img
                  src="/images/Comment/bi_send-fill.png"
                  alt=""
                  className="w-[20px] h-[20px]  "
                />
              </button>
            </Form>
          </div>
          {comments.map((comment, index) => (
            <div key={index}>
              <CommentCard comment={comment} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
