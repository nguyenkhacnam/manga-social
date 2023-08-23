import React from "react";

const CardGenres = ({ image, title }) => {
    return (
        <div className="relative">
            <img
                className="w-[156px] h-[93px] md:w-[232px] md:h-[130px] lg:w-[300px] lg:h-[167px] xl:w-[417px] xl:h-[287px] object-cover rounded-[12px]"
                src={image}
                alt=""
            />
            <p className="text-white absolute bottom-[8px] left-[10px] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-semibold">
                {title}
            </p>
        </div>
    );
};

export default CardGenres;
