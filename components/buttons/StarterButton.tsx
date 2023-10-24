"use client";
import React from "react";
import { useRouter } from "next/navigation";

const StarterButton = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <button
        className="flex justify-center items-center text-white font-[300] text-xl bg-gradient-to-r from-[#99ebbd] to-[#62a8ee] h-[70px] w-full rounded-2xl shadow-[#ccc] shadow-xl cursor-pointer duration-300 hover:shadow-[#7a7a7a] hover:scale-105"
        onClick={() => router.push("/plan")}
      >
        Build your site
      </button>
    </div>
  );
};

export default StarterButton;
