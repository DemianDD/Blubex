'use client'
import React from "react";
import { useRouter } from "next/navigation";
import StarterButton from "@/components/buttons/StarterButton";

const InstructionGoogle = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 h-full lg:h-[500px] w-full my-[80px] sm:my-[150px] gap-y-5 bg-white rounded-3xl sm:bg-transparent sm:p-0 p-5">
      <div className="flex justify-center items-center">
        <div className="grid grid-rows-2 lg:gap-y-5 gap-y-3">
          <div className="grid grid-cols-3 lg:gap-5 gap-3">
            <div className="bg-[#502274] rounded-3xl col-span-2 flex justify-center items-center gap-5">
              <img src="/icons/pie.svg" className="lg:w-[100px] w-[75px] drop-shadow-xl shadow-[#ccc]" />
              <div className="flex flex-col items-center lg:gap-y-3 gap-y-2 text-xs">
                <div className="flex items-center justify-start">
                  {" "}
                  <div className="h-[18px] w-[18px] rounded-full bg-[#bf873e] mr-2" />{" "}
                  Ukraine
                </div>
                <div className="flex items-center justify-start">
                  {" "}
                  <div className="h-[18px] w-[18px] rounded-full bg-[#5b75a0] mr-2" />{" "}
                  Greece
                </div>
                <div className="flex items-center justify-start">
                  {" "}
                  <div className="h-[18px] w-[18px] rounded-full bg-[#9f4c4c] mr-2" />{" "}
                  Poland
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl h-[110px] w-[110px] lg:h-[150px] lg:w-[150px] flex justify-center items-center">
              <img src="/icons/google.svg" className="w-2/3" />
            </div>
          </div>
          <div className="grid grid-cols-3 lg:gap-5 gap-3">
            <div className="bg-[#bbbeac] rounded-3xl h-[110px] w-[110px] lg:h-[150px] lg:w-[150px] flex justify-center items-center flex-col">
              <img src="/icons/sales.svg" className="lg:w-[45px] w-[35px]" />
              <span className="font-medium lg:text-2xl text-lg text-green-600 p-1">
                +$1,806
              </span>
              <span className="font-[300] text-base text-[#888a7e]">
                Sales
              </span>
            </div>
            <div className="bg-[#f3c24f] rounded-3xl col-span-2 flex justify-center items-center">
              <div className="font-medium mr-5 text-end text-lg">
                <div className="lg:text-[50px] text-[35px]">+ 385</div> new
                visits
              </div>
              <img src="/icons/chart.svg" className="lg:w-[100px] w-[75px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl sm:p-[35px] pt-5 flex flex-col">
        <div className="text-[#cacaca] text-xl font-[300] mb-5">
          What we offer
        </div>
        <div className="text-[#232323] text-[40px] font-[400] mb-1">
          Fully customized website for Google standards
        </div>
        <div className="text-[#6a6a6a] text-base font-[300] flex-grow">
          Your site will appear in the Google Search. We will additionally
          connect Google Analytics and Google Tag Manager. 
          <p>
            This will help you
            with detailed analysis of your audience, their interactions and
            overall profitability
          </p>
        </div>
        <div className="flex justify-center w-full mt-10 lg:flex-grow">
          <StarterButton/>
        </div>
      </div>
    </div>
  );
};

export default InstructionGoogle;
