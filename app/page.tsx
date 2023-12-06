import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-20 gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="semi-32 text-center text-orange-500">Hello i am iwan</h1>
        <h3 className="semi-24 text-center">Front-end Developer</h3>
      </div>
      <div>
        <Image
          className="rounded-full border-2"
          src="/hero-mahdi-chaghari.jpg"
          width={200}
          height={200}
          alt="hero images"
        />
      </div>
    </main>
  );
}
