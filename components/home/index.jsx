import React, { useState } from "react";
import Layout from "../layout";
import Background from "../../public/images/background.png";
import Image from "next/image";
import Background_small from "../../public/images/background_small.png";
import BackgroundNew from "../../public/images/background_small_new.png";
import TopMeat from "../../public/images/top_meat.png";
import BottomMeat from "../../public/images/bottom_meat.png";
import BackgroundMeat from "../../public/images/background_meat.png";
import Link from "next/link";
import Wordmark from "../../public/images/wordmark.png";
import Arrow from "../../public/images/arrow.png";

const index = () => {
  return (
    <Layout title="Home">
      <div className=" pt-40 relative flex flex-col justify-center items-center">
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
        <div className="relative w-[90%] h-[800px] overflow-hidden rounded-2xl">
          {" "}
          {/* container for whole meats section */}
          <div className="w-full h-full absolute z-[100] flex justify-center items-center flex-col">
            <div className="relative w-[300px] h-[180px] lg:w-[550px] lg:h-[300px]">
              <Image src={Wordmark} alt="wordmark" fill />
            </div>
            <p className="py-5 text-white text-[20px] px-5 text-center">
              1500 NFT’s that embody Aussie culture, with unique Aussie traits.
            </p>
            <button className="bg-black text-white font-extrabold rounded-full p-5 sm:text-[22px] px-3 text-[18px] cursor-pointer">
              <Link href="/mint">
                MINT YOUR BLOKE{" "}
                <span className="relative w-5 h-3">
                  <Image fill src={Arrow} alt="arrow" />
                </span>
              </Link>
            </button>
            <Link
              className="text-[18px] py-4 cursor-pointer"
              href="https://google.com"
            >
              See Marketplace
            </Link>
          </div>
          <div className="w-full h-full relative rotate-0 lg:rotate-90">
            {" "}
            {/* container for both meats */}
            <div className="h-80 w-full absolute top-[-120px] lg:top-[-40%]">
              {" "}
              {/* container for each meats */}
              <Image
                src={TopMeat}
                className="object-contain"
                fill
                alt="background"
              />{" "}
              {/* image for each meat */}
            </div>
            <div className="h-80 w-full absolute bottom-[-120px] lg:bottom-[-40%]">
              {" "}
              {/* container for each meats */}
              <Image
                src={BottomMeat}
                className="object-contain"
                fill
                alt="background"
              />{" "}
              {/* image for each meat */}
            </div>
          </div>
          <Image
            src={BackgroundMeat}
            className="object-cover absolute -z-50"
            fill
            alt="background"
          />
        </div>
        <div className="w-[85%] flex flex-row justify-between items-center py-10 pb-20">
          <p className="pr-10">
            Your Bloke will range from a Boxing Kangaroo to a Barbeque King.
            <br />
            Whatever your Bloke is, it will embody YOU.
          </p>
          <p className="whitespace-nowrap">
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
