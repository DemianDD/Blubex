"use client";
import { IPlan } from "@/types/nonprimitive_types";
import React, { useEffect, useState } from "react";
import Spinner from "./loading/Spinner";
import { PanelBlocks } from "./blocks/panels";

interface IProps {
  selectedPlan: any;
}

//<Image src={detailedPlan.image_url} width={325} height={325} alt='phone image' className=""/>

const DetailedPlan = (props: IProps) => {
  const [detailedPlan, setDetailedPlan] = useState<IPlan | undefined>(undefined);
  useEffect(() => {
    setDetailedPlan(props.selectedPlan);
  }, [props.selectedPlan]);

  if (!detailedPlan) {
    return(
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Spinner/>
      </div>
    ) 
  }

  return (
    <div className="flex items-center w-full flex-col p-[25px] h-full">
      <PanelBlocks/>
    </div>
  );
};

export default DetailedPlan;
