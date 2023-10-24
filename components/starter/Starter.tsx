"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DefaultButton from "../buttons/DefaultButton";
import Title from "../text/Title";
import Link from "next/link";
import { ILang } from "@/types/common";

const Starter: React.FC<ILang> = ({ params: { lng } }) => {
  const router = useRouter();
  const handleclick = () => {
    router.push("/plan");
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center">
        <Title title='Your own website in few clicks...'/>
        <Link href={`/${lng}/plan`}>
          <DefaultButton
            title="get started"
            type="primary"
            width={150}
          />
        </Link>
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
