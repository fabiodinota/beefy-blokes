import Image from 'next/image';
import React from 'react';
import Icon from "../../public/images/about_icon.webp";


const Hero = () => {
  return (
    <div className="max-w-[1100px] border-t-4 border-l-4 border-black h-full top-10 left-10 relative w-full mr-10">
      {/* Container for the whole top section ^ */}
        <div className="absolute w-20 h-20 -top-10 -left-10 pl-20"> {/* Icon on the top left */}
        <Image
            src={Icon}
            loading="eager"
            fill
            className="object-contain"
            alt="icon"
        />
        </div>
        <div className="w-full text-center px-10"> {/* Container for text */}
        <p className="text-[28px] font-extrabold pt-10">
            Beefy Blokes is an array of 1500 NFT’s that embody Aussie
            culture, with unique Aussie traits.
        </p>
        <p className="text-[22px]">
            <br />
            What is a Bloke?
            <br />
            <br />
            A Bloke is a commonly referred to term in Australia. Often
            substituted with the word man!
            <br />
            <br />
            For example, He’s an Aussie man... sounds weird right? But he’s
            an Aussie Bloke. Well that fits like a glove.
            <br />
            <br />
            Your Bloke will range from a Boxing Kangaroo to a Barbeque King.
            Whatever your Bloke is, it will embody you. Some of the traits
            consist of illuminated glasses, wavy mullet, a bushman’s hat or
            a fresh meat pie.
        </p>
        </div>
    </div>
  )
}

export default Hero