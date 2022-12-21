import React from "react";

const Mark = ({ background }) => {
  const backgroundValue = background;

  const checkBackground = () => {
    if (backgroundValue === "white") {
      return "text-black bg-opacity-50 bg-[#FFF] backdrop-filter backdrop-blur-[4px]";
    } else if (backgroundValue === "black") {
      return "text-white bg-[#000]]";
    }
  };

  return (
    <div
      className={`fixed bg-black bottom-0 right-0 ${checkBackground()} h-10 w-max z-[50]  px-4 flex justify-center items-center rounded-tl-2xl`}
    >
      <p
        className={`${
          backgroundValue === "white" ? "text-black" : "text-white"
        }`}
      >
        © Beefy Blokes, 2022 | All rights reserved.{" "}
      </p>
    </div>
  );
};

export default Mark;
