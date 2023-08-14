import React, { useState } from "react";
import { Button, Form } from "antd";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="bg-cover bg-center h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center w-[520px] h-[746px] rounded-[12px] gap-[31px] bg-[#242424] mt-[100px] mb-[100px] px-[74px] py-[60px]">
        <div className="font-semibold text-3xl text-white mb-4">Login</div>
        <div className="text-base text-white text-center">
          You can use your app or account to login
        </div>
        <Form
          name="basic"
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="w-full "
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
                  required: true,
                  message: "Please input your password!",
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
              className="h-[24px] w-[24px] absolute top-3 right-3 "
              alt=""
              onClick={toggleShowPassword}
            />
          </div>

          <Form.Item wrapperCol={{ span: 24 }} className="mt-1">
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
