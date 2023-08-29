import axios from "axios";
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { useSelector } from "react-redux";

const Modal = ({
    isModal,
    handleModal,
    user_Name,
    year,
    introduction,
    gender,
}) => {
    const [avatar, setAvatar] = useState("");
    const [avatarIsValid, setAvatarIsValid] = useState(false);
    const [userName, setUserName] = useState("");
    const [introduce, setIntroduce] = useState("");
    const [sex, setSex] = useState("");
    const [sexIsValid, setSexIsValid] = useState(false);
    const [userNameIsValid, setUserNameIsValid] = useState(false);
    const [introduceIsValid, setIntroduceIsValid] = useState(false);
    const [userNameIsTouched, setUserNameIsTouched] = useState(false);
    const [introduceIsTouched, setIntroduceIsTouched] = useState(false);
    const [birth, setBirth] = useState("");
    const [birthIsValid, setBirthIsValid] = useState(false);

    const user = useSelector((store) => store.user);
    console.log(user);

    const avatarChange = (e) => {
        setAvatar(e.target.value);

        if (e.target.value !== "") {
            setAvatarIsValid(false);
        }
    };

    const nameInputChange = (e) => {
        setUserName(e.target.value);

        if (e.target.value !== "") {
            setUserNameIsValid(true);
        }
    };

    const userNameBlur = () => {
        setUserNameIsTouched(true);

        if (userName === "") {
            setUserNameIsValid(false);
            return;
        }
    };

    const introduceInputChange = (e) => {
        setIntroduce(e.target.value);

        if (e.target.value !== "") {
            setIntroduceIsValid(true);
        }
    };

    const introduceBlur = () => {
        setIntroduceIsTouched(true);

        if (introduce === "") {
            setIntroduceIsValid(false);
        }
    };

    const sexChange = (e) => {
        setSex(e.target.value);

        if (e.target.value !== "") {
            setSexIsValid(false);
        }
    };

    const birthChange = (e) => {
        setBirth(e.target.value);

        if (e.target.value !== "") {
            setBirthIsValid(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setUserNameIsTouched(true);
        setIntroduceIsTouched(true);

        if (avatar === "" && sex === "" && birth === "") {
            setAvatarIsValid(true);
            setSexIsValid(true);
            setBirthIsValid(true);
            return;
        }

        if (userName === "" && introduce === "") {
            setUserNameIsValid(false);
            setIntroduceIsValid(false);

            return;
        }
        if (introduce === "" && userName !== "") {
            setIntroduceIsValid(false);
            setUserNameIsValid(true);
            return;
        }
        if (introduce !== "" && userName === "") {
            setUserNameIsValid(false);
            setIntroduceIsValid(true);
            return;
        }

        if (sex === "") {
            setSexIsValid(true);
            return;
        }
        if (birth === "") {
            setBirthIsValid(true);
            return;
        }
        if (avatar === "") {
            setAvatarIsValid(true);
            return;
        }

        await fetch("http://14.225.7.221:7979/user/setting", {
            method: "PATCH",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                    "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
            body: JSON.stringify({
                name_user: userName,
                date_of_birth: "02/08/2002",
                gender: sex,
                avatar_user: avatar,
                introduction: introduce,
                job: "student",
            }),
        });

        // const res = await axios.patch("http://14.225.7.221:7979/user/setting", {
        //     name_user: userName,
        //     date_of_birth: "02/08/2002",
        //     gender: sex,
        //     avatar_user: avatar,
        //     introduction: introduce,
        //     job: "student",
        // });
        // console.log(res);

        setSexIsValid(false);
        setAvatarIsValid(false);
        setUserNameIsValid(true);
        setIntroduceIsValid(true);
        setBirthIsValid(false);

        console.log(userName);
        console.log(introduce);
        console.log(avatar);
        console.log(sex);
        console.log(birth);
    };

    const nameInValid = !userNameIsValid && userNameIsTouched;
    const introduceInValid = !introduceIsValid && introduceIsTouched;

    return (
        <div className=" fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-20">
            <div
                className={`bg-white px-5 py-2 md:px-10 md:py-5 rounded-[12px] relative ${
                    isModal ? " animate-fade-in-down" : "animate-fade-in-up"
                }`}
            >
                <h1 className="text-black font-bold text-[18px] md:text-[26px] pb-5 md:pb-8">
                    Change Profile
                </h1>
                <GrFormClose
                    onClick={handleModal}
                    className=" absolute top-3 right-3 text-[18px] md:text-[28px] font-bold cursor-pointer hover:bg-[#232323]"
                />
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 md:gap-6">
                        <div>
                            <label
                                className="block text-gray-700 text-sm md:text-[20px] font-bold mr-3 mb-2 md:mb-4"
                                htmlFor="name"
                            >
                                Avatar
                            </label>
                            <input
                                onChange={avatarChange}
                                type="file"
                                id="avatar"
                                accept=".png, .jpg"
                                className="block w-full text-sm md:text-[20px] text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm md:file:text-[20px] file:font-semibold file:bg-violet-50 file:text-gray-700 hover:file:bg-violet-100"
                            />
                            {avatarIsValid && (
                                <p className="text-red-500 pt-2">
                                    Please choose a image!
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm md:text-[20px] font-bold mr-3 mb-2 md:mb-4"
                                htmlFor="name"
                            >
                                User Name
                            </label>
                            <input
                                onChange={nameInputChange}
                                onBlur={userNameBlur}
                                className={`shadow appearance-none border  rounded w-full py-2 px-3 md:py-4 md:px-5 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                                    nameInValid
                                        ? " border-red-500"
                                        : "border-black/60"
                                }`}
                                type="text"
                                id="name"
                            />
                            {nameInValid && (
                                <p className="text-red-500">
                                    Must not be empty!
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mr-3 mb-2 md:text-[20px] md:mb-4"
                                htmlFor="introduce"
                            >
                                Introduce
                            </label>
                            <input
                                onChange={introduceInputChange}
                                onBlur={introduceBlur}
                                className={`shadow appearance-none border  rounded w-full py-2 px-3 md:py-4 md:px-5 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                                    introduceInValid
                                        ? " border-red-500"
                                        : "border-black/60"
                                }`}
                                type="text"
                                id="introduce"
                            />
                            {introduceInValid && (
                                <p className="text-red-500">
                                    Must not be empty!
                                </p>
                            )}
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center justify-center gap-1 md:gap-3">
                                <input
                                    onChange={sexChange}
                                    value="female"
                                    name="sex"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                                    type="radio"
                                    id="female"
                                />
                                <label
                                    className=" text-gray-700 text-sm md:text-[20px] font-bold"
                                    htmlFor="female"
                                >
                                    Female
                                </label>
                            </div>
                            <div className="flex items-center gap-1 md:gap-3">
                                <input
                                    onChange={sexChange}
                                    value="male"
                                    name="sex"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                    type="radio"
                                    id="male"
                                />
                                <label
                                    className=" text-gray-700 text-sm md:text-[20px] font-bold"
                                    htmlFor="male"
                                >
                                    Male
                                </label>
                            </div>
                        </div>
                        {sexIsValid && (
                            <p className="text-red-500">
                                Please choose your gender!
                            </p>
                        )}
                        <div>
                            <label className="block text-gray-700 text-sm md:text-[20px] font-bold mr-3 mb-2 md:mb-4">
                                Birth
                            </label>
                            <input
                                onChange={birthChange}
                                type="date"
                                id="birth"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-[20px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date"
                            />
                            {birthIsValid && (
                                <p className="text-red-500 pt-2">
                                    Please choose your birthday!
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="py-5 md:py-7 text-right">
                        <button className="bg-[#F45F17] px-3 py-3 font-semibold text-[16px] md:text-[24px] text-white rounded-[12px] hover:bg-[#d97d4e]">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
