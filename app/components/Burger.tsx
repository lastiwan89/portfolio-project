"use client";
import Image from "next/image";
// import Link from "next/link"
import { useState } from "react";

export default function Burger() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div onClick={() => setOpen((prev) => !prev)}>
      {!open ? (
        <Image
          src={`/icon-hamburger.svg`}
          alt="hamburger"
          width={36}
          height={36}
        />
      ) : (
        <Image src={`/icon-close.svg`} alt="hamburger" width={36} height={36} />
      )}
    </div>
  );
}
