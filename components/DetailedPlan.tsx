"use client";
import { IPlan } from "@/types/nonprimitive_types";
import React, { useEffect, useState } from "react";
import Spinner from "./loading/Spinner";
import { options } from "@/components/blocks/options_block";
import Info from "./blocks/info_block";
import Image from 'next/image';
import DefaultButton from "./buttons/DefaultButton";
import { PanelBlock } from "./blocks/panel_block";

interface IProps {
  selectedPlan: any;
}

//<Image src={detailedPlan.image_url} width={325} height={325} alt='phone image' className=""/>

const DetailedPlan = (props: IProps) => {
  const [detailedPlan, setDetailedPlan] = useState<IPlan | undefined>(undefined);
  const [html, setHtml] = useState();
  useEffect(() => {
    setDetailedPlan(props.selectedPlan);
  }, [props.selectedPlan]);

  if (!detailedPlan) {
    return <Spinner optionalStyles="absolute bottom-1/2 left-1/2" />;
  }

  return (
    <div className="flex items-center w-full flex-col p-[25px] h-full">
      <PanelBlock/>
    </div>
  );
};

export default DetailedPlan;
