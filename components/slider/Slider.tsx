import { website_examples } from "@/data/website_samples";
import React, { useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | "none">("none");

  const nextSlide = () => {
    setSlideDirection("left");
    setTimeout(() => {
      const newIndex = (currentIndex + 1) % website_examples.length;
      setCurrentIndex(newIndex);
      setSlideDirection("none");
    }, 500);
  };

  const previousSlide = () => {
    setSlideDirection("right");
    setTimeout(() => {
      const newIndex = (currentIndex - 1 + website_examples.length) % website_examples.length;
      setCurrentIndex(newIndex);
      setSlideDirection("none");
    }, 500);
  };

  const currentSlide = website_examples[currentIndex];

  return (
    <div className="flex items-center flex-col">
      <div className={`flex flex-row flex-nowrap gap-10 transition-opacity ${slideDirection === "none" ? "" : slideDirection === "left" ? "fade-entered" : "fade-exiting"}`}>
        <div
          className={`rounded-2xl mb-2 sm:mb-0 flex flex-col items-center sm:w-[700px] w-auto ${slideDirection === "none" ? "" : slideDirection === "left" ? "fade-entering" : "fade-exiting"}`}
        >
          <div className="relative">
            <img
              src={currentSlide.image}
              className="object-cover rounded-2xl sm:h-[450px] h-[200px]"
            />
            <div className="absolute bottom-0 right-0 p-3 px-4 bg-[#111111] rounded-tl-3xl text-sm font-[300] text-[#ccc]">
              {currentSlide.title}
            </div>
          </div>
          <div className={`py-3 sm:py-4 mx-5 sm:mx-0 px-5 text-[10px] sm:text-xs bg-[#111111] rounded-l-2xl rounded-br-2xl mt-2 first-letter:ml-5 text-justify ${slideDirection === "none" ? "" : slideDirection === "left" ? "fade-entered" : "fade-exiting"}`}>
            {currentSlide.desc}
            <button
              className="ml-1 text-indigo-500 hover:text-indigo-900 duration-100"
              onClick={nextSlide}
            >
              Show more
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-[30px] gap-4">
        <button
          className="p-5 bg-[#fff] text-[#ccc] rounded-xl"
          onClick={previousSlide}
        >
          {" "}
          <img src="/icons/left.svg" className="w-[30px]" />{" "}
        </button>
        <button
          className="p-5 bg-[#fff] text-[#ccc] rounded-xl"
          onClick={nextSlide}
        >
          {" "}
          <img src="/icons/right.svg" className="w-[30px]" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Slider;
