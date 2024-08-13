import Link from "next/link";
import React from "react";

export default function Links() {
  return (
    <nav>
      <ul className="flex gap-3 text-white text-lg">
        <li>
          <Link
            href="/about-the-quran"
            className="hover:text-[#ced4da] text-base md:text-lg transition-colors"
          >
            About The Quran
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="hover:text-[#ced4da] text-base md:text-lg transition-colors"
          >
            Al Mulk
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="hover:text-[#ced4da] text-base md:text-lg transition-colors"
          >
            Yaseen
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="hover:text-[#ced4da] text-base md:text-lg transition-colors"
          >
            Al Kahf
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="hover:text-[#ced4da] text-base md:text-lg transition-colors"
          >
            Al Waqi&apos;ah
          </Link>
        </li>
      </ul>
    </nav>
  );
}
