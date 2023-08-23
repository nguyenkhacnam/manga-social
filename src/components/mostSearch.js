import React from "react";

const MostSearch = ({ title }) => {
    return (
        <div className="px-[8px] py-[3px] md:px-[12px] md:py-[5px] rounded-[12px] bg-[#363636] w-max">
            <p className="text-white text-[12px] md:text-[14px]">{title}</p>
        </div>
    );
};

export default MostSearch;
