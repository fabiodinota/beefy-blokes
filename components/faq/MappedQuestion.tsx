import Image from 'next/image';
import React, { useState } from 'react'
import Plus from '../../public/images/plus_faq.webp';

const MappedQuestion = () => {
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
                    className={` border-t-[2px] cursor-pointer border-black max-w-[1200px] py-10 mt-0 w-full overflow-hidden mb-5 transition-all duration-300
                    ${open === index ? "h-max" : "h-0"}
                    `}
                  >
                    <div
                      className={`max-w-[1200px] w-full origin-top transition-all duration-200 text-black
                     relative font-bold flex flex-col justify-center items-start`}
                    >
                      <div className="flex flex-row justify-between w-full">
                        <p className="whitespace-nowrap  text-[30px] leading-10 pr-4 sm:text-[40px] h-10">{item.question}</p>
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
  )
}

export default MappedQuestion