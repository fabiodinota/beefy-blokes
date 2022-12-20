import React from "react";
import Layout from "../layout";
import TopMeat from "../../public/images/top_meat.webp";
import BottomMeat from "../../public/images/bottom_meat.webp";
import BackgroundMeat from "../../public/images/background_meat.webp";
import Header from "../../public/images/about_header.webp";
import Image from "next/image";
import Icon from "../../public/images/about_icon.webp";
import Bbq from "../../public/images/bbq.webp";
import Beefy from "../../public/images/beefy.webp";
import Crocodile from "../../public/images/crocodile.webp";
import Mullet from "../../public/images/mullet.webp";
import socceroo from "../../public/images/socceroo.webp";

const index = () => {
  return (
    <Layout title="About Us" background="white" show={true}>
      <div className="w-full h-max absolute top-0 flex justify-center items-start -z-10 bg-black bg-opacity-0 backdrop-blur-[2px] backdrop-filter">
        <div className="w-full px-10 overflow-hidden pt-60 flex flex-col justify-center items-center">
          <div className="max-w-[600px] relative w-full h-[150px] px-10">
            <Image
              src={Header}
              loading="eager"
              alt="header"
              fill
              className="object-contain"
            />
          </div>
          <div className="max-w-[1100px] border-t-4 border-l-4 border-black h-full top-10 left-10 relative w-full mr-10">
            <div className="absolute w-20 h-20 -top-10 -left-10 pl-20">
              <Image
                src={Icon}
                loading="eager"
                fill
                className="object-contain"
                alt="icon"
              />
            </div>
            <div className="w-full text-center px-10">
              <p className="text-[28px] font-extrabold pt-10">
                Beefy Blokes is an array of 1500 NFT’s that embody Aussie
                culture, with unique Aussie traits.
              </p>
              <p className="text-[22px]">
                <br />
                What is a Bloke?
                <br />
                <br />
                A Bloke is a commonly referred to term in Australia. Often
                substituted with the word man!
                <br />
                <br />
                For example, He’s an Aussie man... sounds weird right? But he’s
                an Aussie Bloke. Well that fits like a glove. 
                <br />
                <br />
                Your Bloke will range from a Boxing Kangaroo to a Barbeque King.
                Whatever your Bloke is, it will embody you. Some of the traits
                consist of illuminated glasses, wavy mullet, a bushman’s hat or
                a fresh meat pie.
              </p>
            </div>
          </div>
          <div className="w-full pt-40 mb-20 pb-5 flex justify-start 2xl:justify-center scrollbar overflow-scroll items-start">
            <div className="w-80 h-80 flex-shrink-0 mb-10 relative">
              <Image
                src={Crocodile}
                loading="eager"
                fill
                className="object-contain"
                alt="bbq"
              />
            </div>
            <div className="w-80 h-80 flex-shrink-0 mt-10 relative">
              <Image
                src={socceroo}
                loading="eager"
                fill
                className="object-contain"
                alt="beefy"
              />
            </div>
            <div className="w-80 h-80 flex-shrink-0 mb-10 relative">
              <Image
                src={Bbq}
                loading="eager"
                fill
                className="object-contain"
                alt="crocodile"
              />
            </div>
            <div className="w-80 h-80 flex-shrink-0 mt-10 relative">
              <Image
                src={Mullet}
                loading="eager"
                fill
                className="object-contain"
                alt="crocodile"
              />
            </div>
            <div className="w-80 h-80 flex-shrink-0 mb-10 relative">
              <Image
                src={Beefy}
                loading="eager"
                fill
                className="object-contain"
                alt="crocodile"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full fixed -z-20 h-screen overflow-hidden pt-40 rounded-2xl">
        <div className="w-full h-full relative rotate-0 lg:rotate-90">
          <div className="h-80 w-full absolute top-[-240px] lg:top-[-40%]">
            <Image
              src={TopMeat}
              loading="eager"
              className="object-contain"
              fill
              alt="background"
            />
          </div>
          <div className="h-80 w-full absolute bottom-[-120px] lg:bottom-[-40%]">
            <Image
              src={BottomMeat}
              loading="eager"
              className="object-contain"
              fill
              alt="background"
            />
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
    </Layout>
  );
};

export default index;
