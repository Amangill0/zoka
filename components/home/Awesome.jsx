import Image from "next/image";
import React from "react";
import { ImageData } from "../common/Helper";

const Awesome = () => {
  return (
    <div>
      <div className=" px-4 max-width pt-30  xl:pt-34    ">
        <h2 className=" text-secondary  max-lg:text-center pop md:text-5xl sm:text-4xl text-3xl lg:text-6xl  font-semibold pb-5 ">
          Our Awesome Works
        </h2>
        <h3 className=" pop sm:text-xl  max-lg:text-center text-lg md:text-[25px] pb-11 text-[rgba(0,0,0,0.75)] ">
          See what we shooted
        </h3>
        <div className="grid gap-5 md:grid-cols-2 max-xl:mx-auto grid-cols-1 xl:grid-cols-3">
          {ImageData.map((item, index) => {
            return (
              <Image
                className="   xl:h-[402px] max-xl:mx-auto "
                key={index}
                src={item.img}
                width={380}
                height={402}
                alt="forest"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Awesome;
