import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";

const Modal = ({ handleModal }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className=" fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center">
            <div className="bg-white px-5 py-2 md:px-10 md:py-5 rounded-[12px] relative animate-fade-in-down">
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
                            <input
                                type="file"
                                id="avatar"
                                className="block w-full text-sm md:text-[20px] text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm md:file:text-[20px] file:font-semibold file:bg-violet-50 file:text-gray-700 hover:file:bg-violet-100"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm md:text-[20px] font-bold mr-3 mb-2 md:mb-4"
                                for="name"
                            >
                                User Name
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 md:py-4 md:px-5 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                id="name"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mr-3 mb-2 md:text-[20px] md:mb-4"
                                for="introduce"
                            >
                                Introduce
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 md:py-4 md:px-5 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                id="introduce"
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center justify-center gap-1 md:gap-3">
                                <input
                                    value=""
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
                                    value=""
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
                        <div>
                            <label className="block text-gray-700 text-sm md:text-[20px] font-bold mr-3 mb-2 md:mb-4">
                                Birth
                            </label>
                            <input
                                type="date"
                                id="birth"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-[20px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date"
                            />
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
