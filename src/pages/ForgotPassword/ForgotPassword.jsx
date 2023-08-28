import React, { useState } from "react";
import { Button, Form } from "antd";
import axios from "axios";
import * as message from "../../components/Message/Message";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const user = useSelector((store) => store.user);
  console.log("user", user);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onFinish = async (values) => {
    const { new_password, confirm_password, ...restValues } = values;

    if (new_password !== confirm_password) {
      message.error("Passwords do not match.");
      return;
    }

    console.log("Success:", values);
    try {
      const response = await axios.patch(
        "http://14.225.7.221:7979/forgot-password",
        values
      );
      message.success("A link has been sent to your email ");
      console.log(response);
      navigate("/confirm-acount");
    } catch (error) {
      message.error(`${error.response.data.message}`);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateEmail = (rule, value, callback) => {
    if (!value) {
      callback("Please input your email.");
    } else {
      const trimmedValue = value.trim(); // Remove leading and trailing spaces
      if (trimmedValue === value) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(trimmedValue)) {
          callback("Email is not valid.");
        } else {
          callback();
        }
      } else {
        callback("Email should not contain leading or trailing spaces.");
      }
    }
  };

  const validatePassword = (rule, value, callback) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!value) {
      callback("Please input your password.");
    } else if (!regex.test(value)) {
      callback(
        "Password must be 8-16 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character."
      );
    } else {
      callback();
    }
  };

  const HandleNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container-acount">
      <div className=" flex flex-col items-center justify-center rounded-[12px] gap-[31px] py-[60px] px-[15px] md:w-[420px] md:h-[546px] md:my-[100px] md:bg-[#242424] md:px-[44px] 2xl:w-[520px] 2xl:h-[746px]  2xl:px-[74px]">
        <div className="font-semibold text-3xl text-white mb-4">
          Forgot Password
        </div>
        <div className=" text-[14px] leading-[20px] md:text-[24px] md:leading-[28px] font-semibold text-white text-center">
          A link with code to reset your password has been sent to your email.
        </div>
        <Form
          name="basic"
          wrapperCol={{
            span: 24,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className=" w-[328px] md:w-full "
        >
          <Form.Item
            name="email"
            rules={[
              {
                validator: validateEmail,
              },
            ]}
          >
            <input
              id="email"
              name="email"
              className="  w-full bg-[#353434] h-[44px] rounded-[12px] p-[10px] mb-1 text-white placeholder-white placeholder-opacity-75"
              placeholder="Enter your email"
            />
          </Form.Item>

          <div className="relative ">
            <Form.Item
              name="new_password"
              rules={[
                {
                  validator: validatePassword, // Add this validator for password
                },
              ]}
            >
              <input
                id="new_password"
                name="new_password"
                type={showPassword ? "text" : "password"}
                className=" w-full bg-[#353434] h-[44px] rounded-[12px] p-[10px]  mb-1 mt-1 text-white placeholder-white placeholder-opacity-75"
                placeholder="New Password"
              ></input>
            </Form.Item>
            <img
              src="/images/Login/icon.png"
              className="h-[24px] w-[24px] absolute top-3 right-3 cursor-pointer"
              alt=""
              onClick={toggleShowPassword}
            />
          </div>
          <div className="relative ">
            <Form.Item
              name="confirm_password"
              rules={[
                {
                  validator: validatePassword, // Add this validator for password
                },
              ]}
            >
              <input
                id="confirm_password"
                name="confirm_password"
                type={showPassword ? "text" : "password"}
                className=" w-full bg-[#353434] h-[44px] rounded-[12px] p-[10px]  mb-1 mt-1 text-white placeholder-white placeholder-opacity-75"
                placeholder="Confirm Password"
              ></input>
            </Form.Item>
            <img
              src="/images/Login/icon.png"
              className="h-[24px] w-[24px] absolute top-3 right-3 cursor-pointer"
              alt=""
              onClick={toggleShowPassword}
              EA6016
            />
          </div>

          <Form.Item wrapperCol={{ span: 24 }} className="mt-1">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-[44px] rounded-[12px] p-[10px] bg-[#] focus:outline-none hover:bg-[#929292]  border-none "
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
