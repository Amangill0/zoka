import React from "react";
import { FooterlinksData } from "./Helper";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" max-width py-6.5 px-4   lg:flex justify-between items-center gap-2 ">
      <Link href="#">
        {" "}
        <h2 className=" max-lg:text-center duration-300 transition-all ease-in-out hover:text-secondary pop font-semibold  md:text-lg sm:text-base text-sm lg:text-xl text-footer ">
          ZOKA © 2022. Crafted by YEV YEV ❤️{" "}
        </h2>
      </Link>
      <div className=" max-lg:mx-auto max-lg:justify-center max-lg:flex max-lg:pt-5 max-sm:grid-cols-2 max-sm:grid  flex items-center md:gap-10">
        {FooterlinksData.map((item, index) => (
          <Link key={index} href="#">
            <h2 className="pop  md:text-lg sm:text-base text-sm lg:text-xl max-sm:text-center font-semibold text-footer duration-300 transition-all ease-in-out hover:text-secondary">
              {item.link}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
