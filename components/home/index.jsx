import React, { useState } from "react";
import Layout from "../layout";
import Image from "next/image";
import TopMeat from "../../public/images/top_meat.webp";
import BottomMeat from "../../public/images/bottom_meat.webp";
import BackgroundMeat from "../../public/images/background_meat.webp";
import Link from "next/link";
import Wordmark from "../../public/images/wordmark.png";
import Arrow from "../../public/images/arrow.png";

const index = () => {
  return (
    <Layout title="Home" show={true}>
      <div className=" pt-40 relative h-full flex flex-col justify-center items-center">
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
        <div className="relative w-[90%] h-[670px] overflow-hidden rounded-2xl">
          {" "}
          {/* container for whole meats section */}
          <div className="w-full h-full absolute z-[100] flex justify-center items-center flex-col">
            <div className="relative w-[300px] h-[180px] p-10 scale-90 lg:w-[550px] lg:h-[300px]">
              <Image src={Wordmark} alt="wordmark" fill />
            </div>
            <p className="py-5 text-white text-[20px] px-5 text-center">
              1500 NFT’s that embody Aussie culture, with unique Aussie traits.
            </p>
            <Link href="/mint">
              <button className="bg-black text-white hover:bg-transparent border-4 border-black hover:text-black duration-300 font-bold rounded-full p-5 sm:text-[22px] px-8 text-[18px] cursor-pointer">
                MINT YOUR BLOKE{" "}
              </button>
            </Link>
            <Link
              className="text-[18px] py-4 cursor-pointer flex flex-row justify-center items-center gap-2 hover:gap-4 duration-300"
              href="https://google.com"
            >
              See Marketplace
              <span className="relative w-6 h-5">
                <Image fill loading="eager" src={Arrow} alt="arrow" />
              </span>
            </Link>
          </div>
          <div className="w-full h-full relative rotate-0 lg:rotate-90">
            {" "}
            {/* container for both meats */}
            <div className="h-80 w-full absolute top-[-120px] lg:top-[-50%]">
              {" "}
              {/* container for each meats */}
              <Image
                src={TopMeat}
                className="object-contain"
                loading="eager"
                fill
                alt="background"
              />{" "}
              {/* image for each meat */}
            </div>
            <div className="h-80 w-full absolute bottom-[-120px] lg:bottom-[-50%]">
              {" "}
              {/* container for each meats */}
              <Image
                src={BottomMeat}
                className="object-contain"
                loading="eager"
                fill
                alt="background"
              />{" "}
              {/* image for each meat */}
            </div>
          </div>
          <Image
            src={BackgroundMeat}
            loading="eager"
            className="object-cover absolute -z-50"
            fill
            alt="background"
          />
        </div>
        <div className="w-[85%] flex flex-row justify-between items-center py-10 ">
          <p className="pr-10">
            Your Bloke will range from a Boxing Kangaroo to a Barbeque King.
            <br />
            Whatever your Bloke is, it will embody YOU.
          </p>
          <p className="whitespace-nowrap hidden sm:block">
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
