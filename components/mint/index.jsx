import React, { useState } from "react";
import Layout from "../layout";
import Image from "next/image";
import TopMeat from "../../public/images/top_meat.png";
import BottomMeat from "../../public/images/bottom_meat.png";
import BackgroundMeat from "../../public/images/background_meat.png";
import Plus from "../../public/images/plus.png";
import Minus from "../../public/images/minus.png";
import Bloke from "../../public/images/bloke.png";

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
    <Layout title="Home">
      <div className=" pt-40 relative flex flex-col justify-center items-center">
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
        <div className="relative w-[90%] h-[800px] overflow-hidden rounded-2xl">
          {" "}
          {/* container for whole meats section */}
          <div className="w-full h-full absolute z-[100] scale-90 xs:scale-100 flex justify-center items-center flex-col">
            <div className="w-[300px] relative h-[300px]">
              <Image src={Bloke} fill alt="bloke" />
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
                  <div className="flex flex-row  space-x-3">
                    <div
                      className="cursor-pointer relative h-5 w-5"
                      onClick={() => handleDecrease()}
                    >
                      <Image src={Minus} fill alt="minus" />
                    </div>
                    <div className="scale-[1.15]">{count}</div>
                    <div
                      className="cursor-pointer relative h-5 w-5"
                      onClick={() => handleIncrease()}
                    >
                      <Image src={Plus} fill alt="plus" />
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
          <div className="w-full h-full relative rotate-0 lg:rotate-90">
            {" "}
            {/* container for both meats */}
            <div className="h-80 w-full absolute top-[-120px] lg:top-[-40%]">
              {" "}
              {/* container for each meats */}
              <Image
                src={TopMeat}
                className="object-contain"
                fill
                alt="background"
              />{" "}
              {/* image for each meat */}
            </div>
            <div className="h-80 w-full absolute bottom-[-120px] lg:bottom-[-40%]">
              {" "}
              {/* container for each meats */}
              <Image
                src={BottomMeat}
                className="object-contain"
                fill
                alt="background"
              />{" "}
              {/* image for each meat */}
            </div>
          </div>
          <Image
            src={BackgroundMeat}
            className="object-cover absolute -z-50"
            fill
            alt="background"
          />
        </div>
        <div className="w-[85%] flex flex-col sm:flex-row justify-center sm:justify-between items-start sm:items-center py-10 pb-20">
          <p className="sm:pr-10 w-full whitespace-pre-line">
            Your Bloke will range from a Boxing Kangaroo to a Barbeque King.
            <br className="hidden sm:block" />
            Whatever your Bloke is, it will embody YOU.
          </p>
          <p className="whitespace-nowrap pt-10 sm:pt-0">
            STAY BEEFY! STAY BEEFY!
            <br />
            STAY BEEFY! STAY BEEFY!
            <br />
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
