'use client'
import StarterButton from "@/components/buttons/StarterButton";
import React from "react";

const Devices = () => {
  return (
    <div className="flex w-full justify-center relative">
        <div className="bg-indigo-500 p-5 rounded-2xl grid md:grid-cols-1 xl:grid-cols-2 gap-5">
            <div className="bg-white h-[300px] w-full md:w-[450px] rounded-2xl grid grid-flow-row py-5 px-5 md:px-[40px] gap-y-3">
                <div className="border border-[#b9b8b8] rounded-3xl text-[#232323] font-medium flex justify-center items-center text-sm md:text-xl h-[40px] md:h-[55px] px-5 md:px-0">
                    <span>www.your_domain.com</span>
                    <span className="border border-[#b9b8b8] w-[35px] md:w-[45px] h-[30px] rounded-2xl ml-2 md:ml-5 flex justify-center items-center">
                        <img src="/icons/search.svg" className="w-[16px] md:w-[22px]"/>
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-[#e7e8ff] rounded-2xl h-[100px] flex justify-center items-center p-5">
                        <img src="/icons/coin.svg" className="w-[75px]"/>
                    </div>
                    <div className="grid grid-rows-4">
                        <div className="bg-[#babbff] rounded-2xl h-[18px] w-[80px] md:w-[130px]"/>
                        <div className="bg-[#d0d1ff] rounded-2xl h-[18px] w-[100px]"/>
                        <div className="bg-[#e7e8ff] rounded-2xl h-[18px] w-full md:w-[150px]"/>
                        <div className="bg-[#e7e8ff] rounded-2xl h-[18px] w-[18px]"/>
                    </div>
                </div>
                <StarterButton/>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="grid grid-cols-1 gap-y-5">
                    <div className="bg-white h-[200px] rounded-2xl grid grid-flow-row p-3 md:p-5">
                        <div className="bg-[#a3f7b4] rounded-2xl h-[10px] w-[50px] md:h-[15px] md:w-[80px]"/>
                        <div className="grid grid-flow-row p-1 md:p-3 items-center">
                            <div className="grid grid-flow-col gap-2 md:gap-5 mb-3 duration-300 hover:scale-y-125 items-end">
                                <div className="bg-[#b0e0fe] rounded-2xl h-[30px] shadow-[#ccc] shadow-lg"/>
                                <div className="bg-[#b0e0fe] rounded-2xl h-[45px] shadow-[#ccc] shadow-lg"/>
                                <div className="bg-[#b0e0fe] rounded-2xl h-[60px] shadow-[#ccc] shadow-lg"/>
                                <div className="bg-[#b0e0fe] rounded-2xl h-[80px] shadow-[#ccc] shadow-lg"/>
                            </div>
                            <div className="grid grid-cols-4 gap-2 md:gap-5">
                                <div className="bg-[#a3f7b4] rounded-2xl h-[10px]"/>
                                <div className="bg-[#a3f7b4] rounded-2xl h-[10px]"/>
                                <div className="bg-[#a3f7b4] rounded-2xl h-[10px]"/>
                                <div className="bg-[#a3f7b4] rounded-2xl h-[10px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white h-[75px] rounded-2xl grid grid-cols-2 p-2 items-center">
                        <div className="bg-white h-[50px] w-[50px] rounded-full shadow-[#ccc] shadow-lg ml-1 md:ml-[35px] flex justify-center items-center">
                            <img src="/icons/user.svg" className="w-[40px]"/>
                        </div>
                        <div className="grid grid-flow-row gap-y-2">
                            <div className="bg-[#b9b8b8] rounded-2xl h-[7px] md:h-[10px]"/>
                            <div className="bg-[#ccc] rounded-2xl h-[7px] md:h-[10px] w-[35px] md:w-[50px]"/>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-full rounded-2xl grid grid-flow-row px-3 md:px-5 py-3 md:py-[35px] items-end relative">
                    <div className="w-full flex justify-end absolute top-5 right-5 md:static">
                        <div className="grid grid-flow-col w-[50px]">
                            <div className="bg-[#ff3e3e] rounded-xl h-[10px] w-[10px]"/>
                            <div className="bg-[#ffe93f] rounded-xl h-[10px] w-[10px]"/>
                            <div className="bg-[#4fec30] rounded-xl h-[10px] w-[10px]"/>
                        </div>
                    </div>
                    <div className="bg-[#392e7f] rounded-xl h-[10px] w-[75px] hidden md:block"/>
                    <div className="bg-[#f3c24f] rounded-xl h-full md:h-[180px] flex justify-center items-center">
                        <img src="/icons/mountain.svg" className="w-[65px] md:w-[100px]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Devices;
