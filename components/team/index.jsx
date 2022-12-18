import Image from "next/image";
import React from "react";
import Layout from "../layout";
import TopMeat from "../../public/images/top_meat.png";
import BottomMeat from "../../public/images/bottom_meat.png";
import BackgroundMeat from "../../public/images/background_meat.png";
import Twitter from "../../public/images/twitter_team.png";
import Jackson from "../../public/images/jackson.png";
import Luis from "../../public/images/luis.png";
import Hughezy from "../../public/images/hughezy.png";
import Meet from "../../public/images/meet.png";
import Link from "next/link";

const index = () => {
  return (
    <Layout title="Team" background={"white"}>
      <div className="w-full xl:h-screen absolute xl:fixed top-0 flex justify-center items-center -z-10 bg-white bg-opacity-0 backdrop-blur-[2px] backdrop-filter">
        <div className="w-full px-10 max-w-[1200px] pt-60 xl:space-x-16 flex flex-col xl:flex-row justify-around xl:justify-center items-center">
          <div className="">
            <div className="relative grid h-80 w-80">
              <div className="relative place-self-center self-end z-20 w-[70px] h-[70px] ">
                <Link href="https://twitter.com">
                  <Image
                    src={Twitter}
                    fill
                    className="object-contain"
                    alt="twitter"
                  />
                </Link>
              </div>
              <Image src={Jackson} fill className="object-contain" alt="pfp" />
            </div>
            <p className="text-center text-3xl pt-4">Jackson Meji</p>
            <p className="text-center text-2xl font-extrabold py-2">Founder</p>
            <p className="text-center text-base py-2">Founder of Mejia Labs</p>
          </div>
          <div className="">
            <div className="relative grid h-80 w-80">
              <div className="relative place-self-center self-end z-20 w-[70px] h-[70px] ">
                <Link href="https://twitter.com">
                  <Image
                    src={Twitter}
                    fill
                    className="object-contain"
                    alt="twitter"
                  />
                </Link>
              </div>
              <Image src={Luis} fill className="object-contain" alt="pfp" />
            </div>
            <p className="text-center text-3xl pt-4">Luis Morzone</p>
            <p className="text-center text-2xl font-extrabold py-2">
              Co-Founder
            </p>
            <p className="text-center text-base py-2">Lawyer / Marketer</p>
          </div>
          <div className="pb-20 xl:pb-0">
            <div className="relative grid h-80 w-80">
              <div className="relative place-self-center self-end z-20 w-[70px] h-[70px] ">
                <Link href="https://twitter.com">
                  <Image
                    src={Twitter}
                    fill
                    className="object-contain"
                    alt="twitter"
                  />
                </Link>
              </div>
              <Image src={Hughezy} fill className="object-contain" alt="pfp" />
            </div>
            <p className="text-center text-3xl pt-4">Hughezy</p>
            <p className="text-center text-2xl font-extrabold py-2">
              Co-Founder
            </p>
            <p className="text-center text-base py-2">Lawyer / Marketer</p>
          </div>
        </div>
      </div>
      <div className="w-full fixed -z-20 h-screen overflow-hidden pt-40 rounded-2xl">
        <div className="w-full h-full relative rotate-0 lg:rotate-90">
          <div className="h-80 w-full absolute top-[-240px] lg:top-[-40%]">
            <Image
              src={TopMeat}
              className="object-contain"
              fill
              alt="background"
            />
          </div>
          <div className="h-80 w-full absolute bottom-[-120px] lg:bottom-[-40%]">
            <Image
              src={BottomMeat}
              className="object-contain"
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
    </Layout>
  );
};

export default index;
