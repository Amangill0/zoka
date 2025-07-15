import Image from "next/image";
import React from "react";
import { ExperimentData } from "../common/Helper";

const Experiments = () => {
  return (
    <>
      {" "}
      <div className=" pt-60 max-w-[1180px]  justify-between -mb-[170px] w-full mr-auto ">
        <div className="flex justify-between   gap-5">
          <Image
            className="h-[550px] object-cover "
            src="/image/folderImg.png"
            width={804}
            height={550}
            alt="img"
          /> 
          <div>
            <h3 className=" text-secondary max-w-[446px] w-full  text-5xl pop font-bold leading-[125%] pb-5 ">
              Experiments and personal projects.
            </h3>
            <p className=" pop text-lg max-w-[379px] w-full text-[rgba(26,9,60,0.80)] ">
              Your ceremony & reception venues, your vision, your dress, your
              colours and anything else you would like to share with us. I am a
              Gold Coast and Brisbane.
            </p>
          </div>
        </div>
      </div>
      {/* ===customs=== */}
      <div className=" w-full  flex  pt-2.5 gap-17 justify-end pr-55 items-center bg-[#F6F5FB] ">
        {ExperimentData.map((item, index) => {
          return (
            <div key={index}>
              <h2 className="text-5xl font-bold pop text-secondary pt-15">
                {item.head}
              </h2>
              <h3 className="pop text-lg text-[rgba(26,9,60,0.80)] pb-27">
                {item.para}
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experiments;
