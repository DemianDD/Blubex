import { IDefaultButton } from "@/types/button_types";
import React from "react";

const SecondaryButton = ({ title, onClick, width }: IDefaultButton) => {
  return (
    <button
      className='text-white border-2 border-purple-400 hover:border-purple-800 hover:text-[#ccc] focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-[200] rounded-[25px] text-sm px-5 py-2.5 text-center transition-[0.3]'
      style={{ width: `${width}px` }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
