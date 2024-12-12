import React from "react";

export const SearchInput = () => {
  return (
    <div className="w-[567px] h-[80px]  rounded-[48px] bg-[#FFFFFF] flex justify-start items-center gap-[24px]  ">
      <i className="fa-solid fa-magnifying-glass text-[24px] ml-[24px] opacity-40"></i>
      <input
        className="text-[20px] font-[700] outline-none w-[450px]"
        type="search"
        placeholder="Search for a city"
      ></input>
    </div>
  );
};
