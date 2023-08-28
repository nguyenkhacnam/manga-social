import React, { useState } from "react";
import { Button, Form } from "antd";
import axios from "axios";
import * as message from "../../components/Message/Message";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../assets/css/Acount.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const user = useSelector((store) => store.user);
  console.log("user", user);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const response = await axios.post(
        "http://14.225.7.221:7979/register",
        values
      );
      message.success("Signup is successfully");
      console.log(response);
      navigate("/login");
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
      <div className="wrapper-acount">
        <div className="title-acount">SignUp</div>
        <div className="noti-acount">
          Create a new accont our you can log in
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
              className="input-acount"
              placeholder="Enter your email"
            />
          </Form.Item>

          <div className="relative ">
            <Form.Item
              name="password"
              rules={[
                {
                  validator: validatePassword, // Add this validator for password
                },
              ]}
            >
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="input-acount"
                placeholder="Password"
              ></input>
            </Form.Item>
            <img
              src="/images/Login/icon.png"
              className="h-[24px] w-[24px] absolute top-3 right-3 cursor-pointer"
              alt=""
              onClick={toggleShowPassword}
            />
          </div>

          <Form.Item wrapperCol={{ span: 24 }} className="mt-1">
            <Button
              type="primary"
              htmlType="submit"
              className="btn-acount bg-[#EA6016]"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="flex flex-col gap-[200px] md:gap-[20px] ">
          <div className="flex items-center justify-center gap-0.5 md:gap-2 ">
            <div className="font-semibold text-[12px] leading-[16px] md:text-[13px] md:leading-[24px] text-white ">
              By selecting “ SIGN IN”, you agree to
            </div>
            <div className="font-semibold text-[12px] leading-[16px] md:text-[13px] md:leading-[24px] text-[#EA6016] ">
              OUR POLICIES
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5  md:mt-0">
            <div className="font-semibold text-[16px] leading-[24px] text-[#747474] ">
              Already have an account?
            </div>
            <div
              className="font-semibold text-[16px] leading-[24px] text-[#EA6016] cursor-pointer "
              onClick={HandleNavigateToLogin}
            >
              Log in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
