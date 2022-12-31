import Image from "next/image";
import React from "react";
import Layout from "../layout";
import Header from "../../public/images/header.webp";
import Background from "../layout/background"
import MappedQuestion from "./MappedQuestion";

const index = () => {
  return (
    <Layout title="FAQ" background={"white"} show={true}>
      <div className="w-full h-max absolute top-0 flex justify-center items-start -z-10 bg-black bg-opacity-0 backdrop-blur-[2px] backdrop-filter">
        <div className="w-full px-10 max-w-[1200px] pt-60 flex flex-col justify-start items-start">
          <div className="max-w-[600px] relative w-full h-[150px] px-10">
            <Image
              src={Header}
              loading="eager"
              alt="header"
              fill
              className="object-contain"
            />
          </div>
          <div className="pb-20 w-full flex justify-start pt-20 items-center flex-col">{/* faq section container */}
            <MappedQuestion /> {/* Each question in a map function */}
          </div>
        </div>
      </div>
      <Background />
    </Layout>
  );
};

export default index;
