import Info from "./info_block";
import { useEffect, useState } from "react";
import MainWishes from "./main_block";
import Keywords from "./keyword_block";
import Overview from "./overview_block";

export interface IPanel{
  setOpenPanel: (id: number) => void;
}

interface IOverviewPanel {
  button?: React.ReactNode;
  panel: React.ReactNode;
}

export const PanelBlocks = () => {
  const [openedPanel, setOpenPanel] = useState<number | null>(null);

  const panels: IOverviewPanel[] = [
    {
      panel: <Info setOpenPanel={setOpenPanel}/>,
      button: "Info",
    },
    {
      panel: <MainWishes setOpenPanel={setOpenPanel}/>,
      button: "Main wishes",
    },
    {
      panel: <Keywords setOpenPanel={setOpenPanel}/>,
      button: "Keywords",
    },
    {
      panel: <Overview setOpenPanel={setOpenPanel}/>,
      button: "Overview",
    },
  ];

  const togglePanel = (id: number) => {
    setOpenPanel(id);
  };

  useEffect(() => {
    setOpenPanel(0);
  }, [])
 
  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#0f0f0f] w-1/5 rounded-xl h-[250px] p-5 flex flex-col items-center">
        {panels
          .filter((v) => v.button)
          .map((p: IOverviewPanel, index: number) => (
            <div
              className="bg-[#171717] w-3/4 rounded-xl border border-[#212121] text-center p-1 mb-2 text-sm hover:bg-[#111111] transition-[0.2] cursor-pointer"
              key={index}
              onClick={() => togglePanel(index)}
            >
              {p.button}
            </div>
          ))}
      </div>
      {panels.map(
        (p: IOverviewPanel, id: number) =>
          id === openedPanel && (
            <div
              key={id}
              className="w-3/6 bg-[#0f0f0f] rounded-xl p-5 h-[500px] ml-3"
            >
              {p.panel}
            </div>
          )
      )}
    </div>
  );
};
