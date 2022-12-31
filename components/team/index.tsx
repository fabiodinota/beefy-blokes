import Image from "next/image";
import React from "react";
import Layout from "../layout";
import TopMeat from "../../public/images/top_meat.webp";
import BottomMeat from "../../public/images/bottom_meat.webp";
import BackgroundMeat from "../../public/images/background_meat.webp";
import Twitter from "../../public/images/twitter_team.webp";
import Jackson from "../../public/images/jackson.png";
import Luis from "../../public/images/luis.png";
import Hughezy from "../../public/images/hughes.png";
import Meet from "../../public/images/meet.webp";
import Link from "next/link";
import Bonglo from "../../public/images/bonglo.png";
import Yulian from "../../public/images/dominic.png";
import Dominic from "../../public/images/yulian.png";


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

          <div className="">
            <div className="relative grid h-80 w-80">
              <div className="relative place-self-center self-end z-20 w-[70px] h-[70px] ">
                <Link href="https://twitter.com">
                  <Image
                    loading="eager"
                    src={Twitter}
                    fill
                    className="object-contain"
                    alt="twitter"
                  />
                </Link>
              </div>
              <Image
                loading="eager"
                src={Jackson}
                fill
                className="object-contain"
                alt="pfp"
              />
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
                    loading="eager"
                    src={Twitter}
                    fill
                    className="object-contain"
                    alt="twitter"
                  />
                </Link>
              </div>
              <Image
                loading="eager"
                src={Luis}
                fill
                className="object-contain"
                alt="pfp"
              />
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
                    loading="eager"
                    src={Twitter}
                    fill
                    className="object-contain"
                    alt="twitter"
                  />
                </Link>
              </div>
              <Image
                loading="eager"
                src={Hughezy}
                fill
                className="object-contain"
                alt="pfp"
              />
            </div>
            <p className="text-center text-3xl pt-4">Daniel Hughez</p>
            <p className="text-center text-2xl font-extrabold py-2">
              Co-Founder
            </p>
            <p className="text-center text-base py-2">Lawyer / Marketer</p>
          </div>
          <div className="">
            <div className="relative grid h-80 w-80">
              <div className="relative place-self-center self-end z-20 w-[70px] h-[70px] ">
                <Link href="https://twitter.com">
                  <Image
                    loading="eager"
                    src={Twitter}
                    fill
                    className="object-contain"
                    alt="twitter"
                  />
                </Link>
              </div>
              <Image
                loading="eager"
                src={Bonglo}
                fill
                className="object-contain"
                alt="pfp"
              />
            </div>
            <p className="text-center text-3xl pt-4">Bonglo.ETH</p>
            <p className="text-center text-2xl font-extrabold py-2">Project Manager</p>
            <p className="text-center text-base py-2">Project Manager at Beefy Blokes</p>
          </div>
          <div className="">
            <div className="relative grid h-80 w-80">
              <div className="relative place-self-center self-end z-20 w-[70px] h-[70px] ">
                <Link href="https://twitter.com">
                  <Image
                    loading="eager"
                    src={Twitter}
                    fill
                    className="object-contain"
                    alt="twitter"
                  />
                </Link>
              </div>
              <Image
                loading="eager"
                src={Yulian}
                fill
                className="object-contain"
                alt="pfp"
              />
            </div>
            <p className="text-center text-3xl pt-4">Yulian</p>
            <p className="text-center text-2xl font-extrabold py-2">Artist</p>
            <p className="text-center text-base py-2">Illustrator & Graphic Designer</p>
          </div>
          <div className="">
            <div className="relative grid h-80 w-80">
              <div className="relative place-self-center self-end z-20 w-[70px] h-[70px] ">
                <Link href="https://twitter.com">
                  <Image
                    loading="eager"
                    src={Twitter}
                    fill
                    className="object-contain"
                    alt="twitter"
                  />
                </Link>
              </div>
              <Image
                loading="eager"
                src={Dominic}
                fill
                className="object-contain"
                alt="pfp"
              />
            </div>
            <p className="text-center text-3xl pt-4">Dominic</p>
            <p className="text-center text-2xl font-extrabold py-2">Creative Director</p>
            <p className="text-center text-base py-2">Creative Director at Beefy Blokes</p>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen fixed -z-20 overflow-hidden pt-40 rounded-2xl">
        <div className="w-full h-full relative rotate-0 lg:rotate-90">
          <div className="h-80 w-full absolute top-[-240px] lg:top-[-40%]">
            <Image
              loading="eager"
              src={TopMeat}
              className="object-contain"
              fill
              alt="background"
            />
          </div>
          <div className="h-80 w-full absolute bottom-[-120px] lg:bottom-[-40%]">
            <Image
              loading="eager"
              src={BottomMeat}
              className="object-contain"
              fill
              alt="background"
            />
          </div>
        </div>
        <Image
          loading="eager"
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
