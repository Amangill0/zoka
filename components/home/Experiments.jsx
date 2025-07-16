import Image from "next/image";
import React from "react";
import { ExperimentData } from "../common/Helper";

const Experiments = () => {
  return (
    <>
      <div className=" relative w-full z-10 ">
        <div className=" md:pt-20   pt-10   xl:pt-60 max-w-[1180px] w-full mr-auto relative z-10 px-4 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
            <Image
              className="h-auto w-full lg:w-[804px] lg:h-[550px] object-cover"
              src="/image/folderImg.png"
              width={804}
              height={550}
              alt="img"
            />
            <div className="text-center lg:text-left">
              <h3 className="text-secondary max-w-[446px] w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl pop font-bold leading-[125%] pb-5 mx-auto lg:mx-0">
                Experiments and personal projects.
              </h3>
              <p className="pop text-base sm:text-lg max-w-[379px] w-full text-[rgba(26,9,60,0.80)] mx-auto lg:mx-0">
                Your ceremony & reception venues, your vision, your dress, your
                colours and anything else you would like to share with us. I am
                a Gold Coast and Brisbane.
              </p>
            </div>
          </div>
        </div>

        {/* ===customs=== */}
        <div className=" experiment w-full bg-[#F6F5FB]   pb-17 pt-1  z-0 xl:absolute  xl:top-140 xl:right-40 mt-16 px-4 md:px-8">
          <div className="flex flex-col lg:flex-row  lg:gap-17 justify-end items-center text-center lg:text-right">
            {ExperimentData.map((item, index) => {
              return (
                <div key={index} className="max-w-xs">
                  <h2 className=" sm:text-2xl text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pop text-secondary pt-3 lg:pt-10">
                    {item.head}
                  </h2>
                  <h3 className="pop  text-center md:text-base text-sm lg:text-lg text-[rgba(26,9,60,0.80)] pb-16">
                    {item.para}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiments;
