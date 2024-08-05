import Link from "next/link";
import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-4 md:py-5 px-4 md:px-14 bg-slate-100 fixed top-1 z-50 ">
      <div>
        <Link href="/" className="text-4xl lg:text-5xl font-bold">
          Quran
        </Link>
      </div>

      <NavBar />
    </header>
  );
}
