import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../../assets/css/Acount.css";

const ConfirmAcount = () => {
  const navigate = useNavigate();

  const HandleNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container-acount">
      <div className=" flex flex-col items-center justify-center rounded-[12px] gap-[31px] py-[60px] px-[15px] bg-[#242424] w-[300px] h-[300px] md:w-[420px] md:h-[546px] md:my-[100px] md:bg-[#242424] md:px-[44px] 2xl:w-[520px] 2xl:h-[746px]  2xl:px-[74px]">
        <div>
          <BsCheckCircleFill className="text-green-500 text-6xl" />
        </div>
        <div className=" text-[14px] leading-[20px] md:text-[24px] md:leading-[28px] font-semibold text-white text-center">
          A link with code to reset your password has been sent to your email.
        </div>
        <div className=" text-[14px] leading-[20px] md:text-[24px] md:leading-[28px] font-semibold text-white text-center">
          Please confirm and then go to the login page
        </div>
        <div
          className="font-semibold text-[16px] leading-[24px] text-[#EA6016] cursor-pointer md:text-[20px]"
          onClick={HandleNavigateToLogin}
        >
          Try To Log in
        </div>
      </div>
    </div>
  );
};

export default ConfirmAcount;
