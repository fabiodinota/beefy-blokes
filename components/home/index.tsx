import React, { useState } from "react";
import Layout from "../layout";
import Image from "next/image";

import Link from "next/link";
import Wordmark from "../../public/images/wordmark.png";
import Arrow from "../../public/images/arrow.png";
import BackgroundVariant from "../layout/background_variant";

const index = () => {
  return (
    <Layout background="black" title="Home" show={true}>
      <div className=" pt-40 relative h-full flex flex-col justify-center items-center">
        <BackgroundVariant>{/* Background container */}
          {" "}
          {/* container for whole meats section */}
          <div className="w-full h-full absolute z-[30] flex justify-center items-center flex-col">
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
        </BackgroundVariant>
        <div className="w-[85%] flex flex-row justify-between items-center py-10 "> {/* Bottom text container */}
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
