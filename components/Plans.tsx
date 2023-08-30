"use client";
import { plans } from "@/data/data";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Spinner from "./loading/Spinner";

const Plans = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

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
      <div className="font-[400] text-[36px] p-5">Select your Plan...</div>
      <div className="flex flex-row flex-wrap w-5/6 justify-center space-x-4">
        {plans.map((p) => {
          return (
            <Link href={`/plan/${p.id}`}>
              <div
                className="flex flex-col items-center mb-5 w-[325px] text-center bg-[#111111] bg-opacity-90 rounded-[25px] p-[20px] cursor-pointer hover:shadow-lg hover:shadow-[#fc2c7551] transition-[0.2s] hover:bg-opacity-50"
                key={p.id}
              >
                <div>
                  <div className="text-lg font-[300] m-5">{p.name}</div>
                  <img
                    src={p.image_url}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{ display: imageLoaded ? "block" : "none" }}
                    className="flex-1 w-[250px]"
                  />
                  {!imageLoaded && !imageError && (
                    <div className=" inset-0 flex items-center justify-center">
                      <Spinner/>
                    </div>
                  )}
                </div>
                <div className="text-[#fca52c] font-[200] text-[16px]">
                  from <span className="text-xl font-[500]">{p.price}</span>{" "}
                  uah
                </div>
                <div className="text-xs font-[100] text-[#ccc] mt-2 mb-5">
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
