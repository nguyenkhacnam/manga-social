import React, { useEffect, useState } from "react";
import { Button, Form } from "antd";
import axios from "axios";
import * as message from "../../components/Message/Message";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Redux/Feature/userSlice";
import { getMangaData } from "../../Redux/Feature/mangaData";
import "../../assets/css/Acount.css";

// const axiosInstance = axios.create({
//   withCredentials: true, // Cho phép gửi và nhận cookie giữa các tên miền khác nhau
//   credentials: "include", // Bao gồm cookie trong yêu cầu
// });

const axiosInstance = axios.create({
  withCredentials: true, // Cho phép gửi và nhận cookie giữa các tên miền khác nhau
  credentials: "include", // Bao gồm cookie trong yêu cầu
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMangaData());
  }, []);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onFinish = async (values) => {
    setLoading(true);
    console.log("Success:", values);
    try {
      const response = await axiosInstance.post(
        "http://14.225.7.221:7979/login",
        values
        // {
        //   headers: {
        //     "access-control-allow-origin": "*",
        //     "Content-type": "application/json; charset=UTF-8",
        //   },
        // }
      );
      if (response && response.data && response.data.account) {
        message.success("Login is successful");
        console.log("response.data.account", response.data.account);
        dispatch(updateUser(response.data.account));
        navigate("/");
      } else {
        // Handle the case when the response doesn't have the expected data
        message.error("Invalid response data");
      }
    } catch (error) {
      if (error.response) {
        message.error(`${error.response.data.message}`);
      } else {
        message.error("An error occurred");
      }
    }
    setLoading(false);
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

  const HandleNavigateToSignUp = () => {
    navigate("/sign-up");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <Loading isLoading={loading}>
      <div
        className="bg-cover bg-center h-screen w-[100%] flex items-center justify-center "
        style={{
          background: `
        linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
        linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
        linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
        linear-gradient(2deg, #000 0%, rgba(0, 0, 0, 0.00) 100%),
        url('/images/Login/slide1.jpg') lightgray 50% / cover no-repeat `,
        }}
      >
        <div className=" flex flex-col items-center justify-center rounded-[12px] gap-[31px] py-[60px] px-[15px] md:w-[420px] md:h-[546px] md:my-[100px] md:bg-[#242424] md:px-[44px] 2xl:w-[520px] 2xl:h-[746px]  2xl:px-[74px]">
          <div className="font-semibold text-3xl text-white mb-4">Login</div>
          <div className="text-[14px] leading-[20px] md:text-[24px] md:leading-[28px] font-semibold text-white text-center">
            You can use your app or account to login
          </div>

          <Form
            name="basic"
            wrapperCol={{
              span: 24,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="w-[328px] md:w-full  "
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
                className="w-full bg-[#353434] h-[44px] rounded-[12px] p-[10px] mb-1 text-white placeholder-white placeholder-opacity-75"
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
                  className="w-full bg-[#353434] h-[44px] rounded-[12px] p-[10px]  mb-1 mt-1 text-white placeholder-white placeholder-opacity-75"
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
                className="w-full h-[44px] rounded-[12px] p-[10px] bg-[#EA6016] focus:outline-none hover:bg-[#929292] border-none "
              >
                LOG IN
              </Button>
            </Form.Item>
          </Form>

          <div className="flex flex-col gap-[200px] md:gap-[20px] ">
            <div
              className="font-semibold text-[16px] leading-[24px] text-center text-[#EA6016] cursor-pointer"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </div>

            <div className="flex items-center justify-center gap-1.5  md:mt-0">
              <div className="font-semibold text-[16px] leading-[24px] text-[#747474] ">
                Don’t have an account?
              </div>
              <div
                className="font-semibold text-[16px] leading-[24px] text-[#EA6016] cursor-pointer"
                onClick={HandleNavigateToSignUp}
              >
                Sign up
              </div>
            </div>
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default Login;
