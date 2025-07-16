import Image from "next/image";
import React from "react";
import { ArrowIcon } from "../common/Icon";

const Hero = () => {
  return (
    <div>
      <div className=" max-width  sm:pt-10 pt-5  xl:pt-40 sm:pb-15 lg:pb-40 pb-7 px-4 lg:flex justify-between   gap-5  ">
        <div className=" max-lg:mx-auto max-lg:pb-10 ">
          <h3 className=" pop lg:text-6xl max-lg:text-center max-lg:mx-auto  md:text-5xl sm:text-4xl text-3xl xl:text-8xl text-secondary pb-5 md:pb-10  font-bold leading-[120%] max-w-[438px] w-full  ">
            Where creative process happens
          </h3>
          <p className=" pop  pb-5 md:pb-10  w-[275px] max-lg:text-center max-lg:mx-auto  md:text-base text-sm lg:text-lg text-[rgba(26,9,60,0.80)] ">
            Your creativity, our inspiration Whatever your story, set if free.
          </p>
          <button className=" flex items-center  hover:text-secondary hover:bg-white  cursor-pointer hover:border hover:border-[#3F41A6]  group duration-300 ease-in-out transition-all max-lg:mx-auto  gap-2  px-4 md:max-w-[266px] xl:h-20 md:w-full rounded-[50px] bg-[#3F41A6] py-3 md:py-6 justify-center text-white pop  md:text-lg sm:text-base text-sm lg:text-xl font-medium ">
            Get in Touch <ArrowIcon />{" "}
          </button>
        </div>

        <div className="max-lg:mx-auto ">
          <Image
            className="max-lg:mx-auto"
            src="/image/camera.png"
            width={680}
            height={400}
            alt="camera"
          />
          <div className=" sm:flex  max-lg:w-full max-lg:max-w-[700px] max-lg:mx-auto items-center pt-5 gap-5 ">
            <Image
              className=" max-sm:mb-6 max-sm:mx-auto "
              src="/image/nightCamera.png"
              width={280}
              height={250}
              alt="girlcamera"
            />
            <Image
              className=" max-sm:mx-auto "
              src="/image/girlCamera.png"
              width={380}
              height={250}
              alt="girlcamera"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
