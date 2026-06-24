import Image from "next/image";

export default function Logo({
  size = 56,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <a href="/" className="flex items-center gap-2 shrink-0">
      <Image
        src="/app/logo.png"
        alt="Cheese Klick"
        width={className ? 1024 : size}
        height={className ? 1024 : size}
        className={`object-contain drop-shadow-[0_0_12px_rgba(169,255,160,0.35)]${
          className ? ` ${className}` : ""
        }`}
        priority
      />
    </a>
  );
}
