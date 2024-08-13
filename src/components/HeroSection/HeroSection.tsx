import React from "react";
import { IoIosSearch } from "react-icons/io";
import Links from "./Links";

export default function HeroSection() {
  return (
    <section className="bg-[#2ca4ab] pt-16 pb-6 flex justify-center flex-col">
      <div className="w-5/6 md:w-4/6 flex justify-between gap-2 bg-white rounded-3xl items-center py-4 px-6 cursor-pointer hover:shadow-xl transition-all mx-auto mt-10 mb-5">
        <div className="flex gap-2 items-center text-[#666]">
          <label htmlFor="search">
            <IoIosSearch className="size-7 cursor-pointer" />
          </label>

          <p>What do you want to read?</p>
        </div>

        <kbd className="md:block border border-[#ebeef0] cursor-pointer p-1 text-xs ">
          Ctrl K
        </kbd>
      </div>

      <div className="mx-auto">
        <Links />
      </div>
    </section>
  );
}
