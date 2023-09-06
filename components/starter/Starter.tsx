"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DefaultButton from "../buttons/DefaultButton";
import Title from "../text/Title";

const Starter = () => {
  const router = useRouter();
  const handleclick = () => {
    router.push("/plan");
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center">
        <Title title='Your own website in few clicks...'/>
        <DefaultButton
          title="get started"
          type="primary"
          onClick={handleclick}
          width={150}
        />
      </div>
      <div
        className="absolute top-20 left-0 w-full h-screen transition-opacity duration-1000"
        style={{
          backgroundImage: `url('/images/wave.png')`,
          backgroundSize: "cover",
          opacity: "0.7",
          zIndex: "-1",
        }}
      />
    </div>
  );
};

export default Starter;
