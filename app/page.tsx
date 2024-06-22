import { Button } from "@/components/ui/button";
import Image from "next/image";
import Landing from "@/components/landing";

export default function Home() {
  return (
    <section className="w-full bg-[#d6d7db] h-screen text-center text-3xl flex justify-center items-center">
      <Landing></Landing>
    </section>
  );
}
