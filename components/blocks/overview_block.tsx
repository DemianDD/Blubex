import { UserContext } from "@/contexts/user_context";
import { useContext } from "react";
import DefaultButton from "../buttons/DefaultButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { IPanel } from "./panels";

export default function Overview({ setOpenPanel }: IPanel) {
  const { userData } = useContext(UserContext);
  const handleGoBack = () => {
    setOpenPanel(1);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-[#191919] text-sm max-h-[150px] min-h-[125px] p-5 rounded-xl w-full text-white">
        {userData.description}
        {userData.files.length > 0 ? (
          userData.files.map((f) => {
            return (
              <div>
                {f.name}, {f.type}
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <div className="mt-1 flex justify-between w-3/4 md:w-full md:mt-auto fixed md:relative bottom-0 left-[50%] md:left-0 transform translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0">
        <DefaultButton
          type="primary"
          width={125}
          title="finish"
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
