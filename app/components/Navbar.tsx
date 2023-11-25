import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-orange-500">
      <nav>
        <div>
          <Image src="/vercel.svg" width={60} height={60} alt="vercel image" />
        </div>
        <ul className="sm:hidden">
          <Link href="/">Home</Link>
          <Link href="/Work">Work</Link>
          <Link href="/About">About</Link>
        </ul>
      </nav>
    </header>
  );
}
