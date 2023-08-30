import { IDefaultButton } from "@/types/button_types";
import React from "react";

const DefaultButton = ({ title, onClick, width }: IDefaultButton) => {
  return (
    <button
      className='transition-[0.2s] text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-[200] rounded-[25px] text-sm px-5 py-2.5 text-center'
      style={{ width: `${width}px` }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default DefaultButton;
