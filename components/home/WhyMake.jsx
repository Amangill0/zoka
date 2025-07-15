import Image from "next/image";
import React from "react";
import { ArrowIcon } from "../common/Icon";

const WhyMake = () => {
  return (
    <div>
      <div className=" max-width   py-10  lg:py-17.5 px-4   lg:flex  items-center gap-3  ">
        <div>
          <Image
            className=" max-lg:mb-8 max-lg:mx-auto "
            src="/image/tree.png"
            width={483}
            height={459}
            alt="tree"
          />
        </div>
        <div className=" mx-auto ">
          <h3 className=" pop text-xl max-lg:text-center font-semibold text-[#3F41A6]  ">
            GET TO KNOW US
          </h3>
          <h2 className=" pt-1.5 pop  sm:text-4xl text-3xl md:text-5xl max-lg:text-center font-bold  max-lg:mx-auto leading-[125%] text-secondary max-w-[392px] w-full pb-5 ">
            Why we make it happens
          </h2>
          <p className=" max-w-[378px] w-full max-lg:text-center max-lg:mx-auto pop sm:text-base text-sm md:text-lg text-[rgba(26,9,60,0.80)] pb-10 ">
            Your ceremony & reception venues, your vision, your dress, your
            colours and anything else you would like.
          </p>
          <button className=" flex items-center  max-lg:mx-auto  gap-2 px-4 md:max-w-[266px] xl:h-20 md:w-full rounded-[50px] bg-[#3F41A6] py-3 md:py-6 justify-center text-white pop  md:text-lg sm:text-base text-sm lg:text-xl font-medium ">
            Get in Touch <ArrowIcon />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyMake;
