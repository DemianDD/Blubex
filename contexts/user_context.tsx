"use client";
import React, {
  ChangeEvent,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

interface UserProviderProps {
  children: ReactNode;
}

interface IUserData {
  brandName: string;
  description: string;
  files: File[];
  keywords: string[],
}

interface UserContextProps {
  userData: IUserData;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
  handleTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleDocumentUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeywordSelect: (keyword: string) => void;
}

export const UserContext = createContext<UserContextProps>({
  userData: {
    brandName: "",
    description: "",
    files: [],
    keywords: [],
  },
  setUserData: () => {},
  handleTextAreaChange: () => {},
  handleDocumentUpload: () => {},
  handleKeywordSelect: () => {},
  handleInputChange: () => {},
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<IUserData>({
    brandName: "",
    description: "",
    files: [],
    keywords: [],
  });

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDocumentUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setUserData((prevData) => ({
        ...prevData,
        files: [...(prevData.files || []), ...Array.from(files)],
      }));
    }
  };

  const handleKeywordSelect = (keyword: string) => {
    setUserData((prevData) => {
      const { keywords } = prevData;
      const updatedKeywords = keywords.includes(keyword)
        ? keywords.filter((k) => k !== keyword)
        : [...keywords, keyword];
      return {
        ...prevData,
        keywords: updatedKeywords,
      };
    });
  };

  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        handleTextAreaChange,
        handleDocumentUpload,
        handleKeywordSelect,
        handleInputChange
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
