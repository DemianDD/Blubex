"use client";
import { UserContext } from "@/contexts/user_context";
import { useContext, useState } from "react";
import DefaultButton from "../buttons/DefaultButton";
import { IPanel } from "./panels";

export default function MainWishes({ setOpenPanel }: IPanel) {
  const { userData, handleInputChange, setUserData, handleDocumentUpload } =
    useContext(UserContext);
  const [changeTitle, setChangeTitle] = useState<string>("");

  const handleConfirm = () => {
    if (!userData.description) {
      setUserData((prevOrder) => ({
        ...prevOrder,
        description: prevOrder.description || "",
        files: prevOrder.files || null,
      }));
      setChangeTitle("error");
      return;
    } else {
      setOpenPanel(2);
      setChangeTitle("saved");
      setTimeout(() => {
        setChangeTitle("next");
      }, 3000);
    }
  };

  const clearAll = () => {
    setUserData((prevData) => ({
      ...prevData,
      description: "",
    }));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 relative max-h-full">
        <textarea
          placeholder="Please describe your project with maximum details"
          className="bg-[#191919] text-sm max-h-[150px] min-h-[125px] p-5 rounded-xl w-full focus:outline-0 text-white "
          name="description"
          onChange={handleInputChange}
          value={userData.description}
        ></textarea>
        <img
          src="/icons/garbage.svg"
          className="absolute top-3 right-3 cursor-pointer hover:bg-[#212121] p-1 rounded-lg"
          onClick={clearAll}
        />
      </div>
      <div className="flex flex-col justify-center items-center flex-1 border border-[#ed64a43a] rounded-xl mb-5 p-5">
        <p className="text-xs text-[#6a6a6a] p-5 text-center">
          Or if you already have an example of your website, just upload some
          files
        </p>
        <label htmlFor="image-upload">
          <div className="flex flex-col items-center bg-[#ed63a328] p-5 rounded-xl text-sm cursor-pointer transition-[0.2] hover:bg-[#ed64a41b]">
            <img src="/icons/upload_file.svg" alt="" />
            <p>Upload picture</p>
          </div>
        </label>
        <input
          id="image-upload"
          type="file"
          multiple
          style={{ display: "none" }}
          onChange={handleDocumentUpload}
          name="files"
          accept="image/*,.pdf"
        />
        <div>
          {userData.files.length > 0 ? (
            userData.files.map((f, index) => (
              <div key={index}>
                {f.name}, {f.type}
              </div>
            ))
          ) : (
            <p className="text-xs p-2 bg-white bg-opacity-10 rounded-xl mt-3 text-[#7b7b7b] max-w-[100px] truncate">
              <span className="truncate">No files uploaded</span> png
            </p>
          )}
        </div>
      </div>
      <div className="mt-auto">
        <DefaultButton
          type="primary"
          width={100}
          title="next"
          onClick={handleConfirm}
        />
      </div>
    </div>
  );
}
