"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DefaultButton from "./buttons/DefaultButton";
import Title from "./text/Title";

const Starter = () => {
  //const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const router = useRouter();
  const handleclick = () => {
    router.push("/plan");
  };

  //useEffect(() => {
  //  const handleResize = () => {
  //    setScreenWidth(window.innerWidth);
  //  };
  //
  //  // Attach the event listener
  //  window.addEventListener("resize", handleResize);
  //
  //  // Clean up the event listener when the component unmounts
  //  return () => {
  //    window.removeEventListener("resize", handleResize);
  //  };
  //}, []);
  //
  //const imageWidth = screenWidth < 800 ? 300 : 500;
  //const imageHeight = screenWidth < 800 ? 300 : 500;
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col items-center">
        <Title title='Your dreams website in few clicks...'/>
        <DefaultButton
          title="get started"
          type="primary"
          onClick={handleclick}
          width={150}
        />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
        style={{
          backgroundImage: `url('/images/wave.png')`,
          backgroundSize: "cover",
          opacity: "0.7", // Adjust the opacity as needed
          zIndex: "-1",
        }}
      />
    </div>
  );
};

export default Starter;
