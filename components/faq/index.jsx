import Image from "next/image";
import React, { useState } from "react";
import Layout from "../layout";
import TopMeat from "../../public/images/top_meat.webp";
import BottomMeat from "../../public/images/bottom_meat.webp";
import BackgroundMeat from "../../public/images/background_meat.webp";
import Header from "../../public/images/header.webp";
import Plus from "../../public/images/plus_faq.webp";

const index = () => {
  const items = [
    {
      question: "PURPOSE?",
      answer:
        "Our purpose is to bring together a community that encourages, motivates and supports holders. At Beefy Blokes we want our holders of our NFT to think of it as a membership to an exclusive community of like-minded individuals, who are all committed to helping each other. Moreover, our why is to onboard blokes to the Web3 space within the early phases of adoption. We are innovators guided by our community and the evolving Web3 world.",
    },
    {
      question: "SUPPLY?",
      answer: "TBA",
    },
    {
      question: "STORY?",
      answer:
        "The characters represent human traits that Australian Blokes most admire. What is a bloke you might ask? The word 'Bloke' is essentially the same as 'man' but in a more casual way. We focused on traits that we believe will lead to nostalgia, happiness and resemblance!",
    },
    {
      question: "HOW TO BUY?",
      answer: "TBA",
    },
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(4);
  return (
    <Layout title="FAQ" background={"white"}>
      <div className="w-full h-screen fixed overflow-scroll top-0 flex justify-center items-start -z-10 bg-black bg-opacity-0 backdrop-blur-[2px] backdrop-filter">
        <div className="w-full px-10 max-w-[1200px] pt-60 flex flex-col justify-start items-start">
          <div className="max-w-[600px] relative w-full h-[150px] px-10">
            <Image
              src={Header}
              loading="eager"
              alt="header"
              fill
              className="object-contain"
            />
          </div>
          <div className="pb-20 w-full flex justify-start pt-20 items-center flex-col">
            <div className="px-[20px]">
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      if (open === index) {
                        setOpen(4);
                      } else {
                        setOpen(index);
                      }
                    }}
                    className={` border-t-[2px] cursor-pointer border-black max-w-[1200px] py-10 mt-0 w-full  mb-5 overflow-clip transition-all duration-300
                    ${open === index ? "h-max" : "h-0"}
                    `}
                  >
                    <div
                      className={`max-w-[1200px] w-full origin-top transition-all duration-200 text-black
                     relative font-bold flex text-3xl flex-col justify-center items-start`}
                    >
                      <div className="flex flex-row justify-between text-[40px] w-full">
                        <p>{item.question}</p>
                        <div
                          className={`cursor-pointer transition-all duration-300 origin-center relative w-7 h-7 ${
                            open === index ? "rotate-[225deg]" : "rotate-0"
                          }`}
                          onClick={() => {
                            if (open === index) {
                              setOpen(4);
                            } else {
                              setOpen(index);
                            }
                          }}
                        >
                          <Image
                            src={Plus}
                            loading="eager"
                            alt="plus"
                            fill
                            className={`object-contain`}
                          />
                        </div>
                      </div>
                      <p
                        className={` py-5 break-words font-normal transition-all duration-200`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
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
