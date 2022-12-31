import React from "react";
import Layout from "../layout";
import Header from "../../public/images/about_header.webp";
import Image from "next/image";
import Bbq from "../../public/images/bbq.webp";
import Beefy from "../../public/images/beefy.webp";
import Crocodile from "../../public/images/crocodile.webp";
import Mullet from "../../public/images/mullet.webp";
import socceroo from "../../public/images/socceroo.webp";
import Background from "../layout/background";
import HeroSection from "./HeroSection";

const Index = () => {
  return (
    <Layout title="About" background="white" show={true}>
      <div className="w-full h-max absolute top-0 flex justify-center items-start -z-10 bg-black bg-opacity-0 backdrop-blur-[2px] backdrop-filter">
        <div className="w-full px-10 overflow-hidden pt-60 flex flex-col justify-center items-center">
          <div className="max-w-[600px] relative w-full h-[150px] px-10">{/*  container for header */}
            <Image
              src={Header}
              loading="eager"
              alt="header"
              fill
              className="object-contain"
            />
          </div>
          {/* Container for the whole top section */}
          <HeroSection />
          {/* Container for each featured NFT */}
          <div className="w-full pt-40 mb-20 pb-5 flex justify-start 2xl:justify-center scrollbar overflow-scroll items-start">
            <div className=" mb-10 featured-nft">
              <Image
                src={Crocodile}
                loading="eager"
                fill
                className="object-contain"
                alt="bbq"
              />
            </div>
            <div className=" mt-10 featured-nft">
              <Image
                src={socceroo}
                loading="eager"
                fill
                className="object-contain"
                alt="beefy"
              />
            </div>
            <div className=" mb-10 featured-nft">
              <Image
                src={Bbq}
                loading="eager"
                fill
                className="object-contain"
                alt="crocodile"
              />
            </div>
            <div className=" mt-10 featured-nft">
              <Image
                src={Mullet}
                loading="eager"
                fill
                className="object-contain"
                alt="crocodile"
              />
            </div>
            <div className=" mb-10 featured-nft">
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
      <Background />
    </Layout>
  );
};

export default Index;
