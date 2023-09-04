"use client";
import { plans } from "@/data/data";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Spinner from "./loading/Spinner";
import Title from "./text/Title";
import { CurrencyContext } from "@/contexts/currency_context";

const Plans = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { apiData, exchangeRateUAH } = useContext(CurrencyContext);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    const loadImage = () => {
      setTimeout(() => {
        setImageLoaded(true);
      }, 1000);
    };

    loadImage();
  }, []);
  return (
    <div className="flex justify-center items-center w-full flex-col">
      <Title title="Select your plan..." />
      <div className="flex flex-row flex-wrap w-full md:w-5/6 justify-center md:justify-center md:space-x-4">
        {plans.map((p) => {
          return (
            <Link href={`/plan/${p.id}`}>
              <div
                className="flex flex-col items-center m-1 md:mb-5 w-[165px] md:w-[325px] text-center bg-[#111111] bg-opacity-90 rounded-[25px] p-[15px] md:p-[20px] cursor-pointer hover:shadow-lg hover:shadow-[#1976d236] transition-[0.2s] hover:bg-opacity-50"
                key={p.id}
              >
                <div>
                  <div className="text-sm md:text-lg font-[300] m-1 md:m-5">
                    {p.name}
                  </div>
                  <img
                    src={p.image_url}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{ display: imageLoaded ? "block" : "none" }}
                    className="flex-1 w-[250px]"
                  />
                  {!imageLoaded && !imageError && (
                    <div className=" inset-0 flex items-center justify-center">
                      <Spinner />
                    </div>
                  )}
                </div>
                <div className="text-[#fca52c] font-[200] text-xs md:text-[16px]">
                  <span className="text-[#ccc] text-[10px]">starts from </span>
                  <div>
                    {apiData && (
                      <div className="mt-2">
                        <span className="text-[28px] font-[500]">
                          $ {p.price}
                        </span>
                        .99
                      </div>
                    )}
                    {exchangeRateUAH && (
                      <div className="text-[#4a4a4a] text-[10px] mt-1">
                        &#40; &#126;{Math.round(p.price * exchangeRateUAH)} uah &#41;
                      </div>
                    )}
                  </div>
                </div>
                <div className="hidden md:flex text-xs font-[100] text-[#ccc] mt-2 mb-1">
                  {p.desc}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
