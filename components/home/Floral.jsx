"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { ArrowIcon, ButtonIcon } from "../common/Icon";
import Image from "next/image";

export default function Floral() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="  px-4 md:pt-50 pt-20  lg:pt-[340px] pb-15 md:pb-30  max-width ">
            <div>
              <h2 className=" pop md:text-4xl max-lg:text-center max-lg:mx-auto sm:text-3xl text-2xl  lg:text-5xl font-bold leading-[125%] text-secondary max-w-[570px] w-full pb-5 ">
                Floral Design in a event planning company
              </h2>
              <p className="  max-w-[378px] w-full pop max-lg:text-center max-lg:mx-auto  md:text-base text-sm lg:text-lg text-[rgba(26,9,60,0.80)]  pb-10">
                Your ceremony & reception venues, your vision, your dress, your
                colours and anything else you would like to share with us. I am
                a Gold Coast and Brisbane.
              </p>
              <button className=" flex items-center  max-lg:mx-auto  gap-2  px-4 md:max-w-[266px] xl:h-20 md:w-full rounded-[50px] bg-[#3F41A6] py-3 md:py-6 justify-center text-white pop  md:text-lg sm:text-base text-sm lg:text-xl font-medium ">
                Get in Touch <ArrowIcon />{" "}
              </button>
            </div>

            <div className=" max-lg:grid max-lg:grid-cols-2 gap-5  max-sm:grid-cols-1 lg:flex justify-between  pt-20 items-center ">
              <div className=" max-lg:mx-auto ">
                <Image
                  className=" rounded-2xl "
                  src="/image/redFlower.png"
                  width={300}
                  height={400}
                  alt="red"
                />
                <h1 className=" pt-5 pop text-5xl font-bold text-secondary ">
                  01
                  <span className=" text-base text-[rgba(26,9,60,0.80)] ">
                    /18
                  </span>{" "}
                </h1>
              </div>
              <div className="  max-lg:mx-auto   lg:-mt-110 ">
                <Image
                  className=" rounded-2xl "
                  src="/image/sunflower.png"
                  width={300}
                  height={400}
                  alt="red"
                />
                <h1 className=" pt-5 pop text-5xl font-bold text-secondary ">
                  02
                  <span className=" text-base text-[rgba(26,9,60,0.80)] ">
                    /18
                  </span>{" "}
                </h1>
              </div>
              <div className="  max-lg:mx-auto  lg:-mt-170 ">
                <Image
                  className=" rounded-2xl "
                  src="/image/lily.png"
                  width={300}
                  height={400}
                  alt="red"
                />
                <h1 className=" pt-5 pop text-5xl font-bold text-secondary ">
                  03
                  <span className=" text-base text-[rgba(26,9,60,0.80)] ">
                    /18
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  px-4 md:pt-50 pt-20  lg:pt-[340px] pb-15 md:pb-30  max-width ">
            <div>
              <h2 className=" pop md:text-4xl max-lg:text-center max-lg:mx-auto sm:text-3xl text-2xl  lg:text-5xl font-bold leading-[125%] text-secondary max-w-[570px] w-full pb-5 ">
                Floral Design in a event planning company
              </h2>
              <p className="  max-w-[378px] w-full pop max-lg:text-center max-lg:mx-auto  md:text-base text-sm lg:text-lg text-[rgba(26,9,60,0.80)]  pb-10">
                Your ceremony & reception venues, your vision, your dress, your
                colours and anything else you would like to share with us. I am
                a Gold Coast and Brisbane.
              </p>
              <button className=" flex items-center  max-lg:mx-auto  gap-2  px-4 md:max-w-[266px] xl:h-20 md:w-full rounded-[50px] bg-[#3F41A6] py-3 md:py-6 justify-center text-white pop  md:text-lg sm:text-base text-sm lg:text-xl font-medium ">
                Get in Touch <ArrowIcon />{" "}
              </button>
            </div>

            <div className=" max-lg:grid max-lg:grid-cols-2 gap-5  max-sm:grid-cols-1 lg:flex justify-between  pt-20 items-center ">
              <div className=" max-lg:mx-auto ">
                <Image
                  className=" rounded-2xl "
                  src="/image/redFlower.png"
                  width={300}
                  height={400}
                  alt="red"
                />
                <h1 className=" pt-5 pop text-5xl font-bold text-secondary ">
                  01
                  <span className=" text-base text-[rgba(26,9,60,0.80)] ">
                    /18
                  </span>{" "}
                </h1>
              </div>
              <div className="  max-lg:mx-auto   lg:-mt-110 ">
                <Image
                  className=" rounded-2xl "
                  src="/image/sunflower.png"
                  width={300}
                  height={400}
                  alt="red"
                />
                <h1 className=" pt-5 pop text-5xl font-bold text-secondary ">
                  02
                  <span className=" text-base text-[rgba(26,9,60,0.80)] ">
                    /18
                  </span>{" "}
                </h1>
              </div>
              <div className="  max-lg:mx-auto  lg:-mt-170 ">
                <Image
                  className=" rounded-2xl "
                  src="/image/lily.png"
                  width={300}
                  height={400}
                  alt="red"
                />
                <h1 className=" pt-5 pop text-5xl font-bold text-secondary ">
                  03
                  <span className=" text-base text-[rgba(26,9,60,0.80)] ">
                    /18
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  px-4 md:pt-50 pt-20  lg:pt-[340px] pb-15 md:pb-30  max-width ">
            <div>
              <h2 className=" pop md:text-4xl max-lg:text-center max-lg:mx-auto sm:text-3xl text-2xl  lg:text-5xl font-bold leading-[125%] text-secondary max-w-[570px] w-full pb-5 ">
                Floral Design in a event planning company
              </h2>
              <p className="  max-w-[378px] w-full pop max-lg:text-center max-lg:mx-auto  md:text-base text-sm lg:text-lg text-[rgba(26,9,60,0.80)]  pb-10">
                Your ceremony & reception venues, your vision, your dress, your
                colours and anything else you would like to share with us. I am
                a Gold Coast and Brisbane.
              </p>
              <button className=" flex items-center  max-lg:mx-auto  gap-2  px-4 md:max-w-[266px] xl:h-20 md:w-full rounded-[50px] bg-[#3F41A6] py-3 md:py-6 justify-center text-white pop  md:text-lg sm:text-base text-sm lg:text-xl font-medium ">
                Get in Touch <ArrowIcon />{" "}
              </button>
            </div>

            <div className=" max-lg:grid max-lg:grid-cols-2 gap-5  max-sm:grid-cols-1 lg:flex justify-between  pt-20 items-center ">
              <div className=" max-lg:mx-auto ">
                <Image
                  className=" rounded-2xl "
                  src="/image/redFlower.png"
                  width={300}
                  height={400}
                  alt="red"
                />
                <h1 className=" pt-5 pop text-5xl font-bold text-secondary ">
                  01
                  <span className=" text-base text-[rgba(26,9,60,0.80)] ">
                    /18
                  </span>{" "}
                </h1>
              </div>
              <div className="  max-lg:mx-auto   lg:-mt-110 ">
                <Image
                  className=" rounded-2xl "
                  src="/image/sunflower.png"
                  width={300}
                  height={400}
                  alt="red"
                />
                <h1 className=" pt-5 pop text-5xl font-bold text-secondary ">
                  02
                  <span className=" text-base text-[rgba(26,9,60,0.80)] ">
                    /18
                  </span>{" "}
                </h1>
              </div>
              <div className="  max-lg:mx-auto  lg:-mt-170 ">
                <Image
                  className=" rounded-2xl "
                  src="/image/lily.png"
                  width={300}
                  height={400}
                  alt="red"
                />
                <h1 className=" pt-5 pop text-5xl font-bold text-secondary ">
                  03
                  <span className=" text-base text-[rgba(26,9,60,0.80)] ">
                    /18
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
