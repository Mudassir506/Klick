import Image from "next/image";

const WORDS = ["KNOW.", "WIN.", "KLICK."];

function Strip({ reverse = false }: { reverse?: boolean }) {
  const items = Array.from({ length: 6 }).flatMap(() => WORDS);

  return (
    <div
      className={`flex w-max items-center gap-8 whitespace-nowrap ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {[...items, ...items].map((word, i) => (
        <div key={i} className="flex items-center gap-8">
          <span className="font-display text-3xl uppercase text-black sm:text-4xl">
            {word}
          </span>
          <Image
            src="/app/logo.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  // Two green strips crossing in an X, like the Figma — one tilted each way,
  // scrolling in opposite directions.
  return (
    <div className="relative -my-6 h-44 overflow-hidden">
      {/* Figma Group 1000003146: rotation 5.01° */}
      <div className="absolute left-1/2 top-1/2 w-[130%] -translate-x-1/2 -translate-y-1/2 rotate-[5.01deg] bg-[#A9FFA0] py-6">
        <Strip />
      </div>
      {/* Figma Group 1000003147: rotation -3.77° */}
      <div className="absolute left-1/2 top-1/2 w-[130%] -translate-x-1/2 -translate-y-1/2 -rotate-[3.77deg] bg-[#A9FFA0] py-6">
        <Strip reverse />
      </div>
    </div>
  );
}
