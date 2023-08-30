import Info from "./info_block";
import { useState } from "react";

interface IOverviewPanel {
  button?: React.ReactNode;
  panel: React.ReactNode;
}

export const PanelBlock = () => {
  const [openedPanel, setOpenPanel] = useState<number | null>(null);

  const panels: IOverviewPanel[] = [{
    panel: <Info/>,
    button: "Info"
  }];

  const togglePanel = (id: number) => {
    if (openedPanel === id) {
      setOpenPanel(null);
    } else {
      setOpenPanel(id); 
    }
  };

  return(
    <div className="toolbarPosition">
      <div className="toolbarStyle" >
        {panels.filter(v => v.button).map((p: IOverviewPanel, index: number) => (
          <div className="toolbarBtn" key={index} onClick={() => togglePanel(index)}>
            {p.button}
          </div>
        ))}
      </div>
      {panels.map((p: IOverviewPanel, id: number) => id === openedPanel && p.panel)}
    </div>
  );
}
