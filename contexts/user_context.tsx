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
  description: string;
  files: File[];
  keywords: string[],
}

interface UserContextProps {
  userData: IUserData;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleDocumentUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeywordSelect: (keyword: string) => void;
}

export const UserContext = createContext<UserContextProps>({
  userData: {
    description: "",
    files: [],
    keywords: [],
  },
  setUserData: () => {},
  handleInputChange: () => {},
  handleDocumentUpload: () => {},
  handleKeywordSelect: () => {},
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<IUserData>({
    description: "",
    files: [],
    keywords: [],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        handleInputChange,
        handleDocumentUpload,
        handleKeywordSelect
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
