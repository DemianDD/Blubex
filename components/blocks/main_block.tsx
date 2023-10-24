"use client";
import { UserContext } from "@/contexts/user_context";
import { useContext, useState } from "react";
import DefaultButton from "../buttons/DefaultButton";
import { IPanel } from "./panels";
import Title from "../text/Title";
import VerticallyCentered from "../modals/vertically_centered";

export default function MainWishes({ setOpenPanel }: IPanel) {
  const {
    userData,
    handleInputChange,
    setUserData,
    handleDocumentUpload,
    handleTextAreaChange,
  } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    console.log("here");
    setShow(true);
  };

  const handleConfirm = () => {
    setOpenPanel(1);
  };

  const clearDescription = () => {
    setUserData((prevData) => ({
      ...prevData,
      description: "",
    }));
  };

  const clearBrandname = () => {
    setUserData((prevData) => ({
      ...prevData,
      brandName: "",
    }));
  };

  return (
    <div className="flex flex-col h-full">
      <Title title="Describe your project..." />
      <div className="flex-1 relative max-h-full">
        <div className="relative">
          {userData.brandName.length >= 1 ? (
            <img
              src="/icons/garbage.svg"
              className="absolute top-3 right-3 cursor-pointer hover:bg-[#212121] p-1 rounded-lg"
              onClick={clearBrandname}
            />
          ) : (
            <img
              src="/icons/write.svg"
              className="absolute top-[45%] right-2 -translate-x-1/2 -translate-y-1/2"
            />
          )}
          <input
            placeholder="Enter your brand name"
            className="bg-[#0c0c0c] text-sm p-4 mb-2 rounded-xl w-full focus:outline-0 text-white"
            name="brandName"
            onChange={handleInputChange}
            value={userData.brandName}
          />
        </div>
        <div className="relative">
          <textarea
            placeholder="Enter your text here with maximum details"
            className="bg-[#0c0c0c] text-sm max-h-[180px] min-h-[150px] p-4 rounded-xl w-full focus:outline-0 text-white"
            name="description"
            onChange={handleTextAreaChange}
            value={userData.description}
          ></textarea>
          {userData.description.length > 5 ? (
            <img
              src="/icons/garbage.svg"
              className="absolute top-3 right-3 cursor-pointer hover:bg-[#212121] p-1 rounded-lg"
              onClick={clearDescription}
            />
          ) : (
            <></>
          )}
        </div>
        <div
          className="absolute bottom-3 right-3 flex items-center cursor-pointer hover:bg-[#212121] p-1 rounded-lg"
          onClick={handleShow}
        >
          <img src="/icons/info.svg" className="mr-0.5" />
          <span className="text-[10px] text-[#2195f3a5]">See example</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 p-5">
        <div className="w-full h-[1px] bg-gradient-to-r from-[#ca44ff50] to-[#1900ff50] relative">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000] text-[#6a6a6a] px-2 text-xs">
            or
          </span>
        </div>
        <p className="text-xs text-[#6a6a6a] p-5 text-center">
          just upload some photos in format .png .jpg or .pdf
        </p>
        <label htmlFor="image-upload">
          <div className="flex flex-col items-center bg-gradient-to-r from-[#ca44ff36] to-[#1900ff36] p-5 rounded-xl text-sm cursor-pointer transition-[0.2] hover:bg-[#1976d215]">
            <img src="/icons/upload_file.svg" alt="" />
            <p className="text-sm mt-1">Upload picture</p>
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
      <div className="mt-1 md:mt-auto fixed md:relative bottom-0 left-[50%] md:left-0 transform translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0">
        <DefaultButton
          type="primary"
          width={125}
          title="next"
          onClick={handleConfirm}
        />
      </div>
      {show && <VerticallyCentered />}
    </div>
  );
}
