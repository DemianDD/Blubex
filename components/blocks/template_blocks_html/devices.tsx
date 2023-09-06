import React from "react";

const Devices = () => {
  return (
    <div className="flex w-full justify-center relative">
        <div className="bg-indigo-500 p-5 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white h-[300px] w-[450px] rounded-2xl grid grid-flow-row py-5 px-[40px] gap-y-3">
                <div className="border border-[#b9b8b8] rounded-3xl text-[#232323] font-medium flex justify-center items-center text-xl h-[55px]">
                    <span>www.your_domain.com</span>
                    <span className="border border-[#b9b8b8] w-[45px] h-[30px] rounded-2xl ml-5 flex justify-center items-center">
                        <img src="/icons/search.svg" className="w-[22px]"/>
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-[#e7e8ff] rounded-2xl h-[100px] flex justify-start items-center p-5">
                        <img src="/icons/coin.svg" className="w-[75px]"/>
                    </div>
                    <div className="grid grid-rows-4">
                        <div className="bg-[#babbff] rounded-2xl h-[18px] w-[130px]"/>
                        <div className="bg-[#d0d1ff] rounded-2xl h-[18px] w-[100px]"/>
                        <div className="bg-[#e7e8ff] rounded-2xl h-[18px] w-[150px]"/>
                        <div className="bg-[#e7e8ff] rounded-2xl h-[18px] w-[18px]"/>
                    </div>
                </div>
                <div className="flex justify-center items-center text-white font-medium text-xl bg-gradient-to-r from-[#99ebbd] to-[#62a8ee] h-[70px] w-3/4 rounded-2xl shadow-[#ccc] shadow-xl cursor-pointer duration-300 hover:shadow-[#7a7a7a] hover:scale-105">
                    Build your site
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="grid grid-cols-1 gap-y-5">
                    <div className="bg-white h-[200px] rounded-2xl grid grid-flow-row p-5">
                        <div className="bg-[#a3f7b4] rounded-2xl h-[15px] w-[80px]"/>
                        <div className="grid grid-flow-row p-3 items-end">
                            <div className="grid grid-flow-col gap-5 mb-3 duration-300 hover:scale-y-125">
                                <div className="bg-[#b0e0fe] rounded-2xl h-[30px] shadow-[#ccc] shadow-lg"/>
                                <div className="bg-[#b0e0fe] rounded-2xl h-[45px] shadow-[#ccc] shadow-lg"/>
                                <div className="bg-[#b0e0fe] rounded-2xl h-[60px] shadow-[#ccc] shadow-lg"/>
                                <div className="bg-[#b0e0fe] rounded-2xl h-[80px] shadow-[#ccc] shadow-lg sclae"/>
                            </div>
                            <div className="grid grid-cols-4 gap-5">
                                <div className="bg-[#a3f7b4] rounded-2xl h-[10px]"/>
                                <div className="bg-[#a3f7b4] rounded-2xl h-[10px]"/>
                                <div className="bg-[#a3f7b4] rounded-2xl h-[10px]"/>
                                <div className="bg-[#a3f7b4] rounded-2xl h-[10px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white h-[75px] rounded-2xl grid grid-cols-2 p-2 items-center">
                        <div className="bg-white h-[50px] w-[50px] rounded-full shadow-[#ccc] shadow-lg ml-[35px] flex justify-center items-center">
                            <img src="/icons/user.svg" className="w-[40px]"/>
                        </div>
                        <div className="grid grid-flow-row gap-y-2">
                            <div className="bg-[#b9b8b8] rounded-2xl h-[10px]"/>
                            <div className="bg-[#ccc] rounded-2xl h-[10px] w-[50px]"/>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-[300px] rounded-2xl grid grid-flow-row px-5 py-[35px] items-end">
                    <div className="w-full flex justify-end">
                        <div className="grid grid-flow-col w-[50px]">
                            <div className="bg-[#ff3e3e] rounded-xl h-[10px] w-[10px]"/>
                            <div className="bg-[#ffe93f] rounded-xl h-[10px] w-[10px]"/>
                            <div className="bg-[#4fec30] rounded-xl h-[10px] w-[10px]"/>
                        </div>
                    </div>
                    <div className="bg-[#392e7f] rounded-xl h-[10px] w-[75px]"/>
                    <div className="bg-[#f3c24f] rounded-xl h-[180px] flex justify-center items-center">
                        <img src="/icons/mountain.svg" className="w-[100px]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Devices;
