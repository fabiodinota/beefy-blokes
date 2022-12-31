import Image from 'next/image'
import React from 'react'
import TopMeat from "../../public/images/top_meat.webp";
import BottomMeat from "../../public/images/bottom_meat.webp";
import BackgroundMeat from "../../public/images/background_meat.webp";

const Background = () => {
  return (
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
  )
}

export default Background