import React from "react";

const Info = () => {
  const handleclick = () => {
    console.log("click me");
  };
  return (
    <div className="w-full">
      <div className="text-3xl font-[400] text-center uppercase">How to</div>
      <div className="text-xl font-[300] pt-3 italic">
        Easy make your website with Blubex:
      </div>
      <div className="text-justify text-sm pb-5">
        <p className="first-letter:text-2xl first-letter:font-[400] leading-7 pb-3 pt-3">
          1. Tell us as much as possible detailes in "Main wishes" block. Or if
          you already have any photos or documents with your project - upload
          this files. So that we can best estimate the lead time and price.
        </p>
        <p className="first-letter:text-2xl  first-letter:font-[400] leading-7 pb-3">
          2. Select the right words from the list in second block "Keywords".
          This will help us understand all the nuances of the project.
        </p>
        <p className="first-letter:text-2xl  first-letter:font-[400] leading-7">
          3. Enjoy your life and relax. And we would create your website in less
          time and save you much money.
        </p>
      </div>
    </div>
  );
};

export default Info;
