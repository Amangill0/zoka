"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavlinksData } from "./Helper";
import { ButtonIcon } from "./Icon";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative px-4 ">
      <div className="max-width flex justify-between items-center gap-2 py-3">
        <Link href="/">
          <h1 className="pop text-4xl text-primary tracking-[-3.42px]">ZOKA</h1>
        </Link>

        {/* ===Links - shown on lg only=== */}
        <div className="hidden lg:flex items-center gap-10">
          {NavlinksData.map((item, index) => (
            <Link key={index} href="#">
              <h2 className="pop text-xl font-semibold text-third duration-300 transition-all ease-in-out hover:text-secondary">
                {item.link}
              </h2>
            </Link>
          ))}
        </div>

        {/* ===Button - shown on lg only=== */}
        <button className="hidden group hover:text-white hover:bg-[#3F41A6] cursor-pointer lg:flex pop text-lg font-semibold border-[2px] gap-2 duration-300 transition-all ease-in-out text-[#3F41A6] border-[#3F41A6] items-center rounded-[22.5px] w-[145px] py-3 justify-center">
          Youtube <ButtonIcon />
        </button>

        {/* ===Hamburger Menu - shown below lg=== */}
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* ===Overlay Menu=== */}
      {open && (
        <>
          <div
            className="fixed  duration-500 ease-in-out transition-all  inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setOpen(false)}
          />

          <div className="fixed  duration-500 ease-in-out transition-all  top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6">
            <button className="self-end" onClick={() => setOpen(false)}>
              <X size={28} />
            </button>

            {NavlinksData.map((item, index) => (
              <Link key={index} href="#">
                <h2 className="pop text-xl font-semibold text-[#787282] duration-300 transition-all ease-in-out hover:text-[#1A093E]">
                  {item.link}
                </h2>
              </Link>
            ))}

            <button className="mt-auto pop text-lg font-semibold border-[2px] gap-2 duration-300 transition-all ease-in-out text-[#3F41A6] border-[#3F41A6] flex items-center rounded-[22.5px] w-full py-3 justify-center">
              Youtube <ButtonIcon />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
