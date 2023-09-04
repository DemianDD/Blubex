import { keywords } from "@/data/data";
import DefaultButton from "../buttons/DefaultButton";
import { IPanel } from "./panels";
import { useContext } from "react";
import { UserContext } from "@/contexts/user_context";
import SecondaryButton from "../buttons/SecondaryButton";
import Title from "../text/Title";

export default function Keywords({ setOpenPanel }: IPanel) {
  const { userData, handleKeywordSelect } = useContext(UserContext);
  const handleConfirm = () => {
    setOpenPanel(2);
  };

  const handleGoBack = () => {
    setOpenPanel(0);
  }
  return (
    <div className="flex flex-col h-full">
      <Title title='Select keywords as needed...'/>
      <div className="flex flex-row flex-wrap mb-5 overflow-auto">
        {keywords
          .sort((a, b) => Math.random() - 0.5)
          .map((k, id) => {
            const isSelected =
              userData && userData.keywords && userData.keywords.includes(k);
            return (
              <div
                key={id}
                className={`bg-[#0f0f0f] m-1 text-sm rounded-xl px-5 py-2 cursor-pointer ${
                  isSelected ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleKeywordSelect(k)}
              >
                {isSelected ? "- " : "+ "} {k}
              </div>
            );
          })}
      </div>
      <div className="mt-1 flex justify-between w-3/4 md:w-full md:mt-auto fixed md:relative bottom-0 left-[50%] md:left-0 transform translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0">
        <DefaultButton
          type="primary"
          width={125}
          title="next"
          onClick={handleConfirm}
        />
        <SecondaryButton
          type="secondary"
          width={125}
          title="go back"
          onClick={handleGoBack}
        />
      </div>
    </div>
  );
}
