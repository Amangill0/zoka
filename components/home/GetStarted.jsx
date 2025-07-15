import Image from "next/image";
import React from "react";
import { ButtonIcon, GreyArrowIcon } from "../common/Icon";

const GetStarted = () => {
  return (
    <div className=" md:pb-25 pb-10  px-4 pt-15 md:pt-30 lg:pt-45 ">
      <div className=" max-width  lg:flex  rounded-[100px]  px-4  bg-[#431898]  ">
        <div className=" lg:pl-25  pb-38 ">
          <h2 className=" text-white max-lg:text-center pt-20 lg:pt-39.5 pop lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:text-[64px] font-semibold pb-7.5 ">
            Get Started With Us
          </h2>
          <p className=" pop sm:text-base max-lg:text-center text-sm md:text-lg text-[rgba(255,255,255,0.80)]  pb-8 lg:pb-15  ">
            Your ceremony & reception venues, yourvision, your dress, your
            colours and anythingelse you would like to share with us.{" "}
          </p>
          <button className="flex pop sm:text-lg text-base   max-lg:mx-auto  md:text-xl font-medium border-[2px] gap-2 duration-300 transition-all ease-in-out text-primary bg-white  items-center rounded-[50px] px-4 lg:w-[266px] py-3 lg:py-6 border-transparent justify-center">
            Get in Touch <GreyArrowIcon />
          </button>
        </div>
        <div className=" -mt-24 ">
          {" "}
          <Image
            className="md:h-[550px] max-lg:mx-auto "
            src="/image/sunChild.png"
            width={568}
            height={568}
            alt="sunchild"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
