import Image from "next/image";
import Link from "next/link";
import Burger from "./Burger";

export default function Navbar() {
  return (
    <header className="bg-orange-500">
      <nav className="px-8 py-4 flex justify-between items-center">
        <div>
          <Image
            className=""
            src="/vercel.svg"
            width={60}
            height={60}
            alt="vercel image"
          />
        </div>
        <ul className="hidden">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
        </ul>
        <Burger />
      </nav>
    </header>
  );
}
