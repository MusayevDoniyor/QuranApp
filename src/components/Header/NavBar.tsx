import Link from "next/link";
import React from "react";
import { FiSettings } from "react-icons/fi";

export default function NavBar() {
  return (
    <nav className="items-center">
      <ul className="flex gap-5 items-center text-base md:text-lg font-semibold">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/">
            <FiSettings className="size-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
