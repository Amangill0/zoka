import React from "react";
import { GalleryIcon } from "../common/Icon";
import Image from "next/image";
import { ChooseData } from "../common/Helper";

const WhyChoose = () => {
  return (
    <div>
      <div className=" max-w-[1007px]  md:pb-10 pb-5 lg:pb-30 px-4  pt-10 md:pt-15 lg:pt-30  xl:pt-57 w-full mx-auto gap-3  ">
        <h2 className=" text-secondary text-center  md:text-4xl sm:text-3xl text-2xl lg:text-5xl font-bold leading-[125%] ">
          Why Choose us
        </h2>
        <div className=" lg:flex max-lg:grid max-lg:grid-cols-2 gap-5 max-sm:grid-cols-1 justify-between pt-6 md:pt-10 lg:pt-20 items-center ">
          {ChooseData.map((item, index) => {
            return (
              <div key={index} className="flex  flex-col">
                <div className="mx-auto p-6 bg-white">
                  <Image src={item.img} width={72} height={72} alt="gallery" />
                </div>
                <h3 className="pop text-xl text-center pb-2.5 font-bold text-secondary pt-5 md:pt-10">
                  {item.head}
                </h3>
                <p className="pop text-lg max-w-[267px] max-lg:mx-auto w-full text-center text-secondary">
                  {item.para}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
