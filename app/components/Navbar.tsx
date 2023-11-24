import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-8 py-4 bg-orange-400 flex justify-center items-center">
      <nav>
        <h3>my brand</h3>
        <ul className="hidden">
          <Link href="/">home</Link>
          <Link href="/project">project</Link>
          <Link href="/about">about</Link>
        </ul>
      </nav>
    </header>
  );
}
