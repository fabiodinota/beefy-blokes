import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import Twitter from "../../public/images/twitter_team.webp";

interface TeamComponentProps {
    name: string
    role: string
    description: string
    twitter: string
    ImageSrc: StaticImageData;
}

const TeamComponent = ({ ImageSrc, name, role, description, twitter}: TeamComponentProps) => {
  return (
    <div>
        <div className="relative grid h-80 w-80">
              <div className="relative place-self-center self-end z-20 w-[70px] h-[70px] ">
                <Link href={twitter}>
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
                src={ImageSrc}
                fill
                className="object-contain"
                alt="pfp"
              />
            </div>
            <p className="text-center text-3xl pt-4">{name}</p>
            <p className="text-center text-2xl font-extrabold py-2">{role}</p>
            <p className="text-center text-base py-2">{description}</p>
    </div>
  )
}

export default TeamComponent