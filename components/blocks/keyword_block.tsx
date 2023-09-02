import { keywords } from "@/data/data";
import DefaultButton from "../buttons/DefaultButton";
import { IPanel } from "./panels";
import { useContext } from "react";
import { UserContext } from "@/contexts/user_context";
import SecondaryButton from "../buttons/SecondaryButton";

export default function Keywords({ setOpenPanel }: IPanel) {
  const { userData, handleKeywordSelect } = useContext(UserContext);
  const handleConfirm = () => {
    setOpenPanel(3);
  };

  const handleGoBack = () => {
    setOpenPanel(1);
  }
  return (
    <div className="flex flex-col h-full">
      <p className="text-xs text-[#6a6a6a] p-5">What should also add:</p>
      <div className="flex flex-row flex-wrap mb-5 overflow-auto">
        {keywords
          .sort((a, b) => Math.random() - 0.5)
          .map((k, id) => {
            const isSelected =
              userData && userData.keywords && userData.keywords.includes(k);
            return (
              <div
                key={id}
                className={`bg-[#191919] m-1 text-sm rounded-xl px-5 py-2 cursor-pointer ${
                  isSelected ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleKeywordSelect(k)}
              >
                {isSelected ? "- " : "+ "} {k}
              </div>
            );
          })}
      </div>
      <div className="mt-auto flex justify-between">
        <DefaultButton
          type="primary"
          width={100}
          title="next"
          onClick={handleConfirm}
        />
        <SecondaryButton
          type="secondary"
          width={100}
          title="go back"
          onClick={handleGoBack}
        />
      </div>
    </div>
  );
}
