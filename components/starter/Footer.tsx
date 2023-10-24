import { ILang } from "@/types/common";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC<ILang> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng);
  return (
    <footer className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 h-[400px] pt-5 px-5 md:px-[100px] pb-[50px] justify-center">
        <div className="col-span-3 w-full grid grid-rows-6 justify-center">
          <div className="p-3 font-[300] text-xl">
            <span className="border border-indigo-500 text-indigo-500 font-[200] rounded-full p-1">
              blu
            </span>
            <span className="pt-1">bex</span>
          </div>
          <div className="row-span-3 pl-3 text-sm text-[#ccc]">
            {t("footer.text1")}
          </div>
          <div className="pl-3 text-sm">{t("footer.text2")}</div>
          <div className="pl-3 flex gap-5">
            <img src="/icons/insta.svg" className="w-[25px]" />
            <img src="/icons/tik.svg" className="w-[25px]" />
            <img src="/icons/email.svg" className="w-[25px]" />
            <img src="/icons/phone.svg" className="w-[25px]" />
          </div>
        </div>
        <div className="p-5 flex flex-col items-start gap-y-4 text-[#ccc]">
          <span className="font-[300] text-xl text-white">Service</span>
          <span className="text-sm">Store</span>
        </div>
        <div className="p-5 flex flex-col items-start gap-y-4 text-[#ccc]">
          <span className="font-[300] text-xl text-white">Company</span>
          <span className="text-sm">Privacy Policy</span>
          <span className="text-sm">Support</span>
          <span className="text-sm">Terms of service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
