import Image from "next/image";
import RotatingText from "@/components/rotatingText/rotating";

export default function Home() {
  return (
    <div
      className="flex flex-col bg-orange-100 justify-center items-center w-screen
      h-screen"
    >
      <div className="text-5xl font-bold tracking-wide">Meet New Color.</div>
      <RotatingText/>
    </div>
  );
}
