import React, { useState } from "react";
import Layout from "../layout";
import Background from "../../public/images/background.png";
import Image from "next/image";
import Background_small from "../../public/images/background_small.png";
import BackgroundNew from "../../public/images/background_small_new.png";
import TopMeat from "../../public/images/top_meat.png";
import BottomMeat from "../../public/images/bottom_meat.png";
import BackgroundMeat from "../../public/images/background_meat.png";

const index = () => {
  return (
    <Layout title="Home">
      <div className="h-screen pt-40 relative flex justify-center">
        {/* <div
          className={` rounded-3xl overflow-hidden mb-40 relative w-[90%]`}
        >
          <Image
            src={Background}
            className="object-cover hidden lg:block"
            fill
            alt="background"
          />
          <Image
            src={Background_small}
            className="object-cover lg:hidden"
            fill
            alt="background"
          />

        </div> */}
        <div className={` relative w-[90%] overflow-hidden rounded-2xl`}>
          <div className="relative h-full w-full flex flex-col justify-between lg:rotate-90">
            <div className=" relative  h-full w-full">
              <Image
                src={TopMeat}
                className="object-contain"
                fill
                alt="background"
              />
            </div>

            <div className="relative h-full w-full ">
              <Image
                src={BottomMeat}
                className="object-contain absolute right-0 bottom-0"
                fill
                alt="background"
              />
            </div>
          </div>
          <Image
            src={BackgroundMeat}
            className="object-cover absolute -z-50"
            fill
            alt="background"
          />
        </div>
        {/*  <div className="w-[85%] absolute flex flex-row justify-between items-center bottom-16">
          <p className="pr-10">
            Your Bloke will range from a Boxing Kangaroo to a Barbeque King.<br />
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
        </div> */}
      </div>
    </Layout>
  );
};

export default index;
