import Image from "next/image";
import React from "react";
import Layout from "../layout";
import Jackson from "../../public/images/jackson.png";
import Luis from "../../public/images/luis.png";
import Hughezy from "../../public/images/hughes.png";
import Meet from "../../public/images/meet.webp";
import Bonglo from "../../public/images/bonglo.png";
import Yulian from "../../public/images/dominic.png";
import Dominic from "../../public/images/yulian.png";
import Background from "../layout/background";
import TeamComponent from "./TeamComponent";


const index = () => {
  return (
    <Layout title="Team" background={"white"} show={false}>
      <div className="w-full absolute top-0 flex justify-center flex-col items-center -z-10 bg-white bg-opacity-0 backdrop-blur-[2px] backdrop-filter">
        <div className="max-w-[800px] relative mt-60 w-full h-[180px] px-10">
          <Image
            src={Meet}
            loading="eager"
            alt="header"
            fill
            className="object-contain"
          />
        </div>
        <div className="grid max-w-[1220px] w-full gap-x-20 gap-y-10 px-10 pb-20 grid-container place-content-center place-items-center">
          <div>
            <TeamComponent ImageSrc={Jackson} name="Jackson Meji" role="Founder" description="Founder of Mejia Labs" twitter="https://twitter.com" />
          </div>
          <div>
            <TeamComponent ImageSrc={Luis} name="Luis Morzone" role="Co-Founder" description="Lawyer / Marketer" twitter="https://twitter.com" />
          </div>
          <div>
            <TeamComponent ImageSrc={Hughezy} name="Daniel Hughez" role="Co-Founder" description="Lawyer / Marketer" twitter="https://twitter.com" />
          </div>
          <div>
            <TeamComponent ImageSrc={Bonglo} name="Bonglo.ETH" role="Project Manager" description="Project Manager at Beefy Blokes" twitter="https://twitter.com" />
          </div>
          <div>
            <TeamComponent ImageSrc={Yulian} name="Yulian" role="Artist" description="Illustrator & Graphic Designer" twitter="https://twitter.com" />
          </div>
          <div>
            <TeamComponent ImageSrc={Dominic} name="Dominic" role="Creative Director" description="Creative Director at Beefy Blokes" twitter="https://twitter.com" />
          </div>
        </div>
      </div>
      <Background />
    </Layout>
  );
};

export default index;
