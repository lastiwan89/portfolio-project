"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Burger() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="relative" onClick={() => setOpen((prev) => !prev)}>
      {!open ? (
        <Image
          src={`/icon-hamburger.svg`}
          alt="hamburger"
          width={36}
          height={36}
        />
      ) : (
        <Image src={`/icon-close.svg`} alt="hamburger" width={30} height={30} />
      )}
      {open && (
        <ul className="absolute right-[-32px] p-8 bg-orange-500 flex flex-col justify-center items-center gap-8 w-screen">
          <Link className="semi-18 cursor-pointer" href="/">
            Home
          </Link>
          <Link className="semi-18 cursor-pointer" href="/work">
            Work
          </Link>
          <Link className="semi-18 cursor-pointer" href="/about">
            About
          </Link>
        </ul>
      )}
    </div>
  );
}
