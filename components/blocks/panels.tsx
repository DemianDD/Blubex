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

  useEffect(() => {
    setOpenPanel(0);
  }, [])
 
  return (
    <div className="w-full flex justify-center">
      {panels.map(
        (p: IOverviewPanel, id: number) =>
          id === openedPanel && (
            <div
              key={id}
              className="w-full md:w-3/6 rounded-xl h-full md:h-[500px] "
            >
              {p.panel}
            </div>
          )
      )}
    </div>
  );
};
