import React, { useState } from "react";
import Layout from "../layout";
import Image from "next/image";
import Plus from "../../public/images/plus.webp";
import Minus from "../../public/images/minus.webp";
import Bloke from "../../public/images/bloke.webp";
import BackgroundVariant from "../layout/background_variant";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0);
  const [max, min] = [5, 0];
  const handleIncrease = () => {
    if (count < max) {
      setCount(count + 1);
    } else {
      setCount(max);
    }
  };
  const handleDecrease = () => {
    if (count > min) {
      setCount(count - 1);
    } else {
      setCount(min);
    }
  };
  return (
    <Layout background="black" title="Mint" show={true}>
      <div className=" pt-40 relative flex flex-col justify-center items-center">
        <BackgroundVariant> {/* Background container */}
          {/* container for whole meats section */}
          <div className="w-full h-full absolute z-[100] scale-100 sm:scale-115 flex justify-center items-center flex-col">
            <div className="w-[300px] relative h-[300px]">
              <Image loading="eager" src={Bloke} fill alt="bloke" />
            </div>
            <div className="w-[300px] h-[150px] relative border-2 border-black rounded-[30px]">
              <button className="w-full h-[75px] top-0 left-0 bg-black rounded-[24px] text-[40px] font-extrabold text-white absolute">
                MINT
              </button>
              <div className="w-full h-full flex justify-evenly items-end">
                <div className=" flex flex-col space-y-2 justify-center items-center">
                  <div>Amount</div>
                  <div className="px-7 flex justify-center items-center bg-black rounded-t-3xl pt-1 text-[#7FDCF9]">
                    <p>{(0.1 * count).toFixed(1)} ETH</p>
                  </div>
                </div>
                <div className=" flex flex-col space-y-2 justify-center items-center">
                  <div className="flex flex-row  space-x-3 justify-center items-center">
                    <div
                      className="cursor-pointer relative h-5 w-5"
                      onClick={() => handleDecrease()}
                    >
                      <Image loading="eager" src={Minus} fill alt="minus" />
                    </div>
                    <div className="scale-[1.15]">{count}</div>
                    <div
                      className="cursor-pointer relative h-5 w-5"
                      onClick={() => handleIncrease()}
                    >
                      <Image loading="eager" src={Plus} fill alt="plus" />
                    </div>
                  </div>
                  <div
                    onClick={() => setCount(max)}
                    className="px-7  flex justify-center items-center cursor-pointer bg-black rounded-t-3xl pt-1 text-[#7FDCF9]"
                  >
                    <p>Max</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[32px] pt-4 cursor-pointer">1384/1500</p>
            <p className="text-[18px] pb-4 cursor-pointer">
              BEEFY BLOKES MINTED
            </p>
          </div>
        </BackgroundVariant>
        <div className="w-[85%] flex flex-col sm:flex-row justify-center sm:justify-between items-start sm:items-center py-10">
          <p className="sm:pr-10 w-full whitespace-pre-line">
            Your Bloke will range from a Boxing Kangaroo to a Barbeque King.
            <br className="hidden sm:block" />
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
