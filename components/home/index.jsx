import React, { useState } from "react";
import Layout from "../layout";
import Background from "../../public/images/background.png";
import Image from "next/image";

const index = () => {
  return (
    <Layout title="Home">
      <div className="h-screen pt-40 relative flex justify-center">
        <div
          className={`absolute h-[50%] rounded-3xl overflow-hidden w-[90%]`}
        >
          <Image
            src={Background}
            className="object-cover"
            fill
            alt="background"
          />
        </div>
        <div className="w-[85%] absolute flex flex-row justify-between items-center bottom-16">
          <p className="pr-10">
            Your Bloke will range from a Boxing Kangaroo to a Barbeque King.
            Whatever your Bloke is, it will embody YOU.
          </p>
          <p className="">
            STAY BEEFY! STAY BEEFY! 
            <br />
            STAY BEEFY! STAY BEEFY!
            <br />
            STAY BEEFY! STAY BEEFY!
            <br />
            STAY BEEFY! STAY BEEFY!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default index;
