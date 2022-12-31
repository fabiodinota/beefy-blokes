import Image from 'next/image'
import React from 'react'
import TopMeat from "../../public/images/top_meat.webp";
import BottomMeat from "../../public/images/bottom_meat.webp";
import BackgroundMeat from "../../public/images/background_meat.webp";

interface BackgroundProps {
    children: React.ReactNode
}

const background_variant = ({children}: BackgroundProps) => {
  return (
    <div className="relative w-[90%] h-[670px] overflow-hidden rounded-2xl">
          {children}
          <div className="w-full h-full relative rotate-0 lg:rotate-90">
            {" "}
            {/* container for both meats */}
            <div className="h-80 w-full absolute top-[-120px] lg:top-[-50%]">
              {" "}
              {/* container for each meats */}
              <Image
                src={TopMeat}
                className="object-contain"
                loading="eager"
                fill
                alt="background"
              />{" "}
              {/* image for each meat */}
            </div>
            <div className="h-80 w-full absolute bottom-[-120px] lg:bottom-[-50%]">
              {" "}
              {/* container for each meats */}
              <Image
                src={BottomMeat}
                className="object-contain"
                loading="eager"
                fill
                alt="background"
              />{" "}
              {/* image for each meat */}
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

export default background_variant